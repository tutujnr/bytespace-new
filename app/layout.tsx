import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "ByteSpace – Online Learning Marketplace", description: "Learn design, development, business and more from expert creators." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
