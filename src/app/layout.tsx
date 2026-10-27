import type { Metadata } from "next";
import { Dela_Gothic_One, DM_Sans, DynaPuff } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const delaGothicOne = Dela_Gothic_One({
  variable: "--font-dela-gothic-one",
  subsets: ["latin"],
  weight: "400",
});

const dynaPuff = DynaPuff({
  variable: "--font-dyna-puff",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "modalaiso — Portfolio",
  description: "Portfolio de modalaiso",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${dmSans.variable} ${delaGothicOne.variable} ${dynaPuff.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-primary-200">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}