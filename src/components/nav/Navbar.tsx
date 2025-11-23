"use client";
import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { MobileNav } from "./MobileNav";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import Link from "next/link";
// import logo from "@/assets/svgs/LOGO.jpeg";
import { INav } from "@/types/types";
import { SideMenu } from "./SideMenu";
import { Logo } from "../atoms/Logo";
import clsx from "clsx";
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { MdClose } from "react-icons/md";
import { BsFillBookFill } from "react-icons/bs";
import { RiHome9Line } from "react-icons/ri";
import { FiBook } from "react-icons/fi";
import { IoSchoolOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
export interface INavbarProps {}

export const navItems: INav[] = [
  { name: "Home", route: "/" },
  {
    name: "Company",
    route: "",
    children: [
      { name: "About", route: "/about" },
      { name: "Careers", route: "/careers" },
    ],
  },
  { name: "FAQ", route: "/FAQ" },
  {
    name: "Legal",
    route: "",
    children: [{ name: "Terms & Conditions", route: "/t&c" }],
  },
];
export function Navbar(props: INavbarProps) {
  const router = useRouter();

  return (
    <div className="font-lato  bg-white border border-b-[1px] border-gray-100 ">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="w-full flex items-center justify-between ">
          <Logo />
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              href="/about"
              className="text-sm/6 font-semibold text-gray-900"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Our Services
            </Link>
            <Link
              href="/contact-us"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Contact Us
            </Link>
            <Link
              href="/case-studies"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Case Studies
            </Link>
            <Link
              href="/career"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Career
            </Link>
          </div>
          <div className="hidden lg:flex  lg:justify-end">
            <Link
              href="/contact-us"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Learn more <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <MobileNavigation />
          </button>
        </div>
      </nav>
    </div>
  );
}

function MobileNavigation(
  props: React.ComponentPropsWithoutRef<typeof Popover>
) {
  return (
    <Popover {...props}>
      <PopoverButton className="">
        <svg
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            strokeLinecap="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/80"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-zinc-900 dark:ring-zinc-800"
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" className="-m-1 p-1">
            <MdClose className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
          </PopoverButton>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            <MobileNavItem icon={<RiHome9Line />} href="/about">
              About Us
            </MobileNavItem>
            <MobileNavItem icon={<FiBook />} href="/services">
              Our Services
            </MobileNavItem>
            {/* <MobileNavItem href="/articles">Articles</MobileNavItem> */}
            <MobileNavItem icon={<CiViewList size={18} />} href="/contact-us">
              Contact Us
            </MobileNavItem>
            <MobileNavItem
              icon={<IoSchoolOutline size={18} />}
              href="/case-studies"
            >
              Case Studies
            </MobileNavItem>
            <MobileNavItem icon={<IoSchoolOutline size={18} />} href="/career">
              Careers
            </MobileNavItem>
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  );
}

function MobileNavItem({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <li>
      <PopoverButton
        as={Link}
        href={href}
        className="flex items-center gap-1 py-2"
      >
        {icon ?? null}
        {children}
      </PopoverButton>
    </li>
  );
}
