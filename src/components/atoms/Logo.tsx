"use client";
import * as React from "react";
import logo from "@/assets/images/icon.jpeg";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/navigation";
export interface ILogoProps {
  className?: string;
  imageClassName?: string;
}

export function Logo({ className, imageClassName }: ILogoProps) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className={clsx(
        "flex items-center gap-2 font-bold cursor-pointer",
        className
      )}
    >
      <Image
        className={clsx(
          "rounded-lg shadow-2xl w-10 h-10 opacity-70",
          imageClassName
        )}
        alt="logo"
        src={logo}
      />
      <p>AML Global</p>
    </div>
  );
}
