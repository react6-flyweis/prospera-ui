import { zodResolver } from '@hookform/resolvers/zod';
import type { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const createSchema = (t: TFunction) =>
  z
    .object({
      currentPassword: z
        .string()
        .min(6, t('changePasswordDialog.validation.currentPasswordRequired')),
      newPassword: z
        .string()
        .min(6, t('changePasswordDialog.validation.newPasswordMinLength')),
      confirmPassword: z.string(),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: t('changePasswordDialog.validation.passwordsDontMatch'),
      path: ['confirmPassword'],
    });

export function ChangePasswordDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation();
  const schema = createSchema(t);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  type FormValues = z.infer<typeof schema>;
  function onSubmit(_values: FormValues) {
    // handle password change logic here
    // e.g. call API
    // TODO: Implement password change logic
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-bold text-lg">
            {t('changePasswordDialog.title')}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">
                    {t('changePasswordDialog.currentPasswordLabel')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      autoComplete="current-password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-6">
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel className="font-semibold">
                      {t('changePasswordDialog.newPasswordLabel')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        autoComplete="new-password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel className="font-semibold">
                      {t('changePasswordDialog.reEnterPasswordLabel')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        autoComplete="new-password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="flex gap-4 pt-2">
              <Button className="flex-1 bg-primary-gradient" type="submit">
                {t('changePasswordDialog.changeButton')}
              </Button>
              <DialogClose asChild>
                <Button className="flex-1" type="button" variant="outline">
                  {t('changePasswordDialog.cancelButton')}
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
