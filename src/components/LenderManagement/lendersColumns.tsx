import type { ColumnDef, Row } from '@tanstack/react-table';
import type { TFunction } from 'i18next';
import { EyeIcon } from 'lucide-react';
import { Link } from 'react-router';
import checkIcon from '@/assets/icons/check.png';
import { UserCell } from '../UserCell';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';

export type Lender = {
  avatar: string;
  name: string;
  id: string;
  email: string;
  mobile: string;
  documents: string;
  documentsStatus: 'complete' | 'incomplete';
  active: boolean;
};

export const getLendersColumns = (t: TFunction): ColumnDef<Lender>[] => [
  {
    header: t('lendersColumns.lenderName'),
    accessorKey: 'name',
    cell: (props: { row: Row<Lender> }) => (
      <UserCell
        avatar={props.row.original.avatar}
        name={props.row.original.name}
      />
    ),
  },
  {
    header: t('lendersColumns.lenderId'),
    accessorKey: 'id',
  },
  {
    header: t('lendersColumns.emailAddress'),
    accessorKey: 'email',
  },
  {
    header: t('lendersColumns.mobileNumber'),
    accessorKey: 'mobile',
  },
  {
    header: t('lendersColumns.documents'),
    accessorKey: 'documents',
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <span>{row.original.documents}</span>
        {row.original.documentsStatus === 'complete' && (
          <img
            alt="Complete"
            className="size-4"
            src={checkIcon}
            title={t('lendersColumns.complete')}
          />
        )}
      </div>
    ),
  },
  {
    header: t('lendersColumns.action'),
    id: 'action',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Link to={`/lenders/${row.original.id}`}>
          <Button size="icon" variant="ghost">
            <EyeIcon className="size-4 text-blue-600" />
          </Button>
        </Link>
        <Switch
          className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
          defaultChecked={row.original.active}
          title={
            row.original.active
              ? t('lendersColumns.active')
              : t('lendersColumns.inactive')
          }
        />
      </div>
    ),
  },
];
