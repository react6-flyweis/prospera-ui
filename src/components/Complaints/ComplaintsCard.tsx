import { Trash2Icon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';

export type Complaint = {
  id: string;
  type: string;
  name: string;
  headline: string;
  description: string;
  avatar: string;
};

export function ComplaintsCard({ complaint }: { complaint: Complaint }) {
  const { t } = useTranslation();
  return (
    <Card className="relative p-3">
      <CardHeader>
        <div className="absolute top-0 inline-block w-fit rounded-b-lg bg-primary-gradient px-2 py-0.5 font-semibold text-white shadow">
          {complaint.type} {t('complaintsCard.id')} | {complaint.id}
        </div>
      </CardHeader>
      <div className="flex w-full items-start gap-4">
        <div className="flex flex-col items-center">
          <img
            alt={complaint.name}
            className="h-20 w-20 rounded-full border object-cover"
            src={complaint.avatar}
          />
          <div className="font-medium text-gray-700 text-lg">
            {complaint.name}
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-2 font-bold text-gray-800 text-xl">
            {complaint.headline}
          </div>
          <div className="mb-4 text-gray-600 text-sm leading-relaxed">
            {complaint.description}
          </div>
          <Button className="w-24 font-medium" size="sm" variant="outline">
            {t('complaintsCard.replyButton')}
          </Button>
        </div>
        <div className="flex h-full flex-col items-center justify-center border-l">
          <Button className="text-red-500" size="icon" variant="ghost">
            <Trash2Icon size={22} />
          </Button>
        </div>
      </div>
    </Card>
  );
}
