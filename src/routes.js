import { lazy } from "react";

const HomePage = lazy(() => import("./pages/home"));

export default [{ path: "/", exact: true, component: HomePage }];
