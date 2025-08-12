import { Checkbox } from '@/components/ui/checkbox';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const groupByOptions = [
  'Payroll',
  'Employee',
  'Work address',
  'Work address (state)',
];

export function GroupByMenu({ children }: { children: React.ReactNode }) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent>
        <div className="mb-2 flex flex-row items-center justify-between">
          <span className="font-bold text-lg">Group by</span>
        </div>
        <div className="space-y-2">
          {groupByOptions.map((option) => (
            <div
              className="flex items-center gap-3 rounded-md border px-2 py-1"
              key={option}
            >
              <Checkbox />
              <span className="font-medium">{option}</span>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
