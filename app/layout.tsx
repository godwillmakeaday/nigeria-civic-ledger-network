import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
export const metadata: Metadata = { title: "Nigeria Civic Ledger", description: "State records, development and civic identity network for Nigeria." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>}
