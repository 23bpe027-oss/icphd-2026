import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ICPHD 2026 | Petroleum, Hydrogen & Decarbonization",
  description:
    "4th International Conference on Petroleum, Hydrogen & Decarbonization — December 11–13, 2026 at PDEU, Gandhinagar.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
