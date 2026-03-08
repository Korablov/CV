import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Volodymyr Korablov — Heavy-Lift Master",
  description:
    "Experienced Heavy-Lift Master with 13+ years commanding heavy-lift operations worldwide. Specializing in project cargo and oversized shipments.",
  openGraph: {
    title: "Volodymyr Korablov — Heavy-Lift Master",
    description:
      "13+ years commanding heavy-lift operations worldwide",
    type: "website",
    url: "https://korablov.cv",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
