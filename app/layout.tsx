import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'World In A City',
  description: 'A global documentary exploring how the FIFA World Cup transforms cities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
