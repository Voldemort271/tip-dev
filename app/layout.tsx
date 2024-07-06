import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/nav/navbar";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TIP '24 | IIT Mandi",
  description: "Some description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <div className="w-full h-20 fixed top-0 z-50">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
