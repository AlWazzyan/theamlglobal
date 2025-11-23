import clsx from "clsx";
import * as React from "react";

export interface IResponsiveWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export function ResponsiveWrapper({
  className,

  children,
}: IResponsiveWrapperProps) {
  return (
    <div className={clsx("mx-auto max-w-7xl px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
