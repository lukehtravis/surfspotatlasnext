import Header from '@/components/template/Header/Header'
import Footer from '@/components/template/Footer/Footer'
import '../globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='next-layout'>
        <Header isHomepage={true} />
        {children}
        <Footer isHomepage={true} />
      </body>
    </html>
  )
}
