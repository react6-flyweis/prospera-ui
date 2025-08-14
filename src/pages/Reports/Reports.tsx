import { ArrowRightIcon, PlusIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { PageLayout } from '@/components/Layout/PageLayout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Reports() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('reportsPage.pageTitle')}>
      <Tabs className="w-full" defaultValue="new">
        <div className="mb-6 flex items-center justify-between">
          <TabsList className="flex gap-6 bg-transparent">
            <TabsTrigger
              className="group flex items-center gap-2 px-0 py-0 font-semibold text-base shadow-none! focus:outline-none"
              value="new"
            >
              <span className="relative flex items-center justify-center">
                <span className="relative mr-2 flex h-5 w-5 items-center justify-center">
                  <span className="absolute h-5 w-5 rounded-full border-2 border-primary-gradient transition-colors group-data-[state=active]:border-primary-gradient/80 group-data-[state=inactive]:border-primary/30" />
                  <span className="absolute h-2.5 w-2.5 rounded-full bg-primary-gradient transition-opacity group-data-[state=active]:opacity-100 group-data-[state=inactive]:opacity-0" />
                </span>
                <span className="transition-colors group-data-[state=active]:font-bold group-data-[state=active]:text-primary">
                  {t('reportsPage.newReportsTab')}
                </span>
              </span>
            </TabsTrigger>
            <TabsTrigger
              className="group flex items-center gap-2 px-0 py-0 font-semibold text-base shadow-none! focus:outline-none"
              value="history"
            >
              <span className="relative flex items-center justify-center">
                <span className="mr-2 flex h-5 w-5 items-center justify-center">
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    <span className="absolute h-5 w-5 rounded-full border-2 border-primary-gradient transition-colors group-data-[state=active]:border-primary-gradient/80 group-data-[state=inactive]:border-primary/30" />
                    <span className="absolute h-2.5 w-2.5 rounded-full bg-primary-gradient transition-opacity group-data-[state=active]:opacity-100 group-data-[state=inactive]:opacity-0" />
                  </span>
                </span>
                <span className="transition-colors group-data-[state=active]:font-bold group-data-[state=active]:text-primary">
                  {t('reportsPage.reportsHistoryTab')}
                </span>
              </span>
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-3">
            <Button
              className="rounded-lg border-primary-gradient px-6 py-2 font-semibold text-primary transition-colors hover:bg-primary-gradient/10"
              variant="outline"
            >
              {t('reportsPage.learnMoreButton')}
            </Button>
            <Link to="/reports/new">
              <Button className="flex items-center gap-2 rounded-lg bg-primary-gradient px-6 py-2 font-semibold text-white shadow-md transition-colors hover:opacity-90">
                <PlusIcon size={18} />
                {t('reportsPage.newCustomReportButton')}
              </Button>
            </Link>
          </div>
        </div>
        <TabsContent value="new">
          <h2 className="mb-4 font-semibold text-lg">
            {t('reportsPage.recommendedReportsTitle')}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card className="rounded-md border border-muted-foreground">
              <CardHeader>
                <CardTitle>{t('reportsPage.customReportCardTitle')}</CardTitle>
                <CardDescription>
                  {t('reportsPage.customReportCardDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  aria-label={t('reportsPage.viewCustomReportAriaLabel')}
                  className="flex items-center gap-1 font-medium text-primary hover:underline"
                  to="/reports/custom"
                >
                  {t('reportsPage.viewReportButton')}
                  <ArrowRightIcon className="inline-block" size={16} />
                </Link>
              </CardContent>
            </Card>
            <Card className="rounded-md border border-muted-foreground">
              <CardHeader>
                <CardTitle>{t('reportsPage.payrollTrendsCardTitle')}</CardTitle>
                <CardDescription>
                  {t('reportsPage.payrollTrendsCardDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  aria-label={t('reportsPage.viewPayrollTrendsReportAriaLabel')}
                  className="flex items-center gap-1 font-medium text-primary hover:underline"
                  to="/reports/payroll-trends"
                >
                  {t('reportsPage.viewReportButton')}
                  <ArrowRightIcon className="inline-block" size={16} />
                </Link>
              </CardContent>
            </Card>
          </div>
          {/* Reports Table */}
          <div className="mt-8">
            <div className="overflow-x-auto rounded border bg-white shadow">
              <table className="min-w-full text-left text-sm">
                <thead className="rounded bg-primary-gradient text-white">
                  <tr>
                    <th className="px-4 py-1 font-semibold">
                      {t('reportsPage.reportsTable.reportHeader')}
                    </th>
                    <th className="px-4 py-1 font-semibold">
                      {t('reportsPage.reportsTable.categoryHeader')}
                    </th>
                    <th className="px-4 py-1 font-semibold">
                      {t('reportsPage.reportsTable.lastViewedHeader')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-muted-foreground/20">
                  <tr>
                    <td className="px-4 py-3">
                      <Link
                        className="font-medium text-primary hover:underline"
                        to="/#"
                      >
                        {t('reportsPage.reportsTable.bankTransactions')}
                      </Link>
                      <div className="text-muted-foreground text-xs">
                        {t('reportsPage.reportsTable.viewFederalTaxFilings')}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {t('reportsPage.reportsTable.payrollTaxesCompliance')}
                    </td>
                    <td className="px-4 py-3" />
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <Link
                        className="font-medium text-primary hover:underline"
                        to="/#"
                      >
                        {t('reportsPage.reportsTable.customReport')}
                      </Link>
                      <div className="text-muted-foreground text-xs">
                        Build a custom report with your employees' Payroll, HR,
                        and/or Benefits data, all in one place.
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {t(
                        'reportsPage.reportsTable.payrollTaxesComplianceEmployeeDetailsBenefits'
                      )}
                    </td>
                    <td className="px-4 py-3" />
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <Link
                        className="flex items-center gap-1 font-medium text-primary hover:underline"
                        to="/#"
                      >
                        {t('reportsPage.reportsTable.taxDocuments')}
                        <ArrowRightIcon size={14} />
                      </Link>
                      <div className="text-muted-foreground text-xs">
                        {t('reportsPage.reportsTable.viewFederalTaxFilings')}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {t('reportsPage.reportsTable.taxesCompliance')}
                    </td>
                    <td className="px-4 py-3" />
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <Link
                        className="font-medium text-primary hover:underline"
                        to="/#"
                      >
                        {t(
                          'reportsPage.reportsTable.prosperaRecruitingApplicants'
                        )}
                      </Link>
                      <div className="text-muted-foreground text-xs">
                        {t('reportsPage.reportsTable.viewJobPostingApplicants')}
                      </div>
                    </td>
                    <td className="px-4 py-3" />
                    <td className="px-4 py-3">10/25/2024</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <Link
                        className="font-medium text-primary hover:underline"
                        to="/#"
                      >
                        {t('reportsPage.reportsTable.payrollTrends')}
                      </Link>
                    </td>
                    <td className="px-4 py-3" />
                    <td className="px-4 py-3" />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="history">
          <div className="mt-4 overflow-x-auto rounded border bg-white shadow">
            <table className="min-w-full text-left text-sm">
              <thead className="rounded bg-primary-gradient py-2 text-white">
                <tr>
                  <th className="px-4 py-1 font-semibold">
                    {t('reportsPage.reportsTable.reportTitleHeader')}
                  </th>
                  <th className="px-4 py-1 font-semibold">
                    {t('reportsPage.reportsTable.reportTypeHeader')}
                  </th>
                  <th className="px-4 py-1 font-semibold">
                    {t('reportsPage.reportsTable.dateHeader')}
                  </th>
                  <th className="px-4 py-1 font-semibold">
                    {t('reportsPage.reportsTable.statusHeader')}{' '}
                  </th>
                  <th className="px-4 py-1 font-semibold">
                    {t('reportsPage.reportsTable.actionsHeader')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-muted-foreground/20">
                {/* No data rows yet, table is empty */}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
}
