import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-sans"
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif"
})

export const metadata: Metadata = {
  title: 'SYO Energy Solutions | Solar & Backup Power Systems',
  description: 'Fix your power problems permanently. Premium solar installation, backup power systems, electrical wiring, and smart home integration in Nigeria. No fuel. No noise. Just stable, smart energy.',
  keywords: ['solar installation', 'backup power', 'inverter', 'battery', 'electrical wiring', 'smart home', 'Lagos', 'Nigeria', 'energy solutions'],
  openGraph: {
    title: 'SYO Energy Solutions | Solar & Backup Power Systems',
    description: 'Fix your power problems permanently. Premium solar installation, backup power systems, and smart home integration.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
