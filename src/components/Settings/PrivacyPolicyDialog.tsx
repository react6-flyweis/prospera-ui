import { zodResolver } from '@hookform/resolvers/zod';
import { type PropsWithChildren, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
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
import { Textarea } from '@/components/ui/textarea';

const privacyPolicySchema = z.object({
  headline: z.string().min(1, 'Headline is required'),
  description: z.string().min(1, 'Description is required'),
});

type PrivacyPolicyFormValues = z.infer<typeof privacyPolicySchema>;

type PrivacyPolicyDialogProps = PropsWithChildren<{
  initialValues?: PrivacyPolicyFormValues;
}>;

export function PrivacyPolicyDialog({
  children,
  initialValues,
}: PrivacyPolicyDialogProps) {
  const [open, setOpen] = useState(false);
  const form = useForm<PrivacyPolicyFormValues>({
    resolver: zodResolver(privacyPolicySchema),
    defaultValues: initialValues || { headline: '', description: '' },
  });

  const handleOpenChange = (toOpen: boolean) => {
    if (!toOpen) {
      form.reset(initialValues || { headline: '', description: '' });
    } else if (initialValues) {
      form.reset(initialValues);
    }
    setOpen(toOpen);
  };

  function handleSubmit(_values: PrivacyPolicyFormValues) {
    form.reset(initialValues || { headline: '', description: '' });
    setOpen(false);
  }

  return (
    <Dialog onOpenChange={handleOpenChange} open={open}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="sr-only">Add Privacy Policy</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="headline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">
                    Privacy policy headline
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Privacy policy headline here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description." rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center pt-2">
              <Button
                className="w-40 rounded bg-primary-gradient text-lg text-white shadow"
                type="submit"
              >
                Add
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
