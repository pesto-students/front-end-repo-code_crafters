import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Evento",
  description: "Explore nearby events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-[65px] bg-[#F5F5F5] pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
