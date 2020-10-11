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
import RecordatoriosPage from "../pages/client/RecordatoriosPage";
import UserPage from "../pages/client/UserPage";
import OcioPage from "../pages/client/OcioPage";

//Admin
import HomeAdminPage from "../pages/admin/HomeAdminPage";
import UsersAdminPage from "../pages/admin/UsersAdminPage";

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
        path: "/client/user/:userID",
        component: UserPage,
        exact: true,
      },
      {
        path: "/client/recordatorios",
        component: RecordatoriosPage,
        exact: true,
      },
      {
        path: "/client/ocio",
        component: OcioPage,
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
        component: HomeAdminPage,
        exact: true,
      },
      {
        path: "/admin/users",
        component: UsersAdminPage,
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
