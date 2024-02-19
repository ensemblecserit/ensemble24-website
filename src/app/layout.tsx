import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
