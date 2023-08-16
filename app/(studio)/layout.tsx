import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jonathan Projects',
  description: 'Some of my personal projects are listed here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children} </body>
    </html>
  )
}
