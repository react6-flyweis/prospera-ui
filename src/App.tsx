import { lazy } from 'react';
import { Route, type RouteObject, Routes } from 'react-router';

import DashboardLayout from './components/DashboardLayout';

const HomePage = lazy(() => import('@/pages/Home'));

const AgentManagementPage = lazy(() => import('@/pages/AgentManagement'));
const AgentDetails = lazy(() => import('@/pages/AgentDetails'));
const AddNewAgent = lazy(() => import('@/pages/AddNewAgent'));

const VendorManagementPage = lazy(() => import('@/pages/VendorManagement'));
const VendorDetails = lazy(() => import('@/pages/VendorDetails'));
const AddNewVendorPage = lazy(() => import('@/pages/AddNewVendor'));

const CorporateManagementPage = lazy(
  () => import('@/pages/CorporateManagement')
);
const CorporateDetailsPage = lazy(() => import('@/pages/CorporateDetail'));
const AddNewCorporatePage = lazy(() => import('@/pages/AddNewCorporate'));

const LenderManagementPage = lazy(() => import('@/pages/LenderManagement'));
const LenderDetails = lazy(() => import('@/pages/LenderDetails'));
const AddNewLenderPage = lazy(() => import('@/pages/AddNewLender'));

const UserManagement = lazy(
  () => import('@/pages/UserManagement/UserManagement')
);
const EmployeeManagement = lazy(
  () => import('@/pages/EmployeeManagement/EmployeeManagement')
);
const EmployeeDetails = lazy(
  () => import('@/pages/EmployeeManagement/EmployeeDetails')
);
const AddNewEmployee = lazy(
  () => import('@/pages/EmployeeManagement/AddNewEmployee')
);

const NotFoundPage = lazy(() => import('@/pages/NotFound'));

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
    path: '/agents/:agentId',
    element: <AgentDetails />,
  },
  {
    path: '/agents/new',
    element: <AddNewAgent />,
  },
  {
    path: '/vendors',
    element: <VendorManagementPage />,
  },
  {
    path: '/vendors/:vendorId',
    element: <VendorDetails />,
  },
  {
    path: '/vendors/new',
    element: <AddNewVendorPage />,
  },
  {
    path: '/corporates',
    element: <CorporateManagementPage />,
  },
  {
    path: '/corporates/:corporateId',
    element: <CorporateDetailsPage />,
  },
  {
    path: '/corporates/new',
    element: <AddNewCorporatePage />,
  },
  {
    path: '/lenders',
    element: <LenderManagementPage />,
  },
  {
    path: '/lenders/:lenderId',
    element: <LenderDetails />,
  },
  {
    path: '/lenders/new',
    element: <AddNewLenderPage />,
  },
  {
    path: '/users',
    element: <UserManagement />,
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
    path: '*',
    element: <NotFoundPage />,
  },
];

function App() {
  return (
    <Routes>
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
