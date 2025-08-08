import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface CryptoCellProps {
  name: string;
  symbol: string;
  icon: string;
}

export const CryptoCell: React.FC<CryptoCellProps> = ({
  name,
  symbol,
  icon,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="h-6 w-6">
        <AvatarImage alt={name} src={icon} />
        <AvatarFallback>{symbol[0]}</AvatarFallback>
      </Avatar>
      <span className="font-medium text-base">{name}</span>
      <span className="text-gray-400 text-xs">{symbol}</span>
    </div>
  );
};
