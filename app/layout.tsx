import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice Payment Chaser — Automate Overdue Invoice Follow-ups',
  description: 'Automatically send escalating email follow-ups for overdue invoices. Built for freelancers, consultants, and small agencies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="77a3f7c3-41b7-4dc8-ba86-c81ca087296a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
