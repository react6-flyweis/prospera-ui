import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export type KycStatus = 'Completed' | 'Delayed' | 'At risk' | 'On going';

export interface KycStatusRow {
  name: string;
  id: string;
  date: string;
  status: KycStatus;
  progress: number; // 0-100
}

function StatusBadge({ status }: { status: KycStatus }) {
  const { t } = useTranslation();
  const styles: Record<KycStatus, string> = {
    Completed: 'border-green-200 bg-green-50 text-green-700',
    Delayed: 'border-yellow-200 bg-yellow-50 text-yellow-700',
    'At risk': 'border-red-200 bg-red-50 text-red-600',
    'On going': 'border-orange-200 bg-orange-50 text-orange-700',
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-medium text-xs ${styles[status]}`}
    >
      {status === 'Completed'
        ? t('kycStatusTable.status.completed')
        : status === 'Delayed'
          ? t('kycStatusTable.status.delayed')
          : status === 'At risk'
            ? t('kycStatusTable.status.atRisk')
            : t('kycStatusTable.status.onGoing')}
    </span>
  );
}

function ringColor(status: KycStatus) {
  switch (status) {
    case 'Completed':
      return '#16a34a';
    case 'Delayed':
      return '#f59e0b';
    case 'At risk':
      return '#ef4444';
    default:
      return '#fb923c';
  }
}

function ProgressRing({ value, status }: { value: number; status: KycStatus }) {
  const clamped = Math.max(0, Math.min(100, value));
  const angle = (clamped / 100) * 360;
  const color = ringColor(status);
  return (
    <div className="relative inline-flex h-8 w-8 items-center justify-center">
      <div
        aria-label={`Progress ${clamped}%`}
        className="h-8 w-8 rounded-full"
        role="img"
        style={{
          background: `conic-gradient(${color} ${angle}deg, #e5e7eb 0deg)`,
        }}
      />
      <div className="absolute inset-0 m-1 rounded-full bg-white" />
      <span className="absolute font-semibold text-[10px] text-gray-700">
        {clamped}%
      </span>
    </div>
  );
}

export function KYCStatusTable({
  title,
  rows,
}: {
  title?: string;
  rows: KycStatusRow[];
}) {
  const { t } = useTranslation();
  const [statusFilter, setStatusFilter] = useState<'All' | KycStatus>('All');

  const filtered = useMemo(() => {
    if (statusFilter === 'All') {
      return rows;
    }
    return rows.filter((r) => r.status === statusFilter);
  }, [rows, statusFilter]);

  return (
    <div className="w-full rounded-xl border bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-bold text-gray-900 text-xl">{title}</h3>
        <Select
          onValueChange={(v: string) => setStatusFilter(v as 'All' | KycStatus)}
          value={statusFilter}
        >
          <SelectTrigger className="w-36 rounded-full">
            <SelectValue placeholder={t('kycStatusTable.statusPlaceholder')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">
              {t('kycStatusTable.statusPlaceholder')}
            </SelectItem>
            <SelectItem value="Completed">
              {t('kycStatusTable.status.completed')}
            </SelectItem>
            <SelectItem value="Delayed">
              {t('kycStatusTable.status.delayed')}
            </SelectItem>
            <SelectItem value="At risk">
              {t('kycStatusTable.status.atRisk')}
            </SelectItem>
            <SelectItem value="On going">
              {t('kycStatusTable.status.onGoing')}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="h-12 ">
              <TableHead className="px-5 text-gray-600">
                {t('kycStatusTable.tableHeaders.name')}
              </TableHead>
              <TableHead className="px-5 text-gray-600">
                {t('kycStatusTable.tableHeaders.id')}
              </TableHead>
              <TableHead className="px-5 text-gray-600">
                {t('kycStatusTable.tableHeaders.date')}
              </TableHead>
              <TableHead className="px-5 text-gray-600">
                {t('kycStatusTable.tableHeaders.status')}
              </TableHead>
              <TableHead className="px-5 text-gray-600">
                {t('kycStatusTable.tableHeaders.progress')}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((row) => (
              <TableRow className="h-12" key={`${row.name}-${row.id}`}>
                <TableCell className="px-5">{row.name}</TableCell>
                <TableCell className="px-5">{row.id}</TableCell>
                <TableCell className="px-5">{row.date}</TableCell>
                <TableCell className="px-5">
                  <StatusBadge status={row.status} />
                </TableCell>
                <TableCell className="px-5">
                  <ProgressRing status={row.status} value={row.progress} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
