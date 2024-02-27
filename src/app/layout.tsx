import type { Metadata } from "next";
import "./globals.css";
import Fonts from "@/components/Fonts";
import SmoothScrolling from "@/components/SmoothScrolling";
import Popups from "@/components/Popups";

export const metadata: Metadata = {
  title: "Ensemble | CSE RIT Dept Fest",
  description:
    "Gear up for an electrifying tech extravaganza! Ensemble, the department fest organized by the Computer Science and Engineering department of RIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Fonts />
      </head>
      <body>
        <Popups />
        <div className="noise"></div>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
