import FAQ from "@/components/molecules/Faq";
import { WhyChooseUs } from "@/components/molecules/whyChooseUs";
import { MainContainer } from "@/components/templates/MainContainer";
import { ResponsiveWrapper } from "@/components/templates/ResponsiveWrapper";
import Image from "next/image";
import * as React from "react";

export interface IPageProps {}

export default function Page(props: IPageProps) {
  return (
    <div>
      <MainContainer childrenClassName="px-0">
        <div className={""}>
          <div className="w-full md:py-0 bg-gray-950    min-h-[70vh] md:px-0 text-gray-200 grid-rows-2 md:grid-rows-1 md:grid-cols-[60%_40%] grid md:gap-10 ">
            <div className="px-4 sm:px-8 mx-auto md:py-20 max-w-[40rem] p-8 lg:p-0 flex items-center justify-center ">
              <div>
                <div className=" text-4xl sm:text-5xl z-10 relative">
                  Growth. Trust. Value.
                </div>
                <p className="mt-4 leading-loose">
                  Stransact is a growing professional services firm committed to
                  helping its clients create value in their transactions. We are
                  one of the leading audit, tax, and consulting services firms.
                  Our strong affiliation with RSM International, one of the
                  largest global networks of accounting firms, gives us access
                  to the resources of a network of 64,000 employees in 120
                  countries.
                </p>
              </div>
            </div>
            <div className="relative h-full">
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
          <ResponsiveWrapper className="!max-w-4xl !mx-auto py-10 grid gap-4 leading-loose">
            <div className=" text-3xl sm:text-4xl z-10 relative font-semibold">
              Strategic value in every transaction...
            </div>
            <p>
              Our experienced professionals will work with you as partners to
              evaluate opportunities, identify and mitigate potential risks and
              create value in every transaction.
            </p>
            <p>
              Our client’s business is our business. This is the reason why we
              exist. We mobilise every resource at our disposal to deal with the
              issues. Advising on transactions is our forte. We consider the
              various business variables that guide decision-making identifying
              opportunities for value creation in the transaction cycle while
              being compliant with existing laws. Our clients, therefore, enjoy
              the benefit of receiving high-quality advice that is practical,
              proactive, actionable and timely.
            </p>
            <div className=" text-3xl sm:text-4xl z-10 relative font-semibold mt-10">
              Our mission
            </div>
            <p>
              Our mission is to empower our people and our clients on their
              journey of growth and success, providing the tools and support
              they need to thrive in a changing world
            </p>

            <div className=" text-3xl sm:text-4xl z-10 relative font-semibold mt-10">
              Value Delivered
            </div>
            <p>
              That is what we are about. The result of our business-minded
              approach to supporting our clients in every transaction is
              quantifiable savings for our clients. The words Value delivered
              guide every assignment we undertake. We consistently seek to
              deliver value to our clients in various ways relating to their
              transactions. We are with our clients at every stage of their
              transactions, ensuring they receive timely and actionable advice.
              Above all, we are never too busy with our clients. We take pride
              in our accessibility for the businessman who needs to act quickly
              to maximise the value of proactive decision-making.
            </p>
            <div className=" text-3xl sm:text-4xl z-10 relative font-semibold mt-10">
              Leading with Purpose and Precision
            </div>
            <p>
              Our leadership team brings a wealth of experience and a focus on
              what matters—your success. Through collaboration and a deep
              understanding of your industry, we design solutions that align
              with your goals and support sustainable growth.
            </p>
          </ResponsiveWrapper>
          <WhyChooseUs />
        </div>
      </MainContainer>
    </div>
  );
}
