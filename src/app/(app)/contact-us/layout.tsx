import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
