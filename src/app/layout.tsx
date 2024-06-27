import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thiago Morgado!",
  description: "Estou criando um novo aplicativo maravilhoso",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>{children}</body>
      <ToastContainer />
    </html>
  );
}
