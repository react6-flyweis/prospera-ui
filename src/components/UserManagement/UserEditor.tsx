import { zodResolver } from '@hookform/resolvers/zod';
import type { TFunction } from 'i18next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
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

const createUserSchema = (t: TFunction) =>
  z.object({
    name: z.string().min(1, t('userEditor.validation.nameRequired')),
    email: z.email(),
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

type UserFormValues = z.infer<ReturnType<typeof createUserSchema>>;

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: <explanation>
export function UserEditor({
  initialData,
}: {
  initialData?: Partial<UserFormValues>;
}) {
  const { t } = useTranslation();
  const [profileImage, setProfileImage] = useState<string | File>('');
  const userSchema = createUserSchema(t);
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
      label: t('userEditor.profileDetail.nameLabel'),
      type: 'text',
      placeholder: t('userEditor.profileDetail.namePlaceholder'),
    },
    {
      name: 'email',
      label: t('userEditor.profileDetail.emailLabel'),
      type: 'email',
      placeholder: t('userEditor.profileDetail.emailPlaceholder'),
    },
    {
      name: 'joinDate',
      label: t('userEditor.profileDetail.joinDateLabel'),
      type: 'date',
      placeholder: '',
    },
    {
      name: 'gender',
      label: t('userEditor.profileDetail.genderLabel'),
      type: 'text',
      placeholder: t('userEditor.profileDetail.genderPlaceholder'),
    },
    {
      name: 'address',
      label: t('userEditor.profileDetail.permanentAddressLabel'),
      type: 'text',
      placeholder: t('userEditor.profileDetail.addressPlaceholder'),
    },
    {
      name: 'presentAddress',
      label: t('userEditor.profileDetail.presentAddressLabel'),
      type: 'text',
      placeholder: t('userEditor.profileDetail.addressPlaceholder'),
    },
    {
      name: 'postalCode',
      label: t('userEditor.profileDetail.postalCodeLabel'),
      type: 'text',
      placeholder: t('userEditor.profileDetail.postalCodePlaceholder'),
    },
    {
      name: 'mobile',
      label: t('userEditor.profileDetail.mobileNumberLabel'),
      type: 'text',
      placeholder: t('userEditor.profileDetail.mobilePlaceholder'),
    },
    {
      name: 'userId',
      label: t('userEditor.profileDetail.giveIdLabel'),
      type: 'text',
      placeholder: t('userEditor.profileDetail.idPlaceholder'),
    },
    {
      name: 'dob',
      label: t('userEditor.profileDetail.dobLabel'),
      type: 'date',
      placeholder: '',
    },
    {
      name: 'language',
      label: t('userEditor.profileDetail.preferredLanguageLabel'),
      type: 'text',
      placeholder: t('userEditor.profileDetail.languagePlaceholder'),
    },
    {
      name: 'city',
      label: t('userEditor.profileDetail.cityLabel'),
      type: 'text',
      placeholder: t('userEditor.profileDetail.cityPlaceholder'),
    },
    {
      name: 'country',
      label: t('userEditor.profileDetail.countryLabel'),
      type: 'text',
      placeholder: t('userEditor.profileDetail.countryPlaceholder'),
    },
  ];

  const bankFields = [
    {
      name: 'bankName',
      label: t('userEditor.bankDetail.bankNameLabel'),
      type: 'text',
      placeholder: t('userEditor.bankDetail.bankNamePlaceholder'),
    },
    {
      name: 'branch',
      label: t('userEditor.bankDetail.branchLabel'),
      type: 'text',
      placeholder: t('userEditor.bankDetail.branchPlaceholder'),
    },
    {
      name: 'accountHolderName',
      label: t('userEditor.bankDetail.accountHolderNameLabel'),
      type: 'text',
      placeholder: t('userEditor.bankDetail.accountHolderNamePlaceholder'),
    },
    {
      name: 'accountNumber',
      label: t('userEditor.bankDetail.accountNumberLabel'),
      type: 'text',
      placeholder: t('userEditor.bankDetail.accountNumberPlaceholder'),
    },
    {
      name: 'ifscCode',
      label: t('userEditor.bankDetail.ifscCodeLabel'),
      type: 'text',
      placeholder: t('userEditor.bankDetail.ifscCodePlaceholder'),
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
          <h2 className="mb-4 font-semibold text-lg">
            {t('userEditor.profileDetail.title')}
          </h2>
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
              {t('userEditor.bankDetail.title')}{' '}
              <span className="font-normal text-sm">
                {t('userEditor.bankDetail.ifAny')}
              </span>
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
              {t('userEditor.addButton')}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
