import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon } from 'lucide-react';
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

const registerSchema = z
  .object({
    fullName: z.string().min(2, { message: 'Full name is required' }),
    email: z.email({ message: 'Invalid email address' }),
    phone: z
      .string()
      .min(8, { message: 'Phone number is required' })
      .regex(/^\+?\d+$/, { message: 'Invalid phone number' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Please re-enter your password' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (_data: RegisterFormValues) => {
    // handle registration
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="gap-0">
              <FormLabel className="mb-0 text-sm">Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="enter your full name"
                  type="text"
                  {...field}
                  className="rounded-none border-0 border-b p-0 shadow-none focus:border-b-primary focus:ring-0 focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="gap-0">
              <FormLabel className="mb-0 text-sm">Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="enter your email address"
                  type="email"
                  {...field}
                  className="rounded-none border-0 border-b p-0 shadow-none focus:border-b-primary focus:ring-0 focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="gap-0">
              <FormLabel className="mb-0 text-sm">Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="+1 enter your phone number"
                  type="tel"
                  {...field}
                  className="rounded-none border-0 border-b p-0 shadow-none focus:border-b-primary focus:ring-0 focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="gap-0">
              <FormLabel className="mb-0 text-sm">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="enter your password"
                    type="password"
                    {...field}
                    className="rounded-none border-0 border-b p-0 shadow-none focus:border-b-primary focus:ring-0 focus-visible:ring-0"
                  />
                  <EyeIcon
                    className="-translate-y-1/2 absolute top-1/2 right-3 text-gray-400"
                    size={18}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="gap-0">
              <FormLabel className="mb-0 text-sm">Re-enter Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="enter your password"
                    type="password"
                    {...field}
                    className="rounded-none border-0 border-b p-0 shadow-none focus:border-b-primary focus:ring-0 focus-visible:ring-0"
                  />
                  <EyeIcon
                    className="-translate-y-1/2 absolute top-1/2 right-3 text-gray-400"
                    size={18}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full rounded bg-primary-gradient text-white"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </Form>
  );
}
