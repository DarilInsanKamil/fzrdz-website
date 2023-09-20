"use client"
import './globals.css'
import { Medsos, Navigation, VideoPlayer, Modal, Sidebar } from '@/components'
import { Inter } from 'next/font/google'
import { Bakbak_One } from 'next/font/google'
import { TourRouter, DiscoRouter, MerchRouter } from '@/router'
import { useRouter } from 'next/navigation'
import styles from './layout.module.css'
import { Suspense, useState } from 'react'
import { useWindowSize } from '@/utils/screen_size'
import Tour from './page'
import Disocgraphy from './discography/page'
import Merch from './merch/page'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const bak_one = Bakbak_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-bakone',
})


export default function RootLayout({ children }) {
  const router = useRouter(); 
  console.log(router)
  const [showSidebar, setShowSidebar] = useState(false)
  const size = useWindowSize();
  const navTour = (event) => TourRouter(event, router)
  const navDisco = (event) => DiscoRouter(event, router)
  const navStore = (event) => MerchRouter(event, router)

  const metadata = {
    title: 'Fazerdaze',
    description: 'Website music fazerdaze'
  }

  return (
    <html lang="en">
      <head>
        <title>FAZERDAZE</title>
      </head>
      <body className={`${inter.variable} ${bak_one.variable} font-sans`}>
        {
          size.width >= 600 ? <div className={styles.container} fallback={<p>Loading...</p>}>
            <div className={showSidebar ? styles.widemusic : styles.music}>
              <VideoPlayer />
            </div>
            <div className={showSidebar ? styles.smallmain : styles.main}>
              {
                showSidebar ? <Sidebar navTour={navTour} navDisc={navDisco} navStore={navStore} handleBtn={() => setShowSidebar(!showSidebar)} /> : <>
                  <Navigation tour={navTour} disco={navDisco} store={navStore} handleBtn={() => setShowSidebar(!showSidebar)} />
                  {children}
                  <Medsos />
                </>
              }
            </div>
          </div> :
            <div >
              <div className={styles.videoplayer}>
                <VideoPlayer />
              </div>
              {children}
            </div>
        }
      </body>
    </html>
  )
}
