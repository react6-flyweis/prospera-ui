import { ArrowRightIcon, PlusIcon } from 'lucide-react';
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
              className="group flex items-center gap-2 px-0 py-0 font-semibold text-base shadow-none focus:outline-none"
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
              className="group flex items-center gap-2 px-0 py-0 font-semibold text-base shadow-none focus:outline-none"
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
            <Button className="flex items-center gap-2 rounded-lg bg-primary-gradient px-6 py-2 font-semibold text-white shadow-md transition-colors hover:opacity-90">
              <PlusIcon size={18} />
              New custom report
            </Button>
          </div>
        </div>
        <TabsContent value="new">
          <h2 className="mb-4 font-semibold text-lg">Recommended reports</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card>
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
            <Card>
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
        </TabsContent>
        <TabsContent value="history">
          <div className="py-12 text-center text-muted-foreground">
            No report history yet.
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
}
