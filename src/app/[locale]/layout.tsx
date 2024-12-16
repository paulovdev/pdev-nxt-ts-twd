import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import TopNav from "@/components/topNav";
import Nav from "@/components/nav";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';


import "./globals.css";


export const metadata: Metadata = {
  title: "paulovdev - portfolio",
  description: "Generated by create next app",
  icons: {
    icon: '/photo.webp',
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
            <ThemeProvider>
              <Nav />
              <TopNav />
              {children}
            </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
