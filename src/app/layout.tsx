import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./styles/global.scss";

const roboto = Roboto({
  weight: ["300", "500", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dreamforce 2025",
  description:
    "Join Gerent a TELUS Digital Company at Dreamforce 2025 in San Francisco, CA",
  keywords: ["Dreamforce 2025", "Gerent", "Salesforce", "TELUS Digital"],
  authors: [
    { name: "Wendy Diaz" },
    { name: "Josh", url: "https://nextjs.org" },
  ],
  metadataBase: new URL("https://dreamforce.gerent.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
