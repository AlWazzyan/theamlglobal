import FAQ from "@/components/molecules/Faq";
import { MainContainer } from "@/components/templates/MainContainer";
import * as React from "react";

export interface IPageProps {}

export default function Page(props: IPageProps) {
  return (
    <div>
      <MainContainer>
        <FAQ />
      </MainContainer>
    </div>
  );
}
