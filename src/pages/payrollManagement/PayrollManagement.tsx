import { useRef } from 'react';
import { DataTable, type DataTableRef } from '@/components/DataTable';
import { PageLayout } from '@/components/Layout/PageLayout';
import {
  type Payroll,
  payrollColumns,
} from '@/components/PayrollManagement/payrollColumns';
import { Checkbox } from '@/components/ui/checkbox';
import { payrollData } from '@/data/payrollData';

export default function PayrollManagement() {
  const tableRef = useRef<DataTableRef<Payroll>>(null);
  return (
    <PageLayout title="Payroll Management">
      <div className="mb-6">
        <h2 className="font-bold text-gray-800 text-xl">
          Hours and additional earnings
        </h2>
        <p className="text-foreground">
          Update your employee's hours, reimbursements, and additional earning
          below.
        </p>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={tableRef.current?.getIsAllPageRowsSelected()}
            onCheckedChange={(value) =>
              tableRef.current?.toggleAllPageRowsSelected(!!value)
            }
          />
          Select All
        </div>
      </div>
      <DataTable
        columns={payrollColumns}
        data={payrollData}
        ref={tableRef}
        showPagination
      />
    </PageLayout>
  );
}
