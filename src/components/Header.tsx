import { LogOut, Search, Settings, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { usePageStore } from '@/store/pageStore';
import { Container } from './ui/Container';

export function Header() {
  const { title } = usePageStore();
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-14 items-center">
        {/* Logo/Brand */}
        <div className="mr-4 hidden md:flex">
          <a className="mr-4 flex items-center space-x-2 lg:mr-6" href="/">
            <div className="hidden font-bold text-xl sm:inline-block">
              {title || 'Prospera'}
            </div>
          </a>
        </div>

        {/* Search */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative ">
              <Search className="-translate-y-1/2 absolute top-1/2 left-2.5 h-4 w-4 text-muted-foreground" />
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
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="font-medium text-sm leading-none">Name</p>
                    <p className="text-muted-foreground text-xs leading-none">
                      variar@gmail.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
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
