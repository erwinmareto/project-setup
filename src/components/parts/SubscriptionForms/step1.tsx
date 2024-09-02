'use client';

import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronRight, ImagePlus } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import AppIcons from '@/components/parts/AppIcons';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useStep1Form } from '@/context/step1Global';
import { AVAILABLE_ICONS } from '@/lib/constants/datas';
import { step1Schema } from '@/lib/validations/add';

import { StepFormProps } from './types';

const Step1Form = ({ prevData, currentId }: StepFormProps<z.infer<typeof step1Schema>>) => {
  const router = useRouter();
  const pathname = usePathname();
  const iconGlobal = useStep1Form((state) => state.icon);
  const appNameGlobal = useStep1Form((state) => state.appName);
  const categoryGlobal = useStep1Form((state) => state.category);
  const setIconGlobal = useStep1Form((state) => state.setIcon);
  const setAppNameGlobal = useStep1Form((state) => state.setAppName);
  const setCategoryGlobal = useStep1Form((state) => state.setCategory);

  const step1Form = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema)
  });

  const selectedIcon = useWatch({
    control: step1Form.control,
    name: 'icon'
  });

  function onSubmit(values: z.infer<typeof step1Schema>) {
    setIconGlobal(values.icon);
    setAppNameGlobal(values.appName);
    setCategoryGlobal(values.category);

    if (currentId) {
      return router.push(`/edit/${currentId}/step-2`);
    }
    return router.push('/add/step-2');
  }

  useEffect(() => {
    step1Form.reset({
      icon: iconGlobal || prevData?.icon,
      appName: appNameGlobal || prevData?.appName,
      category: categoryGlobal || prevData?.category
    });

    console.log(categoryGlobal, 'CGGGGGG');
    console.log(prevData?.category, 'PPPPPPPP');

    // mark that the data is already put into the form
    // formIsDone.current = true;

    console.log('Current pathname:', pathname);

    // if (!SUB_FORM_PATHS.some((path) => pathname === path)) {
    //   console.log('SOME pathname:', pathname);
    //   clearGlobals();
    // }
  }, [iconGlobal, appNameGlobal, categoryGlobal, step1Form, prevData, pathname]);

  useEffect(() => {
    /**  this is supposed to check if the data is already put into the form 
     because i want this to run only when the data is already put into the form
     but doesn't work probably because of some rendering bullshit with react
     if (formIsDone.current) {
       step1Form.setValue('appName', AVAILABLE_ICONS[selectedIcon]);
     }
    */
    if (prevData) return;

    // the icon selection will no longer update the app name but the data will persist
    // * WITHOUT THE CHECK THIS WILL OVERRIDE THE GLOBAL STATE DATA WHENEVER YOU GO BACk TO THIS PAGE
    if (!iconGlobal) {
      // if the selected icon is one of the generics (categories) then empty the app name
      if (selectedIcon && selectedIcon.split('-')[0] === 'category') {
        return step1Form.setValue('appName', '');
      }
      step1Form.setValue('appName', AVAILABLE_ICONS[selectedIcon]);
    }
  }, [selectedIcon, step1Form, iconGlobal, prevData]);

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
                  {!field.value ? (
                    <div className="flex justify-center items-center text-primary-50 bg-primary-20 p-6 rounded-xl">
                      <ImagePlus />
                    </div>
                  ) : (
                    <AppIcons iconName={field.value} width={52} height={52} className="rounded-xl" />
                  )}

                  <div className="flex-1">
                    <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>
                      Subscription Icon
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-primary-0 mt-2">
                          <SelectValue placeholder={AVAILABLE_ICONS[field.value] || 'Select an icon'} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.keys(AVAILABLE_ICONS).map((icon) => (
                          <SelectItem key={icon} value={icon}>
                            {AVAILABLE_ICONS[icon]}
                          </SelectItem>
                        ))}
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
                  <Input placeholder="e.g. Netflix" {...field} />
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
                    <SelectTrigger className="bg-primary-0 mt-2 capitalize">
                      <SelectValue placeholder={field.value || 'Select a category'} />
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
            <Button type="submit">
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default Step1Form;
