import { useTranslation } from 'react-i18next';
import { DataTable } from '@/components/DataTable';
import { PageLayout } from '@/components/Layout/PageLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { transactionColumns } from '@/components/WalletManagement/transactionColumns';
import { transactions } from '@/data/transactionsData';
import { formatCurrency } from '@/utils/currency';

// Transaction columns for DataTable

const USER_MOCK = {
  name: 'Kalyan Sarkar',
  avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  phone: '+1 9874 562103',
  country: 'United States',
  dob: '20-08-94',
  email: 'example@gmail.com',
  userId: 'US124563',
  walletBalance: 277_308,
  bank: {
    name: 'Lorem Ipsum',
    accountNo: '178458236900127842',
    branch: 'Lorem Ipsum',
    ifsc: '1748529',
  },
  joined: '11-28-2024',
};

export default function WalletDetails() {
  const { t } = useTranslation();
  return (
    <PageLayout
      title={t('walletDetailsPage.title', { name: USER_MOCK.name })}
      withBack
    >
      <Card className=" flex items-center gap-6 rounded-2xl p-4 shadow-sm">
        <div className="grid flex-1 grid-cols-4 items-center gap-5">
          {/* Avatar */}
          <div className="flex items-center gap-3">
            <Avatar className="h-20 w-20">
              <AvatarImage
                alt={t('walletDetailsPage.userAvatarAlt')}
                className="h-20 w-20 object-cover"
                src={USER_MOCK.avatar}
              />
              <AvatarFallback>{USER_MOCK.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="font-semibold text-lg">{USER_MOCK.name}</div>
              <div className="text-gray-500 text-sm">{USER_MOCK.phone}</div>
              <div className="text-gray-500 text-sm">
                {t('walletDetailsPage.country')} {USER_MOCK.country}
              </div>
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-sm">
              {t('walletDetailsPage.dob')} {USER_MOCK.dob}
            </div>
            <div className="text-gray-500 text-sm">
              {t('walletDetailsPage.emailId')} {USER_MOCK.email}
            </div>
            <div className="text-gray-500 text-sm">
              {t('walletDetailsPage.userId')} {USER_MOCK.userId}
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-sm">
              {t('walletDetailsPage.bankName')} {USER_MOCK.bank.name}
            </div>
            <div className="text-gray-500 text-sm">
              {t('walletDetailsPage.accountNo')} {USER_MOCK.bank.accountNo}
            </div>
            <div className="text-gray-500 text-sm">
              {t('walletDetailsPage.branch')} {USER_MOCK.bank.branch}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="">
              <div className="text-gray-500 text-sm">
                {t('walletDetailsPage.ifscCode')} {USER_MOCK.bank.ifsc}
              </div>
              <div className="text-gray-400 text-xs">
                {t('walletDetailsPage.joined')} {USER_MOCK.joined}
              </div>
            </div>
          </div>
        </div>
      </Card>
      <div className="my-4 space-y-2">
        <h3 className="text-2xl">
          {t('walletDetailsPage.currentWalletBalance')}
        </h3>
        <p className="font-semibold text-3xl">
          {formatCurrency(USER_MOCK.walletBalance)}
        </p>
      </div>

      <DataTable
        columns={transactionColumns}
        data={transactions}
        pageSize={8}
        showPagination={true}
      />
    </PageLayout>
  );
}
