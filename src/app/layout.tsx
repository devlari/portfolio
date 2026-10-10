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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FB6F92" },
    { media: "(prefers-color-scheme: dark)", color: "#B56FFB" },
  ],
};

// Aplica o tema antes da renderização para não piscar o tema errado.
// Usa a escolha salva; sem escolha, segue o tema do sistema.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
