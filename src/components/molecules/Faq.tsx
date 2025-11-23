"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { MdClose } from "react-icons/md";
export default function FAQ() {
  const [selected, setselected] = useState<any | number>(0);
  const arr = [
    {
      no: "01",
      title: "What do middle market leader need to know about ESG?",
      text: "Middle market business leaders will need to understand that ESG (Environmental, Social, and Governance) factors are increasingly impacting the business landscape. These considerations affect a company's reputation, access to investment, and risk profile. To thrive, businesses should aim to integrate ESG practices and goals within their business processes; engage with stakeholders transparently and regularly; continuously assess and adapt their ESG strategies to remain competitive; and keep abreast of the evolving ESG regulatory environment.",
    },
    {
      no: "02",
      title: "What do middle market leader need to know about ESG?",
      text: "Middle market business leaders will need to understand that ESG (Environmental, Social, and Governance) factors are increasingly impacting the business landscape. These considerations affect a company's reputation, access to investment, and risk profile. To thrive, businesses should aim to integrate ESG practices and goals within their business processes; engage with stakeholders transparently and regularly; continuously assess and adapt their ESG strategies to remain competitive; and keep abreast of the evolving ESG regulatory environment.",
    },
    {
      no: "03",
      title: "What do middle market leader need to know about ESG?",
      text: "Middle market business leaders will need to understand that ESG (Environmental, Social, and Governance) factors are increasingly impacting the business landscape. These considerations affect a company's reputation, access to investment, and risk profile. To thrive, businesses should aim to integrate ESG practices and goals within their business processes; engage with stakeholders transparently and regularly; continuously assess and adapt their ESG strategies to remain competitive; and keep abreast of the evolving ESG regulatory environment.",
    },
    {
      no: "04",
      title: "What do middle market leader need to know about ESG?",
      text: "Middle market business leaders will need to understand that ESG (Environmental, Social, and Governance) factors are increasingly impacting the business landscape. These considerations affect a company's reputation, access to investment, and risk profile. To thrive, businesses should aim to integrate ESG practices and goals within their business processes; engage with stakeholders transparently and regularly; continuously assess and adapt their ESG strategies to remain competitive; and keep abreast of the evolving ESG regulatory environment.",
    },
    {
      no: "05",
      title: "What do middle market leader need to know about ESG?",
      text: "Middle market business leaders will need to understand that ESG (Environmental, Social, and Governance) factors are increasingly impacting the business landscape. These considerations affect a company's reputation, access to investment, and risk profile. To thrive, businesses should aim to integrate ESG practices and goals within their business processes; engage with stakeholders transparently and regularly; continuously assess and adapt their ESG strategies to remain competitive; and keep abreast of the evolving ESG regulatory environment.",
    },
    {
      no: "06",
      title: "What do middle market leader need to know about ESG?",
      text: "Middle market business leaders will need to understand that ESG (Environmental, Social, and Governance) factors are increasingly impacting the business landscape. These considerations affect a company's reputation, access to investment, and risk profile. To thrive, businesses should aim to integrate ESG practices and goals within their business processes; engage with stakeholders transparently and regularly; continuously assess and adapt their ESG strategies to remain competitive; and keep abreast of the evolving ESG regulatory environment.",
    },
    {
      no: "07",
      title: "What do middle market leader need to know about ESG?",
      text: "Middle market business leaders will need to understand that ESG (Environmental, Social, and Governance) factors are increasingly impacting the business landscape. These considerations affect a company's reputation, access to investment, and risk profile. To thrive, businesses should aim to integrate ESG practices and goals within their business processes; engage with stakeholders transparently and regularly; continuously assess and adapt their ESG strategies to remain competitive; and keep abreast of the evolving ESG regulatory environment.",
    },
    {
      no: "08",
      title: "What do middle market leader need to know about ESG?",
      text: "Middle market business leaders will need to understand that ESG (Environmental, Social, and Governance) factors are increasingly impacting the business landscape. These considerations affect a company's reputation, access to investment, and risk profile. To thrive, businesses should aim to integrate ESG practices and goals within their business processes; engage with stakeholders transparently and regularly; continuously assess and adapt their ESG strategies to remain competitive; and keep abreast of the evolving ESG regulatory environment.",
    },
  ];
  return (
    <div className="p-2 py-8 lg:px-[7rem] lg:py-20    font-lato ">
      <h1 className=" text-3xl md:text-5xl font-semibold text-center">FAQ</h1>
      <p className=" text-gray-500 mt-4 text-center md:text-lg md:mt-10">
        Freqently Asked Questions
      </p>

      <div className="mt-8 md:mt-10">
        <div className=" max-w-[60rem]  mx-auto rounded-3xl border-4 border-[#181818] overflow-hidden ">
          {arr.map(({ text, title, no }, index) => {
            return (
              <motion.div
                key={index}
                animate={{
                  scale: selected == index ? 1.03 : 1,
                  transition: { ease: "easeInOut", duration: 0.3 },
                }}
                className={`py-6 md:py-10 px-4 md:px-8 flex flex-row ${
                  index === 0 && "border-t-2 border-[#181818] rounded-t-2xl"
                } ${
                  index === 4 && "border-b-2 border-[#181818] rounded-b-2xl"
                } border-b-[#0D0D0D60] border-b-2 ${
                  selected === index
                    ? "bg-mainOrange/20 shadow-2xl border-2 border-[#181818]"
                    : "bg-white"
                }`}
              >
                <p
                  className={`mr-2 md:mr-5 text-2xl md:text-3xl font-semibold ${
                    selected === index ? "text-black" : "text-gray-500"
                  }`}
                >
                  {no}
                </p>
                <div>
                  <h3
                    className={`text-lg md:text-2xl mb-4 text-black w-[100%]`}
                  >
                    {title}
                  </h3>
                  {selected == index && (
                    <motion.p
                      // key={selected}
                      // initial={{ y: -100 }}
                      // animate={{ y: 0 }}
                      className={`text-[#0D0D0D90] leading-6 md:leading-8 md:w-[80%] 
                                        ${
                                          selected === index ? "block" : "block"
                                        }
                                        `}
                    >
                      {text}
                    </motion.p>
                  )}
                </div>
                <button
                  onClick={() => {
                    if (selected === index) {
                      setselected(null);
                    } else {
                      setselected(index);
                    }
                  }}
                  className={`${
                    selected === index ? "bg-black" : "bg-[#F0F0F0]"
                  } rounded-full p-2 ml-auto mb-auto`}
                >
                  {selected === index ? (
                    <MdClose color="#fff" size={24} />
                  ) : (
                    <GoPlus color="#000" size={24} />
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="bg-gray-100 px-6 md:px-10 py-4 text-sm rounded-lg text-gray-500 border  max-w-[60rem]  mx-auto  mt-4 md:mt-10">
        <p>
          For general inquiries please contact{" "}
          <a className="text-mainOrange" href="mailto:legal@amlglobal.com">
            legal@amlglobal.com
          </a>
        </p>
      </div>
    </div>
  );
}
