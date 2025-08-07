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
  // Filter state can be managed here or lifted up as needed
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className="max-w-md rounded-xl p-8">
        <DialogHeader>
          <DialogTitle className="mb-2 font-bold text-3xl">Filters</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div>
            <div className="mb-2 font-bold text-lg">Employee type</div>
            <div className="flex flex-col gap-2">
              <label
                className="flex items-center gap-2 font-semibold"
                htmlFor="dismissed-date-1"
              >
                <Checkbox id="dismissed-date-1" />
                Dismissed date
              </label>
              <label
                className="flex items-center gap-2 font-semibold"
                htmlFor="dismissed-date-2"
              >
                <Checkbox id="dismissed-date-2" />
                Dismissed date
              </label>
            </div>
          </div>
          <div>
            <div className="mb-2 font-bold text-lg">Departments</div>
            <div className="flex flex-col gap-2">
              <label
                className="flex items-center gap-2 font-semibold"
                htmlFor="dept-designing"
              >
                <Checkbox id="dept-designing" />
                Designing
              </label>
              <label
                className="flex items-center gap-2 font-semibold"
                htmlFor="dept-marketing"
              >
                <Checkbox id="dept-marketing" />
                Marketing
              </label>
              <label
                className="flex items-center gap-2 font-semibold"
                htmlFor="dept-sales"
              >
                <Checkbox id="dept-sales" />
                Sales
              </label>
              <label
                className="flex items-center gap-2 font-semibold"
                htmlFor="dept-nodept"
              >
                <Checkbox id="dept-nodept" />
                No department
              </label>
            </div>
          </div>
          <div>
            <div className="mb-2 font-bold text-lg">Skipped</div>
            <div className="flex flex-col gap-2">
              <label
                className="flex items-center gap-2 font-semibold"
                htmlFor="skipped-yes"
              >
                <Checkbox id="skipped-yes" />
                Yes
              </label>
              <label
                className="flex items-center gap-2 font-semibold"
                htmlFor="skipped-no"
              >
                <Checkbox id="skipped-no" />
                No
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
            Clear all filters
          </Button>
          <Button
            className="rounded-xl bg-primary-gradient px-8 py-2 text-lg text-white shadow"
            onClick={() => setOpen(false)}
          >
            Apply
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
