import { useTranslation } from 'react-i18next';
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
  titleKey: string;
  icon: string;
  url: To;
};

export interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {}

const navigationItems: SidebarItem[] = [
  {
    titleKey: 'sidebar.dashboard',
    icon: 'dashboard.png',
    url: '/',
  },
  { titleKey: 'sidebar.agentManagement', icon: 'agent.png', url: '/agents' },
  {
    titleKey: 'sidebar.vendorManagement',
    icon: 'vendor.png',
    url: '/vendors',
  },
  {
    titleKey: 'sidebar.corporateManagement',
    icon: 'corporate.png',
    url: '/corporates',
  },
  {
    titleKey: 'sidebar.lenderManagement',
    icon: 'lender.png',
    url: '/lenders',
  },
  {
    titleKey: 'sidebar.userManagement',
    icon: 'user.png',
    url: '/users',
  },
  {
    titleKey: 'sidebar.employeeManagement',
    icon: 'employee.png',
    url: '/employees',
  },
  {
    titleKey: 'sidebar.walletManagement',
    icon: 'wallet.png',
    url: '/wallets',
  },
  {
    titleKey: 'sidebar.payrollManagement',
    icon: 'payroll.png',
    url: '/payrolls',
  },
  {
    titleKey: 'sidebar.userLoanApproval',
    icon: 'loan-approval.png',
    url: '/loan-approvals',
  },
  {
    titleKey: 'sidebar.kycVerification',
    icon: 'kyc.png',
    url: '/kyc',
  },
  {
    titleKey: 'sidebar.commissionManagement',
    icon: 'commission.png',
    url: '/commissions',
  },
  {
    titleKey: 'sidebar.cryptoManagement',
    icon: 'crypto.png',
    url: '/cryptos',
  },
  {
    titleKey: 'sidebar.cryptoTransaction',
    icon: 'crypto-transaction.png',
    url: '/crypto-transactions',
  },
  {
    titleKey: 'sidebar.pushNotification',
    icon: 'push-notification.png',
    url: '/push-notifications',
  },
  {
    titleKey: 'sidebar.chat',
    icon: 'chat.png',
    url: '/chat',
  },
  {
    titleKey: 'sidebar.settings',
    icon: 'settings.png',
    url: '/settings',
  },
  {
    titleKey: 'sidebar.complaints',
    icon: 'complaints.png',
    url: '/complaints',
  },
  {
    titleKey: 'sidebar.report',
    icon: 'report.png',
    url: '/reports',
  },
];

export function AppSidebar({ ...props }: AppSidebarProps) {
  const { state } = useSidebar();
  const { t } = useTranslation();

  return (
    <Sidebar {...props} className="font-kumbh">
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
            <SidebarMenuItem key={item.titleKey}>
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
                              alt={t(item.titleKey)}
                              className="max-h-4 max-w-4 flex-shrink-0 transition-all duration-300"
                              src={`/icons/${item.icon}`}
                            />
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          {t(item.titleKey)}
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <SidebarMenuButton
                        className={cn(
                          'm-0! rounded transition-all duration-300 ease-in-out data-[active=true]:bg-[#509CDB]',
                          'pl-5 '
                        )}
                        isActive={isActive}
                        size="lg"
                      >
                        <img
                          alt={t(item.titleKey)}
                          className="max-h-4 max-w-4 flex-shrink-0 transition-all duration-300"
                          src={`/icons/${item.icon}`}
                        />
                        <span className="text-white">{t(item.titleKey)}</span>
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
