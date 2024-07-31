import type { Metadata } from "next";
import { nunito_sans } from "./fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Tunsuda Portfolio",
  description: "About Tunsuda Boonloed: Professional Experience, Skills, Certifications, and More",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito_sans.variable}>{children}</body>
    </html>
  );
}
