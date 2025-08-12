import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const timeOptions = ['Last', 'Next'];
const unitOptions = ['Days', 'Weeks', 'Months', 'Years'];

export function TimePeriodMenu({ children }: { children: React.ReactNode }) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent>
        <div className="mb-2 flex flex-row items-center justify-between">
          <span className="font-bold text-lg">Time period</span>
        </div>
        <div className="mb-4 text-muted-foreground">
          Choose how you’d like to filter your results
        </div>
        <div className="space-y-3">
          <Select defaultValue={timeOptions[0]}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {timeOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex gap-4">
            <Input
              className="w-1/2 font-medium text-lg"
              defaultValue={30}
              min={1}
              type="number"
            />
            <Select defaultValue={unitOptions[0]}>
              <SelectTrigger className="w-1/2">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                {unitOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
