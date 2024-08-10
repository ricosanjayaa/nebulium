import Footer from "@/components/Footer";
import { Familjen_Grotesk } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import type { Metadata } from "next";

const familjen = Familjen_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rico Sanjaya",
  description: "Rico Sanjaya's personal portfolio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn(familjen.className, "flex flex-col gap-12 min-h-screen w-full max-w-xl min-w-[425px] mx-auto px-8 py-12")}>
        <main className="flex-1 flex flex-col gap-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
