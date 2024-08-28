import SmoothScroll from "@/components/common/scroll/SmoothScroll";
import Nav from "@/components/navbar/Nav";
import { MainContextProvider } from "@/context/MainContext";
import QueryClientContextProvider from "@/context/QueryClient";
import "@/styles/main.css";
import type { Metadata } from "next";
import { Orbitron, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { GLOBAL_SEO_DATA } from "@/utils/data/seo/seo";

const { title, description, thumbnail } = GLOBAL_SEO_DATA.home;

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    images: [thumbnail],
  },
};

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${orbitron.variable}`}>
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/kdotdev.png"
        />
      </head>
      <body className={`${grotesk.variable} ${orbitron.variable}`}>
        <QueryClientContextProvider>
          <MainContextProvider>
            <SmoothScroll>
              <Nav />
              {children}
            </SmoothScroll>
          </MainContextProvider>
        </QueryClientContextProvider>
      </body>
    </html>
  );
}
