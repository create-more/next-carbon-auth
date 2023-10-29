import './globals.scss'
import { Providers } from './providers';

export const metadata = {
  title: 'next-carbon-auth',
  description: 'Base Next.js app with Carbon Design and Auth.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
