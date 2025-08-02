import type { Table } from '@tanstack/react-table';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-muted-foreground text-sm">
        {table.getFilteredSelectedRowModel().rows.length > 0
          ? `Selected ${table.getFilteredSelectedRowModel().rows.length} of ${table.getFilteredRowModel().rows.length}`
          : (() => {
              const pageIndex = table.getState().pagination.pageIndex;
              const pageSize = table.getState().pagination.pageSize;
              const totalRows = table.getFilteredRowModel().rows.length;
              const start = totalRows === 0 ? 0 : pageIndex * pageSize + 1;
              const end = Math.min((pageIndex + 1) * pageSize, totalRows);
              return `Showing ${start}-${end} of ${totalRows}`;
            })()}
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        {/* Page number pagination */}
        <div className="flex items-center space-x-2">
          <Button
            aria-label="Previous page"
            className="h-8 w-8 p-0"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            variant="ghost"
          >
            <ChevronLeftIcon className="size-7" />
          </Button>
          {(() => {
            const pageCount = table.getPageCount();
            const pageIndex = table.getState().pagination.pageIndex;
            const pageButtons = [];

            // Show up to 9 page numbers around current page
            const maxVisible = 9;
            const start = Math.max(0, pageIndex - Math.floor(maxVisible / 2));
            const end = Math.min(pageCount, start + maxVisible);

            // Adjust start if we're near the end
            const adjustedStart =
              end - start < maxVisible ? Math.max(0, end - maxVisible) : start;

            for (let i = adjustedStart; i < end; i++) {
              pageButtons.push(
                <button
                  aria-current={pageIndex === i ? 'page' : undefined}
                  className={`flex items-center justify-center rounded font-bold text-xl ${
                    pageIndex === i ? 'text-primary' : ''
                  }`}
                  key={i}
                  onClick={() => table.setPageIndex(i)}
                  type="button"
                >
                  {i + 1}
                </button>
              );
            }

            return pageButtons;
          })()}
          <Button
            aria-label="Next page"
            className="h-8 w-8 p-0"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            variant="ghost"
          >
            <ChevronRightIcon className="size-7" />
          </Button>
        </div>
      </div>
    </div>
  );
}
