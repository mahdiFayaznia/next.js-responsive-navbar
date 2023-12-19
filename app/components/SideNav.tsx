"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarItems } from "../navbarItems";
import { NavBarItem } from "../types";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  rtl?: boolean;
}

const SideNav = ({ rtl = false }: Props) => {
  const directionStyle = rtl ? "rtl" : "ltr";

  return (
    <div
      style={{ direction: directionStyle }}
      className={`lg:w-60 bg-white h-screen flex-1 fixed border-r border-slate-200 hidden lg:flex ${
        rtl ? "right-0" : ""
      }`}
    >
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className="flex flex-row items-center justify-center lg:justify-start lg:px-4 border-b border-slate-200 h-12 w-full"
        >
          <span
            className={`${
              rtl ? "ml-3" : "mr-3"
            } h-7 w-7 bg-slate-300 rounded-lg`}
          />
          <span className="font-bold text-xl text-slate-700 hidden lg:flex">
            Logo
          </span>
        </Link>

        <div className="flex flex-col space-y-2 lg:px-2">
          {navbarItems.map((item, index) => {
            return <MenuItem key={index} item={item} direction={rtl} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({
  item,
  direction,
}: {
  item: NavBarItem;
  direction?: boolean;
}) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-slate-100 w-full justify-between hover:bg-slate-100 ${
              pathname.includes(item.path) ? "bg-slate-100" : ""
            }`}
          >
            <div className="flex flex-row items-center text-slate-700">
              {item.icon}
              <span
                className={`${
                  direction ? "mr-4" : "ml-4"
                } font-semibold text-lg flex`}
              >
                {item.title}
              </span>
            </div>

            <div
              className={`${
                subMenuOpen ? "rotate-180" : ""
              } flex text-slate-400`}
            >
              <FaChevronDown size={18} />
            </div>
          </button>

          {subMenuOpen && (
            <div
              className={`${
                direction ? "mr-12" : "ml-12"
              } my-2 flex flex-col space-y-4`}
            >
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? "font-bold" : ""
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row items-center p-2 rounded-lg text-slate-700 hover:bg-slate-100 ${
            item.path === pathname ? "bg-slate-100" : ""
          }`}
        >
          {item.icon}
          <span
            className={`${
              direction ? "mr-4" : "ml-4"
            } font-semibold text-lg flex`}
          >
            {item.title}
          </span>
        </Link>
      )}
    </div>
  );
};
