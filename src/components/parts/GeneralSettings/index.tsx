'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Flag } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { generalSettingsSchema } from '@/lib/validations/general';

const GeneralSettings = () => {
  const generalSettingsForm = useForm<z.infer<typeof generalSettingsSchema>>({
    resolver: zodResolver(generalSettingsSchema)
  });

  function onSubmit(values: z.infer<typeof generalSettingsSchema>) {
    console.log(values);
  }

  return (
    <main className="p-3 lg:col-span-9">
      <Card className="px-6 py-8">
        <Form {...generalSettingsForm}>
          <form onSubmit={generalSettingsForm.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={generalSettingsForm.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Default Currency</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-primary-0">
                        <SelectValue
                          placeholder={
                            <div>
                              <Flag className="inline mr-2" />
                              Indonesian Rupiah - Rp
                            </div>
                          }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Rp">
                        <Flag className="inline mr-2" />
                        Indonesian Rupiah - Rp
                      </SelectItem>
                      <SelectItem value="USD">
                        <Flag className="inline mr-2" />
                        US Dollar - $
                      </SelectItem>
                      <SelectItem value="JPY">
                        <Flag className="inline mr-2" />
                        JP Yen - &yen;
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={generalSettingsForm.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Language</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-primary-0">
                        <SelectValue
                          placeholder={
                            <div>
                              <Flag className="inline mr-2" />
                              English
                            </div>
                          }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="english">
                        <Flag className="inline mr-2" />
                        English
                      </SelectItem>
                      <SelectItem value="indonesian">
                        <Flag className="inline mr-2" />
                        Indonesian
                      </SelectItem>
                      <SelectItem value="japanese">
                        <Flag className="inline mr-2" />
                        Japanese
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit">Apply Changes</Button>
            </div>
          </form>
        </Form>
      </Card>
    </main>
  );
};

export default GeneralSettings;
