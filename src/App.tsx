import { lazy } from 'react';
import { Route, type RouteObject, Routes } from 'react-router';
import DashboardLayout from './components/DashboardLayout';

const HomePage = lazy(() => import('@/pages/Home'));
const AgentManagementPage = lazy(() => import('@/pages/AgentManagement'));
const VendorManagementPage = lazy(() => import('@/pages/VendorManagement'));
const AgentDetails = lazy(() => import('@/pages/AgentDetails'));
const AddNewAgent = lazy(() => import('@/pages/AddNewAgent'));
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
