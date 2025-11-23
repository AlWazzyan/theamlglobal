// import { Logo } from "@/assets/svg/Logo";
import clsx from "clsx";
import * as React from "react";
import { ResponsiveWrapper } from "../templates/ResponsiveWrapper";
import { Button } from "../ui/button";
import Image from "next/image";
import { caseStudies } from "@/lib/data";
import { useRouter } from "next/navigation";
// import { ResponsiveWrapper } from "../template/ResponsiveWrapper";
export interface ICaseStudiesProps {
  className?: string;
  title?: string;
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
export function CaseStudies({ className, title }: ICaseStudiesProps) {
  const router = useRouter();
  return (
    <div className={clsx("bg-gray-900  ", className)}>
      <div className="w-full py-10 md:py-0 px-4 sm:px-8 md:px-0 text-gray-200 grid-cols-2 md:grid md:gap-10 ">
        <div className="md:py-20 max-w-[40rem] mx-auto">
          <div className=" text-3xl sm:text-5xl z-10 relative">
            {title ?? "Case Studies"}
          </div>
          <div className="mt-8 grid gap-8">
            {caseStudies.map((item, i) => {
              return (
                <div className="grid grid-cols-[3rem_auto] items-center gap-2">
                  <h1 className="text-3xl">0{i + 1}</h1>
                  <p>
                    {item.desc}:{item.text}
                  </p>
                </div>
              );
            })}
          </div>
          <Button
            onClick={() => router.push("/case-studies")}
            className="bg-transparent w-full mt-12 py-6 rounded-none"
            variant={"outline"}
          >
            See all case studies
          </Button>
        </div>
        <div className="relative">
          <Image
            alt=""
            fill
            className=" object-cover"
            src={
              "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
      </div>
    </div>
  );
}
