"use client";
import { CaseStudies } from "@/components/molecules/CaseStudies";
import { IndustriesWeServe } from "@/components/molecules/IndustriesWeServe";
import { WhyChooseUs } from "@/components/molecules/whyChooseUs";
import { SideMenu } from "@/components/nav/SideMenu";
import { MainContainer } from "@/components/templates/MainContainer";
import { ResponsiveWrapper } from "@/components/templates/ResponsiveWrapper";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { services } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { GoDot } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export default function Home() {
  const [api, setApi] = React.useState<CarouselApi>();
  return (
    <div className="">
      <MainContainer>
        <ResponsiveWrapper className=" relative">
          <div className=" absolute z-0 w-full h-full grid grid-cols-2 grid-rows-7">
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
            <div className="border border-gray-50" />
          </div>
          <div className="md:grid grid-cols-2">
            <div className="relative isolate px-6  lg:px-8">
              <div className="mx-auto max-w-2xl pt-32 sm:py-32">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  {/* <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Announcing our next round of funding.{" "}
                  <a href="#" className="font-semibold text-indigo-600">
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div> */}
                </div>

                <div className="text-center">
                  <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                    Elevating every transaction to its full potential
                  </h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    AML Global is a powerful Network of assurance, tax and consulting experts with
                    offices all over the world. As an integrated team, we share skills, insight and
                    resources, as well as a client-centric approach that’s based on a deep
                    understanding of your business.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                      href="/services"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      View services
                    </Link>
                    <Link href="/contact-us" className="text-sm/6 font-semibold text-gray-900">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative my-32 sm:my-32">
              <Image
                className="brightness-50 rounded-full hover:scale-110 duration-300 "
                alt=""
                fill
                src={
                  "https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=2878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              />
            </div>
          </div>
          <div className="md:grid grid-cols-2">
            <div className="relative my-32 sm:my-32 hover:scale-110 duration-300 ">
              <Image
                className="brightness-50 rounded-[3rem] object-cover"
                alt=""
                fill
                src={
                  "https://images.unsplash.com/photo-1726065235203-4368c41c6f19?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              />
            </div>
            <div className="relative isolate px-6  lg:px-8">
              <div className="mx-auto max-w-2xl py-12 sm:py-32">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  {/* <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Announcing our next round of funding.{" "}
                  <a href="#" className="font-semibold text-indigo-600">
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div> */}
                </div>

                <div className="text-center">
                  <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                    Escrow Services
                  </h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    Secure your transactions with a neutral, trusted third-party. Ensure funds are
                    only released when all conditions are met, giving peace of mind to both parties.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    {/* <Link
                      href="/services"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      View services
                    </Link> */}
                    <Link href="/contact-us" className="text-sm/6 font-semibold text-gray-900">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ResponsiveWrapper>
        <div className="!bg-gray-50 backdrop-opacity-0 text-black py-14">
          <ResponsiveWrapper className="">
            <h2 className="text-3xl font-semibold tracking-tight  sm:text-5xl text-center">
              Comprehensive solutions for your business needs
            </h2>
            <div className="mt-6 sm:mt-8 w-full ">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                setApi={setApi}
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent className="max-w-full ml-0">
                  {services.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="p-4 bg-white rounded-lg text-neutral-600 border basis-1/1 sm:basis-1/2 md:basis-1/3 lg:md:basis-1/4 sm:mr-2"
                    >
                      <div className="flex gap-2 items-center">
                        <GoDot />
                        <div className="text-sm">{item.header}</div>
                      </div>
                      <div className="mt-20 text-2xl">{item.name}</div>
                      <div className="mt-4 text-md text-pretty  sm:text-xl/8">{item.desc}</div>
                      <Button variant="outline" className="w-full mt-20 !py-8 rounded-2xl ">
                        Discover More
                        <IoIosArrowRoundForward size="2rem" />
                      </Button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious />
              <CarouselNext /> */}
                <div className="flex mt-3 gap-2">
                  <div
                    onClick={() => {
                      api?.scrollPrev();
                    }}
                    className="p-1 rounded-full border"
                  >
                    <RxCaretLeft className="text-zinc-400 w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]" />
                  </div>
                  <div
                    onClick={() => {
                      api?.scrollNext();
                    }}
                    className="p-1 rounded-full border"
                  >
                    <RxCaretRight className="text-zinc-400 w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]" />
                  </div>
                </div>
              </Carousel>
            </div>
          </ResponsiveWrapper>
        </div>
        <CaseStudies />
        <IndustriesWeServe />
        <WhyChooseUs />
      </MainContainer>
    </div>
  );
}
