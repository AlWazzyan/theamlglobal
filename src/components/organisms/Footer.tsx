"use client";
// import { Logo } from "@/assets/svg/Logo";
import clsx from "clsx";
import * as React from "react";
// import Text from "../atoms/Text";
// import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
// import google from "@/assets/images/google-play.png";
// import apple from "@/assets/images/app-store.png";
import Link from "next/link";
import Image from "next/image";
import { ResponsiveWrapper } from "../templates/ResponsiveWrapper";
import { services } from "@/lib/data";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Logo } from "../atoms/Logo";
import { Input } from "../ui/input";
// import { ResponsiveWrapper } from "../template/ResponsiveWrapper";
export interface IFooterProps {
  className?: string;
}

interface IItemLink {
  name: string;
  route: string;
  icon?: React.ReactNode;
}
interface IItems {
  header: string;
  items: IItemLink[];
}
export function Footer({ className }: IFooterProps) {
  return (
    <div className={clsx("bg-gray-900  text-neutral-400 ", className)}>
      <ResponsiveWrapper className="w-full pt-10 pb-6 px-4 sm:px-8 lg:px-0 ">
        <div className="justify-between gap-4 md:grid grid-cols-2  ">
          <div className="flex flex-col gap-4 sm:gap-6 flex-2 md:w-[80%] ">
            <Logo imageClassName="opacity-100" />
            {/* <div className="flex gap-2 items-center">
              <FaPhoneAlt color="white" />
              <p>+1 234 2301</p>
            </div> */}
            <div className="flex gap-2 items-center">
              <MdEmail color="white" />
              <a href="mailto:contactus@theamlglobal.com">
                contactus@theamlglobal.com
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <FaLocationDot color="white" />
              <p> HQ: 1 Raffles Place, Level 19-61, Tower 2, Singapore.</p>
            </div>
            <GetUpdates />
            <FooterLinks className="md:hidden" />
          </div>
          <div className="flex-1">
            <FooterLinks className="md:flex hidden sm:gap-4" />
          </div>
        </div>

        <hr className=" border-neutral my-8" />
        <div className=" sm:flex justify-between">
          <p>© 2024 AML Global. All rights reserved.</p>
          <div className="flex gap-4">
            <Link className="text-sm" href={"/terms"}>
              Terms of Service
            </Link>
            <Link className="text-sm" href={"/privacy-policy"}>
              Privacy Policy
            </Link>
            <Link className="text-sm" href={""}>
              Sitemaps
            </Link>
          </div>
        </div>
      </ResponsiveWrapper>
    </div>
  );
}

const FooterLinks = ({ className }: { className: string }) => {
  const items: IItems[] = [
    {
      header: "Help Center",
      items: [
        { name: "Support", route: "/contact-us" },
        { name: "FAQ", route: "/FAQ" },
        { name: "How it works", route: "" },
        { name: "Profile", route: "" },
      ],
    },
    {
      header: "Our Services",
      items: [...services],
    },
    // {
    //   header: "Follow Us",
    //   items: [
    //     {
    //       name: "Facebook",
    //       route: "https://www.facebook.com",
    //       icon: <FaFacebook size={16} />,
    //     },
    //     {
    //       name: "Instagram",
    //       route: "https://www.instagram.com/",
    //       icon: <FaInstagram size={16} />,
    //     },
    //     {
    //       name: "X",
    //       route: "https://twitter.com",
    //       icon: <BsTwitterX size={16} />,
    //     },
    //     {
    //       name: "LinkedIn",
    //       route: "https://www.linkedin.com/company/",
    //       icon: <FaLinkedin size={16} />,
    //     },
    //     {
    //       name: "Telegram",
    //       route: "https://t.me",
    //       icon: <SiTelegram size={16} />,
    //     },
    //   ],
    // },
  ];
  return (
    <div
      className={clsx("sm:flex justify-between w-full mt-4 md:mt-0", className)}
    >
      {items.map((item, i) => {
        return (
          <div key={i} className="my-8 sm:my-0">
            <div className="sm:text-3xl text-lg text-white  border-l-[2px] px-2">
              {item.header}
            </div>
            <div className="grid grid-cols-1 gap-2 mt-2 md:mt-4 md:gap-4">
              {item.items.map((link, n) => {
                return (
                  <Link
                    className="flex gap-4 items-center"
                    href={link.route}
                    key={n}
                  >
                    {link.icon ?? null}
                    <div className="sm:text-md">{link.name}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const GetUpdates = () => {
  const [input, setInput] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);
  React.useEffect(() => {
    if (input.length > 5 && input.includes(".com") && input.includes("@")) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [input]);
  return (
    <div className="mt-4 grid gap-4">
      <div className="sm:text-3xl text-lg text-white  border-l-[2px] px-2">
        Get Updates
      </div>
      <div className="">
        Welcome to The AML Global Limited, Signup For Our Latest news & Article.
        We Won't give you spam mail and irreverent messages.
      </div>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="my-0"
      />
      <Button disabled={!isValid} variant={"secondary"} className="w-full">
        Subscribe
      </Button>

      <div className="text-xs">
        By subscribing you agree to with our Privacy Policy and provide consent
        to receive updates from our company.
      </div>
    </div>
  );
};
