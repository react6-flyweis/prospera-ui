import {
  CalendarDaysIcon,
  ColumnsIcon,
  DownloadIcon,
  FilterIcon,
} from 'lucide-react';
import { PageLayout } from '@/components/Layout/PageLayout';
import { AddColumnsDrawer } from '@/components/Reports/AddColumnsDrawer';
import { FiltersDialog } from '@/components/Reports/FiltersDialog';
import { GroupByMenu } from '@/components/Reports/GroupByMenu';
import { ScheduleReportDrawer } from '@/components/Reports/ScheduleReportDrawer';
import { TimePeriodMenu } from '@/components/Reports/TimePeriodMenu';
import { Button } from '@/components/ui/button';

export default function NewReport() {
  return (
    <PageLayout className="space-y-4" title="New Custom Report" withBack>
      <div className="flex justify-between gap-2">
        <Button className="rounded px-3 py-1 font-semibold" variant="outline">
          Save as template
        </Button>
        <Button className="flex items-center gap-2 rounded bg-primary-gradient px-4 py-1 font-semibold text-white">
          <DownloadIcon size={16} />
          Download
        </Button>
      </div>

      <div className="flex justify-between gap-2">
        <FiltersDialog>
          <Button
            className="flex items-center gap-2 rounded px-3 py-1 underline"
            variant="link"
          >
            <FilterIcon size={16} />
            Filter
          </Button>
        </FiltersDialog>
        <AddColumnsDrawer>
          <Button
            className="flex items-center gap-2 rounded px-3 py-1 underline"
            variant="link"
          >
            <ColumnsIcon size={16} />
            Columns
          </Button>
        </AddColumnsDrawer>
        <TimePeriodMenu>
          <Button
            className="rounded px-3 py-1 text-primary underline"
            variant="link"
          >
            Time period: Last 30 days
          </Button>
        </TimePeriodMenu>
        <GroupByMenu>
          <Button
            className="rounded px-3 py-1 text-primary underline"
            variant="link"
          >
            Group by
          </Button>
        </GroupByMenu>
        <ScheduleReportDrawer>
          <Button
            className="flex items-center gap-2 rounded px-3 py-1 text-primary underline"
            variant="link"
          >
            <CalendarDaysIcon size={16} />
            Schedule
          </Button>
        </ScheduleReportDrawer>
      </div>

      {/* Tab Bar */}
      <div className="flex w-full bg-primary-gradient text-white">
        <div className="px-4 py-2">Gross earning</div>
        <div className="px-4 py-2">Total employee deductions</div>
        <div className="px-4 py-2">Total employer contributions</div>
        <div className="px-4 py-2">Employee taxes</div>
        <div className="px-4 py-2">Employee net pay</div>
      </div>

      {/* No Results Found */}
      <div className="flex flex-col items-center justify-center py-20">
        <img
          alt="No results"
          className="mb-4 h-12 w-12 opacity-80"
          src="/icons/report.png"
        />
        <h2 className="mb-2 font-bold text-xl">No results found</h2>
        <p className="text-center text-muted-foreground">
          Consider widening your time period or adjusting your filters and
          columns.
        </p>
      </div>
    </PageLayout>
  );
}
