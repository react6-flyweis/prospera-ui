import { lazy } from 'react';
import { Route, type RouteObject, Routes } from 'react-router';
import AuthLayout from './components/AuthLayout';
import DashboardLayout from './components/DashboardLayout';

const HomePage = lazy(() => import('@/pages/Home'));

const AgentManagementPage = lazy(
  () => import('@/pages/AgentManagement/AgentManagement')
);
const AgentDetails = lazy(() => import('@/pages/AgentManagement/AgentDetails'));
const AddNewAgent = lazy(() => import('@/pages/AgentManagement/AddNewAgent'));
const EditAgent = lazy(() => import('@/pages/AgentManagement/EditAgent'));

const VendorManagementPage = lazy(
  () => import('@/pages/VendorManagement/VendorManagement')
);
const VendorDetails = lazy(
  () => import('@/pages/VendorManagement/VendorDetails')
);
const AddNewVendorPage = lazy(
  () => import('@/pages/VendorManagement/AddNewVendor')
);
const EditVendor = lazy(() => import('@/pages/VendorManagement/EditVendor'));

const CorporateManagementPage = lazy(
  () => import('@/pages/CorporateManagement/CorporateManagement')
);
const CorporateDetailsPage = lazy(
  () => import('@/pages/CorporateManagement/CorporateDetail')
);
const AddNewCorporatePage = lazy(
  () => import('@/pages/CorporateManagement/AddNewCorporate')
);
const EditCorporate = lazy(
  () => import('@/pages/CorporateManagement/EditCorporate')
);

const LenderManagementPage = lazy(
  () => import('@/pages/LenderManagement/LenderManagement')
);
const LenderDetails = lazy(
  () => import('@/pages/LenderManagement/LenderDetails')
);
const AddNewLenderPage = lazy(
  () => import('@/pages/LenderManagement/AddNewLender')
);
const EditLender = lazy(() => import('@/pages/LenderManagement/EditLender'));

const UserManagement = lazy(
  () => import('@/pages/UserManagement/UserManagement')
);
const UserDetails = lazy(() => import('@/pages/UserManagement/UserDetails'));
const AddNewUserPage = lazy(() => import('@/pages/UserManagement/AddNewUser'));
const EditUserPage = lazy(() => import('@/pages/UserManagement/EditUser'));

const EmployeeManagement = lazy(
  () => import('@/pages/EmployeeManagement/EmployeeManagement')
);
const EmployeeDetails = lazy(
  () => import('@/pages/EmployeeManagement/EmployeeDetails')
);
const AddNewEmployee = lazy(
  () => import('@/pages/EmployeeManagement/AddNewEmployee')
);
const EditEmployee = lazy(
  () => import('@/pages/EmployeeManagement/EditEmployee')
);

const WalletManagement = lazy(
  () => import('@/pages/walletManagement/WalletManagement')
);
const WalletDetails = lazy(
  () => import('@/pages/walletManagement/WalletDetails')
);
const TransactionDetails = lazy(
  () => import('@/pages/walletManagement/TransactionDetails')
);
const PayrollManagement = lazy(
  () => import('@/pages/PayrollManagement/PayrollManagement')
);
const ImportPayrollData = lazy(
  () => import('@/pages/PayrollManagement/ImportPayrollData')
);
const LoanApprovalPage = lazy(
  () => import('@/pages/LoanApproval/LoanApproval')
);
const KYCVerificationPage = lazy(
  () => import('@/pages/KYCVerification/KYCVerification')
);

const CryptoManagementPage = lazy(
  () => import('@/pages/CryptoManagement/CryptoManagement')
);
const CryptoTransactionsPage = lazy(
  () => import('@/pages/CryptoTransactions/CryptoTransactions')
);
const CryptoPortfolioPage = lazy(
  () => import('@/pages/CryptoTransactions/CryptoPortfolio')
);
const CommissionManagementPage = lazy(
  () => import('@/pages/CommissionManagement/CommissionManagement')
);

const PushNotificationsPage = lazy(
  () => import('@/pages/PushNotifications/PushNotifications')
);
const SettingsPage = lazy(() => import('@/pages/Settings/Settings'));

const ProfileDetailPage = lazy(
  () => import('@/pages/UserManagement/ProfileDetail')
);

const HelpSupportPage = lazy(() => import('@/pages/Settings/HelpSupport'));

const TermsConditionPage = lazy(
  () => import('@/pages/Settings/TermsCondition')
);
const PrivacyPolicyPage = lazy(() => import('@/pages/Settings/PrivacyPolicy'));

const NotFoundPage = lazy(() => import('@/pages/NotFound'));

const ComplaintsPage = lazy(() => import('@/pages/Complaints/Complaints'));
const ReportsPage = lazy(() => import('@/pages/Reports/Reports'));
const NewReportPage = lazy(() => import('@/pages/Reports/NewReport'));
const LoginPage = lazy(() => import('@/pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/auth/RegisterPage'));

const authRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  // {
  //   path: '/forgot-password',
  //   element: <ForgotPasswordPage />,
  // },
  // {
  //   path: '/reset-password/:token',
  //   element: <ResetPasswordPage />,
  // },
];

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/agents',
    element: <AgentManagementPage />,
  },
  {
    path: '/agents/new',
    element: <AddNewAgent />,
  },
  {
    path: '/agents/:agentId',
    element: <AgentDetails />,
  },
  {
    path: '/agents/:agentId/edit',
    element: <EditAgent />,
  },
  {
    path: '/vendors',
    element: <VendorManagementPage />,
  },
  {
    path: '/vendors/new',
    element: <AddNewVendorPage />,
  },
  {
    path: '/vendors/:vendorId',
    element: <VendorDetails />,
  },
  {
    path: '/vendors/:vendorId/edit',
    element: <EditVendor />,
  },
  {
    path: '/corporates',
    element: <CorporateManagementPage />,
  },
  {
    path: '/corporates/new',
    element: <AddNewCorporatePage />,
  },
  {
    path: '/corporates/:corporateId',
    element: <CorporateDetailsPage />,
  },
  {
    path: '/corporates/:corporateId/edit',
    element: <EditCorporate />,
  },
  {
    path: '/lenders',
    element: <LenderManagementPage />,
  },
  {
    path: '/lenders/new',
    element: <AddNewLenderPage />,
  },
  {
    path: '/lenders/:lenderId',
    element: <LenderDetails />,
  },
  {
    path: '/lenders/:lenderId/edit',
    element: <EditLender />,
  },
  {
    path: '/users',
    element: <UserManagement />,
  },
  {
    path: '/users/new',
    element: <AddNewUserPage />,
  },
  {
    path: '/users/:userId',
    element: <UserDetails />,
  },
  {
    path: '/users/:userId/edit',
    element: <EditUserPage />,
  },
  {
    path: '/profile',
    element: <ProfileDetailPage />,
  },
  {
    path: '/employees',
    element: <EmployeeManagement />,
  },
  {
    path: '/employees/new',
    element: <AddNewEmployee />,
  },
  {
    path: '/employees/:employeeId',
    element: <EmployeeDetails />,
  },
  {
    path: '/employees/:employeeId/edit',
    element: <EditEmployee />,
  },
  {
    path: '/wallets',
    element: <WalletManagement />,
  },
  {
    path: '/wallets/:walletId',
    element: <WalletDetails />,
  },
  {
    path: '/transaction/:transactionId',
    element: <TransactionDetails />,
  },
  {
    path: '/payrolls',
    element: <PayrollManagement />,
  },
  {
    path: '/payrolls/import',
    element: <ImportPayrollData />,
  },
  {
    path: '/loan-approvals',
    element: <LoanApprovalPage />,
  },
  {
    path: '/kyc',
    element: <KYCVerificationPage />,
  },
  {
    path: '/commissions',
    element: <CommissionManagementPage />,
  },
  {
    path: '/cryptos',
    element: <CryptoManagementPage />,
  },
  {
    path: '/crypto-transactions',
    element: <CryptoTransactionsPage />,
  },
  {
    path: '/crypto-portfolio/:userId',
    element: <CryptoPortfolioPage />,
  },
  {
    path: '/push-notifications',
    element: <PushNotificationsPage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  {
    path: '/settings/privacy-policy',
    element: <PrivacyPolicyPage />,
  },
  {
    path: '/settings/terms-condition',
    element: <TermsConditionPage />,
  },
  {
    path: '/settings/help-support',
    element: <HelpSupportPage />,
  },
  {
    path: '/complaints',
    element: <ComplaintsPage />,
  },
  {
    path: '/reports',
    element: <ReportsPage />,
  },
  {
    path: '/reports/new',
    element: <NewReportPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        {authRoutes.map((route) => (
          <Route element={route.element} key={route.path} path={route.path} />
        ))}
      </Route>

      {/* Define your routes here */}
      <Route element={<DashboardLayout />}>
        {routes.map((route) => (
          <Route element={route.element} key={route.path} path={route.path} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
