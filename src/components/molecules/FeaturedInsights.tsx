// import { Logo } from "@/assets/svg/Logo";
import clsx from "clsx";
import * as React from "react";
import { ResponsiveWrapper } from "../templates/ResponsiveWrapper";
import { Button } from "../ui/button";
import Image from "next/image";
// import { ResponsiveWrapper } from "../template/ResponsiveWrapper";
export interface IFeaturedInsightsProps {
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
export function FeaturedInsights({ className }: IFeaturedInsightsProps) {
  return (
    <div className={clsx("bg-gray-50  ", className)}>
      <div className="py-20 max-w-[40rem] mx-auto text-center">
        <div className=" text-3xl sm:text-5xl z-10 relative">
          Featured insights
        </div>

        <p className="mt-20 text-gray-500">No Posts in this category</p>
      </div>
    </div>
  );
}
