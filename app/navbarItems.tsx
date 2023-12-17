import { NavBarItem } from "./types";
import {
  MdSpaceDashboard,
  MdFolder,
  MdSettings,
  MdOutlineHelp,
} from "react-icons/md";
import { HiHome } from "react-icons/hi2";
import { HiExclamationCircle } from "react-icons/hi";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

const iconSize = 24; // set the icon size here

export const navbarItems: NavBarItem[] = [
  {
    title: "Dashboard",
    path: "/",
    icon: <MdSpaceDashboard size={iconSize} />,
  },
  {
    title: "Home",
    path: "/home",
    icon: <HiHome size={iconSize} />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <MdFolder size={iconSize} />,
    submenu: true,
    subMenuItems: [
      { title: "Projects", path: "/projects" },
      { title: "Web Design", path: "/projects/web-design" },
      { title: "Graphic Design", path: "/projects/graphic-design" },
    ],
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <BiSolidMessageSquareDetail size={iconSize} />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <MdSettings size={iconSize} />,
    submenu: true,
    subMenuItems: [
      { title: "Settings", path: "/settings" },
      { title: "Account", path: "/settings/account" },
      { title: "Privacy", path: "/settings/privacy" },
    ],
  },
  {
    title: "Help",
    path: "/help",
    icon: <MdOutlineHelp size={iconSize} />,
  },
  {
    title: "About",
    path: "/about",
    icon: <HiExclamationCircle size={iconSize} />,
  },
];
