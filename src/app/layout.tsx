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
  title: "Blackhole Lin",
  description: "Website hosted by Blackhole Lin",
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
      <body className={`flex flex-col ${geistSans.variable} ${geistMono.variable}`}>
        <div className="fixed w-full">
          <NavigationBar/>
        </div>
        <div className="pt-20">
          {children}
        </div>
        <div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
