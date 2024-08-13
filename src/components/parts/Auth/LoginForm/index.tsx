'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Mail } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { loginSchema } from '@/lib/validations/auth';

const LoginForm = () => {
  const [reveal, setReveal] = useState(false);
  const [remember, setRemember] = useState(false);
  // 1. Define your form.
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema)
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const handleReveal = () => {
    setReveal(!reveal);
  };

  const handleRemember = () => {
    setRemember(!remember);
    console.log(remember);
  };

  const googleSignIn = () => {
    console.log('google sign in');
  };

  return (
    <Form {...loginForm}>
      <form onSubmit={loginForm.handleSubmit(onSubmit)} className="flex flex-col space-y-8">
        <FormField
          control={loginForm.control}
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

        <FormField
          control={loginForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative flex justify-center items-center">
                  <Input
                    placeholder="Enter your password"
                    type={reveal ? 'text' : 'password'}
                    {...field}
                  />
                  <div className="absolute right-3 text-primary-40" onClick={handleReveal}>
                    {reveal ? <EyeOff /> : <Eye />}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" onCheckedChange={handleRemember} />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <Link
                  href="forgot-password"
                  className="font-medium text-secondary-40 text-body-md hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </FormItem>
          )}
        />

        <div className="flex flex-col justify-center gap-4 overflow-hidden">
          <Button type="submit">Submit</Button>
          <div className="flex justify-center items-center gap-3">
            <Separator className="w-1/2" />
            <p className="font-medium text-primary-35 text-body-md">or</p>
            <Separator className="w-1/2" />
          </div>
          <Button variant="outline" type="button" onClick={googleSignIn}>
            <Mail className="w-4 h-4 mr-2" />
            Sign in With Google
          </Button>
          <p className="font-medium text-primary-45 text-center">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-secondary-40 hover:underline">
              Register now
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
