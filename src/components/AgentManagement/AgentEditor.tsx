import { zodResolver } from '@hookform/resolvers/zod';
import type { TFunction } from 'i18next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import documentIcon from '@/assets/icons/document.png';
import { ProfileImageUploader } from '../ProfileImageUploader';
import { Button } from '../ui/button';
import { FileInput } from '../ui/FileInput';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

function getAgentSchema(t: TFunction) {
  return z.object({
    name: z.string().min(1, t('agentEditor.validation.nameRequired')),
    email: z.string().email(t('agentEditor.validation.emailRequired')),
    joinDate: z.string(),
    gender: z.string(),
    address: z.string(),
    postalCode: z.string(),
    mobile: z.string(),
    agentId: z.string(),
    dob: z.string(),
    language: z.string(),
    city: z.string(),
    country: z.string(),
    bankName: z.string(),
    branch: z.string(),
    accountHolder: z.string(),
    accountNumber: z.string(),
    ifsc: z.string(),
  });
}

type AgentFormValues = z.infer<ReturnType<typeof getAgentSchema>>;

type AgentEditorProps = {
  initialData?: Partial<AgentFormValues>;
};

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: <explanation>
export function AgentEditor({ initialData }: AgentEditorProps) {
  const { t } = useTranslation();

  const agentSchema = getAgentSchema(t);
  const form = useForm<AgentFormValues>({
    resolver: zodResolver(agentSchema),
    defaultValues: {
      name: initialData?.name || '',
      email: initialData?.email || '',
      joinDate: initialData?.joinDate || '',
      gender: initialData?.gender || '',
      address: initialData?.address || '',
      postalCode: initialData?.postalCode || '',
      mobile: initialData?.mobile || '',
      agentId: initialData?.agentId || '',
      dob: initialData?.dob || '',
      language: initialData?.language || '',
      city: initialData?.city || '',
      country: initialData?.country || '',
      bankName: initialData?.bankName || '',
      branch: initialData?.branch || '',
      accountHolder: initialData?.accountHolder || '',
      accountNumber: initialData?.accountNumber || '',
      ifsc: initialData?.ifsc || '',
    },
  });

  function onSubmit(_data: AgentFormValues) {
    // handle submit
    // console.log(_data);
  }

  const documentList = [
    {
      key: 'businessLicense',
      label: t('agentEditor.uploadDocuments.documentList.businessLicense'),
    },
    {
      key: 'ownerOperatorId',
      label: t('agentEditor.uploadDocuments.documentList.ownerOperatorId'),
    },
    {
      key: 'financialStatements',
      label: t('agentEditor.uploadDocuments.documentList.financialStatements'),
    },
    {
      key: 'amlTrainingPeriods',
      label: t('agentEditor.uploadDocuments.documentList.amlTrainingPeriods'),
    },
    {
      key: 'sampleKycRecords',
      label: t('agentEditor.uploadDocuments.documentList.sampleKycRecords'),
    },
    {
      key: 'dataProcessingAgreements',
      label: t(
        'agentEditor.uploadDocuments.documentList.dataProcessingAgreements'
      ),
    },
    {
      key: 'complianceCertifications',
      label: t(
        'agentEditor.uploadDocuments.documentList.complianceCertifications'
      ),
    },
    {
      key: 'businessReferences',
      label: t('agentEditor.uploadDocuments.documentList.businessReferences'),
    },
    {
      key: 'certificateOfIncorporation',
      label: t(
        'agentEditor.uploadDocuments.documentList.certificateOfIncorporation'
      ),
    },
    {
      key: 'proofOfAddress',
      label: t('agentEditor.uploadDocuments.documentList.proofOfAddress'),
    },
    {
      key: 'amlPolicy',
      label: t('agentEditor.uploadDocuments.documentList.amlPolicy'),
    },
    {
      key: 'kycPolicy',
      label: t('agentEditor.uploadDocuments.documentList.kycPolicy'),
    },
    {
      key: 'dataProtectionPolicy',
      label: t('agentEditor.uploadDocuments.documentList.dataProtectionPolicy'),
    },
    {
      key: 'auditReports',
      label: t('agentEditor.uploadDocuments.documentList.auditReports'),
    },
    {
      key: 'liabilityInsurance',
      label: t('agentEditor.uploadDocuments.documentList.liabilityInsurance'),
    },
  ];

  // State for document files
  const [documentFiles, setDocumentFiles] = useState<{
    [key: string]: File | null;
  }>({});

  const [profileImage, setProfileImage] = useState<string | File>('');

  const handleFileChange = (doc: string, file: File | null) => {
    setDocumentFiles((prev) => ({ ...prev, [doc]: file }));
  };

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
        <div className="">
          <h2 className="mb-4 font-semibold text-lg">
            {t('agentEditor.profileDetail.title')}
          </h2>
          <div className="grid grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('agentEditor.profileDetail.nameLabel')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t(
                        'agentEditor.profileDetail.namePlaceholder'
                      )}
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
                  <FormLabel>
                    {t('agentEditor.profileDetail.emailLabel')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t(
                        'agentEditor.profileDetail.emailPlaceholder'
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="joinDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('agentEditor.profileDetail.joinDateLabel')}
                  </FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('agentEditor.profileDetail.genderLabel')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t(
                        'agentEditor.profileDetail.genderPlaceholder'
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('agentEditor.profileDetail.addressLabel')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t(
                        'agentEditor.profileDetail.addressPlaceholder'
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('agentEditor.profileDetail.postalCodeLabel')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t(
                        'agentEditor.profileDetail.postalCodePlaceholder'
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('agentEditor.profileDetail.mobileNumberLabel')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t(
                        'agentEditor.profileDetail.mobilePlaceholder'
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="agentId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('agentEditor.profileDetail.giveIdLabel')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('agentEditor.profileDetail.idPlaceholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('agentEditor.profileDetail.dobLabel')}
                  </FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('agentEditor.profileDetail.languageLabel')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t(
                        'agentEditor.profileDetail.languagePlaceholder'
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('agentEditor.profileDetail.cityLabel')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t(
                        'agentEditor.profileDetail.cityPlaceholder'
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('agentEditor.profileDetail.countryLabel')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t(
                        'agentEditor.profileDetail.countryPlaceholder'
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-8">
            <h2 className="mb-4 font-semibold text-lg">
              {t('agentEditor.bankDetail.title')}
            </h2>
            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="bankName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {t('agentEditor.bankDetail.bankNameLabel')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t(
                          'agentEditor.bankDetail.bankNamePlaceholder'
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="accountHolder"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {t('agentEditor.bankDetail.accountHolderNameLabel')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t(
                          'agentEditor.bankDetail.accountHolderNamePlaceholder'
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ifsc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {t('agentEditor.bankDetail.ifscCodeLabel')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t(
                          'agentEditor.bankDetail.ifscCodePlaceholder'
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="branch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {t('agentEditor.bankDetail.branchLabel')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t(
                          'agentEditor.bankDetail.branchPlaceholder'
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="accountNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {t('agentEditor.bankDetail.accountNumberLabel')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t(
                          'agentEditor.bankDetail.accountNumberPlaceholder'
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="mt-8">
            <h2 className="mb-4 font-semibold text-lg">
              {t('agentEditor.uploadDocuments.title')}
            </h2>
            <div className="grid grid-cols-2 gap-5">
              {documentList.map((doc) => (
                <FileInput
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  className="h-full cursor-pointer rounded-l-none"
                  key={doc.key}
                  onChange={(file) => handleFileChange(doc.key, file)}
                  value={documentFiles[doc.key] || null}
                >
                  <div className="flex h-14 items-center justify-between rounded-lg bg-white shadow">
                    <div className="flex items-center gap-3 p-2">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 p-2">
                        <img
                          alt="doc"
                          className="max-h-6 max-w-6 rounded "
                          src={documentIcon}
                        />
                      </div>
                      <span className="font-medium">{doc.label}</span>
                    </div>
                    <div className="flex h-full items-center rounded-r-md bg-gray-400 px-5 text-sm text-white">
                      {t('agentEditor.uploadDocuments.uploadButton')}
                    </div>
                  </div>
                </FileInput>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button className="w-1/2 rounded-full bg-primary-gradient font-semibold text-white shadow">
                {t('agentEditor.addButton')}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
