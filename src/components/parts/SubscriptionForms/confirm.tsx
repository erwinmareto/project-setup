import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const CofirmFormSteps = () => {
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
          <div className="flex flex-col gap-3 font-medium text-primary-90 text-body-md">
            <p>Creative Cloud</p>
            <p>Work</p>
            <p>Rp25.000</p>
            <p>Monthly</p>
            <p>15 March 2024</p>
            <p>15 July 2024</p>
            <p>Dana - 08123456789</p>
            <p>1 Week Prior</p>
            <p>example@mail.com</p>
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
        <Link href="/dashboard">
          <Button type="submit">
            Save and confirm
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default CofirmFormSteps;
