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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var d = document;
                var e = d.documentElement;
                try {
                  var theme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var effectiveTheme = theme === 'system' || !theme ? systemTheme : theme;
                  
                  if (effectiveTheme === 'dark') {
                    e.classList.add('dark');
                    e.style.cssText = 'background-color: oklch(0 0 0) !important; color: oklch(0.985 0 0) !important;';
                  } else {
                    e.classList.remove('dark');
                    e.style.cssText = 'background-color: oklch(0.985 0 0) !important; color: oklch(0.145 0 0) !important;';
                  }
                } catch (err) {
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  if (systemTheme === 'dark') {
                    e.style.cssText = 'background-color: oklch(0 0 0) !important; color: oklch(0.985 0 0) !important;';
                  } else {
                    e.style.cssText = 'background-color: oklch(0.985 0 0) !important; color: oklch(0.145 0 0) !important;';
                  }
                }
              })();
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html {
                background-color: oklch(0.985 0 0);
                color: oklch(0.145 0 0);
              }
              html.dark {
                background-color: oklch(0 0 0);
                color: oklch(0.985 0 0);
              }
              @media (prefers-color-scheme: dark) {
                html:not(.dark) {
                  background-color: oklch(0 0 0);
                  color: oklch(0.985 0 0);
                }
              }
            `,
          }}
        />

        {/* <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" /> */}
        <JsonLd type="website" />
        <JsonLd type="person" />
      </head>
      <body
        className={`${geistSans.className} ${instrumentSerif.variable} flex min-h-screen flex-col`}
        suppressHydrationWarning
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
