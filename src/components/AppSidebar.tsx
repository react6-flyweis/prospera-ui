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
  { title: 'Agent Management', icon: 'agent.png', url: '/agents' },
  {
    title: 'Vendor Management',
    icon: 'vendor.png',
    url: '/vendors',
  },
  {
    title: 'Corporate Management',
    icon: 'corporate.png',
    url: '/corporates',
  },
  {
    title: 'Lender Management',
    icon: 'lender.png',
    url: '/lenders',
  },
  {
    title: 'User Management',
    icon: 'user.png',
    url: '/users',
  },
  {
    title: 'Employee Management',
    icon: 'employee.png',
    url: '/employees',
  },
  {
    title: 'Wallet Management',
    icon: 'wallet.png',
    url: '/wallets',
  },
  {
    title: 'Payroll Management',
    icon: 'payroll.png',
    url: '/payrolls',
  },
  {
    title: 'User’s Loan Approval',
    icon: 'loan-approval.png',
    url: '/loan-approvals',
  },
  {
    title: 'KYC Verification',
    icon: 'kyc.png',
    url: '/kyc',
  },
  {
    title: 'Commission Management',
    icon: 'commission.png',
    url: '/commissions',
  },
  {
    title: 'Crypto Management',
    icon: 'crypto.png',
    url: '/cryptos',
  },
  {
    title: 'Crypto Transaction',
    icon: 'crypto-transaction.png',
    url: '/crypto-transactions',
  },
  {
    title: 'Push Notification',
    icon: 'push-notification.png',
    url: '/push-notifications',
  },
  {
    title: 'Chat',
    icon: 'chat.png',
    url: '/chat',
  },
  {
    title: 'Settings',
    icon: 'settings.png',
    url: '/settings',
  },
  {
    title: 'Complaints',
    icon: 'complaints.png',
    url: '/complaints',
  },
  {
    title: 'Report',
    icon: 'report.png',
    url: '/reports',
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
