import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MySmart App",
  description: "Login and Signup Demo with Next.js + TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-black font-sans min-h-screen`}
      >
        <header className="w-full bg-white dark:bg-gray-900 shadow-sm py-4 px-8 flex justify-between items-center">
          <h1 className="text-xl font-bold text-black dark:text-white">
            MySmart App
          </h1>
          <nav className="flex gap-4">
            <Link
              href="/login"
              className="text-black dark:text-white hover:underline"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-black dark:text-white hover:underline"
            >
              Signup
            </Link>
          </nav>
        </header>
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
