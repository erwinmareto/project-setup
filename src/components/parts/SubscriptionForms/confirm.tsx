'use client';

import { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { differenceInDays, format } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import ConfirmationModal from '@/components/parts/ConfirmationModal';
import { SubStatus } from '@/components/parts/SubscriptionTable/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useStep1Form } from '@/context/step1Global';
import { useStep2Form } from '@/context/step2Global';
import { useStep3Form } from '@/context/step3Global';
import { ALL_SUBSCRIPTIONS_KEY } from '@/lib/constants/queryKeys';
import { formatIDR } from '@/lib/utils';
import { addSubscription } from '@/repositories/subscriptions';

const CofirmFormSteps = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [successOpen, setSuccessOpen] = useState(false);

  const iconGlobal = useStep1Form((state) => state.icon);
  const appNameGlobal = useStep1Form((state) => state.appName);
  const categoryGlobal = useStep1Form((state) => state.category);
  const cycleGlobal = useStep2Form((state) => state.cycle);
  const paymentStartGlobal = useStep2Form((state) => state.paymentStart);
  const paymentEndGlobal = useStep2Form((state) => state.paymentEnd);
  const priceGlobal = useStep2Form((state) => state.price);
  const paymentMethodGlobal = useStep2Form((state) => state.paymentMethod);
  const emailGlobal = useStep3Form((state) => state.email);
  const timeGlobal = useStep3Form((state) => state.time);

  const resetStep1Global = useStep1Form((state) => state.resetStep1Global);
  const resetStep2Global = useStep2Form((state) => state.resetStep2Global);
  const resetStep3Global = useStep3Form((state) => state.resetStep3Global);

  const clearGlobal = () => {
    resetStep1Global();
    resetStep2Global();
    resetStep3Global();
    router.replace('/dashboard');
  };

  const handleSuccessOpen = () => {
    setSuccessOpen(!successOpen);
  };

  const closeModal = () => {
    setSuccessOpen(false);
    clearGlobal();
  };

  const addSubscriptionMutation = useMutation({
    mutationFn: addSubscription,
    onSuccess: () => {
      toast.success('Subscription added successfully');
      queryClient.invalidateQueries({
        queryKey: [ALL_SUBSCRIPTIONS_KEY]
      });
    }
  });

  const submitAddSubscription = () => {
    const status: SubStatus =
      differenceInDays(paymentStartGlobal, new Date()) < 0
        ? 'overdue'
        : differenceInDays(paymentStartGlobal, new Date()) < 7
          ? 'upcoming'
          : 'active';
    const payload = {
      icon: iconGlobal,
      appName: appNameGlobal,
      category: categoryGlobal,
      cycle: cycleGlobal,
      nextPayment: paymentStartGlobal.toISOString(),
      pricing: priceGlobal,
      payment: paymentMethodGlobal,
      status
    };

    addSubscriptionMutation.mutate(payload);
    handleSuccessOpen();
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
            <p>{appNameGlobal}</p>
            <p>{categoryGlobal}</p>
            <p>{formatIDR(priceGlobal)}</p>
            <p>{cycleGlobal}</p>
            <p>{format(paymentStartGlobal, 'PPP')}</p>
            <p>{format(paymentEndGlobal, 'PPP')}</p>
            <p className="normal-case">{paymentMethodGlobal}</p>
            <p>{timeGlobal ? `${timeGlobal} Days Prior` : '1 Week Prior'}</p>
            <p className="normal-case">{emailGlobal}</p>
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
          closeHandler={closeModal}
          openHandler={handleSuccessOpen}
          title="Success!"
          description="Your subscription has saved."
          clickEvent={clearGlobal}
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
