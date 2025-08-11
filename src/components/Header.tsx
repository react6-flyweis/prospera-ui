import { LogOutIcon, ReplyIcon, SearchIcon, UserIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { useGoBack } from '@/hooks/useGoBack';
import { usePageStore } from '@/store/pageStore';
import { Container } from './ui/Container';

export function Header() {
  const goBack = useGoBack();
  const { title, showBackButton } = usePageStore();
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-14 items-center">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center gap-2">
          {showBackButton && (
            <Button onClick={goBack} size="icon" variant="ghost">
              <ReplyIcon className="size-8 font-bold text-primary" />
            </Button>
          )}
          <div className="hidden md:flex">
            <div className="hidden font-bold text-xl sm:inline-block">
              {title || 'Prospera'}
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative ">
              <SearchIcon className="-translate-y-1/2 absolute top-1/2 left-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                className="h-12 w-60 rounded-full border pl-8"
                placeholder="Search..."
                type="search"
              />
            </div>
          </div>

          {/* User Profile Section */}
          <nav className="flex items-center space-x-2">
            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="relative h-12 rounded-full border pl-1"
                  variant="ghost"
                >
                  <Avatar className="size-10">
                    <AvatarImage alt="Profile" src="/avatar.jpg" />
                    <AvatarFallback>AU</AvatarFallback>
                  </Avatar>
                  <div className="ml-2 flex flex-col items-start">
                    <span className="font-medium text-xs">Name</span>
                    <span className="text-muted-foreground text-xs">
                      variar@gmail.com
                    </span>
                    <span className="text-muted-foreground text-xs">
                      24-05-2024
                    </span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56" forceMount>
                <DropdownMenuItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-500">
                  <LogOutIcon className="mr-2 h-4 w-4 text-red-500" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </Container>
    </header>
  );
}
