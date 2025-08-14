import type { ColumnDef, Row } from '@tanstack/react-table';
import type { TFunction } from 'i18next';
import { EyeIcon } from 'lucide-react';
import { Link } from 'react-router';
import checkIcon from '@/assets/icons/check.png';
import { UserCell } from '../UserCell';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';

export type User = {
  avatar: string;
  name: string;
  id: string;
  email: string;
  mobile: string;
  documents: string;
  documentsStatus: 'complete' | 'incomplete';
  active: boolean;
};

export const getUsersColumns = (t: TFunction): ColumnDef<User>[] => [
  {
    header: t('usersColumns.userName'),
    accessorKey: 'name',
    cell: (props: { row: Row<User> }) => (
      <UserCell
        avatar={props.row.original.avatar}
        name={props.row.original.name}
      />
    ),
  },
  {
    header: t('usersColumns.userId'),
    accessorKey: 'id',
  },
  {
    header: t('usersColumns.emailAddress'),
    accessorKey: 'email',
  },
  {
    header: t('usersColumns.mobileNumber'),
    accessorKey: 'mobile',
  },
  {
    header: t('usersColumns.documents'),
    accessorKey: 'documents',
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <span>{row.original.documents}</span>
        {row.original.documentsStatus === 'complete' && (
          <img
            alt="Complete"
            className="size-4"
            src={checkIcon}
            title={t('usersColumns.complete')}
          />
        )}
      </div>
    ),
  },
  {
    header: t('usersColumns.action'),
    id: 'action',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Link to={`/users/${row.original.id}`}>
          <Button size="icon" variant="ghost">
            <EyeIcon className="size-4 text-blue-600" />
          </Button>
        </Link>
        <Switch
          className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
          defaultChecked={row.original.active}
          title={
            row.original.active
              ? t('usersColumns.active')
              : t('usersColumns.inactive')
          }
        />
      </div>
    ),
  },
];
