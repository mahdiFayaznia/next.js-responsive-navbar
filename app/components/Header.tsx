"use client";

import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import useScroll from "../hooks/useScroll";
import { cn } from "../lib/utils";

interface Props {
  rtl?: boolean;
}

const Header = ({ rtl = false }: Props) => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  const directionStyle = rtl ? "ltr" : "rtl";

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-200 bg-white": selectedLayout,
        }
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex flex-row items-center justify-center lg:hidden"
          >
            <span className="h-7 w-7 mr-3 bg-slate-300 rounded-lg text-slate-700" />
            <span className="font-bold text-xl flex">Logo</span>
          </Link>
        </div>

        <div
          style={{ direction: directionStyle }}
          className="hidden lg:block w-full"
        >
          <div className="h-7 w-7 rounded-full bg-slate-300 flex items-center justify-center text-center text-slate-700">
            <span className="font-semibold text-sm">HQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
