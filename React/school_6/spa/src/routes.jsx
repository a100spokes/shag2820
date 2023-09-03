import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/main_layout";
// import { SignIn, SignUp } from "@/pages/auth";
import {Homes} from "@/pages/to_fam/home.jsx";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "main_layout",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Головна",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Новини",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Контакти",
        path: "/tables",
        element: <Tables />,
      },
    ],
  },

  {
    title: "Учням",
    layout: "to_pup",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Правила поведінки учнів",
        path: "/home",
        element: <Homes />,

      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Учнівське самоврядування",
        path: "/home",
        element: <Tables />,

      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Національний мультитест",
        path: "/home",
        element: <Tables />,

      },

    ],
  },
];

export default routes;
