import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MTYSUN Auto Parts",
  description: "Advanced website and CMS prototype for MTYSUN."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
