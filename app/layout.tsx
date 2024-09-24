import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesComponent from "./components/particles";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Persista",
  description: "Generated by create next app",

  
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <CircleAnimation /> */}
        <ParticlesComponent id="particles" />
        <div className="page-container">
          <Navbar />
          <main className="content-wrapper">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
