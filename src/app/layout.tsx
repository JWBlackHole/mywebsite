import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import NavigationBar from "@/components/NavigationBar";
import Footer        from "@/components/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "William Lin",
  description: "Website hosted by William Lin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/blackhole.ico" />
      </head>
      <body className={`flex flex-col items-center ${geistSans.variable} ${geistMono.variable}`}>
        <div className="fixed w-full">
          <NavigationBar/>
        </div>
        <div className="flex flex-col items-center pt-20 min-h-screen w-10/12 md:w-4/5 my-10 sm:my-20">
          {children}
        </div>
        <div className="w-full">
          <Footer/>
        </div>
      </body>
    </html>
  );
}
