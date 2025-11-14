import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Courage Erhabor · DevOps Engineer / SRE",
  description:
    "Portfolio of Courage Erhabor, DevOps Engineer and Site Reliability Engineer focusing on AWS, Terraform, Kubernetes, CI/CD, and observability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* LinkedIn profile badge script */}
        <Script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
          strategy="lazyOnload"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
