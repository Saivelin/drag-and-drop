import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../scss/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Drag and drop',
  description: 'Drag and drop test',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
