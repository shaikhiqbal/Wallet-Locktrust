import { lazy } from "react";

// const Admin =lazy(()=>import('../../views/pages/admin'));
const UserManagement = lazy(() =>
  import("../../views/pages/admin/component/UserManagement")
);
// const UserManagement = lazy(() =>
//   import("../../views/pages/admin-management/user-role-managment/UsersTable")
// );
const Application = lazy(() =>
  import("../../views/pages/admin/component/Application")
);
const Setting = lazy(() => import("../../views/pages/admin/component/Setting"));
const Rates = lazy(() => import("../../views/pages/admin/component/rates"));
const RatesPreview = lazy(() =>
  import(
    "../../views/pages/admin-management/underwrite-by-approved/AprovedByUW"
  )
);
const Appstore = lazy(() => import("../../views/pages/walletpages/Appstore"));
const Addmoney = lazy(() => import("../../views/pages/walletpages/Addmoney"));
const Sendmoney = lazy(() => import("../../views/pages/walletpages/Sendmoney"));
const Escrow = lazy(() => import("../../views/pages/walletpages/Escrow"));
const Invoice = lazy(() => import("../../views/pages/walletpages/Invoice"));
const Calendar = lazy(() => import("../../views/pages/walletpages/Calendar"));
const Profile = lazy(() => import("../../views/pages/walletpages/Profile"));
const Support = lazy(() => import("../../views/pages/walletpages/Support"));
const Currencyconversion = lazy(() =>
  import("../../views/pages/walletpages/Currencyconversion")
);
const Prepaidcard = lazy(() =>
  import("../../views/pages/walletpages/Prepaidcard")
);
const Billpayment = lazy(() =>
  import("../../views/pages/walletpages/Billpayment")
);
const Switchaccount = lazy(() =>
  import("../../views/pages/walletpages/Switchaccount")
);

const Admindashboard = [
  {
    path: "/admin/usermanagement",
    element: <UserManagement />,
  },
  {
    path: "/admin/appstore",
    element: <Appstore />,
  },
  {
    path: "/admin/addmoney",
    element: <Addmoney />,
  },
  {
    path: "/admin/sendmoney",
    element: <Sendmoney />,
  },
  {
    path: "/admin/escrow",
    element: <Escrow />,
  },
  {
    path: "/admin/invoice",
    element: <Invoice />,
  },
  {
    path: "/admin/calendar",
    element: <Calendar />,
  },
  {
    path: "/admin/currencyconversion",
    element: <Currencyconversion />,
  },
  {
    path: "/admin/prepaidcard",
    element: <Prepaidcard />,
  },
  {
    path: "/admin/billpayment",
    element: <Billpayment />,
  },
  {
    path: "/admin/switchaccount",
    element: <Switchaccount />,
  },
  {
    path: "/admin/profile",
    element: <Profile />,
  },
  {
    path: "/admin/support",
    element: <Support />,
  },
];

export default Admindashboard;
