'use client';

import { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { ArrowLeft, Check, Edit3, MoreHorizontal, Trash2, X } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useMediaQuery } from 'react-responsive';

import AppIcons from '@/components/parts/AppIcons';
import ConfirmationModal from '@/components/parts/ConfirmationModal';
import { Subscription } from '@/components/parts/SubscriptionTable/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { ALL_SUBSCRIPTIONS_KEY, SUBSCRIPTION_BY_ID } from '@/lib/constants/queryKeys';
import { formatIDR } from '@/lib/utils';
import { deleteSubscription, editSubscription } from '@/repositories/subscriptions';

const SubscriptionDetail = ({ data }: { data: Subscription }) => {
  const isMobileScreen = useMediaQuery({ query: '(max-width: 760px)' });
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id } = useParams();
  const [successOpen, setSuccessOpen] = useState(false);
  const [warningOpen, setWarningOpen] = useState(false);

  const handleSuccessOpen = () => {
    setSuccessOpen(!successOpen);
  };

  const handleWarningOpen = () => {
    setWarningOpen(!warningOpen);
  };

  const editSubscriptionMutation = useMutation({
    mutationFn: (data: Subscription) => editSubscription(id as string, data),
    onSuccess: () => {
      toast.success('Subscription updated successfully');
      queryClient.invalidateQueries({ queryKey: [SUBSCRIPTION_BY_ID, id] });
      queryClient.invalidateQueries({ queryKey: [ALL_SUBSCRIPTIONS_KEY] });
      router.refresh();
    }
  });

  const deleteSubscriptionMutation = useMutation({
    mutationFn: () => deleteSubscription(id as string),
    onSuccess: () => {
      toast.success('Subscription deleted successfully');
      queryClient.invalidateQueries({ queryKey: [SUBSCRIPTION_BY_ID, id] });
      queryClient.invalidateQueries({ queryKey: [ALL_SUBSCRIPTIONS_KEY] });
      router.push('/dashboard');
    }
  });

  const markPaid = () => {
    editSubscriptionMutation.mutate({ ...data, status: 'active' });
  };

  const cancleSubscription = () => {
    editSubscriptionMutation.mutate({ ...data, status: 'inactive' });
  };

  const handleDeleteSubscription = () => {
    deleteSubscriptionMutation.mutate();
  };

  return (
    <section className="bg-primary-0 p-7 rounded-lg lg:col-span-8">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Button variant="outline" size={isMobileScreen ? 'icon' : 'default'} onClick={() => router.back()}>
            <ArrowLeft className="max-sm:w-[1.15rem] max-sm:h-[1.15rem]" />
          </Button>
          <h6 className="font-medium text-body-lg md:text-heading-6">Subscription Detail</h6>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size={isMobileScreen ? 'icon' : 'default'}>
              <MoreHorizontal className="max-sm:w-[1.15rem] max-sm:h-[1.15rem]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[10.75rem]">
            <Link href={`/edit/${id}/step-1`}>
              <DropdownMenuItem className="text-secondary-40 gap-2 focus:text-secondary-40">
                <Edit3 className="w-5 h-5" /> Edit
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem
              className="text-destructive-foreground gap-2
            focus:bg-destructive focus:text-destructive-foreground"
              onClick={handleDeleteSubscription}
            >
              <Trash2 className="w-5 h-5" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <article className="flex flex-col gap-7 mt-7">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <AppIcons
              iconName={data?.icon}
              width={52}
              height={52}
              className="w-[2.65rem] h-[2.65rem] rounded-xl md:w-[3.25rem] md:h-[3.25rem]"
            />
            <div>
              <h6 className="font-semibold text-body-md md:text-heading-6">{data?.appName}</h6>
              <p className="font-medium text-primary-50 text-body-sm capitalize">{data?.category}</p>
            </div>
          </div>

          <div className="flex gap-2 max-md:justify-between">
            <ConfirmationModal
              imagePath="/modal-icons/success.png"
              openState={successOpen}
              openHandler={handleSuccessOpen}
              clickEvent={() => router.refresh()}
              title="Congratulations!"
              description="Your subscription has been marked as paid."
            >
              <Button
                variant="secondary"
                onClick={markPaid}
                disabled={data?.status === 'active' || data?.status === 'inactive'}
                size={isMobileScreen ? 'sm' : 'default'}
              >
                <Check className="max-md:w-4 max-md:h-4" /> Mark as Paid
              </Button>
            </ConfirmationModal>

            <ConfirmationModal
              imagePath="/modal-icons/warning.png"
              openState={warningOpen}
              openHandler={handleWarningOpen}
              clickEvent={cancleSubscription}
              title="Are you sure?"
              description="Once cancelled, you will not be able to reactivate your subscription."
              cancleable
            >
              <Button
                variant="destructive"
                disabled={data?.status === 'inactive'}
                size={isMobileScreen ? 'sm' : 'default'}
              >
                <X className="max-md:w-4 max-md:h-4" /> Cancel Subscription
              </Button>
            </ConfirmationModal>
          </div>
        </div>

        <Card className="flex flex-col justify-between p-4 md:h-20 md:flex-row md:items-center max-md:gap-4">
          <div>
            <p className="font-medium text-primary-50 text-body-sm">Status</p>
            <Badge variant={data?.status} status={data?.status}>
              {data?.status}
            </Badge>
          </div>
          <Separator orientation={isMobileScreen ? 'horizontal' : 'vertical'} />
          <div>
            <p className="font-medium text-primary-50 text-body-sm">Payment Method</p>
            <p className="font-medium text-body-sm md:text-body-lg">{data?.paymentMethod}</p>
          </div>
          <Separator orientation={isMobileScreen ? 'horizontal' : 'vertical'} />
          <div>
            <p className="font-medium text-primary-50 text-body-sm">Next Payment</p>
            <p className="font-medium text-body-sm md:text-body-lg">{format(data?.nextPayment, 'dd MMM yyyy')}</p>
          </div>
          <Separator orientation={isMobileScreen ? 'horizontal' : 'vertical'} />
          <div>
            <p className="font-medium text-primary-50 text-body-sm">Price</p>
            <p className="font-medium text-body-sm md:text-body-lg">{formatIDR(data?.pricing)}</p>
          </div>
        </Card>

        <Separator />

        <div className="flex gap-7 md:gap-[6rem]">
          <div className="flex flex-col gap-3">
            <p className="font-medium text-primary-55 text-body-sm md:text-body-md">Subscription Name</p>
            <p className="font-medium text-primary-55 text-body-sm md:text-body-md">Category</p>
            <p className="font-medium text-primary-55 text-body-sm md:text-body-md">Price</p>
            <p className="font-medium text-primary-55 text-body-sm md:text-body-md">Cycle</p>
            <p className="font-medium text-primary-55 text-body-sm md:text-body-md">Start Payment</p>
            <p className="font-medium text-primary-55 text-body-sm md:text-body-md">Next Payment</p>
            <p className="font-medium text-primary-55 text-body-sm md:text-body-md">Payment Method</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-medium text-primary-90 text-body-sm md:text-body-md">{data?.appName}</p>
            <p className="font-medium text-primary-90 text-body-sm md:text-body-md capitalize">{data?.category}</p>
            <p className="font-medium text-primary-90 text-body-sm md:text-body-md">{formatIDR(data?.pricing)}</p>
            <p className="font-medium text-primary-90 text-body-sm md:text-body-md capitalize">{data?.cycle}</p>
            <p className="font-medium text-primary-90 text-body-sm md:text-body-md">
              {format(data?.startPayment, 'dd MMM yyyy')}
            </p>
            <p className="font-medium text-primary-90 text-body-sm md:text-body-md">
              {format(data?.nextPayment, 'dd MMM yyyy')}
            </p>
            <p className="font-medium text-primary-90 text-body-sm md:text-body-md">{data?.paymentMethod}</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SubscriptionDetail;
