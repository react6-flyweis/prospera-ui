import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
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

const contactSchema = z.object({
  name: z.string().min(1, 'User name is required'),
  mobile: z.string().min(1, 'Mobile number is required'),
  email: z.string().email('Invalid email'),
  region: z.string().min(1, 'Region is required'),
  avatar: z.string().optional(),
  notify: z.boolean().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type ContactDialogProps = {
  initialValues?: ContactFormValues;
  children: React.ReactNode;
};

export function ContactDialog({ initialValues, children }: ContactDialogProps) {
  const [open, setOpen] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: initialValues || {
      name: '',
      mobile: '',
      email: '',
      region: '',
      avatar: '',
      notify: false,
    },
  });

  const [avatarPreview, setAvatarPreview] = useState(
    initialValues?.avatar || ''
  );
  const [avatarHover, setAvatarHover] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Simulate upload and preview
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
        form.setValue('avatar', reader.result as string);
      };
      reader.readAsDataURL(file);
      // Here you would upload to server and get URL, then setAvatarPreview(url)
    }
  };

  const handleOpenChange = (toOpen: boolean) => {
    if (!toOpen) {
      form.reset(
        initialValues || {
          name: '',
          mobile: '',
          email: '',
          region: '',
          notify: false,
        }
      );
    } else if (initialValues) {
      form.reset(initialValues);
    }
    setOpen(toOpen);
  };

  function handleFormSubmit(_values: ContactFormValues) {
    setOpen(false);
  }

  return (
    <Dialog onOpenChange={handleOpenChange} open={open}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add New Contact</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col items-center gap-6"
            onSubmit={form.handleSubmit(handleFormSubmit)}
          >
            <div className="flex w-full gap-6">
              <div className="flex flex-col items-center justify-center">
                <button
                  className={`group relative mb-4 flex h-32 w-32 cursor-pointer items-center justify-center rounded-lg bg-gray-200 transition-all duration-200 ${avatarHover ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => fileInputRef.current?.click()}
                  onMouseEnter={() => setAvatarHover(true)}
                  onMouseLeave={() => setAvatarHover(false)}
                  type="button"
                >
                  {avatarPreview ? (
                    <img
                      alt="Avatar Preview"
                      className="h-32 w-32 rounded-lg object-cover"
                      src={avatarPreview}
                    />
                  ) : (
                    <span className="text-gray-400" />
                  )}
                  <div
                    className={
                      'absolute inset-0 flex items-center justify-center rounded-lg bg-black opacity-0 transition-opacity group-hover:opacity-40'
                    }
                  >
                    <span className="text-sm text-white">Upload Image</span>
                  </div>
                  <input
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                    ref={fileInputRef}
                    type="file"
                  />
                </button>
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex w-full justify-between gap-4">
                  <div className="w-1/2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>User name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-1/2">
                    <FormField
                      control={form.control}
                      name="region"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Region</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter here" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+1 Enter mobile number"
                          {...field}
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
                    <FormItem>
                      <FormLabel>Email ID</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter email id" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="notify"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>notify them for their new role.</FormLabel>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <DialogFooter className="w-full sm:justify-between">
              <Button
                className="w-40 text-lg"
                onClick={() => setOpen(false)}
                type="button"
                variant="outline"
              >
                Cancel
              </Button>
              <Button
                className="w-40 bg-primary-gradient text-lg text-white shadow"
                type="submit"
              >
                Add
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
