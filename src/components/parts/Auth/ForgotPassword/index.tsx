'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
import { forgotPasswordSchema } from '@/lib/validations/auth';

const ForgotPasswordForm = () => {
  const router = useRouter();
  // 1. Define your form.
  const forgorPasswordForm = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema)
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.push('/confirm-password');
  }

  return (
    <Form {...forgorPasswordForm}>
      <form
        onSubmit={forgorPasswordForm.handleSubmit(onSubmit)}
        className="flex flex-col space-y-8"
      >
        <FormField
          control={forgorPasswordForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="yourmail@gmail.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col justify-center gap-4 overflow-hidden">
          <Button type="submit">Send link to email</Button>
          <Link href="/login">
            <Button variant="outline" type="button" className="w-full text-primary-55">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Log in
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
