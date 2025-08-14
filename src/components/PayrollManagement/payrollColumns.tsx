import type { ColumnDef, Row } from '@tanstack/react-table';
import type { TFunction } from 'i18next';
import { UserCell } from '../UserCell';
import { Checkbox } from '../ui/checkbox';

export type Payroll = {
  employee: {
    avatar: string;
    name: string;
    id: string;
    email: string;
    mobile: string;
  };
  baseSalaryLD: number;
  otherIncomeLD: number;
  totalIncomeLD: number;
  deductionLD: number;
  socialSecurityLD: number;
  taxExemptIncomeLD: number;
  taxableIncomeLD: number;
  incomeTaxLD: number;
  conversionRate: number;
  currency: string;
  netSalaryLD: number;
  netSalaryUSD: number;
};

export const getPayrollColumns = (t: TFunction): ColumnDef<Payroll>[] => [
  {
    header: t('payrollColumns.employeeName'),
    accessorKey: 'employeeName',
    cell: ({ row }: { row: Row<Payroll> }) => (
      <div className="flex items-center gap-2">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
        />
        <UserCell
          avatar={row.original.employee.avatar}
          name={row.original.employee.name}
        />
      </div>
    ),
  },
  {
    header: t('payrollColumns.baseSalaryLD'),
    accessorKey: 'baseSalaryLD',
  },
  {
    header: t('payrollColumns.otherIncomeLD'),
    accessorKey: 'otherIncomeLD',
  },
  {
    header: t('payrollColumns.totalIncomeLD'),
    accessorKey: 'totalIncomeLD',
  },
  {
    header: t('payrollColumns.deductionLD'),
    accessorKey: 'deductionLD',
  },
  {
    header: t('payrollColumns.socialSecurityLD'),
    accessorKey: 'socialSecurityLD',
  },
  {
    header: t('payrollColumns.taxExemptIncomeLD'),
    accessorKey: 'taxExemptIncomeLD',
  },
  {
    header: t('payrollColumns.taxableIncomeLD'),
    accessorKey: 'taxableIncomeLD',
  },
  {
    header: t('payrollColumns.incomeTaxLD'),
    accessorKey: 'incomeTaxLD',
  },
  {
    header: t('payrollColumns.conversionRate'),
    accessorKey: 'conversionRate',
  },
  {
    header: t('payrollColumns.currency'),
    accessorKey: 'currency',
  },
  {
    header: t('payrollColumns.netSalaryLD'),
    accessorKey: 'netSalaryLD',
  },
  {
    header: t('payrollColumns.netSalaryUSD'),
    accessorKey: 'netSalaryUSD',
  },
];
