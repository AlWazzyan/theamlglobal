import * as React from "react";
import { ResponsiveWrapper } from "../templates/ResponsiveWrapper";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { GoDot } from "react-icons/go";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";

export interface IIndustriesWeServeProps {}

export function IndustriesWeServe(props: IIndustriesWeServeProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState<number>(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  const industries = [
    {
      name: "Manufacturing and retail",
      desc: "Deliver strategic solutions for agriculture, retail, and manufacturing industries to drive growth and adapt to evolving consumer needs",
      img: "https://images.unsplash.com/photo-1593106410288-caf65eca7c9d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Essential Services",
      desc: "Empower businesses in hospitality, retail, and professional services with innovative solutions for growth and transformation.",
      img: "https://images.unsplash.com/photo-1589793463357-5fb813435467?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Energy, Mining & Industrials",
      desc: "Streamline compliance and optimize operations in the energy and mining sectors with expert advisory, audit, and tax services.",
      img: "https://images.unsplash.com/photo-1523848309072-c199db53f137?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Financial Services",
      desc: "Enhance operational resilience and mitigate risks with tailored solutions for banking, investment, and insurance industries.",
      img: "https://plus.unsplash.com/premium_photo-1679921782753-296ede036565?q=80&w=2982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  console.log(current);
  return (
    <div className="relative overflow-hidden">
      <ResponsiveWrapper>
        <div className="text-white">
          <div className="mt-6 sm:mt-8 w-full py-20 ">
            <div className=" text-3xl sm:text-5xl z-10 relative">
              Industries we serve
            </div>
            <Image
              alt=""
              fill
              className=" object-cover brightness-50"
              src={industries[current].img}
            />
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
              }}
              className="w-full mt-8"
            >
              <CarouselContent className="max-w-full ml-0 !p-0">
                {industries.map((item, index) => {
                  return (
                    <CarouselItem key={index} className=" basis-1/1 !p-0">
                      <div className="relative z-10">
                        <h1 className="text-xl">{item.name}</h1>
                        <h1 className="mt-4 text-sm">{item.desc}</h1>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              {/* <div className=" mt-14 flex justify-center"> */}
              <Button
                variant="outline"
                className=" !py-8 rounded-2x !px-20 !mx-auto mt-10 bg-transparent text-white"
              >
                Discover More
                <IoIosArrowRoundForward size="2rem" />
              </Button>
              {/* </div> */}
              <div className="flex mt-20 gap-4 justify-center">
                <div
                  onClick={() => {
                    api?.scrollPrev();
                  }}
                  className="p-1 rounded-full border"
                >
                  <RxCaretLeft className="text-white w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]" />
                </div>
                <div
                  onClick={() => {
                    api?.scrollNext();
                    // console.log(api.);
                  }}
                  className="p-1 rounded-full border"
                >
                  <RxCaretRight className="text-white w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]" />
                </div>
              </div>
            </Carousel>
          </div>
          {/* {industries.map((item, i) => {
            return (
              <div key={i} className="">
                <Image alt="" fill src={item.img} />
                <div className="p-4 relative z-50">
                  <h1>{item.name}</h1>
                </div>
              </div>
            );
          })} */}
        </div>
      </ResponsiveWrapper>
    </div>
  );
}
