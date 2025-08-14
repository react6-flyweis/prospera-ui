import type { ColumnDef } from '@tanstack/react-table';
import type { TFunction } from 'i18next';
import { Trash2Icon } from 'lucide-react';

export type CommissionCharge = {
  chargeNo: string;
  chargeName: string;
  percentage: string;
  date: string;
};

export const getCommissionColumns = (
  t: TFunction
): ColumnDef<CommissionCharge>[] => [
  {
    header: t('commissionColumns.chargeNo'),
    accessorKey: 'chargeNo',
  },
  {
    header: t('commissionColumns.chargeName'),
    accessorKey: 'chargeName',
  },
  {
    header: t('commissionColumns.percentage'),
    accessorKey: 'percentage',
  },
  {
    header: t('commissionColumns.date'),
    accessorKey: 'date',
  },
  {
    header: t('commissionColumns.delete'),
    id: 'delete',
    cell: () => <Trash2Icon className="cursor-pointer text-red-600" />,
  },
];
