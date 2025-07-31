import { lazy } from 'react';
import { Route, type RouteObject, Routes } from 'react-router';
import DashboardLayout from './components/DashboardLayout';

const HomePage = lazy(() => import('@/pages/Home'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
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
