import type React from 'react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '@/components/Layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function ImportPayrollData() {
  const { t } = useTranslation();
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files?.[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <PageLayout className="" title={t('importPayrollDataPage.title')} withBack>
      <h2 className="mb-1 font-bold text-xl">
        {t('importPayrollDataPage.uploadTitle')}
      </h2>
      <p className="mb-6 text-muted-foreground">
        {t('importPayrollDataPage.uploadDescription')}
      </p>
      <div className="mb-2 font-medium">
        {t('importPayrollDataPage.uploadSpreadsheet')}
      </div>
      <Card
        className={cn(
          'mb-8 flex min-h-[160px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-primary/40 border-dashed bg-background px-4 py-10 transition-colors',
          file ? 'border-primary bg-primary/5' : 'hover:bg-muted'
        )}
        onClick={() => inputRef.current?.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          className="hidden"
          onChange={handleFileChange}
          ref={inputRef}
          type="file"
        />
        {file ? (
          <div className="text-center">
            <div className="mb-1 font-medium text-primary">{file.name}</div>
            <div className="text-muted-foreground text-xs">
              {t('importPayrollDataPage.fileSelected')}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <Button
              className="pointer-events-none mb-2 border-primary bg-transparent text-primary"
              type="button"
              variant="outline"
            >
              {t('importPayrollDataPage.uploadButton')}
            </Button>
            <div className="text-muted-foreground text-sm">
              {t('importPayrollDataPage.orDropFile')}
            </div>
          </div>
        )}
      </Card>
      <div className="mt-2 flex justify-center gap-4">
        <Button className="border-primary text-primary" variant="outline">
          {t('importPayrollDataPage.goToPayrollButton')}
        </Button>
        <Button
          className="bg-primary-gradient text-white shadow-md"
          disabled={!file}
        >
          {t('importPayrollDataPage.continueButton')}
        </Button>
      </div>
    </PageLayout>
  );
}
