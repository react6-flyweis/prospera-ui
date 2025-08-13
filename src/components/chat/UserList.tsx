import { PlayIcon, PlusIcon, SearchIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface User {
  id: string;
  name: string;
  userId: string;
  lastMessage?: string;
  timestamp?: string;
  avatar?: string;
  isActive?: boolean;
  hasUnread?: boolean;
  unreadCount?: number;
}

interface UserListProps {
  users: User[];
  selectedUserId?: string;
  onUserSelect: (userId: string) => void;
  className?: string;
}

export default function UserList({
  users,
  selectedUserId,
  onUserSelect,
  className,
}: UserListProps) {
  const { t } = useTranslation();
  const handleUserSelect = (userId: string) => {
    onUserSelect(userId);
  };

  return (
    <div
      className={cn(
        'flex w-80 flex-col rounded-lg border bg-gray-50',
        className
      )}
    >
      {/* Header */}
      <div className="border-b p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold text-lg">{t('chatInterface.users')}</h2>
        </div>

        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative flex-1">
            <SearchIcon className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground" />
            <Input
              className="h-10 bg-white pl-10 shadow"
              placeholder={t('chatInterface.searchById')}
            />
          </div>
          <Button className="text-primary" variant="ghost">
            {t('chatInterface.chat')}
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* User List */}
      <div className="flex-1 space-y-3 overflow-y-auto overflow-x-hidden px-2">
        <div className="p-2 font-medium text-muted-foreground text-sm">
          {t('chatInterface.users')}
        </div>

        {users.map((user) => (
          <button
            className={cn(
              'flex w-full cursor-pointer items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-white',
              selectedUserId === user.id &&
                'bg-white shadow-[0_0_4px_1px_rgba(59,130,246,0.5)]'
            )}
            key={user.id}
            onClick={() => handleUserSelect(user.id)}
            type="button"
          >
            <div className="relative">
              <Avatar className="h-10 w-10">
                {user.avatar ? (
                  <AvatarImage alt={user.name} src={user.avatar} />
                ) : (
                  <AvatarFallback>
                    {user.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase()}
                  </AvatarFallback>
                )}
              </Avatar>
              {user.isActive && (
                <div className="-bottom-0.5 -right-0.5 absolute h-3 w-3 rounded-full border-2 border-background bg-green-500" />
              )}
              {user.hasUnread && user.unreadCount && user.unreadCount > 0 && (
                <div className="-top-1 -right-1 absolute flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white text-xs shadow">
                  {user.unreadCount}
                </div>
              )}
            </div>

            <div className="flex min-w-0 flex-1 items-center justify-between">
              <div className="flex min-w-0 flex-col">
                <span className="truncate font-semibold text-base">
                  {user.name}
                </span>
                <span className="truncate text-muted-foreground text-sm">
                  {user.lastMessage || t('chatInterface.noMessagesYetFallback')}
                </span>
              </div>
              <div className="ml-4 flex flex-col items-end">
                <span className="text-muted-foreground text-xs">
                  {t('chatInterface.userId')} {user.userId}
                </span>
                <span className="mt-1 text-muted-foreground text-xs">
                  {user.timestamp || '--:--:--'}
                </span>
              </div>
              {user.hasUnread && user.unreadCount && user.unreadCount > 0 ? (
                <div className="ml-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white text-xs">
                  {user.unreadCount}
                </div>
              ) : (
                <PlayIcon className="ml-2 size-3 shrink-0 fill-primary text-primary" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
