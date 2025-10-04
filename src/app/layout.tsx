import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Bentolio Portfolio',
  description: 'Portfolio website for Cris Rayaan',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
