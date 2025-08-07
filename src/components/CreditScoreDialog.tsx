import { XIcon } from 'lucide-react';
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

export function CreditScoreDialog({ open, onClose }: CreditScoreDialogProps) {
  return (
    <Dialog onOpenChange={onClose} open={open}>
      <DialogContent
        className="sm:max-h-[90vh] sm:max-w-4xl"
        showCloseButton={false}
      >
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>Credit Score Bands</DialogTitle>
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
                <th className="px-4 py-2">Score Band</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Significance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Below 300</td>
                <td className="px-4 py-2">Poor Credit Score</td>
                <td className="px-4 py-2">
                  No credit history or limited credit usage, making it difficult
                  to assess creditworthiness.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">300–550</td>
                <td className="px-4 py-2">Very Low Credit Score</td>
                <td className="px-4 py-2">
                  Indicates potential credit issues. Requires improvement to
                  access better loan terms.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">551–620</td>
                <td className="px-4 py-2">Low Credit Score</td>
                <td className="px-4 py-2">
                  Needs improvement to reach a good credit standing.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">621–700</td>
                <td className="px-4 py-2">Fair Credit Score</td>
                <td className="px-4 py-2">
                  Approaching a good credit score. Continued responsible credit
                  management is recommended.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">701–749</td>
                <td className="px-4 py-2">Good Credit Score</td>
                <td className="px-4 py-2">
                  Indicates responsible credit behavior and eligibility for
                  favorable loan terms.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">750–900</td>
                <td className="px-4 py-2">Excellent Credit Score</td>
                <td className="px-4 py-2">
                  Top tier credit score, making you eligible for the best loan
                  offers and financial products.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
