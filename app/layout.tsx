import type { Metadata } from "next";
import { Questrial, Bitter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
      <body
        className={`${questrial.variable} ${bitter.variable} antialiased flex flex-col min-h-screen `}
      >
        <Header />

        <main className="flex-1 flex justify-center px-4 bg-gray-lighter">
          <div className="w-full max-w-screen-lg flex flex-col p-4">
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
