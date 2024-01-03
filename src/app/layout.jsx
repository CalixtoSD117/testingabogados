import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Espinoza Asesores',
  description: 'Sistema de gestión de gestion para abogados de la firma Espinoza Asesores',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body suppressHydrationWarning={true} className={`${inter.className} bg-white`}>{children}</body>
    </html>
  )
}
