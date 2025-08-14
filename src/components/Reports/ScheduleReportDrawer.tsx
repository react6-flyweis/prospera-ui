import { zodResolver } from '@hookform/resolvers/zod';
import type { TFunction } from 'i18next';
import type { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
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

const createScheduleReportSchema = (t: TFunction) =>
  z.object({
    reportName: z
      .string()
      .min(1, t('reportsPage.scheduleReportDrawer.reportNameRequired')),
    startDate: z
      .string()
      .min(1, t('reportsPage.scheduleReportDrawer.startDateRequired')),
    frequency: z
      .string()
      .min(1, t('reportsPage.scheduleReportDrawer.frequencyRequired')),
    format: z
      .string()
      .min(1, t('reportsPage.scheduleReportDrawer.formatRequired')),
  });

export function ScheduleReportDrawer({ children }: PropsWithChildren) {
  const { t } = useTranslation();
  const scheduleReportSchema = createScheduleReportSchema(t);
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
          <SheetTitle className="text-xl">
            {t('reportsPage.scheduleReportDrawer.title')}
          </SheetTitle>
          <SheetDescription>
            {t('reportsPage.scheduleReportDrawer.description')}
            <a className="ml-1 text-primary underline" href="/#">
              {t('reportsPage.scheduleReportDrawer.learnMore')}
            </a>
          </SheetDescription>
        </SheetHeader>
        <FormProvider {...methods}>
          <form className="space-y-4 py-2" id="schedule-report-form">
            <div>
              <Label htmlFor="reportName">
                {t('reportsPage.scheduleReportDrawer.reportNameLabel')}
              </Label>
              <div className="mt-1">
                <Input
                  id="reportName"
                  {...register('reportName')}
                  placeholder={t(
                    'reportsPage.scheduleReportDrawer.reportNamePlaceholder'
                  )}
                />
              </div>
              {errors.reportName && (
                <span className="text-destructive text-xs">
                  {errors.reportName.message}
                </span>
              )}
            </div>
            <div>
              <Label htmlFor="startDate">
                {t('reportsPage.scheduleReportDrawer.startDateLabel')}
              </Label>
              <div className="mt-1">
                <Input
                  id="startDate"
                  type="date"
                  {...register('startDate')}
                  placeholder={t(
                    'reportsPage.scheduleReportDrawer.startDatePlaceholder'
                  )}
                />
              </div>
              {errors.startDate && (
                <span className="text-destructive text-xs">
                  {errors.startDate.message}
                </span>
              )}
            </div>
            <div>
              <Label htmlFor="frequency">
                {t('reportsPage.scheduleReportDrawer.frequencyLabel')}
              </Label>
              <div className="mt-1">
                <Select
                  onValueChange={(val) => setValue('frequency', val)}
                  value={frequency}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue
                      placeholder={t(
                        'reportsPage.scheduleReportDrawer.frequencyPlaceholder'
                      )}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">
                      {t(
                        'reportsPage.scheduleReportDrawer.frequencyOptions.daily'
                      )}
                    </SelectItem>
                    <SelectItem value="weekly">
                      {t(
                        'reportsPage.scheduleReportDrawer.frequencyOptions.weekly'
                      )}
                    </SelectItem>
                    <SelectItem value="monthly">
                      {t(
                        'reportsPage.scheduleReportDrawer.frequencyOptions.monthly'
                      )}
                    </SelectItem>
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
              <Label htmlFor="format">
                {t('reportsPage.scheduleReportDrawer.formatLabel')}
              </Label>
              <div className="mt-1">
                <Select
                  onValueChange={(val) => setValue('format', val)}
                  value={format}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue
                      placeholder={t(
                        'reportsPage.scheduleReportDrawer.formatPlaceholder'
                      )}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">
                      {t('reportsPage.scheduleReportDrawer.formatOptions.pdf')}
                    </SelectItem>
                    <SelectItem value="csv">
                      {t('reportsPage.scheduleReportDrawer.formatOptions.csv')}
                    </SelectItem>
                    <SelectItem value="xlsx">
                      {t('reportsPage.scheduleReportDrawer.formatOptions.xlsx')}
                    </SelectItem>
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
              {t('reportsPage.scheduleReportDrawer.cancelButton')}
            </Button>
          </SheetClose>
          <Button
            className="bg-primary-gradient text-white sm:w-32"
            form="schedule-report-form"
            type="submit"
          >
            {t('reportsPage.scheduleReportDrawer.scheduleButton')}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
