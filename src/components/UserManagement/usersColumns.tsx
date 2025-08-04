import type { ColumnDef, Row } from '@tanstack/react-table';
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

export const usersColumns: ColumnDef<User>[] = [
  {
    header: 'User Name',
    accessorKey: 'name',
    cell: (props: { row: Row<User> }) => (
      <UserCell
        avatar={props.row.original.avatar}
        name={props.row.original.name}
      />
    ),
  },
  {
    header: 'User ID',
    accessorKey: 'id',
  },
  {
    header: 'Email Address',
    accessorKey: 'email',
  },
  {
    header: 'Mobile Number',
    accessorKey: 'mobile',
  },
  {
    header: 'Documents',
    accessorKey: 'documents',
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <span>{row.original.documents}</span>
        {row.original.documentsStatus === 'complete' && (
          <img
            alt="Complete"
            className="size-4"
            src={checkIcon}
            title="Complete"
          />
        )}
      </div>
    ),
  },
  {
    header: 'Action',
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
          title={row.original.active ? 'Active' : 'Inactive'}
        />
      </div>
    ),
  },
];
