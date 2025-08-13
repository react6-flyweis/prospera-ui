import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
  sender?: {
    name: string;
    avatar?: string;
  };
}

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        'mb-4 flex gap-3',
        message.isOwn ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      <Avatar className="h-8 w-8">
        <AvatarImage
          alt={message.sender?.name || t('chatInterface.you')}
          src={message.isOwn ? undefined : message.sender?.avatar}
        />
        <AvatarFallback className="text-xs">
          {message.isOwn
            ? t('chatInterface.you')
            : message.sender?.name
                ?.split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div
        className={cn(
          'flex max-w-[70%] flex-col',
          message.isOwn ? 'items-end' : 'items-start'
        )}
      >
        <div
          className={cn(
            'rounded-lg bg-white px-3 py-2',
            message.isOwn
              ? 'bg-primary-gradient text-white'
              : 'border border-primary text-primary'
          )}
        >
          <p className="text-sm">{message.content}</p>
        </div>
        <span className="mt-1 text-muted-foreground text-xs">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
}
