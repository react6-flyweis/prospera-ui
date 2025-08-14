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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const createCorporateSchema = (t: TFunction) =>
  z.object({
    name: z.string().min(1, t('corporateEditor.validation.nameRequired')),
    email: z.email(),
    joinDate: z.string(),
    gender: z.string(),
    address: z.string(),
    postalCode: z.string(),
    mobile: z.string(),
    corporateId: z.string(),
    dob: z.string(),
    language: z.string(),
    city: z.string(),
    country: z.string(),
    bankName: z.string(),
    branch: z.string(),
    accountHolder: z.string(),
    accountNumber: z.string(),
    ifsc: z.string(),
    // About Company fields
    employeesCount: z.string(),
    businessSetting: z.string(),
    payrollDescription: z.string(),
    hasCompanyBankAccount: z.string(),
    africaTeamMembers: z.string(),
    industry: z.string(),
    desiredFirstPayday: z.string(),
    needClockInOut: z.string(),
    currentPayrollMethod: z.string(),
    companyPaying: z.string(),
    registeredWithIRS: z.string(),
    hiredFirstTeamMember: z.string(),
    africanRegions: z.string(),
    hasAccountant: z.string(),
    wantHealthBenefits: z.string(),
    hasWorkersCompInsurance: z.string(),
  });

type CorporateFormValues = z.infer<ReturnType<typeof createCorporateSchema>>;

type CorporateEditorProps = {
  initialData?: Partial<CorporateFormValues>;
};

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: <explanation>
export function CorporateEditor({ initialData }: CorporateEditorProps) {
  const { t } = useTranslation();
  const [profileImage, setProfileImage] = useState<string | File>('');
  const corporateSchema = createCorporateSchema(t);
  const form = useForm<CorporateFormValues>({
    resolver: zodResolver(corporateSchema),
    defaultValues: {
      name: initialData?.name || '',
      email: initialData?.email || '',
      joinDate: initialData?.joinDate || '',
      gender: initialData?.gender || '',
      address: initialData?.address || '',
      postalCode: initialData?.postalCode || '',
      mobile: initialData?.mobile || '',
      corporateId: initialData?.corporateId || '',
      dob: initialData?.dob || '',
      language: initialData?.language || '',
      city: initialData?.city || '',
      country: initialData?.country || '',
      bankName: initialData?.bankName || '',
      branch: initialData?.branch || '',
      accountHolder: initialData?.accountHolder || '',
      accountNumber: initialData?.accountNumber || '',
      ifsc: initialData?.ifsc || '',
      employeesCount: initialData?.employeesCount || '',
      businessSetting: initialData?.businessSetting || '',
      payrollDescription: initialData?.payrollDescription || '',
      hasCompanyBankAccount: initialData?.hasCompanyBankAccount || '',
      africaTeamMembers: initialData?.africaTeamMembers || '',
      industry: initialData?.industry || '',
      desiredFirstPayday: initialData?.desiredFirstPayday || '',
      needClockInOut: initialData?.needClockInOut || '',
    },
  });

  function onSubmit(_data: CorporateFormValues) {
    // handle submit
    // console.log(data);
  }

  // About Company fields config
  const aboutCompanyFields = [
    [
      {
        name: 'employeesCount',
        label: t('corporateEditor.aboutCompany.employeesCountLabel'),
        placeholder: t('corporateEditor.aboutCompany.placeholder'),
        type: 'text',
      },
      {
        name: 'businessSetting',
        label: t('corporateEditor.aboutCompany.businessSettingLabel'),
        placeholder: t('corporateEditor.aboutCompany.placeholder'),
        type: 'text',
      },
      {
        name: 'payrollDescription',
        label: t('corporateEditor.aboutCompany.payrollDescriptionLabel'),
        placeholder: t('corporateEditor.aboutCompany.placeholder'),
        type: 'text',
      },
      {
        name: 'hasCompanyBankAccount',
        label: t('corporateEditor.aboutCompany.hasCompanyBankAccountLabel'),
        type: 'select',
        placeholder: t('corporateEditor.aboutCompany.yesOrNoPlaceholder'),
      },
      {
        name: 'africaTeamMembers',
        label: t('corporateEditor.aboutCompany.africaTeamMembersLabel'),
        placeholder: t('corporateEditor.aboutCompany.numberPlaceholder'),
        type: 'text',
      },
      {
        name: 'industry',
        label: t('corporateEditor.aboutCompany.industryLabel'),
        placeholder: t('corporateEditor.aboutCompany.placeholder'),
        type: 'text',
      },
      {
        name: 'desiredFirstPayday',
        label: t('corporateEditor.aboutCompany.desiredFirstPaydayLabel'),
        placeholder: t('corporateEditor.aboutCompany.datePlaceholder'),
        type: 'text',
      },
      {
        name: 'needClockInOut',
        label: t('corporateEditor.aboutCompany.needClockInOutLabel'),
        type: 'select',
        placeholder: t('corporateEditor.aboutCompany.yesOrNoPlaceholder'),
      },
    ],
    [
      {
        name: 'currentPayrollMethod',
        label: t('corporateEditor.aboutCompany.currentPayrollMethodLabel'),
        placeholder: t('corporateEditor.aboutCompany.placeholder'),
        type: 'text',
      },
      {
        name: 'companyPaying',
        label: t('corporateEditor.aboutCompany.companyPayingLabel'),
        placeholder: t('corporateEditor.aboutCompany.placeholder'),
        type: 'text',
      },
      {
        name: 'registeredWithIRS',
        label: t('corporateEditor.aboutCompany.registeredWithIRSLabel'),
        type: 'select',
        placeholder: t('corporateEditor.aboutCompany.yesOrNoPlaceholder'),
      },
      {
        name: 'hiredFirstTeamMember',
        label: t('corporateEditor.aboutCompany.hiredFirstTeamMemberLabel'),
        type: 'select',
        placeholder: t('corporateEditor.aboutCompany.yesOrNoPlaceholder'),
      },
      {
        name: 'africanRegions',
        label: t('corporateEditor.aboutCompany.africanRegionsLabel'),
        placeholder: t('corporateEditor.aboutCompany.placeholder'),
        type: 'text',
      },
      {
        name: 'hasAccountant',
        label: t('corporateEditor.aboutCompany.hasAccountantLabel'),
        type: 'select',
        placeholder: t('corporateEditor.aboutCompany.yesOrNoPlaceholder'),
      },
      {
        name: 'wantHealthBenefits',
        label: t('corporateEditor.aboutCompany.wantHealthBenefitsLabel'),
        type: 'select',
        placeholder: t('corporateEditor.aboutCompany.yesOrNoPlaceholder'),
      },
      {
        name: 'hasWorkersCompInsurance',
        label: t('corporateEditor.aboutCompany.hasWorkersCompInsuranceLabel'),
        type: 'select',
        placeholder: t('corporateEditor.aboutCompany.yesOrNoPlaceholder'),
      },
    ],
  ] as const;

  return (
    <Form {...form}>
      <form className="flex gap-8" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="">
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
            {t('corporateEditor.profileDetail.title')}
          </h2>
          <div className="grid grid-cols-2 gap-5">
            {/* ...existing code... */}
            {(
              [
                {
                  name: 'name',
                  label: t('corporateEditor.profileDetail.nameLabel'),
                  placeholder: t(
                    'corporateEditor.profileDetail.namePlaceholder'
                  ),
                  type: 'text',
                },
                {
                  name: 'email',
                  label: t('corporateEditor.profileDetail.emailLabel'),
                  placeholder: t(
                    'corporateEditor.profileDetail.emailPlaceholder'
                  ),
                  type: 'text',
                },
                {
                  name: 'joinDate',
                  label: t('corporateEditor.profileDetail.joinDateLabel'),
                  placeholder: '',
                  type: 'date',
                },
                {
                  name: 'gender',
                  label: t('corporateEditor.profileDetail.genderLabel'),
                  placeholder: t(
                    'corporateEditor.profileDetail.genderPlaceholder'
                  ),
                  type: 'text',
                },
                {
                  name: 'address',
                  label: t('corporateEditor.profileDetail.addressLabel'),
                  placeholder: t(
                    'corporateEditor.profileDetail.addressPlaceholder'
                  ),
                  type: 'text',
                },
                {
                  name: 'postalCode',
                  label: t('corporateEditor.profileDetail.postalCodeLabel'),
                  placeholder: t(
                    'corporateEditor.profileDetail.postalCodePlaceholder'
                  ),
                  type: 'text',
                },
                {
                  name: 'mobile',
                  label: t('corporateEditor.profileDetail.mobileNumberLabel'),
                  placeholder: t(
                    'corporateEditor.profileDetail.mobilePlaceholder'
                  ),
                  type: 'text',
                },
                {
                  name: 'corporateId',
                  label: t('corporateEditor.profileDetail.giveIdLabel'),
                  placeholder: t('corporateEditor.profileDetail.idPlaceholder'),
                  type: 'text',
                },
                {
                  name: 'dob',
                  label: t('corporateEditor.profileDetail.dobLabel'),
                  placeholder: '',
                  type: 'date',
                },
                {
                  name: 'language',
                  label: t('corporateEditor.profileDetail.languageLabel'),
                  placeholder: t(
                    'corporateEditor.profileDetail.languagePlaceholder'
                  ),
                  type: 'text',
                },
                {
                  name: 'city',
                  label: t('corporateEditor.profileDetail.cityLabel'),
                  placeholder: t(
                    'corporateEditor.profileDetail.cityPlaceholder'
                  ),
                  type: 'text',
                },
                {
                  name: 'country',
                  label: t('corporateEditor.profileDetail.countryLabel'),
                  placeholder: t(
                    'corporateEditor.profileDetail.countryPlaceholder'
                  ),
                  type: 'text',
                },
              ] as const
            ).map(({ name, label, placeholder, type }) => (
              <FormField
                control={form.control}
                key={name}
                name={name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                      <Input placeholder={placeholder} type={type} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          <div className="mt-8">
            <h2 className="mb-4 font-semibold text-lg">
              {t('corporateEditor.bankDetail.title')}
            </h2>
            <div className="grid grid-cols-2 gap-5">
              {(
                [
                  {
                    name: 'bankName',
                    label: t('corporateEditor.bankDetail.bankNameLabel'),
                    placeholder: t(
                      'corporateEditor.bankDetail.bankNamePlaceholder'
                    ),
                  },
                  {
                    name: 'accountHolder',
                    label: t(
                      'corporateEditor.bankDetail.accountHolderNameLabel'
                    ),
                    placeholder: t(
                      'corporateEditor.bankDetail.accountHolderNamePlaceholder'
                    ),
                  },
                  {
                    name: 'ifsc',
                    label: t('corporateEditor.bankDetail.ifscCodeLabel'),
                    placeholder: t(
                      'corporateEditor.bankDetail.ifscCodePlaceholder'
                    ),
                  },
                  {
                    name: 'branch',
                    label: t('corporateEditor.bankDetail.branchLabel'),
                    placeholder: t(
                      'corporateEditor.bankDetail.branchPlaceholder'
                    ),
                  },
                  {
                    name: 'accountNumber',
                    label: t('corporateEditor.bankDetail.accountNumberLabel'),
                    placeholder: t(
                      'corporateEditor.bankDetail.accountNumberPlaceholder'
                    ),
                  },
                ] as const
              ).map(({ name, label, placeholder }) => (
                <FormField
                  control={form.control}
                  key={name}
                  name={name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{label}</FormLabel>
                      <FormControl>
                        <Input placeholder={placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </div>
          {/* About Company Section */}
          <div className="mt-8">
            <h2 className="mb-4 font-semibold text-lg">
              {t('corporateEditor.aboutCompany.title')}
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {aboutCompanyFields.map((column) => (
                <div
                  className="flex flex-col gap-4"
                  key={column.map((f) => f.name).join('-')}
                >
                  {column.map(({ name, label, type, placeholder = '' }) => (
                    <FormField
                      control={form.control}
                      key={name}
                      name={name}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{label}</FormLabel>
                          <FormControl>
                            {type === 'select' ? (
                              <Select
                                {...field}
                                onValueChange={field.onChange}
                                value={field.value || ''}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue
                                    placeholder={t(
                                      'corporateEditor.aboutCompany.yesOrNoPlaceholder'
                                    )}
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Yes">
                                    {t('corporateEditor.aboutCompany.yes')}
                                  </SelectItem>
                                  <SelectItem value="No">
                                    {t('corporateEditor.aboutCompany.no')}
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            ) : (
                              <Input
                                placeholder={placeholder}
                                type={type}
                                {...field}
                              />
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Button className="w-1/2 rounded-full bg-primary-gradient font-semibold text-white shadow">
              {t('corporateEditor.addButton')}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
