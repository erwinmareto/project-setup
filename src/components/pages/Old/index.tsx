'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import ReactQuery from '@/components/parts/ReactQuery';
import UserCard, { PostPlaceholderProps } from '@/components/parts/UserCard';
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
import { combineSearchParams, removeSearchParams } from '@/lib/url';
import { postSchema } from '@/lib/validations/auth';
import { useSearch } from '@/queries/users';

import SearchLoader from './loader';

const Old = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const postForm = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema)
  });

  function postSubmit(values: z.infer<typeof postSchema>) {
    let copyValues: { [key: string]: string } = { ...values };
    Object.keys(copyValues).forEach((key: string) => {
      if (!copyValues[key]) delete copyValues[key];
    });
    console.log(values, 'VALUESSSSSSSSSSSSSSSSSSSSSSss');
    const oldParams = removeSearchParams(searchParams, ['id', 'postId']);
    const newParams = combineSearchParams(oldParams, values);
    router.push(`?${newParams}`, { scroll: false });
  }

  const searchQuery = useSearch(searchParams);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-4">
      <ReactQuery
        queryResult={searchQuery}
        renderLoading={<SearchLoader />}
        renderError={<p>Error</p>}
        render={(data) => {
          console.log(data.length, '<<<<<<<<<<<<<<<<<<,');
          if (data.length <= 0) return <h1 className="text-3xl">Not Found</h1>;

          return data.map((post: PostPlaceholderProps) => (
            <UserCard
              key={post.id}
              id={post.id}
              postId={post.postId}
              name={post.name}
              email={post.email}
              body={post.body}
            />
          ));
        }}
      />

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

      <Button variant="link">
        <Link href="filter">Filter</Link>
      </Button>
    </main>
  );
};

export default Old;
