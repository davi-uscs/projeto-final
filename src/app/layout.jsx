import { Inter } from "next/font/google";
import "./globals.css";
import { Menu } from "@/components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Projeto Final",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ToastContainer />
        <Menu />
        <div className="container mx-auto p-10">{children}</div>
      </body>
    </html>
  );
}
