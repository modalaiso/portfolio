import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: "800",
});

export const metadata: Metadata = {
  title: "modalaiso — Portfolio",
  description: "Portfolio de modalaiso",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${syne.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}