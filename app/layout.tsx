import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The World in a City | A Global Documentary Series',
  description: 'A premium documentary exploring how the FIFA World Cup transforms cities through football, food, business, and identity.',
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
