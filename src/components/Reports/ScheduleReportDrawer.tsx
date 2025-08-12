import { zodResolver } from '@hookform/resolvers/zod';
import type { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const scheduleReportSchema = z.object({
  reportName: z.string().min(1, 'Report name is required'),
  startDate: z.string().min(1, 'Start date is required'),
  frequency: z.string().min(1, 'Frequency is required'),
  format: z.string().min(1, 'Format is required'),
});

export function ScheduleReportDrawer({ children }: PropsWithChildren) {
  const methods = useForm({
    resolver: zodResolver(scheduleReportSchema),
    mode: 'onSubmit',
    defaultValues: {
      reportName: '',
      startDate: '',
      frequency: '',
      format: '',
    },
  });
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = methods;
  const frequency = watch('frequency');
  const format = watch('format');

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full px-6 sm:max-w-md" side="right">
        <SheetHeader className="px-3">
          <SheetTitle className="text-xl">Schedule a report</SheetTitle>
          <SheetDescription>
            Schedule a custom report template to run and have it automatically
            emailed to your inbox.
            <a className="ml-1 text-primary underline" href="/#">
              Learn more
            </a>
          </SheetDescription>
        </SheetHeader>
        <FormProvider {...methods}>
          <form className="space-y-4 py-2" id="schedule-report-form">
            <div>
              <Label htmlFor="reportName">Report name</Label>
              <div className="mt-1">
                <Input
                  id="reportName"
                  {...register('reportName')}
                  placeholder=""
                />
              </div>
              {errors.reportName && (
                <span className="text-destructive text-xs">
                  {errors.reportName.message}
                </span>
              )}
            </div>
            <div>
              <Label htmlFor="startDate">Delivery start date</Label>
              <div className="mt-1">
                <Input
                  id="startDate"
                  type="date"
                  {...register('startDate')}
                  placeholder="mm/dd/yyyy"
                />
              </div>
              {errors.startDate && (
                <span className="text-destructive text-xs">
                  {errors.startDate.message}
                </span>
              )}
            </div>
            <div>
              <Label htmlFor="frequency">Frequency</Label>
              <div className="mt-1">
                <Select
                  onValueChange={(val) => setValue('frequency', val)}
                  value={frequency}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Please select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {errors.frequency && (
                <span className="text-destructive text-xs">
                  {errors.frequency.message}
                </span>
              )}
            </div>
            <div>
              <Label htmlFor="format">Format</Label>
              <div className="mt-1">
                <Select
                  onValueChange={(val) => setValue('format', val)}
                  value={format}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Please select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="xlsx">Excel (.xlsx)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {errors.format && (
                <span className="text-destructive text-xs">
                  {errors.format.message}
                </span>
              )}
            </div>
          </form>
        </FormProvider>
        <SheetFooter className="flex-row justify-end gap-2">
          <SheetClose asChild>
            <Button className="border-primary sm:w-32" variant="outline">
              Cancel
            </Button>
          </SheetClose>
          <Button
            className="bg-primary-gradient text-white sm:w-32"
            form="schedule-report-form"
            type="submit"
          >
            Schedule
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
