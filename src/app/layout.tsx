import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import TopAnnouncement from "@/app/components/Navbar/TopAnnouncement";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Providers from "./redux/Providers";
import { ThemeProvider } from "./components/Theme/ThemeToggler";
import Script from "next/script";
import { Providers as AuthProviders } from './authProviders'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hackathon Ecommerce",
  description: "Hackathon ecommerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head className="md:p-8 lg:p-11 `">
      </head>
      <body className={inter.className}>

        <Providers >
        <AuthProviders>
          <ThemeProvider
            attribute="class"
            // defaultTheme="system"
            // enableSystem
            // disableTransitionOnChange
            >
            <TopAnnouncement />
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </AuthProviders>
            </Providers>
      </body>
    </html>
  )
}
