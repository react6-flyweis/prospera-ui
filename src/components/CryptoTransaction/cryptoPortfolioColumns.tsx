import type { ColumnDef } from '@tanstack/react-table';
import { EllipsisVerticalIcon, MenuIcon, TriangleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CryptoCell } from './CryptoCell';

export type CryptoPortfolio = {
  name: string;
  symbol: string;
  price: string;
  change24h: string;
  balance: string;
  avgBuy: string;
  profitLoss: string;
  icon: string;
};

export const cryptoPortfolioColumns: ColumnDef<CryptoPortfolio>[] = [
  {
    header: 'Assets',
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
    cell: ({ getValue }) => (
      <span className="font-medium">{getValue<string>()}</span>
    ),
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
    header: 'Balance',
    accessorKey: 'balance',
    cell: ({ getValue }) => (
      <span className="font-medium">{getValue<string>()}</span>
    ),
  },
  {
    header: 'Avg buy',
    accessorKey: 'avgBuy',
    cell: ({ getValue }) => (
      <span className="text-gray-600">{getValue<string>()}</span>
    ),
  },
  {
    header: 'Profit/Loss',
    accessorKey: 'profitLoss',
    cell: ({ getValue }) => {
      const value = getValue<string>();
      const isProfit = value.startsWith('+');
      return (
        <span
          className={
            isProfit ? 'font-medium text-green-500' : 'font-medium text-red-500'
          }
        >
          {value}
        </span>
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
