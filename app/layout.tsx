import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/ThemeProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EslamMohamed",
  description: "Adimn dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} storageKey="dashboard-theme">
        <Navbar />
        <div className="flex">
          <div className="hidden md:block h-[calc(100vh-100px)] w-[300px] ">
            <Sidebar />
          </div>
          <div className="w-full md:max-w-[1140px] p-5 ">{children}</div>
        </div>
        <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
