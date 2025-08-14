import { useTranslation } from 'react-i18next';
import { CommissionForm } from '@/components/CommissionManagement/CommissionForm';
import { getCommissionColumns } from '@/components/CommissionManagement/commissionColumns';
import { commissionData } from '@/components/CommissionManagement/commissionData';
import { DataTable } from '@/components/DataTable';
import { PageLayout } from '@/components/Layout/PageLayout';
import { Button } from '@/components/ui/button';

export default function CommissionManagement() {
  const { t } = useTranslation();
  const commissionColumns = getCommissionColumns(t);
  return (
    <PageLayout title={t('commissionManagementPage.title')}>
      <CommissionForm />
      <div className="mt-8">
        <DataTable
          columns={commissionColumns}
          data={commissionData}
          pageSize={8}
          showPagination={false}
        />
        <Button className="mt-4 w-32 bg-primary-gradient text-lg" type="button">
          {t('commissionManagementPage.deleteAllButton')}
        </Button>
      </div>
    </PageLayout>
  );
}
