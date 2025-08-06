import type { ColumnDef, Row } from '@tanstack/react-table';
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

export const walletColumns: ColumnDef<Wallet>[] = [
  {
    header: 'Name',
    accessorKey: 'name',
    cell: (props: { row: Row<Wallet> }) => (
      <UserCell
        avatar={props.row.original.user.avatar}
        name={props.row.original.user.name}
      />
    ),
  },
  {
    header: 'ID',
    accessorKey: 'user.id',
  },
  {
    header: 'Email Address',
    accessorKey: 'user.email',
  },
  {
    header: 'Mobile Number',
    accessorKey: 'user.mobile',
  },
  {
    header: 'Current Balance',
    accessorKey: 'wallet',
    cell: ({ row }) => <span>${row.original.balance}</span>,
  },
  {
    header: 'See profile',
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
