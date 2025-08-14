import type { ColumnDef } from '@tanstack/react-table';
import type { TFunction } from 'i18next';
import { EyeIcon } from 'lucide-react';
import { Link } from 'react-router';
import { UserCell } from '../UserCell';

export type CryptoTransaction = {
  name: string;
  userId: string;
  email: string;
  mobile: string;
  balance: string;
  profileUrl: string;
  avatar: string;
};

export const getCryptoTransactionColumns = (
  t: TFunction
): ColumnDef<CryptoTransaction>[] => [
  {
    accessorKey: 'name',
    header: t('cryptoTransactionColumns.userName'),
    cell: ({ row }) => (
      <UserCell avatar={row.original.avatar} name={row.original.name} />
    ),
  },
  {
    accessorKey: 'userId',
    header: t('cryptoTransactionColumns.userId'),
  },
  {
    accessorKey: 'email',
    header: t('cryptoTransactionColumns.emailAddress'),
  },
  {
    accessorKey: 'mobile',
    header: t('cryptoTransactionColumns.mobileNumber'),
  },
  {
    accessorKey: 'balance',
    header: t('cryptoTransactionColumns.currentBalance'),
  },
  {
    accessorKey: 'seeProfile',
    header: t('cryptoTransactionColumns.seePortfolio'),
    cell: ({ row }) => (
      <Link
        className="cursor-pointer text-blue-600"
        to={`/crypto-portfolio/${row.original.userId}`}
      >
        <EyeIcon color="#2563eb" size={20} />
      </Link>
    ),
  },
];
