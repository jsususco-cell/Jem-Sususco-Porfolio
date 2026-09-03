import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jemuel Sususco — Automation & AI Development Specialist",
  description:
    "Portfolio of Jemuel Sususco: AI automation specialist and AI development engineer. 27+ production builds spanning AI agents, n8n workflows, Quickbase systems, web apps and data tools.",
  keywords: [
    "n8n",
    "automation",
    "AI agents",
    "AI development",
    "Next.js",
    "workflow automation",
    "Jemuel Sususco",
  ],
  authors: [{ name: "Jemuel Sususco" }],
  openGraph: {
    title: "Jemuel Sususco — Automation & AI Development Specialist",
    description:
      "27+ production builds: AI agents, n8n workflows, Quickbase systems, web apps and data tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        {/* Apply saved theme before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-cream font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
