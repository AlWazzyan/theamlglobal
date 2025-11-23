import * as React from "react";
import { ResponsiveWrapper } from "../templates/ResponsiveWrapper";
import { services } from "@/lib/data";

export interface IContactUsProps {}

export function ContactUs(props: IContactUsProps) {
  const links = [
    { name: "Open roles", href: "#" },
    { name: "Internship program", href: "#" },
    { name: "Our values", href: "#" },
    { name: "Meet our leadership", href: "#" },
  ];
  const stats = [
    {
      name: "We have firms in 120 countries, with a presence in each of the top 40 major business centres throughout the world.",
      value: "120+",
    },
    { name: "We have a global team of 65,000 people", value: "People" },
    {
      name: "We have over 900 offices across the Americas, Europe, MENA, Africa and Asia Pacific.",
      value: "Offices",
    },
    // { name: "Paid time off", value: "Unlimited" },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <ResponsiveWrapper>
        <div className="mx-auto lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Contact Us
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Reach out to us to get more information about any section of our
            product and services and to learn more about the steps required.
          </p>
        </div>
        <div className="mx-auto mt-10  lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {services
              .filter((item, i) => i < 4)
              .map((link) => (
                <a key={link.name} href={"contact-us"}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col gap-1">
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
              </div>
            ))}
          </dl>
        </div>
        {/* <div>
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Request Callback
          </h2>
        </div> */}
      </ResponsiveWrapper>
    </div>
  );
}
