import clsx from "clsx";
import * as React from "react";
import { Navbar } from "../nav/Navbar";
import { Footer } from "../organisms/Footer";
import { ResponsiveWrapper } from "./ResponsiveWrapper";
import { ContactUs } from "../molecules/ContactUs";

export interface IMainContainerProps {
  className?: string;
  childrenClassName?: string;
  children: React.ReactNode;
  showBlog?: boolean;
  hideContact?: boolean;
  hideCat?: boolean;
}

export function MainContainer({
  className,
  showBlog,
  children,
  hideCat,
  hideContact,
  childrenClassName,
}: IMainContainerProps) {
  return (
    <div className={clsx(className)}>
      {/* <ResponsiveWrapper> */}
      <Navbar />
      <div className={clsx("", childrenClassName)}>{children}</div>
      {!hideContact && <ContactUs />}
      <Footer />
    </div>
  );
}
