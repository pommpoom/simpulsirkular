import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'SimpulSirkular',
  description: 'Platform pelaporan dan penyaluran limbah organik yang lebih rapi, cepat, dan mudah dipakai.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
