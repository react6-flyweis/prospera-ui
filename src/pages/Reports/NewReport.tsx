import {
  CalendarDaysIcon,
  ColumnsIcon,
  DownloadIcon,
  FilterIcon,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '@/components/Layout/PageLayout';
import { AddColumnsDrawer } from '@/components/Reports/AddColumnsDrawer';
import { FiltersDialog } from '@/components/Reports/FiltersDialog';
import { GroupByMenu } from '@/components/Reports/GroupByMenu';
import { ScheduleReportDrawer } from '@/components/Reports/ScheduleReportDrawer';
import { TimePeriodMenu } from '@/components/Reports/TimePeriodMenu';
import { Button } from '@/components/ui/button';

export default function NewReport() {
  const { t } = useTranslation();
  return (
    <PageLayout className="space-y-4" title={t('newReportPage.title')} withBack>
      <div className="flex justify-between gap-2">
        <Button className="rounded px-3 py-1 font-semibold" variant="outline">
          {t('newReportPage.saveAsTemplateButton')}
        </Button>
        <Button className="flex items-center gap-2 rounded bg-primary-gradient px-4 py-1 font-semibold text-white">
          <DownloadIcon size={16} />
          {t('newReportPage.downloadButton')}
        </Button>
      </div>

      <div className="flex justify-between gap-2">
        <FiltersDialog>
          <Button
            className="flex items-center gap-2 rounded px-3 py-1 underline"
            variant="link"
          >
            <FilterIcon size={16} />
            {t('newReportPage.filterButton')}
          </Button>
        </FiltersDialog>
        <AddColumnsDrawer>
          <Button
            className="flex items-center gap-2 rounded px-3 py-1 underline"
            variant="link"
          >
            <ColumnsIcon size={16} />
            {t('newReportPage.columnsButton')}
          </Button>
        </AddColumnsDrawer>
        <TimePeriodMenu>
          <Button
            className="rounded px-3 py-1 text-primary underline"
            variant="link"
          >
            {t('newReportPage.timePeriodButton')}
          </Button>
        </TimePeriodMenu>
        <GroupByMenu>
          <Button
            className="rounded px-3 py-1 text-primary underline"
            variant="link"
          >
            {t('newReportPage.groupByButton')}
          </Button>
        </GroupByMenu>
        <ScheduleReportDrawer>
          <Button
            className="flex items-center gap-2 rounded px-3 py-1 text-primary underline"
            variant="link"
          >
            <CalendarDaysIcon size={16} />
            {t('newReportPage.scheduleButton')}
          </Button>
        </ScheduleReportDrawer>
      </div>

      {/* Tab Bar */}
      <div className="flex w-full bg-primary-gradient text-white">
        <div className="px-4 py-2">{t('newReportPage.grossEarning')}</div>
        <div className="px-4 py-2">
          {t('newReportPage.totalEmployeeDeductions')}
        </div>
        <div className="px-4 py-2">
          {t('newReportPage.totalEmployerContributions')}
        </div>
        <div className="px-4 py-2">{t('newReportPage.employeeTaxes')}</div>
        <div className="px-4 py-2">{t('newReportPage.employeeNetPay')}</div>
      </div>

      {/* No Results Found */}
      <div className="flex flex-col items-center justify-center py-20">
        <img
          alt={t('newReportPage.noResultsAlt')}
          className="mb-4 h-12 w-12 opacity-80"
          src="/icons/report.png"
        />
        <h2 className="mb-2 font-bold text-xl">
          {t('newReportPage.noResultsFound')}
        </h2>
        <p className="text-center text-muted-foreground">
          {t('newReportPage.noResultsMessage')}
        </p>
      </div>
    </PageLayout>
  );
}
