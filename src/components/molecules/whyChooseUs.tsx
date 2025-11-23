"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaFile, FaLock, FaShield } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
export interface IWhyChooseUsProps {
  className?: string;
}

interface IITem {
  icon: any;
  name: string;
  text: string;
  image: any;
}
export function WhyChooseUs({ className }: IWhyChooseUsProps) {
  const router = useRouter();

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      // console.log("current did not change");
      return;
    }
    // console.log("current changed");
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      // console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const items: IITem[] = [
    {
      icon: FaFile,
      name: "Legal Company",
      text: "Our company conducts absolutely legal activities in the legal field. We are certified to operate investment business, we are legal and safe",
      image:
        "https://plus.unsplash.com/premium_photo-1661329930662-19a43503782f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: FaLock,
      name: "High reliability",
      text: "We are trusted by a huge number of people. We are working hard constantly to improve the level of our security system and minimize possible risks.",
      image:
        "https://plus.unsplash.com/premium_photo-1661906789703-a25a1e53180e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      icon: FaShield,
      name: "Security",
      text: "We are using one of the most experienced, professional, and trusted DDoS Protection and mitigation provider.",
      image:
        "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=2988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: MdOutlineSupportAgent,
      name: "24/7 Support",
      text: "We provide 24/7 customer support through e-mail and telegram. Our support representatives are periodically available to elucidate any difficulty.",
      image:
        "https://plus.unsplash.com/premium_photo-1679429320974-ab1de58bcad9?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div
      className={`${className} lg:px-[7rem] p-4 sm:px-10 text-center  bg-white border-y-[1px] py-20 sm:py-28 font-lato `}
    >
      <div className="!max-w-[80rem] mx-auto ">
        <h1 className="text-4xl lg:text-5xl font-semibold">WHY CHOOSE US?</h1>
        <p className="text-xl text-gray-500 mt-8 mx-8">
          More than one thousand happy clients around the world have accessed
          our award-winning ecosystem.
        </p>

        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className={` mt-8`}
          // onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="">
            {/* {Array.from({ length: 5 }).map((_, index) => ( */}

            {items.map((item: IITem, i: number) => {
              const Icon = item.icon;
              return (
                <CarouselItem
                  onClick={() => {
                    // router.push(`/${banner.domain?.name}`);
                    // console.log("i ran");
                  }}
                  className="w-full relative  text-left group sm:max-w-[20rem] lg:max-w-[30rem] "
                  key={i}
                >
                  <div className="h-[15rem] relative group-hover:scale-[1.05] transition-all duration-700">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className=""
                      objectFit="cover"
                      fill
                    />
                    <div className="group-hover:text-gray-100 group-hover:bg-mainOrange transition-all duration-500 absolute -bottom-[22%] left-8 bg-gray-100 p-4 rounded-full border-white border-[1rem] text-mainOrange ">
                      <Icon className="" size="2.5rem" />
                    </div>
                  </div>

                  <div className="px-4 py-10 mt-4">
                    <h1 className="text-xl font-extrabold">{item.name}</h1>
                    <p className="mt-3 text-gray-500">{item.text}</p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <div className="flex items-center justify-center gap-5 mt-12">
          {items.map((item: any, i: number) => {
            // console.log("current", current);
            // console.log("i", i);
            return (
              <div
                key={i}
                className={`rounded-full  h-[12px] aspect-square ${
                  current - 1 == i ? "bg-mainOrange" : "bg-gray-400"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
