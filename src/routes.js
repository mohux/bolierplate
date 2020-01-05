import { lazy } from "react";
const HomePage = lazy(() => import("./pages/home"));
const LoginPage = lazy(() => import("./pages/auth/login"));
export default [
  { path: "/:locale", exact: true, component: HomePage },
  { path: "/:locale/login", exact: true, component: LoginPage }
];
