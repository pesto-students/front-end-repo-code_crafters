import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import clsx from "clsx";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Evento",
  description: "Explore nearby events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "text-[14px]")}>
        <NextTopLoader color="#DC2626" showSpinner={false} />
        <Navbar />
        <main className="pt-[65px] pb-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
