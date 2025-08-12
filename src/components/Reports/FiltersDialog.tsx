import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const filterOptions = [
  'Current department',
  'Dismissed date',
  'Employment status',
  'Employment type',
  'Payment method',
  'Specific employees',
  'Work address states',
  'Work addresses',
];

export function FiltersDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="rounded-xl p-6 sm:max-w-md">
        <DialogHeader className="mb-2 flex flex-row items-center justify-between">
          <DialogTitle className="font-bold text-2xl">Filters</DialogTitle>
        </DialogHeader>
        <div className="space-y-3 py-2">
          {filterOptions.map((option) => (
            <div className="flex items-center justify-between" key={option}>
              <span className="font-medium text-lg">{option}</span>
              <Checkbox />
            </div>
          ))}
        </div>
        <DialogFooter className="mt-6 flex flex-row gap-2">
          <Button className="w-1/2 border-primary" variant="outline">
            Clear all filters
          </Button>
          <Button className="w-1/2 bg-primary-gradient text-white">
            Apply
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
