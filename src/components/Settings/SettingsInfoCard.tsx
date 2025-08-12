import { Link } from 'react-router';
import { Card, CardContent } from '@/components/ui/card';

interface SettingsInfoCardProps {
  title: string;
  description: string;
  icon: string;
  alt: string;
}

export const SettingsInfoCard = ({
  title,
  description,
  icon,
  alt,
}: SettingsInfoCardProps) => (
  <Link
    to={`/settings/${title.replace(/ & /g, '-').replace(/\s+/g, '-').toLowerCase()}`}
  >
    <Card className="flex w-full max-w-xs flex-col gap-2 rounded-xl p-4 shadow-md">
      <div className="mb-2 flex flex-col gap-3">
        <img alt={alt} className="max-h-15 max-w-15" src={icon} />
        <span className="font-semibold text-lg">{title}</span>
      </div>
      <CardContent className="p-0">
        <p className="font-bold text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  </Link>
);
