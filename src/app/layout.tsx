import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "Laura Fenoglio Emprendimientos",
    template: `%s - Laura Fenoglio | Emprendimientos Inmobiliarios en la Patagonia Argentina`,
  },
  description:
    "Emprendimientos Inmobiliarios de Laura Fenoglio en la Patagonia Argentina",
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon-16x16.png",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Head>
        <title>Laura Fenoglio Emprendimientos</title>
        <meta
          name="description"
          content="Emprendimientos Inmobiliarios de Laura Fenoglio en la Patagonia Argentina"
        />

        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
      </Head>
      <body className={""}>{children}</body>
    </html>
  );
}
