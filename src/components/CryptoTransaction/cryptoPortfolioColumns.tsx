import type { ColumnDef } from '@tanstack/react-table';
import type { TFunction } from 'i18next';
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

export const getCryptoPortfolioColumns = (
  t: TFunction
): ColumnDef<CryptoPortfolio>[] => [
  {
    header: t('cryptoPortfolioColumns.assets'),
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
    header: t('cryptoPortfolioColumns.price'),
    accessorKey: 'price',
    cell: ({ getValue }) => (
      <span className="font-medium">{getValue<string>()}</span>
    ),
  },
  {
    header: t('cryptoPortfolioColumns.24h'),
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
    header: t('cryptoPortfolioColumns.balance'),
    accessorKey: 'balance',
    cell: ({ getValue }) => (
      <span className="font-medium">{getValue<string>()}</span>
    ),
  },
  {
    header: t('cryptoPortfolioColumns.avgBuy'),
    accessorKey: 'avgBuy',
    cell: ({ getValue }) => (
      <span className="text-gray-600">{getValue<string>()}</span>
    ),
  },
  {
    header: t('cryptoPortfolioColumns.profitLoss'),
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
    header: t('cryptoPortfolioColumns.actions'),
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
