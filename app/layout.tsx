import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M CINEMA | Movies. Stories. Beyond.",
  description: "A premium Malayalam cinema and entertainment destination.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}