// Layouts
import { DefaultLayout } from "../layout";
// pages
import Account from "../pages/Account";
import Login from "../pages/Login";
import Order from "../pages/Order";
import Tour from "../pages/Tour";

export const paths = {
  account: "/",
  login: "/login",
  tour: "/tour",
  order: "/order",
};

const routes = [
  { path: paths.account, component: Account, layout: DefaultLayout },
  { path: paths.login, component: Login, layout: DefaultLayout },
  { path: paths.tour, component: Tour, layout: DefaultLayout },
  { path: paths.order, component: Order, layout: DefaultLayout },
];
export default routes;
