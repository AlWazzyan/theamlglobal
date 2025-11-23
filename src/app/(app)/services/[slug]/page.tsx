"use client";
import { MainContainer } from "@/components/templates/MainContainer";
import { ResponsiveWrapper } from "@/components/templates/ResponsiveWrapper";
import { services } from "@/lib/data";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

const Page = () => {
  const router = useRouter();
  const params = useParams();
  const name = params.name;
  const service = services.find((item) => item.header == name);
  return (
    <MainContainer>
      <div className="bg-gray-900 p-4 text-white ">
        {/* <h3>Service</h3>
        <h1>{service?.name}</h1>
        <h1>{service?.desc}</h1> */}
      </div>
      <ResponsiveWrapper className="!max-w-4xl my-10 md:mt-20 ">
        <div className="[&_h2]:text-3xl [&_h2]:my-4 [&_h2]:font-bold [&_article]:leading-loose">
          {service?.other}
        </div>
      </ResponsiveWrapper>
      {/* <div>{service?.other}</div> */}
    </MainContainer>
  );
};

export default Page;
