import type { Metadata } from 'next'
import '@/ui/globals.css'
import { Nunito} from 'next/font/google'


export const nunito = Nunito({
  subsets: ['latin'],
  //!TODO: cannot apply inter.className if variable is defined ????
  // variable: '--font-nunito'
})

export const metadata: Metadata = {
  title: 'Day in a a life',
  description:"this is the description"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  

  return (
    <html lang="en"
      className={`${nunito.className} text-textPrimary`}
    >
      <body className={"min-h-screen "}>
        {children}
      </body>
    </html>
  )
}
  // export const metadata: Metadata = {
  //   title: 'root',
  //   description: 'This is the Root of The Application',
  // }
