import NotFound from "@/app/not-found";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

const LoginPage = lazy(() => import("@/app/auth/login/page"));
const DashboardLayout = lazy(() => import("@/app/dashboard/layout"));
const DashboardPage = lazy(() => import("@/app/dashboard/page"));
const UsersPage = lazy(() => import("@/app/dashboard/users/page"));

const dashboardRoutes = [
  {
    path: "/",
    element: (
      <DashboardLayout>
        <Suspense>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      {
        element: <DashboardPage />,
        index: true,
      },
      {
        element: <UsersPage />,
        path: "users",
      },
    ],
  },
] satisfies RouteObject[];

const publicRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
    index: true,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
] satisfies RouteObject[];

export const router = createBrowserRouter([
  ...publicRoutes,
  ...dashboardRoutes,
]);
