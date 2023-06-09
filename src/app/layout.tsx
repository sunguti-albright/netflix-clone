import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Netflix',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
         <Head>
        <link rel="icon" href="/favicon.ico"> </link>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
