import type { Metadata } from "next";
import { Bebas_Neue, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const heading = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "GuildKit — All-in-One Platform for Game Streamers",
  description:
    "Manage your subscribers, revenue, community, and analytics in one powerful dashboard built for gaming creators.",
  openGraph: {
    title: "GuildKit — All-in-One Platform for Game Streamers",
    description:
      "Manage your subscribers, revenue, community, and analytics in one powerful dashboard built for gaming creators.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
