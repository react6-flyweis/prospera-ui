import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface PayrollFiltersDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function PayrollFiltersDialog({
  open,
  setOpen,
}: PayrollFiltersDialogProps) {
  const { t } = useTranslation();
  // Filter state can be managed here or lifted up as needed
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className="max-w-md rounded-xl p-8">
        <DialogHeader>
          <DialogTitle className="mb-2 font-bold text-3xl">
            {t('payrollFiltersDialog.title')}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div>
            <div className="mb-2 font-bold text-lg">
              {t('payrollFiltersDialog.employeeType.title')}
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="flex items-center gap-2 font-semibold"
                htmlFor="dismissed-date-1"
              >
                <Checkbox id="dismissed-date-1" />
                {t('payrollFiltersDialog.employeeType.dismissedDate')}
              </label>
              <label
                className="flex items-center gap-2 font-semibold"
                htmlFor="dismissed-date-2"
              >
                <Checkbox id="dismissed-date-2" />
                {t('payrollFiltersDialog.employeeType.dismissedDate')}
              </label>
            </div>
          </div>
          <div>
            <div className="mb-2 font-bold text-lg">
              {t('payrollFiltersDialog.departments.title')}
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="flex items-center gap-2 font-semibold"
                htmlFor="dept-designing"
              >
                <Checkbox id="dept-designing" />
                {t('payrollFiltersDialog.departments.designing')}
              </label>
              <label
                className="flex items-center gap-2 font-semibold"
                htmlFor="dept-marketing"
              >
                <Checkbox id="dept-marketing" />
                {t('payrollFiltersDialog.departments.marketing')}
              </label>
              <label
                className="flex items-center gap-2 font-semibold"
                htmlFor="dept-sales"
              >
                <Checkbox id="dept-sales" />
                {t('payrollFiltersDialog.departments.sales')}
              </label>
              <label
                className="flex items-center gap-2 font-semibold"
                htmlFor="dept-nodept"
              >
                <Checkbox id="dept-nodept" />
                {t('payrollFiltersDialog.departments.noDepartment')}
              </label>
            </div>
          </div>
          <div>
            <div className="mb-2 font-bold text-lg">
              {t('payrollFiltersDialog.skipped.title')}
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="flex items-center gap-2 font-semibold"
                htmlFor="skipped-yes"
              >
                <Checkbox id="skipped-yes" />
                {t('payrollFiltersDialog.skipped.yes')}
              </label>
              <label
                className="flex items-center gap-2 font-semibold"
                htmlFor="skipped-no"
              >
                <Checkbox id="skipped-no" />
                {t('payrollFiltersDialog.skipped.no')}
              </label>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-between">
          <Button
            className="rounded-xl border-primary px-8 py-2 text-lg text-primary"
            onClick={() => {
              /* clear filters logic */
            }}
            variant="outline"
          >
            {t('payrollFiltersDialog.clearAllFiltersButton')}
          </Button>
          <Button
            className="rounded-xl bg-primary-gradient px-8 py-2 text-lg text-white shadow"
            onClick={() => setOpen(false)}
          >
            {t('payrollFiltersDialog.applyButton')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
