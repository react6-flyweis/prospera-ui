import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ProfileImageUploader } from '../ProfileImageUploader';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

const lenderSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email(),
  joinDate: z.string(),
  gender: z.string(),
  address: z.string(),
  presentAddress: z.string(),
  postalCode: z.string(),
  mobile: z.string(),
  lenderId: z.string(),
  dob: z.string(),
  language: z.string(),
  city: z.string(),
  country: z.string(),
});

type LenderFormValues = z.infer<typeof lenderSchema>;

export function LenderEditor() {
  const [profileImage, setProfileImage] = useState<string | File>('');
  const form = useForm<LenderFormValues>({
    resolver: zodResolver(lenderSchema),
    defaultValues: {},
  });

  function onSubmit(_data: LenderFormValues) {
    // handle submit
  }

  // Map field names to labels and input types
  const lenderFields = [
    {
      name: 'name',
      label: 'Name Of The Lender',
      type: 'text',
      placeholder: 'Enter name',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter email',
    },
    { name: 'joinDate', label: 'Join Date', type: 'date', placeholder: '' },
    {
      name: 'gender',
      label: 'Gender',
      type: 'text',
      placeholder: 'Enter gender',
    },
    {
      name: 'address',
      label: 'Permanent Address',
      type: 'text',
      placeholder: 'Enter address',
    },
    {
      name: 'presentAddress',
      label: 'Present Address',
      type: 'text',
      placeholder: 'Enter address',
    },
    {
      name: 'postalCode',
      label: 'Postal Code',
      type: 'text',
      placeholder: 'Enter postal code',
    },
    {
      name: 'mobile',
      label: 'Mobile Number',
      type: 'text',
      placeholder: 'Enter number',
    },
    {
      name: 'lenderId',
      label: 'Give A ID',
      type: 'text',
      placeholder: 'Enter ID',
    },
    { name: 'dob', label: 'Date Of Birth', type: 'date', placeholder: '' },
    {
      name: 'language',
      label: 'Preferred Language',
      type: 'text',
      placeholder: 'Enter language',
    },
    { name: 'city', label: 'City', type: 'text', placeholder: 'Enter city' },
    {
      name: 'country',
      label: 'Country',
      type: 'text',
      placeholder: 'Enter country',
    },
  ];

  return (
    <Form {...form}>
      <form className="flex gap-8" onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <ProfileImageUploader
            onChange={(file) => {
              if (file) {
                setProfileImage(URL.createObjectURL(file));
              }
            }}
            value={profileImage}
          />
        </div>
        <div className="w-full">
          <h2 className="mb-4 font-semibold text-lg">Lender Detail</h2>
          <div className="grid grid-cols-2 gap-5">
            {lenderFields.map((field) => (
              <FormField
                control={form.control}
                key={field.name}
                name={field.name as keyof LenderFormValues}
                render={({ field: f }) => (
                  <FormItem>
                    <FormLabel>{field.label}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={field.placeholder}
                        type={field.type}
                        {...f}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button className="w-1/2 rounded-full bg-primary-gradient font-semibold text-white shadow">
              Add
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
