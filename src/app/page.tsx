'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  password: z.string().min(4, {
    message: 'Password must be at least 4 characters.'
  })
});

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setUsername(values.username);
    setPassword(values.password);
    console.log(values);
  }

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch('https://api.github.com/repos/TanStack/query').then((res) => res.json())
  });

  if (isPending) return <div>Loading...</div>;

  if (error) return 'An error has occurred: ' + error.message;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col bg-slate-600 rounded-lg p-8 gap-4">
        <h1 className="text-3xl capitalize font-bold">{data.name}</h1>
        <p className="text-xl">{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{' '}
        <strong>🍴 {data.forks_count}</strong>
        {username && (
          <>
            <h1 className="text-3xl">Username: {username}</h1>
            <h1 className="text-3xl">Password: {password}</h1>
          </>
        )}
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  );
}
