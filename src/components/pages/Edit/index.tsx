'use client';

import { useState } from 'react';

import { ArrowLeft, Loader2 } from 'lucide-react';
import { useParams, usePathname, useRouter } from 'next/navigation';

import ConfirmationModal from '@/components/parts/ConfirmationModal';
import { ConfirmFormSteps, Step1Form, Step2Form, Step3Form } from '@/components/parts/SubscriptionForms';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { useStep1Form } from '@/context/step1Global';
import { useStep2Form } from '@/context/step2Global';
import { useStep3Form } from '@/context/step3Global';
import { useSubscriptionById } from '@/queries/subscriptions';

const Edit = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { id } = useParams();

  const [warningOpen, setWarningOpen] = useState(false);
  const appNameGlobal = useStep1Form((state) => state.appName);
  const priceGlobal = useStep2Form((state) => state.price);
  const emailGlobal = useStep3Form((state) => state.email);

  const { data, isLoading } = useSubscriptionById(id as string);

  const step1Data = {
    icon: data?.icon,
    appName: data?.appName,
    category: data?.category
  };

  const step2Data = {
    cycle: data?.cycle,
    paymentStart: data?.startPayment,
    paymentEnd: data?.nextPayment,
    price: data?.pricing,
    paymentMethod: data?.paymentMethod
  };

  const step3Data = {
    email: data?.email,
    time: data?.interval
  };

  const handleWarningOpen = () => {
    setWarningOpen(!warningOpen);
  };

  return (
    <section className="flex justify-center items-center col-span-12">
      <main className="bg-primary-0 rounded-lg p-4">
        <header className="flex items-center gap-3 mb-8">
          <ConfirmationModal
            imagePath="/modal-icons/warning.png"
            openState={warningOpen}
            openHandler={handleWarningOpen}
            clickEvent={() => router.push('/dashboard')}
            title="Are you sure?"
            description="Once canceled, you will not be able to recover this subscription!"
            cancleable
          >
            <Button variant="outline">
              <ArrowLeft />
            </Button>
          </ConfirmationModal>
          <h6 className="font-medium text-heading-6">Edit Subscription</h6>
        </header>

        <section className="flex flex-col gap-4">
          <Breadcrumb className="px-10 mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage order={1} isFilled={!!appNameGlobal} isCurrent={pathname === `/edit/${id}/step-1`}>
                  Subscription Info
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage order={2} isFilled={!!priceGlobal} isCurrent={pathname === `/edit/${id}/step-2`}>
                  Payment Detail
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage order={3} isFilled={!!emailGlobal} isCurrent={pathname === `/edit/${id}/step-3`}>
                  Reminder Settings
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {pathname === `/edit/${id}/step-1` && isLoading ? (
            <div className="flex justify-center items-center">
              <Loader2 className="animate-spin text-secondary-40" />
            </div>
          ) : (
            pathname === `/edit/${id}/step-1` && <Step1Form prevData={step1Data} currentId={id as string} />
          )}

          {pathname === `/edit/${id}/step-2` && isLoading ? (
            <div className="flex justify-center items-center">
              <Loader2 className="animate-spin text-secondary-40" />
            </div>
          ) : (
            pathname === `/edit/${id}/step-2` && <Step2Form prevData={step2Data} currentId={id as string} />
          )}

          {pathname === `/edit/${id}/step-3` && isLoading ? (
            <div className="flex justify-center items-center">
              <Loader2 className="animate-spin text-secondary-40" />
            </div>
          ) : (
            pathname === `/edit/${id}/step-3` && <Step3Form prevData={step3Data} currentId={id as string} />
          )}

          {pathname === `/edit/${id}/confirm` && <ConfirmFormSteps currentId={id as string} />}
        </section>
      </main>
    </section>
  );
};

export default Edit;
