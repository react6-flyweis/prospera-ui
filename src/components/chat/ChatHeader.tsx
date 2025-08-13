import { useTranslation } from 'react-i18next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface User {
  id: string;
  name: string;
  avatar?: string;
  isActive?: boolean;
}

interface ChatHeaderProps {
  user: User;
}

export default function ChatHeader({ user }: ChatHeaderProps) {
  const { t } = useTranslation();
  return (
    <div className="border-b p-4">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar className="h-10 w-10">
            <AvatarImage alt={user.name} src={user.avatar} />
            <AvatarFallback>
              {user.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          {user.isActive && (
            <div className="-bottom-0.5 -right-0.5 absolute h-3 w-3 rounded-full border-2 border-background bg-green-500" />
          )}
        </div>

        <div>
          <h3 className="font-medium">{user.name}</h3>
          <p className="text-muted-foreground text-xs">
            {t('chatInterface.userId')} {user.id}
          </p>
        </div>
      </div>
    </div>
  );
}
