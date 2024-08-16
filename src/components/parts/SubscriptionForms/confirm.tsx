'use client';

import { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { differenceInDays, format } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import ConfirmationModal from '@/components/parts/ConfirmationModal';
import { SubStatus } from '@/components/parts/SubscriptionTable/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useStep1Context } from '@/context/Step1Context';
import { useStep2Context } from '@/context/Step2Context';
import { useStep3Context } from '@/context/Step3Context';
import { ALL_SUBSCRIPTIONS_KEY } from '@/lib/constants/queryKeys';
import { formatIDR } from '@/lib/utils';
import { addSubscription } from '@/repositories/subscriptions';

import { SubscriptionPayload } from './types';

const CofirmFormSteps = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [successOpen, setSuccessOpen] = useState(false);
  const { appName, category, setAppName, setCategory } = useStep1Context();
  const {
    cycle,
    paymentStart,
    paymentEnd,
    price,
    paymentMethod,
    setCycle,
    setPaymentStart,
    setPaymentEnd,
    setPrice,
    setPaymentMethod
  } = useStep2Context();
  const { email, time, setEmail, setTime } = useStep3Context();

  const clearContext = () => {
    setAppName('');
    setCategory('others');
    setCycle('monthly');
    setPaymentStart(new Date());
    setPaymentEnd(new Date());
    setPrice(0);
    setPaymentMethod('');
    setTime(1);
    setEmail('');

    // router.push('/dashboard');
  };

  const handleSuccessOpen = () => {
    setSuccessOpen(!successOpen);
  };

  const addSubscriptionMutation = useMutation({
    mutationFn: addSubscription,
    onSuccess: () => {
      console.log('sucessssssssssssssssss logeddd indnnnnnn');
      queryClient.invalidateQueries({
        queryKey: [ALL_SUBSCRIPTIONS_KEY]
      });
    }
  });

  const submitAddSubscription = () => {
    const status: SubStatus =
      differenceInDays(paymentStart, new Date()) < 0
        ? 'overdue'
        : differenceInDays(paymentStart, new Date()) < 7
          ? 'upcoming'
          : 'active';
    const payload: SubscriptionPayload = {
      appName,
      category,
      cycle,
      nextPayment: paymentStart.toISOString(),
      pricing: price,
      payment: paymentMethod,
      status
    };
    addSubscriptionMutation.mutate(payload);
    handleSuccessOpen();
    clearContext();
    // router.replace('/dashboard');
  };

  return (
    <>
      <Card className="px-6 py-8">
        <h6 className="font-medium text-heading-6 text-center">Subscription Details</h6>

        <section className="flex gap-7 mt-6">
          <div className="flex flex-col gap-3 font-medium text-primary-55 text-body-md">
            <p>Subscription Name</p>
            <p>Category</p>
            <p>Price</p>
            <p>Cycle</p>
            <p>Start Payment</p>
            <p>Next Payment</p>
            <p>Payment Method</p>
            <p>Remind me</p>
            <p>Remind with</p>
          </div>
          <div className="flex flex-col gap-3 font-medium text-primary-90 text-body-md capitalize">
            <p>{appName}</p>
            <p>{category}</p>
            <p>{formatIDR(price)}</p>
            <p>{cycle}</p>
            <p>{format(paymentStart, 'PPP')}</p>
            <p>{format(paymentEnd, 'PPP')}</p>
            <p>{paymentMethod}</p>
            <p>{time ? `${time} Days Prior` : '1 Week Prior'}</p>
            <p>{email}</p>
          </div>
        </section>
      </Card>

      <div className="flex justify-end gap-2 mt-4">
        <Link href="/add/step-3">
          <Button type="button" variant="secondary">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>

        <ConfirmationModal
          imagePath="/modal-icons/success.png"
          openState={successOpen}
          openHandler={handleSuccessOpen}
          title="Success!"
          description="Your subscription has saved."
          clickEvent={() => router.push('/dashboard')}
        >
          <Button type="submit" onClick={submitAddSubscription}>
            Save and confirm
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </ConfirmationModal>
      </div>
    </>
  );
};

export default CofirmFormSteps;
