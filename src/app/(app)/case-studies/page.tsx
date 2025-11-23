import FAQ from "@/components/molecules/Faq";
import { FeaturedInsights } from "@/components/molecules/FeaturedInsights";
import { MainContainer } from "@/components/templates/MainContainer";
import { ResponsiveWrapper } from "@/components/templates/ResponsiveWrapper";
import { caseStudies } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface IPageProps {}

export default function Page(props: IPageProps) {
  return (
    <div>
      <MainContainer>
        <div className="relative">
          <Image
            alt=""
            className=" object-cover brightness-[30%]"
            fill
            src={
              "https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5ub3ZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
          <ResponsiveWrapper className="relative z-10 py-20 md:py-32 lg:py-40 px-4">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Case studies
            </h2>
          </ResponsiveWrapper>
        </div>
        <div className="bg-white py-10 sm:py-14 md:py-20 lg:py-28">
          <ResponsiveWrapper className="">
            <div className="grid mt-8 gap-8 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
              {caseStudies.map((item, i) => {
                return (
                  <Link
                    href={`/case-studies/${item.slug}`}
                    className=""
                    key={i}
                  >
                    <div className="w-full aspect-video object-cover relative cursor-pointer rounded-xl overflow-hidden">
                      <Image fill src={item.image} alt="" />
                    </div>
                    <p className="mt-2">{item.desc}</p>
                  </Link>
                );
              })}
            </div>
          </ResponsiveWrapper>
        </div>
        <FeaturedInsights />
      </MainContainer>
    </div>
  );
}
