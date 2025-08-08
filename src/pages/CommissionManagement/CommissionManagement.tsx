import { CommissionForm } from '@/components/CommissionManagement/CommissionForm';
import { commissionColumns } from '@/components/CommissionManagement/commissionColumns';
import { commissionData } from '@/components/CommissionManagement/commissionData';
import { DataTable } from '@/components/DataTable';
import { PageLayout } from '@/components/Layout/PageLayout';
import { Button } from '@/components/ui/button';

export default function CommissionManagement() {
  return (
    <PageLayout title="Commission Management">
      <CommissionForm />
      <div className="mt-8">
        <DataTable
          columns={commissionColumns}
          data={commissionData}
          pageSize={8}
          showPagination={false}
        />
        <Button className="mt-4 w-32 bg-primary-gradient text-lg" type="button">
          Delete All
        </Button>
      </div>
    </PageLayout>
  );
}
