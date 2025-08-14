import type { ColumnDef, Row } from '@tanstack/react-table';
import type { TFunction } from 'i18next';
import { EyeIcon } from 'lucide-react';
import { Link } from 'react-router';
import checkIcon from '@/assets/icons/check.png';
import { UserCell } from '../UserCell';
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

export const getAgentsColumns = (t: TFunction): ColumnDef<Agent>[] => [
  {
    header: t('agentsColumns.agentName'),
    accessorKey: 'name',
    cell: (props: { row: Row<Agent> }) => (
      <UserCell
        avatar={props.row.original.avatar}
        name={props.row.original.name}
      />
    ),
  },
  {
    header: t('agentsColumns.agentId'),
    accessorKey: 'id',
  },
  {
    header: t('agentsColumns.emailAddress'),
    accessorKey: 'email',
  },
  {
    header: t('agentsColumns.mobileNumber'),
    accessorKey: 'mobile',
  },
  {
    header: t('agentsColumns.documents'),
    accessorKey: 'documents',
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <span>{row.original.documents}</span>
        {row.original.documentsStatus === 'complete' && (
          <img
            alt="Complete"
            className="size-4"
            src={checkIcon}
            title={t('agentsColumns.complete')}
          />
        )}
      </div>
    ),
  },
  {
    header: t('agentsColumns.action'),
    id: 'action',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Link to={`/agents/${row.original.id}`}>
          <Button size="icon" variant="ghost">
            <EyeIcon className="size-4 text-blue-600" />
          </Button>
        </Link>
        <Switch
          className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
          defaultChecked={row.original.active}
          title={
            row.original.active
              ? t('agentsColumns.active')
              : t('agentsColumns.inactive')
          }
        />
      </div>
    ),
  },
];
