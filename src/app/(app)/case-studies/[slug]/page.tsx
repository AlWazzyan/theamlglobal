"use client";
import { CaseStudies } from "@/components/molecules/CaseStudies";
import { MainContainer } from "@/components/templates/MainContainer";
import { ResponsiveWrapper } from "@/components/templates/ResponsiveWrapper";
import { caseStudies, services } from "@/lib/data";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

const Page = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug;
  const caseStudy = caseStudies.find((item) => item.slug == slug);

  console.log(caseStudy);
  return (
    <MainContainer>
      <div className="w-full relative aspect-video max-h-[25rem]">
        {caseStudy && (
          <Image
            src={caseStudy?.image}
            fill
            alt=""
            className=" object-cover brightness-70"
          />
        )}
        <div className="relative z-10 w-full h-full text-center flex items-center justify-center">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl m-auto">
            {caseStudy?.desc}
          </h2>
        </div>
      </div>
      <ResponsiveWrapper className="!max-w-4xl my-10 md:mt-20 ">
        <div className="[&_h2]:text-3xl [&_h2]:my-4 [&_h2]:font-bold [&_article]:leading-loose">
          {caseStudy?.article}
        </div>
      </ResponsiveWrapper>
      <CaseStudies title="More Case Studies" />
    </MainContainer>
  );
};

export default Page;
