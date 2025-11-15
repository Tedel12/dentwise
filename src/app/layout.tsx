import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import UserSync from "@/components/UserSync";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dentwise",
  description: "Your voice assitant for a better appointement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary:"#e78a53",
          colorBackground: "#f3f4f6",
          colorText: "#111827",
          colorTextSecondary: "#6B7280",
          colorInputBackground: "#F3F4F6"
        }
      }}
    >
      <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <UserSync />
        {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
