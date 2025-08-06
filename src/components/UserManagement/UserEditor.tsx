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

const userSchema = z.object({
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
  bankName: z.string().optional(),
  branch: z.string().optional(),
  accountHolderName: z.string().optional(),
  accountNumber: z.string().optional(),
  ifscCode: z.string().optional(),
});

type UserFormValues = z.infer<typeof userSchema>;

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: <explanation>
export function UserEditor({
  initialData,
}: {
  initialData?: Partial<UserFormValues>;
}) {
  const [profileImage, setProfileImage] = useState<string | File>('');
  const form = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: initialData?.name || '',
      email: initialData?.email || '',
      joinDate: initialData?.joinDate || '',
      gender: initialData?.gender || '',
      address: initialData?.address || '',
      presentAddress: initialData?.presentAddress || '',
      postalCode: initialData?.postalCode || '',
      mobile: initialData?.mobile || '',
      lenderId: initialData?.lenderId || '',
      dob: initialData?.dob || '',
      language: initialData?.language || '',
      city: initialData?.city || '',
      country: initialData?.country || '',
      bankName: initialData?.bankName || '',
      branch: initialData?.branch || '',
      accountHolderName: initialData?.accountHolderName || '',
    },
  });

  function onSubmit(_data: UserFormValues) {
    // handle submit
  }

  // Map field names to labels and input types
  const userFields = [
    {
      name: 'name',
      label: 'Name Of The User',
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
      name: 'userId',
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

  const bankFields = [
    {
      name: 'bankName',
      label: 'Bank Name',
      type: 'text',
      placeholder: 'Enter here',
    },
    {
      name: 'branch',
      label: 'Branch',
      type: 'text',
      placeholder: 'Enter here',
    },
    {
      name: 'accountHolderName',
      label: 'Account Holder Name',
      type: 'text',
      placeholder: 'Enter name',
    },
    {
      name: 'accountNumber',
      label: 'Account Number',
      type: 'text',
      placeholder: 'Enter number',
    },
    {
      name: 'ifscCode',
      label: 'IFSC Code',
      type: 'text',
      placeholder: 'Enter here',
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
          <h2 className="mb-4 font-semibold text-lg">User Detail</h2>
          <div className="grid grid-cols-2 gap-5">
            {userFields.map((field) => (
              <FormField
                control={form.control}
                key={field.name}
                name={field.name as keyof UserFormValues}
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

          {/* Bank Details Section */}
          <div className="mt-10">
            <h2 className="mb-2 font-semibold text-lg">
              Bank Detail <span className="font-normal text-sm">(if any)</span>
            </h2>
            <div className="grid grid-cols-2 gap-5">
              {bankFields.map((field) => (
                <FormField
                  control={form.control}
                  key={field.name}
                  name={field.name as keyof UserFormValues}
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
