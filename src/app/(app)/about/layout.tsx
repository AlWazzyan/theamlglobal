import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About AML Global",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
