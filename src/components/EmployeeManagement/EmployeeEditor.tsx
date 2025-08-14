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

const createEmployeeSchema = (t: TFunction) =>
  z.object({
    name: z.string().min(1, t('employeeEditor.validation.nameRequired')),
    email: z.string().email(),
    joinDate: z.string(),
    gender: z.string(),
    address: z.string(),
    presentAddress: z.string(),
    postalCode: z.string(),
    mobile: z.string(),
    employeeId: z.string(),
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

type EmployeeFormValues = z.infer<ReturnType<typeof createEmployeeSchema>>;

type EmployeeEditorProps = {
  initialData?: Partial<EmployeeFormValues>;
};

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: <explanation>
export function EmployeeEditor({ initialData }: EmployeeEditorProps) {
  const { t } = useTranslation();
  const [profileImage, setProfileImage] = useState<string | File>('');
  const employeeSchema = createEmployeeSchema(t);
  const form = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      name: initialData?.name || '',
      email: initialData?.email || '',
      joinDate: initialData?.joinDate || '',
      gender: initialData?.gender || '',
      address: initialData?.address || '',
      presentAddress: initialData?.presentAddress || '',
      postalCode: initialData?.postalCode || '',
      mobile: initialData?.mobile || '',
      employeeId: initialData?.employeeId || '',
      dob: initialData?.dob || '',
      language: initialData?.language || '',
      city: initialData?.city || '',
      country: initialData?.country || '',
      bankName: initialData?.bankName || '',
      branch: initialData?.branch || '',
      accountHolderName: initialData?.accountHolderName || '',
      accountNumber: initialData?.accountNumber || '',
      ifscCode: initialData?.ifscCode || '',
    },
  });

  function onSubmit(_data: EmployeeFormValues) {
    // handle submit
  }

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
            {t('employeeEditor.profileDetail.title')}
          </h2>
          <div className="grid grid-cols-2 gap-5">
            {[
              {
                name: 'name',
                label: t('employeeEditor.profileDetail.nameLabel'),
                type: 'text',
                placeholder: t('employeeEditor.profileDetail.namePlaceholder'),
              },
              {
                name: 'email',
                label: t('employeeEditor.profileDetail.emailLabel'),
                type: 'email',
                placeholder: t('employeeEditor.profileDetail.emailPlaceholder'),
              },
              {
                name: 'joinDate',
                label: t('employeeEditor.profileDetail.joinDateLabel'),
                type: 'date',
                placeholder: '',
              },
              {
                name: 'gender',
                label: t('employeeEditor.profileDetail.genderLabel'),
                type: 'text',
                placeholder: t(
                  'employeeEditor.profileDetail.genderPlaceholder'
                ),
              },
              {
                name: 'address',
                label: t('employeeEditor.profileDetail.permanentAddressLabel'),
                type: 'text',
                placeholder: t(
                  'employeeEditor.profileDetail.addressPlaceholder'
                ),
              },
              {
                name: 'presentAddress',
                label: t('employeeEditor.profileDetail.presentAddressLabel'),
                type: 'text',
                placeholder: t(
                  'employeeEditor.profileDetail.addressPlaceholder'
                ),
              },
              {
                name: 'postalCode',
                label: t('employeeEditor.profileDetail.postalCodeLabel'),
                type: 'text',
                placeholder: t(
                  'employeeEditor.profileDetail.postalCodePlaceholder'
                ),
              },
              {
                name: 'mobile',
                label: t('employeeEditor.profileDetail.mobileNumberLabel'),
                type: 'text',
                placeholder: t(
                  'employeeEditor.profileDetail.mobilePlaceholder'
                ),
              },
              {
                name: 'employeeId',
                label: t('employeeEditor.profileDetail.employeeIdLabel'),
                type: 'text',
                placeholder: t('employeeEditor.profileDetail.idPlaceholder'),
              },
              {
                name: 'dob',
                label: t('employeeEditor.profileDetail.dobLabel'),
                type: 'date',
                placeholder: '',
              },
              {
                name: 'language',
                label: t('employeeEditor.profileDetail.preferredLanguageLabel'),
                type: 'text',
                placeholder: t(
                  'employeeEditor.profileDetail.languagePlaceholder'
                ),
              },
              {
                name: 'city',
                label: t('employeeEditor.profileDetail.cityLabel'),
                type: 'text',
                placeholder: t('employeeEditor.profileDetail.cityPlaceholder'),
              },
              {
                name: 'country',
                label: t('employeeEditor.profileDetail.countryLabel'),
                type: 'text',
                placeholder: t(
                  'employeeEditor.profileDetail.countryPlaceholder'
                ),
              },
            ].map((field) => (
              <FormField
                control={form.control}
                key={field.name}
                name={field.name as keyof EmployeeFormValues}
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
              {t('employeeEditor.bankDetail.title')}{' '}
              <span className="font-normal text-sm">
                {t('employeeEditor.bankDetail.ifAny')}
              </span>
            </h2>
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  name: 'bankName',
                  label: t('employeeEditor.bankDetail.bankNameLabel'),
                  type: 'text',
                  placeholder: t(
                    'employeeEditor.bankDetail.bankNamePlaceholder'
                  ),
                },
                {
                  name: 'branch',
                  label: t('employeeEditor.bankDetail.branchLabel'),
                  type: 'text',
                  placeholder: t('employeeEditor.bankDetail.branchPlaceholder'),
                },
                {
                  name: 'accountHolderName',
                  label: t('employeeEditor.bankDetail.accountHolderNameLabel'),
                  type: 'text',
                  placeholder: t(
                    'employeeEditor.bankDetail.accountHolderNamePlaceholder'
                  ),
                },
                {
                  name: 'accountNumber',
                  label: t('employeeEditor.bankDetail.accountNumberLabel'),
                  type: 'text',
                  placeholder: t(
                    'employeeEditor.bankDetail.accountNumberPlaceholder'
                  ),
                },
                {
                  name: 'ifscCode',
                  label: t('employeeEditor.bankDetail.ifscCodeLabel'),
                  type: 'text',
                  placeholder: t(
                    'employeeEditor.bankDetail.ifscCodePlaceholder'
                  ),
                },
              ].map((field) => (
                <FormField
                  control={form.control}
                  key={field.name}
                  name={field.name as keyof EmployeeFormValues}
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
              {t('employeeEditor.addButton')}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
