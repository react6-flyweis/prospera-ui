import type { ColumnDef } from '@tanstack/react-table';
import type { TFunction } from 'i18next';
import { CheckIcon, EyeIcon, XIcon } from 'lucide-react';
import { UserCell } from '../UserCell';
import { Button } from '../ui/button';

type KYCStatus = 'Verified' | 'Not verified';

export interface KYCDetail {
  id: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    mobile: string;
  };
  kyc: KYCStatus;
}

export const getKycColumns = (t: TFunction): ColumnDef<KYCDetail>[] => [
  {
    header: t('kycColumns.agentName'),
    accessorKey: 'user',
    cell: (props) => (
      <UserCell
        avatar={props.row.original.user.avatar}
        name={props.row.original.user.name}
      />
    ),
  },
  {
    header: t('kycColumns.id'),
    accessorKey: 'user.id',
  },
  {
    accessorKey: 'user.email',
    header: t('kycColumns.emailAddress'),
  },
  {
    accessorKey: 'user.mobile',
    header: t('kycColumns.mobileNumber'),
  },
  {
    accessorKey: 'kyc',
    header: t('kycColumns.kyc'),
    cell: ({ row }) => {
      return (
        <span
          className={
            row.original.kyc === 'Verified'
              ? 'font-semibold text-green-600'
              : 'font-semibold text-red-500'
          }
        >
          {row.original.kyc === 'Verified'
            ? t('kycColumns.verified')
            : t('kycColumns.notVerified')}
        </span>
      );
    },
  },
  {
    id: 'action',
    header: t('kycColumns.action'),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Button
            className="text-green-600 hover:bg-green-50"
            disabled={row.original.kyc === 'Verified'}
            variant="ghost"
          >
            <CheckIcon size={18} />
            {t('kycColumns.approve')}
          </Button>
          <Button
            className="text-red-500 hover:bg-red-50"
            disabled={row.original.kyc === 'Verified'}
            variant="ghost"
          >
            <XIcon size={18} />
            {t('kycColumns.reject')}
          </Button>
          <Button size="icon" variant="ghost">
            <EyeIcon size={18} />
          </Button>
        </div>
      );
    },
  },
];
