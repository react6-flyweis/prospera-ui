import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, PencilIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { PageLayout } from '@/components/Layout/PageLayout';
import { ProfileImageUploader } from '@/components/ProfileImageUploader';
import { ChangePasswordDialog } from '@/components/UserManagement/ChangePasswordDialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export default function ProfileDetail() {
  const { t } = useTranslation();
  const profileSchema = z.object({
    name: z.string().min(1, t('profileDetailPage.validation.nameRequired')),
    email: z.string().email(t('profileDetailPage.validation.emailRequired')),
    gender: z.string(),
    presentAddress: z.string(),
    address: z.string(),
    country: z.string(),
    password: z
      .string()
      .min(6, t('profileDetailPage.validation.passwordRequired')),
    mobile: z.string(),
    userId: z.string(),
    dob: z.string(),
    language: z.string(),
    postalCode: z.string(),
    city: z.string(),
  });

  type ProfileFormValues = z.infer<typeof profileSchema>;
  const [profileImage, setProfileImage] = useState<string | File>('');
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: '',
      email: '',
      gender: '',
      presentAddress: '',
      address: '',
      country: '',
      password: '',
      mobile: '',
      userId: '',
      dob: '',
      language: '',
      postalCode: '',
      city: '',
    },
  });

  function onSubmit(_data: ProfileFormValues) {
    // handle submit
  }

  return (
    <PageLayout title={t('userManagementPage.profileDetailPage.title')}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-8">
            <div className="mb-2 flex items-start gap-6">
              <ProfileImageUploader
                onChange={(file) => {
                  if (file) {
                    setProfileImage(URL.createObjectURL(file));
                  }
                }}
                value={profileImage}
              />
            </div>
            <div className="flex-1">
              <h2 className="mt-2 mb-5 font-semibold text-xl ">
                {t('userManagementPage.profileDetailPage.profileDetailTitle')}
              </h2>
              <div className="mb-6 grid grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t('userManagementPage.profileDetailPage.nameLabel')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t(
                            'userManagementPage.profileDetailPage.namePlaceholder'
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
                        {t(
                          'userManagementPage.profileDetailPage.mobileNumberLabel'
                        )}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t(
                            'userManagementPage.profileDetailPage.mobilePlaceholder'
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
                        {t('userManagementPage.profileDetailPage.emailLabel')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t(
                            'userManagementPage.profileDetailPage.emailPlaceholder'
                          )}
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t('userManagementPage.profileDetailPage.giveIdLabel')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t(
                            'userManagementPage.profileDetailPage.idPlaceholder'
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
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t('userManagementPage.profileDetailPage.genderLabel')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t(
                            'userManagementPage.profileDetailPage.genderPlaceholder'
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
                  name="dob"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t('userManagementPage.profileDetailPage.dobLabel')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t(
                            'userManagementPage.profileDetailPage.dobPlaceholder'
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
                  name="presentAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t(
                          'userManagementPage.profileDetailPage.presentAddressLabel'
                        )}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t(
                            'userManagementPage.profileDetailPage.addressPlaceholder'
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
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t(
                          'userManagementPage.profileDetailPage.preferredLanguageLabel'
                        )}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t(
                            'userManagementPage.profileDetailPage.languagePlaceholder'
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
                        {t(
                          'userManagementPage.profileDetailPage.permanentAddressLabel'
                        )}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t(
                            'userManagementPage.profileDetailPage.addressPlaceholder'
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
                        {t(
                          'userManagementPage.profileDetailPage.postalCodeLabel'
                        )}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t(
                            'userManagementPage.profileDetailPage.postalCodePlaceholder'
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
                        {t('userManagementPage.profileDetailPage.countryLabel')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t(
                            'userManagementPage.profileDetailPage.countryPlaceholder'
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
                        {t('userManagementPage.profileDetailPage.cityLabel')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t(
                            'userManagementPage.profileDetailPage.cityPlaceholder'
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t(
                          'userManagementPage.profileDetailPage.passwordLabel'
                        )}
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder={t(
                              'userManagementPage.profileDetailPage.passwordInputPlaceholder'
                            )}
                            type={showPassword ? 'text' : 'password'}
                            {...field}
                          />
                          <div className="absolute top-0 right-2 flex h-full items-center gap-2">
                            <button
                              className="text-gray-500"
                              onClick={() => setShowPassword((v) => !v)}
                              tabIndex={-1}
                              type="button"
                            >
                              <EyeIcon size={18} />
                            </button>
                            <ChangePasswordDialog>
                              <button
                                aria-label={t(
                                  'userManagementPage.profileDetailPage.editPasswordAriaLabel'
                                )}
                                className="rounded-full p-1 text-primary hover:bg-primary/10"
                                type="button"
                              >
                                <PencilIcon size={16} />
                              </button>
                            </ChangePasswordDialog>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <Button className="w-1/2 rounded-full bg-primary-gradient font-semibold text-white shadow">
              {t('userManagementPage.profileDetailPage.saveButton')}
            </Button>
          </div>
        </form>
      </Form>
    </PageLayout>
  );
}
