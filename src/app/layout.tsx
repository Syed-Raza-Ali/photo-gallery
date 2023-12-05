import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Button } from '@/components/ui/button'
import { Heart } from '@/components/ui/icons/heart'
import Link from 'next/link'
import cloudinary from 'cloudinary'
import { Folder } from './albums/page'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'By SYED RAZA ALI',
}
async function SideMenu() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  }

  return (
    <div className="pb-12 w-1/5 text-white" >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Dashboard
          </h2>
          <div className="space-y-1">
            <Button asChild variant="ghost" className="w-full justify-start flex gap-2 font-bold">
              <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
                </svg>

                Home
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start flex gap-2 font-bold">
              <Link href="/favorites">
                <Heart />
                Favorites</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start flex gap-2 font-bold">
              <Link href="/albums">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>

                Albums
              </Link>
            </Button>
            {folders.map(folder => (
              <Button
                asChild
                className='ml-5 w-full justify-start flex gap-2 font-bold'
                key={folder.name}>
                <Link
                  className='pl-12'
                  href={`/albums/${folder.path}`}>
                  {folder.name} </Link>
              </Button>))}

          </div>
        </div>
      </div>
    </div>
  )
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <div >
          <div className="flex h-16 items-center px-0 text-white container mx-6 mr-1 font-bold">
            <Image src="/album.png" width="50" height="50" alt="logo icon" />
            Gallery
            <div className="ml-auto flex items-center space-x-4"> </div>
          </div>
        </div>
        <div className='flex'>
          <SideMenu />
          <div className='w-full px-4 pt-8 text-white'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
