import { zodResolver } from '@hookform/resolvers/zod';
import type { TFunction } from 'i18next';
import { EyeIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
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

const createLoginSchema = (t: TFunction) =>
  z.object({
    email: z.email({ message: t('loginForm.invalidEmail') }),
    password: z.string().min(6, { message: t('loginForm.passwordMinLength') }),
  });

type LoginFormValues = z.infer<ReturnType<typeof createLoginSchema>>;

export function LoginForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const loginSchema = createLoginSchema(t);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (_data: LoginFormValues) => {
    // simulate submit wait
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate('/');
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('loginForm.emailLabel')}</FormLabel>
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('loginForm.passwordLabel')}</FormLabel>
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
          size="lg"
          type="submit"
        >
          {t('loginForm.signInButton')}
        </Button>
      </form>
    </Form>
  );
}
