'use client';

import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarDays, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useStep1Context } from '@/context/Step1Context';
import { useStep2Context } from '@/context/Step2Context';
import { cn } from '@/lib/utils';
import { step2Schema } from '@/lib/validations/add';

const Step2Form = () => {
  const router = useRouter();
  const { icon, appName, category } = useStep1Context();

  const {
    cycle,
    paymentStart,
    paymentEnd,
    price,
    paymentMethod,
    setCycle,
    setPaymentStart,
    setPaymentEnd,
    setPrice,
    setPaymentMethod
  } = useStep2Context();

  const step2Form = useForm<z.infer<typeof step2Schema>>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      cycle: cycle,
      paymentStart: paymentStart,
      paymentEnd: paymentEnd,
      price: price,
      paymentMethod: paymentMethod
    }
  });

  function onSubmit(values: z.infer<typeof step2Schema>) {
    console.log(values);

    setCycle(values.cycle);
    setPaymentStart(values.paymentStart);
    setPaymentEnd(values.paymentEnd);
    setPrice(values.price);
    setPaymentMethod(values.paymentMethod);

    router.push('/add/step-3');
  }

  useEffect(() => {
    console.log(icon, appName, category);

    if (!icon && !appName && !category) {
      router.back();
    }
  });

  return (
    <Card className="px-6 py-8">
      <Form {...step2Form}>
        <form onSubmit={step2Form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={step2Form.control}
            name="cycle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>Payment Cycle</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-primary-0 mt-2">
                      <SelectValue placeholder="Select cycle" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4">
            <FormField
              control={step2Form.control}
              name="paymentStart"
              render={({ field }) => (
                <FormItem className="flex flex-col flex-1">
                  <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>Payment Start</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn('pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                        >
                          {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                          <CalendarDays className="ml-auto h-4 w-4 text-primary-40" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={step2Form.control}
              name="paymentEnd"
              render={({ field }) => (
                <FormItem className="flex flex-col flex-1">
                  <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>Payment End</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn('pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                        >
                          {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                          <CalendarDays className="ml-auto h-4 w-4 text-primary-40" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={step2Form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>Amount</FormLabel>
                <FormControl>
                  <div className="flex">
                    <div className="flex items-center text-primary-55 text-body-md gap-4 pl-4 border rounded-l">
                      Rp
                      <Separator orientation="vertical" />
                    </div>

                    <Input type="string" placeholder="0" {...field} className="rounded-l-none" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
            control={step2Form.control}
            name="cycle"
            render={() => (
              <FormItem className="flex flex-col">
                <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>
                  Payment Cycle
                </FormLabel>
                <Button variant="secondary" className="w-1/4">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Payment
                </Button>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <div className="flex flex-col gap-2">
            <p className="font-medium text-body-md after:content-['*'] after:ml-0.5 after:text-red-500 ">
              Payment Method
            </p>
            <Button type="button" variant="secondary" className="w-1/4">
              <Plus className="mr-2 h-4 w-4" />
              Add Payment
            </Button>
          </div>

          <FormField
            control={step2Form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>List of saved accounts</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col lg:grid lg:grid-cols-2 gap-4"
                  >
                    <Card className="col-span-1 px-4 py-3">
                      <FormItem className="flex items-start gap-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="dana" className="mt-2" />
                        </FormControl>
                        <FormLabel className="leading-normal">
                          <p className="font-medium text-heading-6 ">Dana</p>
                          <p className="font-normal text-body-md text-primary-45">0812345678910</p>
                        </FormLabel>
                      </FormItem>
                    </Card>

                    <Card className="col-span-1 px-4 py-3">
                      <FormItem className="flex items-start gap-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="gopay" className="mt-2" />
                        </FormControl>
                        <FormLabel className="leading-normal">
                          <p className="font-medium text-heading-6 ">gopay</p>
                          <p className="font-normal text-body-md text-primary-45">0812345678910</p>
                        </FormLabel>
                      </FormItem>
                    </Card>

                    <Card className="col-span-1 px-4 py-3">
                      <FormItem className="flex items-start gap-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="ovo" className="mt-2" />
                        </FormControl>
                        <FormLabel className="leading-normal">
                          <p className="font-medium text-heading-6">OVO</p>
                          <p className="font-normal text-body-md text-primary-45">0812345678910</p>
                        </FormLabel>
                      </FormItem>
                    </Card>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-2">
            <Link href="/add/step-1">
              <Button type="button" variant="secondary">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Prev
              </Button>
            </Link>
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

export default Step2Form;
