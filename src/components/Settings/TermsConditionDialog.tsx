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

const termsConditionSchema = z.object({
  headline: z.string().min(1, 'Headline is required'),
  description: z.string().min(1, 'Description is required'),
});

type TermsConditionFormValues = z.infer<typeof termsConditionSchema>;

type TermsConditionDialogProps = PropsWithChildren<{
  initialValues?: TermsConditionFormValues;
}>;

export function TermsConditionDialog({
  children,
  initialValues,
}: TermsConditionDialogProps) {
  const [open, setOpen] = useState(false);
  const form = useForm<TermsConditionFormValues>({
    resolver: zodResolver(termsConditionSchema),
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

  function handleSubmit(_values: TermsConditionFormValues) {
    form.reset(initialValues || { headline: '', description: '' });
    setOpen(false);
  }

  return (
    <Dialog onOpenChange={handleOpenChange} open={open}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="sr-only">Add Terms & Condition</DialogTitle>
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
                    Terms & condition headline
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Terms & condition headline here..."
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
