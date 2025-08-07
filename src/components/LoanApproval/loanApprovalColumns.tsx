import type { ColumnDef, Row } from '@tanstack/react-table';
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

export const loanApprovalColumns: ColumnDef<LoanRequest>[] = [
  {
    header: 'Name',
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
    header: 'User ID',
    accessorKey: 'user.id',
  },
  {
    header: 'Loan Amount',
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
    header: 'Credit Score',
    accessorKey: 'creditScore',
  },
  {
    header: 'Date & Time',
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
    header: 'Action',
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
                  `Dear Employer and Lender, this user is not eligible for the loan amount of $${row.original.amount}.`
                );
              }}
            >
              <CheckSquareIcon
                aria-label="Approve"
                className="text-green-600"
                size={22}
              />
              <span className="text-green-600">Approve</span>
            </MenubarItem>
            <MenubarItem
              onClick={() => {
                toast.error(
                  `Dear Employer and Lender, this user is not eligible for the loan amount of $${row.original.amount}.`
                );
              }}
              variant="destructive"
            >
              <BanIcon aria-label="Reject" className="text-red-600" size={22} />
              <span className="text-red-600">Reject</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    ),
  },
];
