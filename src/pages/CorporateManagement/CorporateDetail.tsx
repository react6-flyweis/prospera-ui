import { PenLineIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { PageLayout } from '@/components/Layout/PageLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Mock agent data
const CORPORATE_MOCK = {
  name: 'Kalyan Sarkar',
  avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  phone: '+1 9874 562103',
  country: 'United States',
  dob: '20-08-94',
  email: 'example@gmail.com',
  corporateId: 'AG124563',
  bank: {
    name: 'Lorem Ipsum',
    accountNo: '178458236900127842',
    branch: 'Lorem Ipsum',
    ifsc: '1748529',
  },
  joined: '11-28-2024',
};

export default function CorporateDetail() {
  const { t } = useTranslation();
  const companyFields = [
    [
      {
        label: t('corporateDetailPage.companyFields.employeesCount'),
        value: '89',
      },
      {
        label: t('corporateDetailPage.companyFields.businessSetting'),
        value: 'In office or remote',
      },
      {
        label: t('corporateDetailPage.companyFields.payrollRun'),
        value: "We're new to running payroll",
      },
      {
        label: t('corporateDetailPage.companyFields.companyBankAccount'),
        value: 'Yes',
      },
      {
        label: t('corporateDetailPage.companyFields.teamMembersToPay'),
        value: '89',
      },
      {
        label: t('corporateDetailPage.companyFields.industry'),
        value: 'Lorem Ipsum',
      },
      {
        label: t('corporateDetailPage.companyFields.desiredFirstPayday'),
        value: '01/31/2024',
      },
      {
        label: t('corporateDetailPage.companyFields.clockInAndOut'),
        value: 'Yes',
      },
    ],
    [
      {
        label: t('corporateDetailPage.companyFields.howPayrollRun'),
        value: "We're new to running payroll",
      },
      {
        label: t('corporateDetailPage.companyFields.whoToPay'),
        value: 'Employee in the Africa, Non-Africa employee, Vendors',
      },
      {
        label: t('corporateDetailPage.companyFields.registeredWithIRS'),
        value: 'Yes',
      },
      {
        label: t('corporateDetailPage.companyFields.hiredFirstTeamMember'),
        value: 'Yes',
      },
      {
        label: t('corporateDetailPage.companyFields.africanRegions'),
        value: 'Lorem Ipsum',
      },
      {
        label: t('corporateDetailPage.companyFields.hasAccountant'),
        value: 'Yes',
      },
      {
        label: t('corporateDetailPage.companyFields.offerHealthBenefits'),
        value: 'Yes',
      },
      {
        label: t('corporateDetailPage.companyFields.hasWorkersCompInsurance'),
        value: 'Yes',
      },
    ],
  ];
  return (
    <PageLayout title={CORPORATE_MOCK.name} withBack>
      <Card className=" flex items-center gap-6 rounded-2xl p-4 shadow-sm">
        <div className="grid flex-1 grid-cols-4 items-center gap-5">
          {/* Avatar */}
          <div className="flex items-center gap-3">
            <Avatar className="h-20 w-20">
              <AvatarImage
                alt="Agent Avatar"
                className="h-20 w-20 object-cover"
                src={CORPORATE_MOCK.avatar}
              />
              <AvatarFallback>{CORPORATE_MOCK.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="font-semibold text-lg">{CORPORATE_MOCK.name}</div>
              <div className="text-gray-500 text-sm">
                {CORPORATE_MOCK.phone}
              </div>
              <div className="text-gray-500 text-sm">
                {t('corporateDetailPage.country')} {CORPORATE_MOCK.country}
              </div>
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-sm">
              {t('corporateDetailPage.dob')} {CORPORATE_MOCK.dob}
            </div>
            <div className="text-gray-500 text-sm">
              {t('corporateDetailPage.emailId')} {CORPORATE_MOCK.email}
            </div>
            <div className="text-gray-500 text-sm">
              {t('corporateDetailPage.corporateId')}{' '}
              {CORPORATE_MOCK.corporateId}
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-sm">
              {t('corporateDetailPage.bankName')} {CORPORATE_MOCK.bank.name}
            </div>
            <div className="text-gray-500 text-sm">
              {t('corporateDetailPage.accountNo')}{' '}
              {CORPORATE_MOCK.bank.accountNo}
            </div>
            <div className="text-gray-500 text-sm">
              {t('corporateDetailPage.branch')} {CORPORATE_MOCK.bank.branch}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="">
              <div className="text-gray-500 text-sm">
                {t('corporateDetailPage.ifscCode')} {CORPORATE_MOCK.bank.ifsc}
              </div>
              <div className="text-gray-400 text-xs">
                {t('corporateDetailPage.joined')} {CORPORATE_MOCK.joined}
              </div>
            </div>
            <Link to={`/corporates/${CORPORATE_MOCK.corporateId}/edit`}>
              <Button className="mt-2" size="icon" variant="ghost">
                <PenLineIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Card>
      {/* About Company Card */}
      <Card className="mt-6 rounded-2xl p-6 shadow-sm">
        <div className="mb-4 font-semibold text-xl">
          {t('corporateDetailPage.aboutCompany')}
        </div>
        <form autoComplete="off" className="grid grid-cols-2 gap-6">
          {/* Left and Right Columns mapped dynamically */}
          {companyFields.map((column, colIdx) => (
            <div className="flex flex-col gap-4" key={colIdx}>
              {column.map((field, idx) => {
                const inputId = `company-field-${colIdx}-${idx}`;
                return (
                  <div key={inputId}>
                    <Label
                      className="mb-1 block text-gray-600 text-sm"
                      htmlFor={inputId}
                    >
                      {field.label}
                    </Label>
                    <Input
                      className="w-full rounded border px-3 py-2"
                      id={inputId}
                      readOnly
                      value={field.value}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </form>
      </Card>
    </PageLayout>
  );
}
