import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Jemuel Sususco — Automation & Full-Stack Developer",
  description:
    "Portfolio of Jemuel Sususco: AI automation specialist and full-stack developer. 16+ production n8n workflows spanning AI agents, document automation, data scraping, and ops integrations.",
  keywords: [
    "n8n",
    "automation",
    "AI agents",
    "full-stack developer",
    "Next.js",
    "workflow automation",
    "Jemuel Sususco",
  ],
  authors: [{ name: "Jemuel Sususco" }],
  openGraph: {
    title: "Jemuel Sususco — Automation & Full-Stack Developer",
    description:
      "16+ production automation workflows: AI agents, document pipelines, data scraping, and SaaS integrations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
