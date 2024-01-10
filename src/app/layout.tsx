import "@/styles/globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({ weight: ["300", "400", "700"], subsets: ["latin"] });
const outfitClassName = outfit.className;

export const metadata: Metadata = {
  title: "Weather",
  description: "Created by DeniseLupe",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={outfitClassName}>{children}</body>
    </html>
  )
}
