import { ArrowRightIcon, PlusIcon } from 'lucide-react';
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
  return (
    <PageLayout title="Reports">
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
                  New Reports
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
                  Reports History
                </span>
              </span>
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-3">
            <Button
              className="rounded-lg border-primary-gradient px-6 py-2 font-semibold text-primary transition-colors hover:bg-primary-gradient/10"
              variant="outline"
            >
              Learn more
            </Button>
            <Link to="/reports/new">
              <Button className="flex items-center gap-2 rounded-lg bg-primary-gradient px-6 py-2 font-semibold text-white shadow-md transition-colors hover:opacity-90">
                <PlusIcon size={18} />
                New custom report
              </Button>
            </Link>
          </div>
        </div>
        <TabsContent value="new">
          <h2 className="mb-4 font-semibold text-lg">Recommended reports</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card className="rounded-md border border-muted-foreground">
              <CardHeader>
                <CardTitle>Custom report</CardTitle>
                <CardDescription>
                  Build a custom report with your employees' Payroll, HR, and/or
                  Benefits data, all in one place.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  aria-label="View custom report"
                  className="flex items-center gap-1 font-medium text-primary hover:underline"
                  href="/reports/custom"
                >
                  View report
                  <ArrowRightIcon className="inline-block" size={16} />
                </a>
              </CardContent>
            </Card>
            <Card className="rounded-md border border-muted-foreground">
              <CardHeader>
                <CardTitle>Payroll trends</CardTitle>
                <CardDescription>
                  Identify and monitor payroll trends over a specified time
                  period.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  aria-label="View payroll trends report"
                  className="flex items-center gap-1 font-medium text-primary hover:underline"
                  href="/reports/payroll-trends"
                >
                  View report
                  <ArrowRightIcon className="inline-block" size={16} />
                </a>
              </CardContent>
            </Card>
          </div>
          {/* Reports Table */}
          <div className="mt-8">
            <div className="overflow-x-auto rounded border bg-white shadow">
              <table className="min-w-full text-left text-sm">
                <thead className="rounded bg-primary-gradient text-white">
                  <tr>
                    <th className="px-4 py-1 font-semibold">Report</th>
                    <th className="px-4 py-1 font-semibold">Category</th>
                    <th className="px-4 py-1 font-semibold">Last Viewed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-muted-foreground/20">
                  <tr>
                    <td className="px-4 py-3">
                      <a
                        className="font-medium text-primary hover:underline"
                        href="/#"
                      >
                        Bank transactions
                      </a>
                      <div className="text-muted-foreground text-xs">
                        View your federal tax filings
                      </div>
                    </td>
                    <td className="px-4 py-3">Payroll, Taxes and compliance</td>
                    <td className="px-4 py-3" />
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <a
                        className="font-medium text-primary hover:underline"
                        href="/#"
                      >
                        Custom report
                      </a>
                      <div className="text-muted-foreground text-xs">
                        Build a custom report with your employees' Payroll, HR,
                        and/or Benefits data, all in one place.
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      Payroll, Taxes and compliance, Employee details, Benefits
                    </td>
                    <td className="px-4 py-3" />
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <a
                        className="flex items-center gap-1 font-medium text-primary hover:underline"
                        href="/#"
                      >
                        Tax documents{' '}
                        <span className="inline-block">
                          <ArrowRightIcon size={14} />
                        </span>
                      </a>
                      <div className="text-muted-foreground text-xs">
                        View your federal tax filings
                      </div>
                    </td>
                    <td className="px-4 py-3">Taxes and compliance</td>
                    <td className="px-4 py-3" />
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <a
                        className="font-medium text-primary hover:underline"
                        href="/#"
                      >
                        Prospera Recruiting applicants
                      </a>
                      <div className="text-muted-foreground text-xs">
                        View information, status, and responses for your job
                        posting applicants
                      </div>
                    </td>
                    <td className="px-4 py-3" />
                    <td className="px-4 py-3">10/25/2024</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <a
                        className="font-medium text-primary hover:underline"
                        href="/#"
                      >
                        Payroll trends
                      </a>
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
                  <th className="px-4 py-1 font-semibold">Report title</th>
                  <th className="px-4 py-1 font-semibold">Report type</th>
                  <th className="px-4 py-1 font-semibold">Date</th>
                  <th className="px-4 py-1 font-semibold">Status </th>
                  <th className="px-4 py-1 font-semibold">Actions</th>
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
