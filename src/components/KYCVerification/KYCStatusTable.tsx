import { useMemo, useState } from 'react';
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
      {status}
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
  title = 'KYC Verification',
  rows,
}: {
  title?: string;
  rows: KycStatusRow[];
}) {
  const [statusFilter, setStatusFilter] = useState<'All' | KycStatus>('All');

  const filtered = useMemo(() => {
    if (statusFilter === 'All') {
      return rows;
    }
    return rows.filter((r) => r.status === statusFilter);
  }, [rows, statusFilter]);

  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-bold text-gray-900 text-xl">{title}</h3>
        <Select
          onValueChange={(v: string) => setStatusFilter(v as 'All' | KycStatus)}
          value={statusFilter}
        >
          <SelectTrigger className="w-36 rounded-full">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">Status</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="Delayed">Delayed</SelectItem>
            <SelectItem value="At risk">At risk</SelectItem>
            <SelectItem value="On going">On going</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="h-12 ">
              <TableHead className="px-5 text-gray-600">Name</TableHead>
              <TableHead className="px-5 text-gray-600">ID</TableHead>
              <TableHead className="px-5 text-gray-600">Date</TableHead>
              <TableHead className="px-5 text-gray-600">Status</TableHead>
              <TableHead className="px-5 text-gray-600">Progress</TableHead>
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
