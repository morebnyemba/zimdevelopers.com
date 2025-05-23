import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zim Developers Community",
  description: "An open-source community for developers in Zimbabwe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${inter.className} h-full antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
