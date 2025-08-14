import { ListFilterIcon, UploadIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { DataTable, type DataTableRef } from '@/components/DataTable';
import { PageLayout } from '@/components/Layout/PageLayout';
import { ColumnSelectorDialog } from '@/components/PayrollManagement/ColumnSelectorDialog';
import { PayrollFiltersDialog } from '@/components/PayrollManagement/PayrollFiltersDialog';
import {
  getPayrollColumns,
  type Payroll,
} from '@/components/PayrollManagement/payrollColumns';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { payrollData } from '@/data/payrollData';

export default function PayrollManagement() {
  const { t } = useTranslation();
  const tableRef = useRef<DataTableRef<Payroll>>(null);
  const payrollColumns = getPayrollColumns(t);
  const [open, setOpen] = useState(false); // filter dialog
  const [colDialogOpen, setColDialogOpen] = useState(false);
  // columns state: all columns are shown by default
  const [selectedCols, setSelectedCols] = useState<string[]>(
    payrollColumns.map((c) => (c.id ?? c.header) as string)
  );

  // For ColumnSelectorDialog
  const columnOptions = payrollColumns.map((col) => ({
    key: (col.id ?? col.header) as string,
    label: col.header as string,
  }));

  return (
    <PageLayout title={t('payrollManagementPage.title')}>
      <div className="mb-6">
        <h2 className="font-bold text-gray-800 text-xl">
          {t('payrollManagementPage.hoursAndEarningsTitle')}
        </h2>
        <p className="text-foreground">
          {t('payrollManagementPage.hoursAndEarningsDescription')}
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
          {t('payrollManagementPage.selectAll')}
        </div>
        <div className="flex items-center gap-4">
          <Button onClick={() => setOpen(true)} variant="link">
            <ListFilterIcon className="size-4" />
            <span>{t('payrollManagementPage.filterButton')}</span>
          </Button>
          <Button onClick={() => setColDialogOpen(true)} variant="link">
            <span>{t('payrollManagementPage.columnsButton')}</span>
          </Button>
          <Button asChild variant="link">
            <Link to="/payrolls/import">
              <UploadIcon className="size-4" />
              <span>{t('payrollManagementPage.importPayrollDataButton')}</span>
            </Link>
          </Button>
        </div>
      </div>

      <PayrollFiltersDialog open={open} setOpen={setOpen} />
      <ColumnSelectorDialog
        columns={columnOptions}
        onChange={setSelectedCols}
        open={colDialogOpen}
        selected={selectedCols}
        setOpen={setColDialogOpen}
      />
      <DataTable
        columns={payrollColumns.filter((col) =>
          selectedCols.includes((col.id ?? col.header) as string)
        )}
        data={payrollData}
        ref={tableRef}
        showPagination
      />
    </PageLayout>
  );
}
