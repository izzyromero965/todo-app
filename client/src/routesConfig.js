import loadable from "@loadable/component";

const loadableOpts = { fallback: <div /> };

const Dashboard = loadable(
  () => import("../src/Components/Dashboard"),
  loadableOpts
);

const Landing = loadable(() => import("../src/Components/Login"), loadableOpts);

export default [
  {
    key: "dashboard",
    path: "/dashboard",
    component: Dashboard,
    exact: true,
  },
  {
    key: "landing",
    path: "/",
    component: Landing,
    exact: true,
  },
];
