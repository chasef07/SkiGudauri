import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { QueryProvider } from '@/components/query-provider'
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
  title: 'Luxury Ski Chalet Rental - Gudauri, Georgia | Premium Alpine Retreat',
  description: 'Experience luxury at our exclusive ski chalet in Gudauri, Georgia. Premium amenities, stunning mountain views, and direct access to world-class ski slopes.',
  keywords: 'luxury ski chalet, Gudauri Georgia, ski rental, mountain resort, alpine retreat, luxury accommodation',
  openGraph: {
    type: 'website',
    title: 'Luxury Ski Chalet Rental - Gudauri, Georgia',
    description: 'Experience luxury at our exclusive ski chalet in Gudauri, Georgia.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Luxury Ski Chalet in Gudauri'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Ski Chalet Rental - Gudauri, Georgia',
    description: 'Experience luxury at our exclusive ski chalet in Gudauri, Georgia.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <QueryProvider>
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  )
}