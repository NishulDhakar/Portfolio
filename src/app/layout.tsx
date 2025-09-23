import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/next";
import Providers from "@/components/Theam/Providers";
// import { ParticlesDemo } from "@/components/common/Particlesbg";
import { createMetadata } from "@/lib/createMetadata";
import Footer from "@/components/layout/Footer";
import { Reveal } from "@/components/common/reveal";
import { ThemeProvider } from "next-themes";

export const metadata = createMetadata({
  description:
    "A perfect portfolio website that showcases skills and projects. Minimal and smooth microinteractions. Perfect for developers and designers.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning className="font-hanken-grotesk flex min-h-screen flex-col bg-neutral-100 antialiased dark:bg-black">
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
            <main className="flex-grow">{children}</main>
            <Analytics />
                    <Reveal> <Footer /></Reveal>
            {/* <div className="pointer-events-none fixed bottom-0 z-30 h-3/5 w-full bg-gradient-to-t from-white via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent" />
     */}

     </ThemeProvider>
          
        </body>
      </html>
    </ViewTransitions>
  );
}
