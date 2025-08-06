import type { ColumnDef } from '@tanstack/react-table';
import { Link } from 'react-router';
import { formatCurrency } from '@/utils/currency';

export interface Transaction {
  date: string;
  sender: string;
  senderId: string;
  recipient: string;
  recipientId: string;
  amount: number;
  transactionId?: string;
}

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'sender',
    header: 'Sender',
  },
  {
    accessorKey: 'senderId',
    header: 'Sender ID',
  },
  {
    accessorKey: 'recipient',
    header: 'Recipient',
  },
  {
    accessorKey: 'recipientId',
    header: 'Recipient ID',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => {
      return (
        <span className="font-medium">
          {formatCurrency(row.original.amount)}
        </span>
      );
    },
  },
  {
    accessorKey: 'transactionId',
    header: 'Transaction ID',
    cell: ({ row }) => (
      <Link
        className="text-blue-600 underline hover:text-blue-800"
        to={
          row.original.transactionId
            ? `/transaction/${row.original.transactionId}`
            : '#'
        }
      >
        {row.original.transactionId}
      </Link>
    ),
  },
];
