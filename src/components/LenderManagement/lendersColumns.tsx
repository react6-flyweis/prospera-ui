import type { ColumnDef, Row } from '@tanstack/react-table';
import { EyeIcon, Trash2Icon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import checkIcon from '@/assets/icons/check.png';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';

function LenderNameCell({ row }: { row: any }) {
  const [showDelete, setShowDelete] = useState(false);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setShowDelete((v) => !v);
    }
  };
  return (
    <div className="relative flex items-center gap-2">
      <img
        alt={row.original.name}
        className="h-7 w-7 rounded-full"
        src={row.original.avatar}
      />
      <button
        aria-label={`Show delete for ${row.original.name}`}
        className="cursor-pointer font-medium text-blue-700 hover:underline focus:outline-none"
        onClick={() => setShowDelete((v) => !v)}
        onKeyDown={handleKeyDown}
        style={{ background: 'none', border: 'none', padding: 0 }}
        tabIndex={0}
        type="button"
      >
        {row.original.name}
      </button>
      {showDelete && (
        <Button
          className="ml-2 flex items-center gap-1 rounded-lg border border-red-200 bg-white px-3 py-1 text-red-600 shadow hover:bg-red-50"
          style={{ position: 'absolute', left: '100%', top: 0, zIndex: 10 }}
          variant="ghost"
        >
          <Trash2Icon className="mr-1 size-5" /> Delete This Profile
        </Button>
      )}
    </div>
  );
}

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

export const lendersColumns: ColumnDef<Lender>[] = [
  {
    header: 'Lender Name',
    accessorKey: 'name',
    cell: (props: { row: Row<Lender> }) => <LenderNameCell {...props} />,
  },
  {
    header: 'Lender ID',
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
        <Link to={`/lenders/${row.original.id}`}>
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
