import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Case Studies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
