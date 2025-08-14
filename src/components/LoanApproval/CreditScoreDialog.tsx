import { XIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface CreditScoreDialogProps {
  open: boolean;
  onClose: () => void;
}

type CreditScoreBand = {
  score: string;
  category: string;
  significance: string;
};

export function CreditScoreDialog({ open, onClose }: CreditScoreDialogProps) {
  const { t } = useTranslation();
  const bands = t('creditScoreDialog.bands', {
    returnObjects: true,
  }) as CreditScoreBand[];

  return (
    <Dialog onOpenChange={onClose} open={open}>
      <DialogContent
        className="sm:max-h-[90vh] sm:max-w-4xl"
        showCloseButton={false}
      >
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>{t('creditScoreDialog.title')}</DialogTitle>
          <Button
            className="size-6 rounded-full border-2 border-destructive"
            onClick={onClose}
            size="icon"
            variant="outline"
          >
            <XIcon className="size-4 text-destructive" />
          </Button>
        </DialogHeader>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-2 text-left text-sm">
            <thead>
              <tr className="font-semibold text-base">
                <th className="px-4 py-2">
                  {t('creditScoreDialog.tableHeaders.scoreBand')}
                </th>
                <th className="px-4 py-2">
                  {t('creditScoreDialog.tableHeaders.category')}
                </th>
                <th className="px-4 py-2">
                  {t('creditScoreDialog.tableHeaders.significance')}
                </th>
              </tr>
            </thead>
            <tbody>
              {bands.map((band: CreditScoreBand, index: number) => (
                <tr key={index}>
                  <td className="px-4 py-2">{band.score}</td>
                  <td className="px-4 py-2">{band.category}</td>
                  <td className="px-4 py-2">{band.significance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
