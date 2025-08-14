import type { ColumnDef, Row } from '@tanstack/react-table';
import type { TFunction } from 'i18next';
import { EyeIcon } from 'lucide-react';
import { Link } from 'react-router';
import checkIcon from '@/assets/icons/check.png';
import { UserCell } from '../UserCell';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';

export type IVendor = {
  avatar: string;
  name: string;
  id: string;
  email: string;
  mobile: string;
  documents: string;
  documentsStatus: 'complete' | 'incomplete';
  active: boolean;
};

export const getVendorColumns = (t: TFunction): ColumnDef<IVendor>[] => [
  {
    header: t('vendorColumns.vendorName'),
    accessorKey: 'name',
    cell: (props: { row: Row<IVendor> }) => (
      <UserCell
        avatar={props.row.original.avatar}
        name={props.row.original.name}
      />
    ),
  },
  {
    header: t('vendorColumns.vendorId'),
    accessorKey: 'id',
  },
  {
    header: t('vendorColumns.emailAddress'),
    accessorKey: 'email',
  },
  {
    header: t('vendorColumns.mobileNumber'),
    accessorKey: 'mobile',
  },
  {
    header: t('vendorColumns.documents'),
    accessorKey: 'documents',
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <span>{row.original.documents}</span>
        {row.original.documentsStatus === 'complete' && (
          <img
            alt={t('vendorColumns.documentComplete')}
            className="h-4 w-4"
            src={checkIcon}
          />
        )}
      </div>
    ),
  },
  {
    header: t('vendorColumns.status'),
    accessorKey: 'active',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Link to={`/vendors/${row.original.id}`}>
          <Button size="icon" variant="ghost">
            <EyeIcon className="size-4 text-blue-600" />
          </Button>
        </Link>
        <Switch
          className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
          defaultChecked={row.original.active}
          title={row.original.active ? 'Active' : 'Inactive'}
        />
      </div>
    ),
  },
];
