'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import HomePage from '@/components/pages/Home';
import Chart from '@/components/parts/Chart';
import { Button } from '@/components/ui/button';
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
import { useUserContext } from '@/context/UserContext';
import { loginSchema } from '@/lib/validations/auth';

export default function Home() {
  const { userId, setUserId } = useUserContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema)
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setUsername(values.email);
    setPassword(values.password);
    setUserId(values.email);
    console.log(values);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
      <HomePage />

      <Chart />

      {username && (
        <div className="flex flex-col bg-slate-600 rounded-lg p-8 gap-4">
          <h1 className="text-3xl">Username: {username}</h1>
          <h1 className="text-3xl">Password: {password}</h1>
        </div>
      )}

      <h2 className="text-xl">Context test: {userId}</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Psssword</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Context User ID Test</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="testing for context" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  );
}
