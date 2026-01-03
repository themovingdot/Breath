import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Breath - 呼吸',
  description: '意识唤醒装置 | A consciousness awakening device',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
