import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const notificationSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
  sendTo: z.enum(['all', 'single']),
  whom: z.string().min(1, 'Select whom to send'),
  individual: z.string().optional(),
});

type NotificationFormValues = z.infer<typeof notificationSchema>;

export function NotificationForm() {
  const [sendTo, setSendTo] = useState<'all' | 'single'>('all');
  // Removed unused 'content' and 'setContent' state variables
  const form = useForm<NotificationFormValues>({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      title: '',
      content: '',
      sendTo: 'all',
      whom: '',
      individual: '',
    },
  });

  // Example options for whom and individual
  const whomOptions = [
    // { value: '', label: 'All' },
    { value: 'agents', label: 'Agents' },
    { value: 'corporates', label: 'Corporates' },
    { value: 'employees', label: 'Employees' },
    { value: 'vendors', label: 'Vendors' },
    { value: 'lenders', label: 'Lenders' },
  ];
  const individualOptions = [
    // { value: '', label: 'Select...' },
    { value: 'user1', label: 'User 1' },
    { value: 'user2', label: 'User 2' },
  ];

  const submitHandler = (_data: NotificationFormValues) => {
    form.reset();
    setSendTo('all');
    // setContent removed
  };

  // Watch content for character count
  const contentValue = form.watch('content', '');

  return (
    <Form {...form}>
      <form
        className="rounded-lg border bg-white p-6"
        onSubmit={form.handleSubmit(submitHandler)}
      >
        <div className="grid grid-cols-4 items-start gap-4">
          {/* Send To */}
          <FormField
            control={form.control}
            name="sendTo"
            render={({ field }) => (
              <FormItem className="flex h-full flex-col justify-start">
                <div className="mb-4 font-bold text-sm">Send To</div>
                <div className="flex flex-col gap-4">
                  <Button
                    className={`rounded-md border py-2 ${sendTo === 'all' ? 'bg-primary-gradient text-white' : 'bg-white text-black'}`}
                    onClick={() => {
                      setSendTo('all');
                      field.onChange('all');
                    }}
                    type="button"
                  >
                    All
                  </Button>
                  <Button
                    className={`rounded-md border py-2 ${sendTo === 'single' ? 'bg-primary-gradient text-white' : 'bg-white text-black'}`}
                    onClick={() => {
                      setSendTo('single');
                      field.onChange('single');
                    }}
                    type="button"
                  >
                    Single
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* To Whom Would You Send */}
          <FormField
            control={form.control}
            name="whom"
            render={({ field }) => (
              <FormItem className="flex h-full flex-col justify-start">
                <FormLabel className="mb-4">To Whom Would You Send</FormLabel>
                <FormControl>
                  <Select
                    defaultValue=""
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      {whomOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Select The Individual */}
          <FormField
            control={form.control}
            name="individual"
            render={({ field }) => (
              <FormItem className="flex h-full flex-col justify-start">
                <FormLabel className="mb-4">Select The Individual</FormLabel>
                <FormControl>
                  <Select
                    defaultValue=""
                    disabled={sendTo === 'all'}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      {individualOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full flex-col gap-5">
            {/* Notification Title (input) */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex h-full flex-col justify-start">
                  <FormLabel className="mb-4">Notification Title</FormLabel>
                  <FormControl>
                    <Input
                      id="title"
                      {...field}
                      className="mb-2"
                      placeholder="Write here"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Notification Content (textarea) */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="flex h-full flex-col justify-start">
                  <FormLabel className="mb-4">Notification Content</FormLabel>
                  <FormControl>
                    <textarea
                      className="mb-1 h-32 w-full resize-none rounded-md border p-2"
                      id="content"
                      maxLength={10_000}
                      onChange={(e) => {
                        // setContent removed
                        field.onChange(e.target.value);
                      }}
                      placeholder="Write here"
                      value={contentValue}
                    />
                  </FormControl>
                  <div className="text-right text-gray-400 text-xs">
                    {contentValue.length}/10000
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="mt-8 flex gap-6">
          <Button
            className="w-40 bg-primary-gradient text-white text-xl"
            disabled={form.formState.isSubmitting}
            type="submit"
          >
            Send
          </Button>
          <Button
            className="w-40 bg-primary-gradient text-white text-xl"
            onClick={() => {
              form.reset();
              setSendTo('all');
              // setContent removed
            }}
            type="button"
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
