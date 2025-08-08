import type { ColumnDef } from '@tanstack/react-table';
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
export const cryptoColumns: ColumnDef<CryptoTransaction>[] = [
  {
    accessorKey: 'name',
    header: 'User Name',
    cell: ({ row }) => (
      <UserCell avatar={row.original.avatar} name={row.original.name} />
    ),
  },
  {
    accessorKey: 'userId',
    header: 'User ID',
  },
  {
    accessorKey: 'email',
    header: 'Email Address',
  },
  {
    accessorKey: 'mobile',
    header: 'Mobile Number',
  },
  {
    accessorKey: 'balance',
    header: 'Current Balance',
  },
  {
    accessorKey: 'seeProfile',
    header: 'See Portfolio',
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
