import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { QueryProvider } from '@/components/query-provider'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Stay Where the Powder Falls | Luxury Ski Chalet - Gudauri, Georgia',
  description: 'Premium ski-in, ski-out chalet in Gudauri. Sleeps 12, panoramic mountain views, luxury amenities. Book your perfect alpine escape in the heart of the Caucasus Mountains.',
  keywords: 'luxury ski chalet, Gudauri Georgia, ski-in ski-out, mountain chalet rental, alpine luxury, Caucasus skiing, premium accommodation',
  openGraph: {
    type: 'website',
    title: 'Stay Where the Powder Falls | Luxury Ski Chalet - Gudauri',
    description: 'Premium ski-in, ski-out chalet in Gudauri. Sleeps 12, panoramic mountain views, luxury amenities.',
    url: 'https://alpine-luxury-gudauri.vercel.app',
    siteName: 'Alpine Luxury Chalet',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Luxury Ski Chalet in Gudauri with Mountain Views'
      }
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stay Where the Powder Falls | Luxury Ski Chalet - Gudauri',
    description: 'Premium ski-in, ski-out chalet in Gudauri. Sleeps 12, panoramic mountain views.',
    images: ['https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=630'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} dark`}>
      <body className={`${inter.className} custom-scrollbar`}>
        <ThemeProvider defaultTheme="dark" storageKey="chalet-theme">
          <QueryProvider>
            <TooltipProvider>
              {children}
              <Toaster />
            </TooltipProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}