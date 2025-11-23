"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { navItems } from "./Navbar";
import { INav } from "@/types/types";
import { Button } from "../ui/button";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { AnimatePresence } from "framer-motion";
import { containerVariants2, itemVariants2 } from "@/lib/framerConfig";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// import logo from "@/assets/svgs/LOGO.jpeg";
export interface IMobileNavProps {
  onClose: Function;
}

export function MobileNav({ onClose }: IMobileNavProps) {
  const [showItems, setShowItems] = React.useState<string | undefined>(
    undefined
  );
  const router = useRouter();
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // exit={{ opacity: 0 }}
      // animate={{
      //   // x: 0,
      //   // opacity: 1,
      //   transition: {
      //     staggerChildren: 0.2,
      //     ease: "easeInOut",
      //     delay: 0.5,
      //   },
      // }}
      variants={containerVariants2}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed  md:hidden w-screen h-screen top-0 left-0 backdrop-sblur-lg z-50 bg-white  backdrsop-brightness-200 blur_bdackdrop p-4"
    >
      <motion.div
        // initial={{ opacity: 0, x: -40 }}
        // exit={{ opacity: 0, x: -40 }}
        // animate={{
        //   opacity: 1,
        //   x: 0,
        // }}
        variants={itemVariants2}
        className="flex justify-between"
      >
        <Link href={"/"}>
          {/* <Image
            src={logo}
            alt="logo"
            className="w-[3rem] lg:w-[4rem] rounded-full"
          /> */}
        </Link>
        <div
          onClick={() => onClose()}
          className="absoluted right-4 top-4 border p-3 rounded-lg cursor-pointer"
        >
          <MdClose size="1.2rem" />
        </div>
      </motion.div>
      <motion.div
        // initial={{ opacity: 0, x: -40 }}
        // exit={{ opacity: 0, x: -40 }}
        // animate={{
        //   opacity: 1,
        //   x: 0,
        // }}
        // variants={itemVariants2}
        variants={containerVariants2}
        className="mt-4"
      >
        {navItems.map((item: INav, i: number) => {
          return (
            <motion.div
              variants={itemVariants2}
              key={i}
              // onClick={() => {
              //   if (showItems) {
              //     setShowItems(undefined);
              //     return;
              //   }
              //   if (item.children) {
              //     setShowItems(item.name);
              //   } else {
              //     router.push(item.route);
              //   }
              // }}
              className={`${
                item.name == showItems && "bg-gray-50"
              } py-6 px-4 border-b-[1px] text-lg text-gray-600 font-medium hover:text-gray-800 cursor-pointer  `}
            >
              <div
                onClick={() => {
                  if (showItems) {
                    setShowItems(undefined);
                    return;
                  }
                  if (item.children) {
                    setShowItems(item.name);
                  } else {
                    router.push(item.route);
                    onClose();
                  }
                }}
                className="flex justify-between items-center"
              >
                {item.name}
                {item.children && item.name != showItems && (
                  <RxCaretDown size="1.5rem" />
                )}
                {item.children && item.name == showItems && (
                  <RxCaretUp size="1.5rem" />
                )}
              </div>
              {item.name == showItems && (
                <motion.div
                  variants={containerVariants2}
                  className="flex gap-2"
                >
                  <div className="border-x-[1px] mr-4 mt-4"></div>
                  <div className="mt-4 grid gap-4">
                    {item?.children?.map((item: INav, i: number) => {
                      return (
                        <motion.div
                          variants={itemVariants2}
                          key={i}
                          onClick={() => {
                            router.push(item.route);
                            onClose();
                          }}
                          className="text-sm"
                        >
                          {item.name}
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
