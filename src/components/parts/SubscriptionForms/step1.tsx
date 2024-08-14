'use client';

import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronRight, ImagePlus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useStep1Context } from '@/context/Step1Context';
import { step1Schema } from '@/lib/validations/add';

const Step1Form = () => {
  const router = useRouter();
  const { icon, appName, category, setIcon, setAppName, setCategory } = useStep1Context();

  const step1Form = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      icon: icon,
      appName: appName,
      category: category
    }
  });

  const selectedIcon = useWatch({
    control: step1Form.control,
    name: 'icon'
  });

  function onSubmit(values: z.infer<typeof step1Schema>) {
    console.log(values);
    setIcon(values.icon);
    setAppName(values.appName);
    setCategory(values.category);

    router.push('/add/step-2');
  }

  useEffect(() => {
    // if (appName) return; // IF YOU GO BACK TO STEP 1 IT WILL RESET THE APP NAME TO THE VALUE OF ICON
    step1Form.setValue('appName', selectedIcon);
    console.log(icon, appName, category, '<<<<<<<<<<<<<<<<');
  }, [selectedIcon, step1Form, icon, appName, category]);

  return (
    <Card className="px-6 py-8">
      <Form {...step1Form}>
        <form onSubmit={step1Form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={step1Form.control}
            name="icon"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-4 ">
                  <div className="flex justify-center items-center text-primary-50 bg-primary-20 p-6 rounded-xl">
                    <ImagePlus />
                  </div>

                  <div className="flex-1">
                    <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>
                      Subscription Icon
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-primary-0 mt-2">
                          <SelectValue placeholder={icon} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="netflix">Netflix</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="jira">Jira</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={step1Form.control}
            name="appName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subscription Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Netflix" {...field} defaultValue={appName} />
                </FormControl>
                <FormDescription className="text-primary-60">
                  Subscription name will automatically fill based on your chosen popular apps
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={step1Form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-primary-0 mt-2">
                      <SelectValue placeholder={category} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="work">Work</SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="home">Home</SelectItem>
                    <SelectItem value="games">Games</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            {/* <Link href="/add/step-2"> */}
            <Button type="submit">
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            {/* </Link> */}
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default Step1Form;
