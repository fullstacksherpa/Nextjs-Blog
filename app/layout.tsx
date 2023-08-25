import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

export const metadata = {
  title: "Ongchen's Blog",
  description: 'Blog written by Ongchen Sherpa with the article generated through AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-700'>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
