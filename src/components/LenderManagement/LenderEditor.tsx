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

const createLenderSchema = (t: TFunction) =>
  z.object({
    name: z.string().min(1, t('lenderEditor.validation.nameRequired')),
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

type LenderFormValues = z.infer<ReturnType<typeof createLenderSchema>>;

type LenderEditorProps = {
  initialData?: Partial<LenderFormValues>;
};

export function LenderEditor({ initialData }: LenderEditorProps) {
  const { t } = useTranslation();
  const [profileImage, setProfileImage] = useState<string | File>('');

  const lenderSchema = createLenderSchema(t);

  const form = useForm<LenderFormValues>({
    resolver: zodResolver(lenderSchema),
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
    },
  });

  function onSubmit(_data: LenderFormValues) {
    // handle submit
  }

  // Map field names to labels and input types
  const lenderFields = [
    {
      name: 'name',
      label: t('lenderEditor.profileDetail.nameLabel'),
      type: 'text',
      placeholder: t('lenderEditor.profileDetail.namePlaceholder'),
    },
    {
      name: 'email',
      label: t('lenderEditor.profileDetail.emailLabel'),
      type: 'email',
      placeholder: t('lenderEditor.profileDetail.emailPlaceholder'),
    },
    {
      name: 'joinDate',
      label: t('lenderEditor.profileDetail.joinDateLabel'),
      type: 'date',
      placeholder: '',
    },
    {
      name: 'gender',
      label: t('lenderEditor.profileDetail.genderLabel'),
      type: 'text',
      placeholder: t('lenderEditor.profileDetail.genderPlaceholder'),
    },
    {
      name: 'address',
      label: t('lenderEditor.profileDetail.permanentAddressLabel'),
      type: 'text',
      placeholder: t('lenderEditor.profileDetail.addressPlaceholder'),
    },
    {
      name: 'presentAddress',
      label: t('lenderEditor.profileDetail.presentAddressLabel'),
      type: 'text',
      placeholder: t('lenderEditor.profileDetail.addressPlaceholder'),
    },
    {
      name: 'postalCode',
      label: t('lenderEditor.profileDetail.postalCodeLabel'),
      type: 'text',
      placeholder: t('lenderEditor.profileDetail.postalCodePlaceholder'),
    },
    {
      name: 'mobile',
      label: t('lenderEditor.profileDetail.mobileNumberLabel'),
      type: 'text',
      placeholder: t('lenderEditor.profileDetail.mobilePlaceholder'),
    },
    {
      name: 'lenderId',
      label: t('lenderEditor.profileDetail.giveIdLabel'),
      type: 'text',
      placeholder: t('lenderEditor.profileDetail.idPlaceholder'),
    },
    {
      name: 'dob',
      label: t('lenderEditor.profileDetail.dobLabel'),
      type: 'date',
      placeholder: '',
    },
    {
      name: 'language',
      label: t('lenderEditor.profileDetail.preferredLanguageLabel'),
      type: 'text',
      placeholder: t('lenderEditor.profileDetail.languagePlaceholder'),
    },
    {
      name: 'city',
      label: t('lenderEditor.profileDetail.cityLabel'),
      type: 'text',
      placeholder: t('lenderEditor.profileDetail.cityPlaceholder'),
    },
    {
      name: 'country',
      label: t('lenderEditor.profileDetail.countryLabel'),
      type: 'text',
      placeholder: t('lenderEditor.profileDetail.countryPlaceholder'),
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
            {t('lenderEditor.profileDetail.title')}
          </h2>
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
              {t('lenderEditor.addButton')}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
