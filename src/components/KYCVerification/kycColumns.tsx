import type { ColumnDef } from '@tanstack/react-table';
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

export const kycColumns: ColumnDef<KYCDetail>[] = [
  {
    header: 'Agent Name',
    accessorKey: 'user',
    cell: (props) => (
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
    accessorKey: 'user.email',
    header: 'Email Address',
  },
  {
    accessorKey: 'user.mobile',
    header: 'Mobile Number',
  },
  {
    accessorKey: 'kyc',
    header: 'KYC',
    cell: ({ row }) => {
      return (
        <span
          className={
            row.original.kyc === 'Verified'
              ? 'font-semibold text-green-600'
              : 'font-semibold text-red-500'
          }
        >
          {row.original.kyc}
        </span>
      );
    },
  },
  {
    id: 'action',
    header: 'Action',
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Button
            className="text-green-600 hover:bg-green-50"
            disabled={row.original.kyc === 'Verified'}
            size="icon"
            variant="ghost"
          >
            <CheckIcon size={18} />
            Approve
          </Button>
          <Button
            className="text-red-500 hover:bg-red-50"
            disabled={row.original.kyc === 'Verified'}
            size="icon"
            variant="ghost"
          >
            <XIcon size={18} />
            Reject
          </Button>
          <Button size="icon" variant="ghost">
            <EyeIcon size={18} />
          </Button>
        </div>
      );
    },
  },
];
