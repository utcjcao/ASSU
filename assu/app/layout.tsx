import type { Metadata } from "next";
import { Questrial, Bitter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-questrial",
});

const bitter = Bitter({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bitter",
});

export const metadata: Metadata = {
  title: "ASSU",
  description: "ASSU Course Unions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${questrial.variable} ${bitter.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
