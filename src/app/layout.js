import './globals.css'
import IntroGate from '@/components/IntroGate'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'SimpulSirkular',
  description: 'Platform pelaporan dan penyaluran limbah organik yang lebih rapi, cepat, dan mudah dipakai.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen text-gray-900 antialiased">
        <IntroGate>
          <Navbar />
          <main>{children}</main>
        </IntroGate>
      </body>
    </html>
  )
}
