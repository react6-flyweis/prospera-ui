import type { ColumnDef } from '@tanstack/react-table';
import type { TFunction } from 'i18next';
import { Trash2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Notification = {
  title: string;
  content: string;
  status: string;
  date: string;
  delete: string;
};

export const getNotificationColumns = (
  t: TFunction
): ColumnDef<Notification>[] => [
  {
    accessorKey: 'title',
    header: t('notificationColumns.notificationTitle'),
  },
  {
    accessorKey: 'content',
    header: t('notificationColumns.notificationContent'),
  },
  {
    accessorKey: 'status',
    header: t('notificationColumns.notificationStatus'),
  },
  {
    accessorKey: 'date',
    header: t('notificationColumns.date'),
  },
  {
    id: 'delete',
    header: t('notificationColumns.delete'),
    cell: () => {
      return (
        <Button
          aria-label={t('notificationColumns.deleteNotificationAriaLabel')}
          size="icon"
          variant="ghost"
        >
          <Trash2Icon color="red" />
        </Button>
      );
    },
  },
];
