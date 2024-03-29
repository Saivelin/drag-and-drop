import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../scss/globals.scss'
import Header from '@/components/Header/Header'
import { USER_DATA } from './layout.constants'
import Providers from '@/redux/prodiver'
import AddTask from '@/components/AddTask/AddTask'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Drag and drop',
    description: 'Drag and drop test'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Providers>
                    <Header user={USER_DATA} />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
