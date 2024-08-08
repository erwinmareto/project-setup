'use client';

import { ArrowLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';

import {
  ConfirmFormSteps,
  Step1Form,
  Step2Form,
  Step3Form
} from '@/components/parts/SubscriptionForms';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';

const Add = () => {
  const pathname = usePathname();

  return (
    <section className="flex justify-center items-center col-span-12">
      <main className="bg-primary-0 rounded-lg p-4">
        <header className="flex items-center gap-3 mb-8">
          <Button variant="outline">
            <ArrowLeft />
          </Button>
          <h6 className="font-medium text-heading-6">Add Subscription</h6>
        </header>

        <section className="flex flex-col gap-4">
          <Breadcrumb className="px-10 mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                {pathname === '/add/step-1' ? (
                  <BreadcrumbPage order={1} className="text-primary-80">
                    Subscription Info
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink order={1} href="/add/step-1">
                    Subscription Info
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {pathname === '/add/step-2' ? (
                  <BreadcrumbPage order={2} className="text-primary-80">
                    Payment Detail
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink order={2} href="/add/step-2">
                    Payment Detail
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {pathname === '/add/step-3' ? (
                  <BreadcrumbPage order={3} className="text-primary-80">
                    Reminder Settings
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink order={3} href="/add/step-3">
                    Reminder Settings
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {pathname === '/add/step-1' && <Step1Form />}
          {pathname === '/add/step-2' && <Step2Form />}
          {pathname === '/add/step-3' && <Step3Form />}
          {pathname === '/add/confirm' && <ConfirmFormSteps />}
        </section>
      </main>
    </section>
  );
};

export default Add;
