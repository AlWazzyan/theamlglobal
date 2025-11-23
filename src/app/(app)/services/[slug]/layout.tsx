import { services } from "@/lib/data";
import type { Metadata, ResolvingMetadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = await params.then((data) => data.slug);
  const service = services.find((item) => item.slug == slug);
  const previousImages = (await parent).openGraph?.images || [];
  if (service) {
    return {
      title: `${service.header}`,
      description: service.header,
      keywords: `${service.header}`,
      openGraph: {
        images: ["/some-specific-page-image.jpg", ...previousImages],
      },
    };
  } else {
    return { title: "Not found", description: "Page not found" };
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="">{children}</div>;
}
