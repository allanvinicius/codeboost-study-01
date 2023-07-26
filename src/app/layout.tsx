import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "LP Codeboost - Itaú",
  description: "Estudo de nextjs e tailwind css",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
