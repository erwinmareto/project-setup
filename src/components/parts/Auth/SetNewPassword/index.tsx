'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import ConfirmationModal from '@/components/parts/ConfirmationModal';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { setNewPasswordSchema } from '@/lib/validations/auth';

const SetNewPasswordForm = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [revealOld, setRevealOld] = useState(false);
  const [revealNew, setRevealNew] = useState(false);
  // 1. Define your form.
  const setNewPasswordForm = useForm<z.infer<typeof setNewPasswordSchema>>({
    resolver: zodResolver(setNewPasswordSchema)
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof setNewPasswordSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setOpenModal(true);
    console.log(values);
  }

  const handleRevealOld = () => {
    setRevealOld(!revealOld);
  };

  const handleRevealNew = () => {
    setRevealNew(!revealNew);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <ConfirmationModal
      imagePath="/modal-icons/success.png"
      title="Congratulations!"
      description="Your password has been reset, you can login with your new password"
      openState={openModal}
      openHandler={handleOpenModal}
      clickEvent={() => router.push('/dashboard')}
    >
      <Form {...setNewPasswordForm}>
        <form
          onSubmit={setNewPasswordForm.handleSubmit(onSubmit)}
          className="flex flex-col space-y-8"
        >
          <FormField
            control={setNewPasswordForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative flex justify-center items-center">
                    <Input
                      placeholder="Enter your password"
                      type={revealOld ? 'text' : 'password'}
                      {...field}
                    />
                    <div className="absolute right-3 text-primary-40" onClick={handleRevealOld}>
                      {revealOld ? <EyeOff /> : <Eye />}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={setNewPasswordForm.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative flex justify-center items-center">
                    <Input
                      placeholder="Enter your password"
                      type={revealNew ? 'text' : 'password'}
                      {...field}
                    />
                    <div className="absolute right-3 text-primary-40" onClick={handleRevealNew}>
                      {revealNew ? <EyeOff /> : <Eye />}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Set new password</Button>
        </form>
      </Form>
    </ConfirmationModal>
  );
};

export default SetNewPasswordForm;
