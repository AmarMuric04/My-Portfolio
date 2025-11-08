import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";

import { Header } from "@/components/molecules";
import "@/index.css";

const RootLayout = () => (
  <>
    <Header />
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
