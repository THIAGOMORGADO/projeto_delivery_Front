import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thiago Morgado!",
  description: "Estou criando um novo aplicativo maravilhoso",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>
        <div className="bg-slate-200 max-w-[480px] flex justify-center items-center mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
