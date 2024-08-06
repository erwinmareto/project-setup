'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
import { passwordSchema } from '@/lib/validations/password';

const PasswordForm = () => {
  const [oldReveal, setOldReveal] = useState(false);
  const [newReveal, setNewReveal] = useState(false);

  const handleOldReveal = () => {
    setOldReveal(!oldReveal);
  };

  const handleNewReveal = () => {
    setNewReveal(!newReveal);
  };

  const passwordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema)
  });

  function onSubmit(values: z.infer<typeof passwordSchema>) {
    console.log(values);
  }

  return (
    <main className="p-3 lg:col-span-9">
      <Card className="px-6 py-8">
        <Form {...passwordForm}>
          <h6 className="font-semibold text-primary-80 text-heading-6 mb-6">
            Manage your password
          </h6>
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
                      <div className="absolute right-3 text-primary-40" onClick={handleOldReveal}>
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
                      <div className="absolute right-3 text-primary-40" onClick={handleNewReveal}>
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
    </main>
  );
};

export default PasswordForm;
