'use client';

// import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
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
// import { useUserContext } from '@/context/UserContext';
import { combineSearchParams, removeSearchParams } from '@/lib/url';
import { postSchema } from '@/lib/validations/auth';
import { useSearch } from '@/queries/users';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  // const { userId, setUserId } = useUserContext();
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [searchValues, setSearchValues] = useState({});

  // 1. Define your form.
  // const form = useForm<z.infer<typeof loginSchema>>({
  //   resolver: zodResolver(loginSchema),
  //   defaultValues: {
  //     username: '',
  //     password: ''
  //   }
  // });

  const postForm = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      id: '',
      postId: ''
    }
  });

  function postSubmit(values: z.infer<typeof postSchema>) {
    console.log(values);
    const oldParams = removeSearchParams(searchParams, ['id', 'postId']);
    const newParams = combineSearchParams(oldParams, values);
    router.push(`?${newParams}`);
  }

  // 2. Define a submit handler.
  // function onSubmit(values: z.infer<typeof loginSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   setUsername(values.username);
  //   setPassword(values.password);
  //   setUserId(values.userId);
  //   console.log(values);
  //   const newParams = combineSearchParams(searchParams, values);
  //   router.push(`?${newParams}`);
  // }
  const { data } = useSearch(searchParams);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
      <HomePage />

      <Chart />

      {/* {data && data.map((user) => <p key={user.id}>{user.name}</p>)} */}

      {/* {username && (
        <div className="flex flex-col bg-slate-600 rounded-lg p-8 gap-4">
          <h1 className="text-3xl">Username: {username}</h1>
          <h1 className="text-3xl">Password: {password}</h1>
        </div>
      )} */}

      {data && (
        <div>
          {data.map((user: any) => (
            <>
              <h2 className="text-3xl" key={user.id}>
                Name: {user.name}
              </h2>
              <p className="text-xl">Email: {user.email}</p>
              <p>{user.body}</p>
            </>
          ))}
        </div>
      )}

      {/* <h2 className="text-xl">Context test: {userId}</h2> */}

      {/* <Form {...form}>
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
          <FormField
            control={form.control}
            name="userId"
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
      </Form> */}

      <Form {...postForm}>
        <form onSubmit={postForm.handleSubmit(postSubmit)} className="space-y-8">
          <FormField
            control={postForm.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ID</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="1" {...field} />
                </FormControl>
                <FormDescription>This is ID of post</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={postForm.control}
            name="postId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PostID</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="1" {...field} />
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
