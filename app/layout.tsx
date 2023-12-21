'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='dark'>
      <body className='p-5'>
        <Nav />
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
