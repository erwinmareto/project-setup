'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft } from 'lucide-react';
import { Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const Add = () => {
  const [oldReveal, setOldReveal] = useState(false);
  const [newReveal, setNewReveal] = useState(false);

  const handleOldReveal = () => {
    setOldReveal(!oldReveal);
  };

  const handleNewReveal = () => {
    setNewReveal(!newReveal);
  };

  const passwordSchema = z.object({
    oldPassword: z.string().min(2).max(50),
    newPassword: z.string().min(2).max(50)
  });

  const passwordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema)
  });

  function onSubmit(values: z.infer<typeof passwordSchema>) {
    console.log(values);
  }

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
                <BreadcrumbLink order={1} href="/add/step-1">
                  Subscription Info
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink order={2} href="/add/step-2">
                  Payment Details
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage order={3} className="text-primary-80">
                  Reminder Settings
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Card className="px-6 py-8">
            <Form {...passwordForm}>
              <form onSubmit={passwordForm.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={passwordForm.control}
                  name="oldPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Old Password</FormLabel>
                      <FormControl>
                        <div className="relative flex justify-center items-center">
                          <Input
                            placeholder="Enter new password"
                            type={oldReveal ? 'text' : 'password'}
                            {...field}
                          />
                          <div
                            className="absolute right-3 text-primary-40"
                            onClick={handleOldReveal}
                          >
                            {oldReveal ? <EyeOff /> : <Eye />}
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={passwordForm.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <div className="relative flex justify-center items-center">
                          <Input
                            placeholder="Enter new password"
                            type={newReveal ? 'text' : 'password'}
                            {...field}
                          />
                          <div
                            className="absolute right-3 text-primary-40"
                            onClick={handleNewReveal}
                          >
                            {newReveal ? <EyeOff /> : <Eye />}
                          </div>
                        </div>
                      </FormControl>
                      <FormDescription>Minimum 6 Chaacters</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button type="submit">Change Password</Button>
                </div>
              </form>
            </Form>
          </Card>
        </section>
      </main>
    </section>
  );
};

export default Add;
