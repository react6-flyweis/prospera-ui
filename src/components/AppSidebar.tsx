import { NavLink, type To } from 'react-router';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

export type SidebarItem = {
  title: string;
  icon: string;
  url: To;
};

export interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {}

const navigationItems: SidebarItem[] = [
  {
    title: 'Dashboard',
    icon: 'dashboard.png',
    url: '/',
  },
];

export function AppSidebar({ ...props }: AppSidebarProps) {
  const { state } = useSidebar();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-center">
          {state === 'collapsed' ? (
            <SidebarTrigger className="size-8 text-white" />
          ) : (
            <img
              alt="logo"
              className="my-2 max-h-20 max-w-20"
              src="/logo.png"
            />
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <SidebarMenu className="gap-0">
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <NavLink
                className={cn(
                  'flex',
                  state === 'collapsed' && 'justify-center p-0'
                )}
                end
                to={item.url}
              >
                {({ isActive }) => (
                  <>
                    {state === 'collapsed' ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton
                            className={cn(
                              'm-0! transition-all duration-300 ease-in-out',
                              'justify-center rounded-md text-white'
                            )}
                            isActive={isActive}
                            size="lg"
                          >
                            <img
                              alt={item.title}
                              className="max-h-4 max-w-4 flex-shrink-0 transition-all duration-300"
                              src={`/icons/${item.icon}`}
                            />
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          {item.title}
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <SidebarMenuButton
                        className={cn(
                          'm-0! transition-all duration-300 ease-in-out',
                          'pl-5 '
                        )}
                        isActive={isActive}
                        size="lg"
                      >
                        <img
                          alt={item.title}
                          className="max-h-4 max-w-4 flex-shrink-0 transition-all duration-300"
                          src={`/icons/${item.icon}`}
                        />
                        <span className="text-white">{item.title}</span>
                      </SidebarMenuButton>
                    )}
                  </>
                )}
              </NavLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
