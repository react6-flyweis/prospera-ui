import { InfoIcon, RefreshCwIcon, SearchIcon } from 'lucide-react';
import type React from 'react';
import { useRef, useState } from 'react';
import type { DataTableRef } from '@/components/DataTable';
import { DataTable } from '@/components/DataTable';
import { PageLayout } from '@/components/Layout/PageLayout';
import { CreditScoreDialog } from '@/components/LoanApproval/CreditScoreDialog';
import { loanApprovalColumns } from '@/components/LoanApproval/loanApprovalColumns';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { loanApprovalData } from '@/data/loanApprovalData';

export default function LoanApproval() {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  type LoanApprovalRow = (typeof loanApprovalData)[number];
  const tableRef = useRef<DataTableRef<LoanApprovalRow>>(null);

  const handleRefresh = () => {
    // TODO: implement refresh logic
  };
  const handleInfo = () => {
    setOpen(true);
  };

  // Live search: update global filter as user types
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (tableRef.current) {
      tableRef.current.getColumn('name')?.setFilterValue(value);
    }
  };

  return (
    <PageLayout title="User's Loan Approval">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button onClick={handleRefresh} size="icon" variant="ghost">
            <RefreshCwIcon className="size-7 text-primary" />
          </Button>
          <div className="relative">
            <span className="-translate-y-1/2 absolute top-1/2 left-2 text-muted-foreground">
              <SearchIcon className="h-4 w-4" />
            </span>
            <Input
              className="h-10 w-64 rounded pl-8"
              onChange={handleSearchChange}
              placeholder="Search Name or ID..."
              value={search}
            />
          </div>
        </div>
        <Button
          className="flex h-10 items-center gap-2 rounded bg-primary-gradient"
          onClick={handleInfo}
          variant="default"
        >
          <InfoIcon className="h-5 w-5" />
          Know About Credit Score
        </Button>
      </div>

      <CreditScoreDialog onClose={() => setOpen(false)} open={open} />

      <DataTable
        columns={loanApprovalColumns}
        data={loanApprovalData}
        pageSize={7}
        ref={tableRef}
        showPagination
      />
    </PageLayout>
  );
}
