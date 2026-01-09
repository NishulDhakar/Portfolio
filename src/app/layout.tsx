import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { Instrument_Serif, Geist as GeistSans } from "next/font/google";
import { createMetadata } from "@/lib/createMetadata";
import { ThemeProvider } from "next-themes";
import MinimalHeader from "@/components/layout/MinimalNav";
import Container from "@/components/common/Container";
import Footer from "@/components/layout/Footer";
import AnalyticsTracker from "@/components/analytics/AnalyticsTracker";
import { JsonLd } from "@/components/seo/JsonLd";

import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.title,
  },
  description: siteConfig.description,
  image: siteConfig.ogImage,
  path: "/",
});

export { viewport } from "@/lib/viewport";


const geistSans = GeistSans({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-geist-sans'
})

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-instrument-serif'
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${instrumentSerif.variable} flex min-h-screen flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnalyticsTracker />
          <Container>
            <div className="flex min-h-screen flex-col">
              <MinimalHeader />
              <main className="flex-grow">{children}</main>
              <Analytics />
            </div>
            <Footer />
          </Container>
        </ThemeProvider>
      </body>
    </html>

  );
}
