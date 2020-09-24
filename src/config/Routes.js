//Layouts
import LayoutWeb from "../layout/layoutWeb";
import LayoutClient from "../layout/layoutClient";
import LayoutAdmin from "../layout/layoutAdmin";

//Web
import LoginPage from "../pages/web/authPage/LoginPage.js";
import RegisterPage from "../pages/web/authPage/RegisterPage.js";
import HomeWebPage from "../pages/web/HomeWebPage";
import SobreMiPage from "../pages/web/SobreMiPage";
import ValidationAccountPage from "../pages/web/authPage/ValidationAccountPage";
import ErrorPage from "../pages/web/ErrorPage";

//Client
import HomeClientPage from "../pages/client/HomeClientPage";
import FinanzasPage from "../pages/client/FinanzasPage";
import ListasPage from "../pages/client/ListasPage";
import RecordatoriosPage from "../pages/client/RecordatoriosPage";
import UserPage from "../pages/client/UserPage";
import HelpPage from "../pages/client/HelpPage";

//Admin
import homeAdminPage from "../pages/admin/homeAdminPage";
import usersAdminPage from "../pages/admin/usersAdminPage";

const Routes = [
  {
    path: "/client",
    component: LayoutClient,
    exact: false,
    routes: [
      {
        path: "/client",
        component: HomeClientPage,
        exact: true,
      },
      {
        component: ErrorPage,
      },
    ],
  },
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: homeAdminPage,
        exact: true,
      },
      {
        component: ErrorPage,
      },
    ],
  },
  {
    path: "/",
    component: LayoutWeb,
    exact: false,
    routes: [
      {
        path: "/",
        component: HomeWebPage,
        exact: true,
      },
      {
        path: "/login",
        component: LoginPage,
        exact: true,
      },
      {
        path: "/register",
        component: RegisterPage,
        exact: true,
      },
      {
        path: "/sobre-mi",
        component: SobreMiPage,
        exact: true,
      },
      {
        path: "/send-validation",
        component: ValidationAccountPage,
        exact: true,
      },
      {
        path: "/re-send-validation",
        component: ValidationAccountPage,
        exact: true,
      },
      {
        path: "/validation/:email",
        component: ValidationAccountPage,
        exact: true,
      },
      {
        component: ErrorPage,
      },
    ],
  },
];

export default Routes;
