import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { Instrument_Serif, Geist as GeistSans } from "next/font/google";
import { createMetadata } from "@/lib/createMetadata";
import Footer from "@/components/layout/Footer";
import { Reveal } from "@/components/common/reveal";
import { ThemeProvider } from "next-themes";
import HireMeButton from "@/components/sections/landingPage/Hireme";

export const metadata = createMetadata({
  description:
    "A perfect portfolio website that showcases skills and projects. Minimal and smooth microinteractions. Perfect for developers and designers.",
});

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
  className={`${geistSans.className} ${instrumentSerif.variable} flex min-h-screen flex-col bg-neutral-100 antialiased dark:bg-black`}
  suppressHydrationWarning
>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="absolute inset-0 -z-10">
              {/* <ParticlesDemo /> */}
            </div>

            <Navbar />
            <HireMeButton />
            <main className="flex-grow">{children}</main>
            <Analytics />
                    <Reveal> <Footer /></Reveal>
            {/* <div className="pointer-events-none fixed bottom-0 z-30 h-3/5 w-full bg-gradient-to-t from-white via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent" />
     */}

     </ThemeProvider>
          
        </body>
      </html>
  );
}
