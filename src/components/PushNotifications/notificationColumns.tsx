import type { ColumnDef } from '@tanstack/react-table';
import { Trash2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Notification = {
  title: string;
  content: string;
  status: string;
  date: string;
  delete: string;
};

export const notificationColumns: ColumnDef<Notification>[] = [
  {
    accessorKey: 'title',
    header: 'Notification Title',
  },
  {
    accessorKey: 'content',
    header: 'Notification Content',
  },
  {
    accessorKey: 'status',
    header: 'Notification Status',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    id: 'delete',
    header: 'Delete',
    cell: () => {
      return (
        <Button aria-label="Delete notification" size="icon" variant="ghost">
          <Trash2Icon color="red" />
        </Button>
      );
    },
  },
];
