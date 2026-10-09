import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Larissa Sousa - Desenvolvedora Full-Stack",
  description:
    "Desenvolvedora Full-Stack com experiência em diversas linguagens e frameworks. Conheça meus projetos!",
};

export const viewport: Viewport = {
  themeColor: "#FB6F92",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
