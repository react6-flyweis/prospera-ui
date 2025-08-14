import { useTranslation } from 'react-i18next';
import { PageLayout } from '@/components/Layout/PageLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { formatCurrency } from '@/utils/currency';

const TXN_MOCK = {
  transactionId: '124789952236',
  sender: {
    id: 'US748520',
    name: 'Kalyan Sarkar',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    phone: '+1 9874 562103',
  },
  recipient: {
    id: 'US784536',
    name: 'Kadin Geidt',
    avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
    phone: '+1 9874 621208',
  },
  date: '27 Aug 2024',
  mode: 'Online',
  amount: 50,
  status: 'Completed',
};

export default function TransactionDetails() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('transactionDetailsPage.title')} withBack>
      <h2 className="mb-5 font-semibold text-2xl">{`${t(
        'transactionDetailsPage.transactionId'
      )}: ${TXN_MOCK.transactionId}`}</h2>
      <div className="grid grid-cols-2 gap-8">
        {/* Sender Section */}
        <div>
          <div className="mb-2 font-semibold text-lg">
            {t('transactionDetailsPage.senderId')}: {TXN_MOCK.sender.id}
          </div>
          <div className="mb-4 flex items-center gap-4">
            <Avatar className="h-32 w-28 rounded">
              <AvatarImage
                alt={t('transactionDetailsPage.senderAvatarAlt')}
                className="h-32 w-28 rounded object-cover"
                src={TXN_MOCK.sender.avatar}
              />
              <AvatarFallback>{TXN_MOCK.sender.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <Label className="mb-1 block text-sm">
                {t('transactionDetailsPage.senderName')}
              </Label>
              <Input
                className="mb-2 rounded-sm"
                readOnly
                value={TXN_MOCK.sender.name}
              />
              <Label className="mb-1 block text-sm">
                {t('transactionDetailsPage.senderMobileNumber')}
              </Label>
              <Input
                className="rounded-sm"
                readOnly
                value={TXN_MOCK.sender.phone}
              />
            </div>
          </div>
        </div>
        {/* Recipient Section */}
        <div>
          <div className="mb-2 font-semibold text-lg">
            {t('transactionDetailsPage.recipientId')}: {TXN_MOCK.recipient.id}
          </div>
          <div className="mb-4 flex items-center gap-4">
            <Avatar className="h-32 w-28 rounded">
              <AvatarImage
                alt={t('transactionDetailsPage.recipientAvatarAlt')}
                className="h-32 w-28 rounded object-cover"
                src={TXN_MOCK.recipient.avatar}
              />
              <AvatarFallback>{TXN_MOCK.recipient.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <Label className="mb-1 block text-sm">
                {t('transactionDetailsPage.recipientName')}
              </Label>
              <Input
                className="mb-2 rounded-sm"
                readOnly
                value={TXN_MOCK.recipient.name}
              />
              <Label className="mb-1 block text-sm">
                {t('transactionDetailsPage.recipientMobileNumber')}
              </Label>
              <Input
                className="rounded-sm"
                readOnly
                value={TXN_MOCK.recipient.phone}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Transaction Info Row */}
      <div className="mt-6 grid grid-cols-4 gap-6">
        <div>
          <Label className="mb-1 block text-sm">
            {t('transactionDetailsPage.date')}
          </Label>
          <Input className="rounded-sm" readOnly value={TXN_MOCK.date} />
        </div>
        <div>
          <Label className="mb-1 block text-sm">
            {t('transactionDetailsPage.modeOfPayment')}
          </Label>
          <Input className="rounded-sm" readOnly value={TXN_MOCK.mode} />
        </div>
        <div>
          <Label className="mb-1 block text-sm">
            {t('transactionDetailsPage.receivedAmount')}
          </Label>
          <Input
            className="rounded-sm"
            readOnly
            value={formatCurrency(TXN_MOCK.amount)}
          />
        </div>
        <div>
          <Label className="mb-1 block text-sm">
            {t('transactionDetailsPage.transactionStatus')}
          </Label>
          <Input className="rounded-sm" readOnly value={TXN_MOCK.status} />
        </div>
      </div>
    </PageLayout>
  );
}
