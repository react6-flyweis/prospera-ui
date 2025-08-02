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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const corporateSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email(),
  joinDate: z.string(),
  gender: z.string(),
  address: z.string(),
  postalCode: z.string(),
  mobile: z.string(),
  vendorId: z.string(),
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

type CorporateFormValues = z.infer<typeof corporateSchema>;

export function CorporateEditor() {
  const [profileImage, setProfileImage] = useState<string | File>('');
  const form = useForm<CorporateFormValues>({
    resolver: zodResolver(corporateSchema),
    defaultValues: {},
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
        label: 'How many employees does he/she has, including himself/herself?',
        placeholder: 'Enter here',
        type: 'text',
      },
      {
        name: 'businessSetting',
        label: 'How would you describe his/her business setting?',
        placeholder: 'Enter here',
        type: 'text',
      },
      {
        name: 'payrollDescription',
        label: 'Hoe dose his/her company currently run payroll?',
        placeholder: 'Enter here',
        type: 'text',
      },
      {
        name: 'hasCompanyBankAccount',
        label: 'Do he/she has a company bank account?',
        type: 'select',
        placeholder: '',
      },
      {
        name: 'africaTeamMembers',
        label: 'How many team members in the Africa is he/she planning to pay?',
        placeholder: 'Enter number',
        type: 'text',
      },
      {
        name: 'industry',
        label: 'What industry is he/she in?',
        placeholder: 'Enter here',
        type: 'text',
      },
      {
        name: 'desiredFirstPayday',
        label: "What's his desired first payday?",
        placeholder: '__/__/____',
        type: 'text',
      },
      {
        name: 'needClockInOut',
        label:
          'Dose anyone in his/her company need to clock in and out or track the hours they work?',
        type: 'select',
        placeholder: '',
      },
    ],
    [
      {
        name: 'currentPayrollMethod',
        label: 'How do he/she currently run payroll?',
        placeholder: 'Enter here',
        type: 'text',
      },
      {
        name: 'companyPaying',
        label: 'Who is his/her company planning to pay?',
        placeholder: 'Enter here',
        type: 'text',
      },
      {
        name: 'registeredWithIRS',
        label: 'Is his/her company registered as an employer with the IRS?',
        type: 'select',
        placeholder: '',
      },
      {
        name: 'hiredFirstTeamMember',
        label: 'Has he/she already hired your first team member?',
        type: 'select',
        placeholder: '',
      },
      {
        name: 'africanRegions',
        label:
          'In which African region(s) does he/she and his/her employees work?',
        placeholder: 'Enter here',
        type: 'text',
      },
      {
        name: 'hasAccountant',
        label:
          'Does he/she has an accountant or bookkeeper helping his/her business?',
        type: 'select',
        placeholder: '',
      },
      {
        name: 'wantHealthBenefits',
        label:
          'Dose his/her company want to offer health benefits to your employees?',
        type: 'select',
        placeholder: '',
      },
      {
        name: 'hasWorkersCompInsurance',
        label: 'Does his/her company has workers compensation insurance',
        type: 'select',
        placeholder: '',
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
          <h2 className="mb-4 font-semibold text-lg">Profile Detail</h2>
          <div className="grid grid-cols-2 gap-5">
            {/* ...existing code... */}
            {(
              [
                {
                  name: 'name',
                  label: 'Name Of The Vendor',
                  placeholder: 'Enter name',
                  type: 'text',
                },
                {
                  name: 'email',
                  label: 'Email',
                  placeholder: 'Enter email',
                  type: 'text',
                },
                {
                  name: 'joinDate',
                  label: 'Join Date',
                  placeholder: '',
                  type: 'date',
                },
                {
                  name: 'gender',
                  label: 'Gender',
                  placeholder: 'Enter here',
                  type: 'text',
                },
                {
                  name: 'address',
                  label: 'Permanent Address',
                  placeholder: 'Enter address',
                  type: 'text',
                },
                {
                  name: 'postalCode',
                  label: 'Postal Code',
                  placeholder: 'Enter here',
                  type: 'text',
                },
                {
                  name: 'mobile',
                  label: 'Mobile Number',
                  placeholder: 'Enter number',
                  type: 'text',
                },
                {
                  name: 'vendorId',
                  label: 'Give A ID',
                  placeholder: 'Enter ID',
                  type: 'text',
                },
                {
                  name: 'dob',
                  label: 'Date Of Birth',
                  placeholder: '',
                  type: 'date',
                },
                {
                  name: 'language',
                  label: 'Preferred language',
                  placeholder: 'Enter here',
                  type: 'text',
                },
                {
                  name: 'city',
                  label: 'City',
                  placeholder: 'Enter here',
                  type: 'text',
                },
                {
                  name: 'country',
                  label: 'Country',
                  placeholder: 'Enter here',
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
            <h2 className="mb-4 font-semibold text-lg">Bank Detail</h2>
            <div className="grid grid-cols-2 gap-5">
              {(
                [
                  {
                    name: 'bankName',
                    label: 'Bank Name',
                    placeholder: 'Enter here',
                  },
                  {
                    name: 'accountHolder',
                    label: 'Account Holder Name',
                    placeholder: 'Enter name',
                  },
                  {
                    name: 'ifsc',
                    label: 'IFSC Code',
                    placeholder: 'Enter here',
                  },
                  {
                    name: 'branch',
                    label: 'Branch',
                    placeholder: 'Enter here',
                  },
                  {
                    name: 'accountNumber',
                    label: 'Account Number',
                    placeholder: 'Enter number',
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
            <h2 className="mb-4 font-semibold text-lg">About Company</h2>
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
                                  <SelectValue placeholder="Yes or NO" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Yes">Yes</SelectItem>
                                  <SelectItem value="No">No</SelectItem>
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
              Add
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
