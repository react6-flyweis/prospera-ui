import { PenLineIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { PageLayout } from '@/components/Layout/PageLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LENDER_MOCK = {
  name: 'Kalyan Sarkar',
  avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  phone: '+1 9874 562103',
  country: 'United States',
  dob: '20-08-94',
  email: 'example@gmail.com',
  lenderId: 'AG124563',
  bank: {
    name: 'Lorem Ipsum',
    accountNo: '178458236900127842',
    branch: 'Lorem Ipsum',
    ifsc: '1748529',
  },
  joined: '11-28-2024',
};

export default function LenderDetails() {
  const { t } = useTranslation();
  return (
    <PageLayout title={LENDER_MOCK.name} withBack>
      <Card className=" flex items-center gap-6 rounded-2xl p-4 shadow-sm">
        <div className="grid flex-1 grid-cols-4 items-center gap-5">
          {/* Avatar */}
          <div className="flex items-center gap-3">
            <Avatar className="h-20 w-20">
              <AvatarImage
                alt="Lender Avatar"
                className="h-20 w-20 object-cover"
                src={LENDER_MOCK.avatar}
              />
              <AvatarFallback>{LENDER_MOCK.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="font-semibold text-lg">{LENDER_MOCK.name}</div>
              <div className="text-gray-500 text-sm">{LENDER_MOCK.phone}</div>
              <div className="text-gray-500 text-sm">
                {t('lenderDetailsPage.country')} {LENDER_MOCK.country}
              </div>
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-sm">
              {t('lenderDetailsPage.dob')} {LENDER_MOCK.dob}
            </div>
            <div className="text-gray-500 text-sm">
              {t('lenderDetailsPage.emailId')} {LENDER_MOCK.email}
            </div>
            <div className="text-gray-500 text-sm">
              {t('lenderDetailsPage.lenderId')} {LENDER_MOCK.lenderId}
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-sm">
              {t('lenderDetailsPage.bankName')} {LENDER_MOCK.bank.name}
            </div>
            <div className="text-gray-500 text-sm">
              {t('lenderDetailsPage.accountNo')} {LENDER_MOCK.bank.accountNo}
            </div>
            <div className="text-gray-500 text-sm">
              {t('lenderDetailsPage.branch')} {LENDER_MOCK.bank.branch}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="">
              <div className="text-gray-500 text-sm">
                {t('lenderDetailsPage.ifscCode')} {LENDER_MOCK.bank.ifsc}
              </div>
              <div className="text-gray-400 text-xs">
                {t('lenderDetailsPage.joined')} {LENDER_MOCK.joined}
              </div>
            </div>
            <Link to={`/lenders/${LENDER_MOCK.lenderId}/edit`}>
              <Button className="mt-2" size="icon" variant="ghost">
                <PenLineIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Card>
      {/* About Kalyan Card */}
      <Card className="mt-6 rounded-2xl p-6 shadow-sm">
        <div className="mb-6 font-semibold text-2xl">
          {t('lenderDetailsPage.about')} {LENDER_MOCK.name}
        </div>
        {(() => {
          const aboutFields = [
            {
              label: t('lenderDetailsPage.permanentAddress'),
              id: 'permanent-address',
              value: 'San Jose, California, USA',
            },
            {
              label: t('lenderDetailsPage.presentAddress'),
              id: 'present-address',
              value: 'San Jose, California, USA',
            },
            {
              label: t('lenderDetailsPage.postalCode'),
              id: 'postal-code',
              value: '700012',
            },
            {
              label: t('lenderDetailsPage.city'),
              id: 'city',
              value: 'San Jose',
            },
            {
              label: t('lenderDetailsPage.country'),
              id: 'country',
              value: 'USA',
            },
          ];
          return (
            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
              {aboutFields.map((field) => (
                <div key={field.id}>
                  <Label
                    className="mb-2 block font-medium text-sm"
                    htmlFor={field.id}
                  >
                    {field.label}
                  </Label>
                  <Input
                    className="w-full rounded border px-3 py-2 text-sm"
                    id={field.id}
                    readOnly
                    value={field.value}
                  />
                </div>
              ))}
            </div>
          );
        })()}
      </Card>
    </PageLayout>
  );
}
