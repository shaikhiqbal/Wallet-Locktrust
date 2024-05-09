import { Circle, FileText, Home } from "react-feather";

export default [
  {
    id: "dashboard",
    title: "My Account",
    icon: <Home />,
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        icon: <Home />,
        navLink: "/admin/usermanagement",
      },
      {
        id: "myprofile",
        title: "My Profile",
        icon: <Home />,
        navLink: "/dashboard/analytics",
      },
      {
        id: "accountSettings",
        title: "Account Setting",
        icon: <Home />,
        navLink: "/dashboard/ecommerce",
      },
      {
        id: "support",
        title: "Support",
        icon: <Home />,
        navLink: "/dashboard/ecommerce",
      },
    ],
  },
  {
    id: "appstore",
    title: "App Store",
    icon: <Home />,
    navLink: "/admin/appstore",
  },
  {
    id: "addmoney",
    title: "Add Money",
    icon: <Home />,
    navLink: "/admin/addmoney",
  },
  {
    id: "sendmoney",
    title: "Send Money",
    icon: <Home />,
    navLink: "/admin/sendmoney",
  },
  {
    id: "escrowmgmt",
    title: "Escrow Management",
    icon: <Home />,
    navLink: "/admin/escrow",
  },
  {
    id: "invoiceApp",
    title: "Invoice",
    icon: <FileText size={20} />,
    children: [
      {
        id: "invoiceList",
        title: "List",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/list",
      },
      {
        id: "invoicePreview",
        title: "Preview",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/preview",
      },
      {
        id: "invoiceEdit",
        title: "Edit",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/edit",
      },
      {
        id: "invoiceAdd",
        title: "Add",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/add",
      },
    ],
  },
  {
    id: "calendar",
    title: "Calendar",
    icon: <Home />,
    navLink: "/admin/calendar",
  },
  {
    id: "currencyconversion",
    title: "Currency Conversion",
    icon: <Home />,
    navLink: "/admin/currencyconversion",
  },
  {
    id: "prepaidcard",
    title: "Prepaid Card",
    icon: <Home />,
    navLink: "/admin/prepaidcard",
  },
  {
    id: "billpayment",
    title: "Bill Payment",
    icon: <Home />,
    navLink: "/admin/billpayment",
  },
  {
    id: "switchacc",
    title: "Switch Account",
    icon: <Home />,
    navLink: "/admin/switchaccount",
  },
  {
    id: "logout",
    title: "Logout",
    icon: <Home />,
    navLink: "/login",
  },
];
