import type { Metadata } from 'next'

import Header from '@/components/template/Header/Header'
import Footer from '@/components/template/Footer/Footer'
import '../globals.css'

export const metadata: Metadata = {
  title: 'The Surf Spot Atlas',
  description: 'The Surf Spot Atlas is a tool to help surfers find information about surf spots all over the world.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='next-layout'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
