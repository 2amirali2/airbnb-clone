import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./(root)/_components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone - Next.js 14 full-stack app",
  icons: {
    icon: "/airbnb.png"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="max-w-7xl mx-auto">
          {children}
          </main>
      </body>
    </html>
  )
}
