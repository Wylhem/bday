import type { Metadata } from 'next'
import { Molengo } from 'next/font/google'
import './globals.css'

const molengo = Molengo({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={molengo.className}>{children}</body>
    </html>
  )
}
