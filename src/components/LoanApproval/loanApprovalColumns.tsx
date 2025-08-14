import type { ColumnDef, Row } from '@tanstack/react-table';
import type { TFunction } from 'i18next';
import {
  BanIcon,
  CheckSquareIcon,
  EllipsisVerticalIcon,
  InfoIcon,
} from 'lucide-react';
import { toast } from '@/store/toastStore';
import { UserCell } from '../UserCell';
import { Button } from '../ui/button';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '../ui/menubar';

export type LoanRequest = {
  id: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    mobile: string;
  };
  amount: number;
  creditScore: number;
  balance: number;
  createdAt: string;
};

export const getLoanApprovalColumns = (
  t: TFunction
): ColumnDef<LoanRequest>[] => [
  {
    header: t('loanApprovalColumns.name'),
    accessorKey: 'name',
    cell: (props: { row: Row<LoanRequest> }) => (
      <UserCell
        avatar={props.row.original.user.avatar}
        name={props.row.original.user.name}
      />
    ),
    filterFn: (row, value) => {
      const searchValue = value.toLowerCase();
      const name = row.original.user.name?.toLowerCase() || '';
      return name.includes(searchValue);
    },
  },
  {
    header: t('loanApprovalColumns.userId'),
    accessorKey: 'user.id',
  },
  {
    header: t('loanApprovalColumns.loanAmount'),
    accessorKey: 'amount',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <p className="font-semibold text-xl">
          {row.original.amount.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          })}
        </p>
        <InfoIcon className="size-5 text-primary" />
      </div>
    ),
  },
  {
    header: t('loanApprovalColumns.creditScore'),
    accessorKey: 'creditScore',
  },
  {
    header: t('loanApprovalColumns.dateTime'),
    accessorKey: 'createdAt',
    cell: ({ row }) => (
      <p className="space-x-1 font-medium">
        <span>
          {new Date(row.original.createdAt).toLocaleString('en-IN', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
        <span className="text-primary">
          (
          {new Date(row.original.createdAt).toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
          })}
          )
        </span>
      </p>
    ),
  },
  {
    header: t('loanApprovalColumns.action'),
    id: 'action',
    cell: ({ row }) => (
      <Menubar className="border-0 bg-transparent shadow-none">
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Button size="icon" variant="ghost">
              <EllipsisVerticalIcon className="size-5" />
            </Button>
          </MenubarTrigger>
          <MenubarContent align="end">
            <MenubarItem
              onClick={() => {
                toast.success(
                  t('loanApprovalColumns.notEligibleToast', {
                    amount: row.original.amount,
                  })
                );
              }}
            >
              <CheckSquareIcon
                aria-label={t('loanApprovalColumns.approve')}
                className="text-green-600"
                size={22}
              />
              <span className="text-green-600">
                {t('loanApprovalColumns.approve')}
              </span>
            </MenubarItem>
            <MenubarItem
              onClick={() => {
                toast.error(
                  t('loanApprovalColumns.notEligibleToast', {
                    amount: row.original.amount,
                  })
                );
              }}
              variant="destructive"
            >
              <BanIcon
                aria-label={t('loanApprovalColumns.reject')}
                className="text-red-600"
                size={22}
              />
              <span className="text-red-600">
                {t('loanApprovalColumns.reject')}
              </span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    ),
  },
];
