import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Smart Tech Guide | Design that thinks",
  description:
    "Smart Tech Guide is an independent digital studio combining UI/UX, web design, development and graphic design.",
  openGraph: {
    title: "Smart Tech Guide | Design that thinks",
    description:
      "An independent digital studio creating distinctive digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="m-0 min-h-full overflow-x-hidden bg-[var(--background)] font-sans text-[var(--foreground)] antialiased">{children}</body>
    </html>
  );
}
