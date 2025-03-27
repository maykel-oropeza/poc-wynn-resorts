import type { Metadata } from "next";
import { ColorSchemeScript, DirectionProvider, mantineHtmlProps } from '@mantine/core';
import { ThemeProvider } from "@/providers//theme/themeProvider";
import { avanirLTStdFont, bigCaslonFont } from "@/providers/theme/fonts";
import { dir } from 'i18next'
import ReactQueryProvider from "@/providers/reactQuery/reactQueryProvider";
import i18nConfig from "../../../i18nConfig";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

export const metadata: Metadata = {
  title: "Wynn Resorts (Test)",
  description: "Wynn Resorts",
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} dir={dir(locale)} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={`${avanirLTStdFont.variable} ${bigCaslonFont.variable} `}>
        <ReactQueryProvider>
          <DirectionProvider detectDirection>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </DirectionProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
