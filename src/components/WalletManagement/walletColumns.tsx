import type { ColumnDef, Row } from '@tanstack/react-table';
import type { TFunction } from 'i18next';
import { EyeIcon } from 'lucide-react';
import { Link } from 'react-router';
import { UserCell } from '../UserCell';
import { Button } from '../ui/button';

export type UserType =
  | 'users'
  | 'employees'
  | 'corporates'
  | 'agents'
  | 'lenders'
  | 'vendors';

export type Wallet = {
  id: string;
  balance: number;
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    mobile: string;
  };
};

export const getWalletColumns = (t: TFunction): ColumnDef<Wallet>[] => [
  {
    header: t('walletColumns.name'),
    accessorKey: 'name',
    cell: (props: { row: Row<Wallet> }) => (
      <UserCell
        avatar={props.row.original.user.avatar}
        name={props.row.original.user.name}
      />
    ),
  },
  {
    header: t('walletColumns.id'),
    accessorKey: 'user.id',
  },
  {
    header: t('walletColumns.emailAddress'),
    accessorKey: 'user.email',
  },
  {
    header: t('walletColumns.mobileNumber'),
    accessorKey: 'user.mobile',
  },
  {
    header: t('walletColumns.currentBalance'),
    accessorKey: 'wallet',
    cell: ({ row }) => <span>${row.original.balance}</span>,
  },
  {
    header: t('walletColumns.seeProfile'),
    id: 'action',
    cell: ({ row }) => (
      <Link to={`/wallets/${row.original.id}`}>
        <Button size="icon" variant="ghost">
          <EyeIcon className="size-4 text-blue-600" />
        </Button>
      </Link>
    ),
  },
];
