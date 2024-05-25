import type { Metadata } from "next";
import { Lato, Great_Vibes } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
}); // 400 = regular; 700 = bold
const great_vibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-greatvibes",
});

// TODO: Add favicon

export const metadata: Metadata = {
  title: "Veronika & Stefan",
  description: "Hochzeits-Website von Veronika und Stefan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${lato.variable} ${great_vibes.variable} bg-softblush`}>
        {children}
      </body>
    </html>
  );
}
