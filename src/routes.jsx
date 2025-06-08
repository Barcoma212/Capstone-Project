import {
  HomeIcon,
  MapIcon,
  UsersIcon,
  DocumentTextIcon,
  BanknotesIcon,
  ChartBarIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  BuildingOfficeIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { Home } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Placeholder from "./pages/Placeholder";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <MapIcon {...icon} />,
        name: "lot map view",
        path: "/lot-map",
        element: <Placeholder title="Lot Map View" />,
      },
      {
        icon: <UsersIcon {...icon} />,
        name: "ownership management",
        path: "/ownership",
        element: <Placeholder title="Ownership Management" />,
      },
      {
        icon: <DocumentTextIcon {...icon} />,
        name: "customer records",
        path: "/customers",
        element: <Placeholder title="Customer Records" />,
      },
      {
        icon: <BanknotesIcon {...icon} />,
        name: "payment monitoring",
        path: "/payments",
        element: <Placeholder title="Payment Monitoring" />,
      },
      {
        icon: <CalendarIcon {...icon} />,
        name: "maintenance schedule",
        path: "/maintenance",
        element: <Placeholder title="Maintenance Schedule" />,
      },
      {
        icon: <ClipboardDocumentListIcon {...icon} />,
        name: "service requests",
        path: "/services",
        element: <Placeholder title="Service Requests" />,
      },
      {
        icon: <BuildingOfficeIcon {...icon} />,
        name: "facility management",
        path: "/facilities",
        element: <Placeholder title="Facility Management" />,
      },
      {
        icon: <ChartBarIcon {...icon} />,
        name: "reports",
        path: "/reports",
        element: <Placeholder title="Reports" />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "accounts",
        path: "/accounts",
        element: <Placeholder title="Accounts" />,
      },
      {
        icon: <Cog6ToothIcon {...icon} />,
        name: "settings",
        path: "/settings",
        element: <Placeholder title="Settings" />,
      },
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "logout",
        path: "/logout",
        element: <Placeholder title="Logout" />,
      },
    ],
  },
  {
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]; 