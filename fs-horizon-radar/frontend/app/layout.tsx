import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'FS Horizon Radar',
  description: 'UK-first financial services horizon scanning dashboard'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
