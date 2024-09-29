'use client';

import { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addDays, format } from 'date-fns';
import { ArrowLeft, Check, Edit3, MoreHorizontal, Trash2, X } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useMediaQuery } from 'react-responsive';

import AppIcons from '@/components/parts/AppIcons';
import ConfirmationModal from '@/components/parts/Modals/ConfirmationModal';
import StatusModal from '@/components/parts/Modals/StatusModal';
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
import { CYCLE_DAYS } from '@/lib/constants/datas';
import {
  ALL_SUBSCRIPTIONS_KEY,
  ALL_TRANSACTIONS_KEY,
  COST_CHART_KEY,
  SPENDINGS_CHART_KEY,
  SUBSCRIPTION_BY_ID,
  TRANSACTION_BY_SUB_ID_KEY
} from '@/lib/constants/queryKeys';
import { formatIDR } from '@/lib/utils';
import { deleteSubscription, editSubscription } from '@/repositories/subscriptions';
import { addTransaction } from '@/repositories/transactions';

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
    mutationFn: (data: Record<string, unknown>) => editSubscription(id as string, data),
    onSuccess: () => {
      // toast.success('Subscription updated successfully');
      queryClient.invalidateQueries({ queryKey: [SUBSCRIPTION_BY_ID, id] });
      queryClient.invalidateQueries({ queryKey: [ALL_SUBSCRIPTIONS_KEY] });
      queryClient.invalidateQueries({ queryKey: [SPENDINGS_CHART_KEY] });
      queryClient.invalidateQueries({ queryKey: [COST_CHART_KEY] });
    }
  });

  const deleteSubscriptionMutation = useMutation({
    mutationFn: () => deleteSubscription(id as string),
    onSuccess: () => {
      toast.success('Subscription deleted successfully');
      queryClient.invalidateQueries({ queryKey: [SUBSCRIPTION_BY_ID, id] });
      queryClient.invalidateQueries({ queryKey: [TRANSACTION_BY_SUB_ID_KEY, id] });
      queryClient.invalidateQueries({ queryKey: [ALL_TRANSACTIONS_KEY] });
      queryClient.invalidateQueries({ queryKey: [SPENDINGS_CHART_KEY] });
      queryClient.invalidateQueries({ queryKey: [COST_CHART_KEY] });
      router.push('/dashboard');
    }
  });

  const addTransactionMutation = useMutation({
    mutationFn: addTransaction,
    onSuccess: () => {
      toast.success('Subscription marked as paid');
      queryClient.invalidateQueries({ queryKey: [ALL_TRANSACTIONS_KEY] });
      queryClient.invalidateQueries({ queryKey: [TRANSACTION_BY_SUB_ID_KEY, id] });
      queryClient.invalidateQueries({ queryKey: [SPENDINGS_CHART_KEY] });
      queryClient.invalidateQueries({ queryKey: [COST_CHART_KEY] });
    }
  });

  // this is here because the data is in snake_case but it accepts camelCase so i am converting
  const subPayload = {
    appName: data?.app_name,
    icon: data?.icon,
    category: data?.category,
    pricing: data?.pricing,
    status: 'active',
    startPayment: format(data?.start_payment, 'yyyy-MM-dd'),
    nextPayment: format(data?.next_payment, 'yyyy-MM-dd'),
    paymentMethod: data?.payment_method,
    cycle: data?.cycle,
    intervalDays: data?.interval_days,
    email: data?.email
  };

  const markPaid = () => {
    const newNextPaymentDate = addDays(data?.next_payment, CYCLE_DAYS[data?.cycle as string] ?? 'monthly');
    editSubscriptionMutation.mutate({ ...subPayload, nextPayment: format(newNextPaymentDate, 'yyyy-MM-dd') });

    const transactionPayload = {
      subscriptionId: data?.id,
      appName: data?.app_name,
      icon: data?.icon,
      category: data?.category,
      pricing: data?.pricing,
      status: 'completed',
      paymentMethod: data?.payment_method,
      paymentDate: format(new Date(), 'yyyy-MM-dd')
    };
    addTransactionMutation.mutate(transactionPayload);
  };

  const cancleSubscription = () => {
    editSubscriptionMutation.mutate({ ...subPayload, status: 'inactive' });
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
              <h6 className="font-semibold text-body-md capitalize md:text-heading-6">{data?.app_name}</h6>
              <p className="font-medium text-primary-50 text-body-sm capitalize">{data?.category}</p>
            </div>
          </div>

          {data?.status !== 'inactive' && (
            <div className="flex gap-2 max-md:justify-between">
              <StatusModal
                // imagePath="/modal-icons/success.png"
                openState={successOpen}
                openHandler={handleSuccessOpen}
                clickEvent={() => router.refresh()}
                // title="Congratulations!"
                status={editSubscriptionMutation.status}
                description="Your subscription has been marked as paid."
              >
                {data?.status !== 'active' && (
                  <Button variant="secondary" onClick={markPaid} size={isMobileScreen ? 'sm' : 'default'}>
                    <Check className="max-md:w-4 max-md:h-4" /> Mark as Paid
                  </Button>
                )}
              </StatusModal>

              <ConfirmationModal
                imagePath="/modal-icons/warning.png"
                openState={warningOpen}
                openHandler={handleWarningOpen}
                clickEvent={cancleSubscription}
                title="Are you sure?"
                description="Once cancelled, you will not be able to reactivate your subscription."
                cancleable
              >
                <Button variant="destructive" size={isMobileScreen ? 'sm' : 'default'}>
                  <X className="max-md:w-4 max-md:h-4" /> Cancel Subscription
                </Button>
              </ConfirmationModal>
            </div>
          )}
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
            <p className="font-medium text-body-sm capitalize md:text-body-lg">{data?.payment_method}</p>
          </div>
          <Separator orientation={isMobileScreen ? 'horizontal' : 'vertical'} />
          <div>
            <p className="font-medium text-primary-50 text-body-sm">Next Payment</p>
            <p className="font-medium text-body-lg">{format(data?.next_payment, 'dd MMM yyyy')}</p>
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
            <p className="font-medium text-primary-90 text-body-sm capitalize md:text-body-md">{data?.app_name}</p>
            <p className="font-medium text-primary-90 text-body-sm capitalize md:text-body-md">{data?.category}</p>
            <p className="font-medium text-primary-90 text-body-sm capitalize md:text-body-md">
              {formatIDR(data?.pricing)}
            </p>
            <p className="font-medium text-primary-90 text-body-sm capitalize md:text-body-md">{data?.cycle}</p>
            <p className="font-medium text-primary-90 text-body-sm md:text-body-md">
              {format(data?.start_payment, 'dd MMM yyyy')}
            </p>
            <p className="font-medium text-primary-90 text-body-sm md:text-body-md">
              {format(data?.next_payment, 'dd MMM yyyy')}
            </p>
            <p className="font-medium text-primary-90 text-body-sm capitalize md:text-body-md">
              {data?.payment_method}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SubscriptionDetail;
