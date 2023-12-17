"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarItems } from "../navbarItems";
import { NavBarItem } from "../types";
import { FaChevronDown } from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="lg:w-60 bg-white h-screen flex-1 fixed border-r border-slate-200 hidden lg:flex">
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center lg:justify-start lg:px-4 border-b border-slate-200 h-12 w-full"
        >
          <span className="h-7 w-7 bg-slate-300 rounded-lg" />
          <span className="font-bold text-xl text-slate-700 hidden lg:flex">
            Logo
          </span>
        </Link>

        <div className="flex flex-col space-y-2 lg:px-2">
          {navbarItems.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: NavBarItem }) => {
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
            <div className="flex flex-row space-x-4 items-center text-slate-700">
              {item.icon}
              <span className="font-semibold text-lg  flex">{item.title}</span>
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
            <div className="my-2 ml-12 flex flex-col space-y-4">
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
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg text-slate-700 hover:bg-slate-100 ${
            item.path === pathname ? "bg-slate-100" : ""
          }`}
        >
          {item.icon}
          <span className="font-semibold text-lg flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};
