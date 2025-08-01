import type { ColumnDef } from '@tanstack/react-table';
import { EyeIcon } from 'lucide-react';
import checkIcon from '@/assets/icons/check.png';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';

export type Agent = {
  avatar: string;
  name: string;
  id: string;
  email: string;
  mobile: string;
  documents: string;
  documentsStatus: 'complete' | 'incomplete';
  active: boolean;
};

export const agentsColumns: ColumnDef<Agent>[] = [
  {
    header: 'Agent Name',
    accessorKey: 'name',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <img
          alt={row.original.name}
          className="h-7 w-7 rounded-full"
          src={row.original.avatar}
        />
        <span className="cursor-pointer font-medium text-blue-700 hover:underline">
          {row.original.name}
        </span>
      </div>
    ),
  },
  {
    header: 'Agent ID',
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
        <Button size="icon" variant="ghost">
          <EyeIcon className="size-4 text-blue-600" />
        </Button>
        <Switch
          checked={row.original.active}
          className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
          title={row.original.active ? 'Active' : 'Inactive'}
        />
      </div>
    ),
  },
];
