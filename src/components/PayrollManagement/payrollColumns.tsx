import type { ColumnDef, Row } from '@tanstack/react-table';
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

export const payrollColumns: ColumnDef<Payroll>[] = [
  {
    header: 'Employee Name',
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
    header: 'Base Salary (LD)',
    accessorKey: 'baseSalaryLD',
  },
  {
    header: 'Other Income (LD)',
    accessorKey: 'otherIncomeLD',
  },
  {
    header: 'Total Income (LD)',
    accessorKey: 'totalIncomeLD',
  },
  {
    header: 'Deduction (LD)',
    accessorKey: 'deductionLD',
  },
  {
    header: 'Social Security (LD)',
    accessorKey: 'socialSecurityLD',
  },
  {
    header: 'Tax-exempt Income (LD)',
    accessorKey: 'taxExemptIncomeLD',
  },
  {
    header: 'Taxable Income (LD)',
    accessorKey: 'taxableIncomeLD',
  },
  {
    header: 'Income Tax (LD)',
    accessorKey: 'incomeTaxLD',
  },
  {
    header: 'Conversion Rate (LD to USD)',
    accessorKey: 'conversionRate',
  },
  {
    header: 'Currency',
    accessorKey: 'currency',
  },
  {
    header: 'Net Salary (LD)',
    accessorKey: 'netSalaryLD',
  },
  {
    header: 'Net Salary (USD)',
    accessorKey: 'netSalaryUSD',
  },
];
