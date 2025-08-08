import type { ColumnDef } from '@tanstack/react-table';
import { Trash2Icon } from 'lucide-react';

export type CommissionCharge = {
  chargeNo: string;
  chargeName: string;
  percentage: string;
  date: string;
};

export const commissionColumns: ColumnDef<CommissionCharge>[] = [
  {
    header: 'Charge No',
    accessorKey: 'chargeNo',
  },
  {
    header: 'Charge Name',
    accessorKey: 'chargeName',
  },
  {
    header: 'Percentage',
    accessorKey: 'percentage',
  },
  {
    header: 'Date',
    accessorKey: 'date',
  },
  {
    header: 'Delete',
    id: 'delete',
    cell: () => <Trash2Icon className="cursor-pointer text-red-600" />,
  },
];
