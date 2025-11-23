import * as React from "react";
import Image from "next/image";
import { Logo } from "../atoms/Logo";
export interface ISideMenuProps {}

export function SideMenu(props: ISideMenuProps) {
  return (
    <div className="w-full flex items-center justify-between ">
      <Logo />
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="#" className="text-sm/6 font-semibold text-gray-900">
          About Us
        </a>
        <a href="#" className="text-sm/6 font-semibold text-gray-900">
          Our Services
        </a>
        <a href="#" className="text-sm/6 font-semibold text-gray-900">
          Contact us
        </a>
        <a href="#" className="text-sm/6 font-semibold text-gray-900">
          Career
        </a>
      </div>
      <div className="hidden lg:flex  lg:justify-end">
        <a href="#" className="text-sm/6 font-semibold text-gray-900">
          Learn more <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
