import ContactForm from "@/components/molecules/contactForm";
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
    <div className="bg-white">
      <MainContainer hideContact>
        <ResponsiveWrapper className="!max-w-4xl">
          <ContactForm />
        </ResponsiveWrapper>
        <FeaturedInsights />
      </MainContainer>
    </div>
  );
}
