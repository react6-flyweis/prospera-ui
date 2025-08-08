import type { ColumnDef } from '@tanstack/react-table';
import { EllipsisVerticalIcon, MenuIcon, TriangleIcon } from 'lucide-react';
import { CryptoCell } from '@/components/CryptoTransaction/CryptoCell';
import { Button } from '@/components/ui/button';
import { Last7DaysChart } from './Last7DaysChart';

export type Crypto = {
  name: string;
  symbol: string;
  price: string;
  change24h: string;
  change7d: string;
  marketCap: string;
  volume: string;
  last7Days: 'up' | 'down';
  icon: string;
};

export const cryptoColumns: ColumnDef<Crypto>[] = [
  {
    header: 'Name',
    accessorKey: 'name',
    cell: ({ row }) => (
      <CryptoCell
        icon={row.original.icon}
        name={row.original.name}
        symbol={row.original.symbol}
      />
    ),
  },
  {
    header: 'Price',
    accessorKey: 'price',
  },
  {
    header: '24H',
    accessorKey: 'change24h',
    cell: ({ getValue }) => {
      const value = getValue<string>();
      const isUp = value.startsWith('+');
      return (
        <span
          className={
            isUp
              ? 'flex items-center gap-1 text-green-500'
              : 'flex items-center gap-1 text-red-500'
          }
        >
          <TriangleIcon
            className={`h-3 w-3 fill-current ${isUp ? '' : 'rotate-180'}`}
          />
          {value}
        </span>
      );
    },
  },
  {
    header: '7D',
    accessorKey: 'change7d',
    cell: ({ getValue }) => {
      const value = getValue<string>();
      const isUp = value.startsWith('+');
      return (
        <span
          className={
            isUp
              ? 'flex items-center gap-1 text-green-500'
              : 'flex items-center gap-1 text-red-500'
          }
        >
          <TriangleIcon
            className={`h-3 w-3 fill-current ${isUp ? '' : 'rotate-180'}`}
          />
          {value}
        </span>
      );
    },
  },
  {
    header: 'Market Cap',
    accessorKey: 'marketCap',
  },
  {
    header: 'Volume',
    accessorKey: 'volume',
  },
  {
    header: 'Last 7 Days',
    accessorKey: 'last7Days',
    cell: ({ row }) => {
      const demoData = Array.from({ length: 7 * 5 }, () =>
        Math.floor(Math.random() * 100)
      );
      const color = row.original.last7Days === 'up' ? '#22c55e' : '#ef4444';
      return (
        <div className="h-8 w-32">
          <Last7DaysChart color={color} data={demoData} />
        </div>
      );
    },
  },
  {
    header: 'Actions',
    id: 'actions',
    cell: () => (
      <div className="flex gap-2">
        {/* Menu Button */}
        <Button className="rounded-full" size="icon" variant="outline">
          <MenuIcon className="h-4 w-4 text-primary" />
        </Button>
        {/* Ellipsis Button */}
        <Button className="rounded-full" size="icon" variant="outline">
          <EllipsisVerticalIcon className="h-4 w-4 text-primary" />
        </Button>
      </div>
    ),
  },
];
