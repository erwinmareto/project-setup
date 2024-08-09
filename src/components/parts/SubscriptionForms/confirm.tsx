'use client';

import { format } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useStep1Context } from '@/context/Step1Context';
import { useStep2Context } from '@/context/Step2Context';
import { useStep3Context } from '@/context/Step3Context';

const CofirmFormSteps = () => {
  const router = useRouter();
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
    setCategory('');
    setCycle('');
    setPaymentStart(new Date());
    setPaymentEnd(new Date());
    setPrice('');
    setPaymentMethod('');
    setTime(1);
    setEmail('');

    router.push('/dashboard');
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
            <p>Rp{price}</p>
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
        {/* <Link href="/dashboard"> */}
        <Button type="submit" onClick={clearContext}>
          Save and confirm
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
        {/* </Link> */}
      </div>
    </>
  );
};

export default CofirmFormSteps;
