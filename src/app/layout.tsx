import type { Metadata } from 'next'

import { ThemeProvider } from '@/shared/components/theme-provider'
import { GeistSans } from 'geist/font/sans'
import { Navbar } from '@/modules/navbar'
import { Footer } from '@/modules/footer'
import { cn } from '@/shared/lib'
import '@/app/globals.css'

export const metadata: Metadata = {
  description: 'get info about your favorite artists and albums',
  title: 'lemniscate | music'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={cn(GeistSans.className, 'dark:bg-base-black flex h-screen flex-col')}>
        <ThemeProvider disableTransitionOnChange defaultTheme="dark" attribute="class" enableSystem>
          <Navbar />
          <main className="flex flex-1 flex-col px-4 lg:px-[15%]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
