import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ColumnSelectorDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  columns: { key: string; label: string }[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export function ColumnSelectorDialog({
  open,
  setOpen,
  columns,
  selected,
  onChange,
}: ColumnSelectorDialogProps) {
  const [search, setSearch] = useState('');
  const [localSelected, setLocalSelected] = useState<string[]>(selected);

  const filteredColumns = columns.filter((col) =>
    col.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggle = (key: string) => {
    setLocalSelected((sel) =>
      sel.includes(key) ? sel.filter((k) => k !== key) : [...sel, key]
    );
  };

  const handleCancel = () => {
    setLocalSelected(selected);
    setOpen(false);
  };

  const handleSave = () => {
    onChange(localSelected);
    setOpen(false);
  };

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className="max-w-md rounded-xl p-8">
        <DialogHeader>
          <DialogTitle className="mb-2 font-bold text-3xl">Columns</DialogTitle>
        </DialogHeader>
        <div className="mb-4">
          <div className="mb-2 font-semibold">Search columns</div>
          <input
            className="w-full rounded border px-3 py-2 outline-none"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search columns"
            value={search}
          />
        </div>
        <div className="mb-6 flex max-h-64 flex-col gap-3 overflow-y-auto">
          {filteredColumns.map((col) => (
            <label
              className="flex cursor-pointer items-center gap-2 font-semibold"
              htmlFor={`col-${col.key}`}
              key={col.key}
            >
              <Checkbox
                checked={localSelected.includes(col.key)}
                id={`col-${col.key}`}
                onCheckedChange={() => handleToggle(col.key)}
              />
              {col.label}
            </label>
          ))}
        </div>
        <div className="mt-8 flex justify-between">
          <Button
            className="rounded-xl border-primary px-8 py-2 text-lg text-primary"
            onClick={handleCancel}
            variant="outline"
          >
            Cancel
          </Button>
          <Button
            className="rounded-xl bg-primary-gradient px-8 py-2 text-lg text-white shadow"
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
