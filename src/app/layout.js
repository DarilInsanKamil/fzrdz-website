"use client"
import './globals.css'
import { Medsos, Navigation } from '@/components'
import { Inter } from 'next/font/google'
import { Bakbak_One } from 'next/font/google'
import { TourRouter, DiscoRouter, MerchRouter } from '@/router'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from './layout.module.css'
import zoom from '../assets/icon/zoom.svg'
import { Suspense } from 'react'

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
  const router = useRouter()

  const navTour = (event) => TourRouter(event, router)
  const navDisco = (event) => DiscoRouter(event, router)
  const navStore = (event) => MerchRouter(event, router)

  const metadata= {
    title: 'Fazerdaze',
    description: 'Website music fazerdaze'
  }
  return (
    <html lang="en">
      <head>
        <title>FAZERDAZE</title>
      </head>
      <body className={`${inter.variable} ${bak_one.variable} ${styles.container} font-sans`}>
        <Suspense fallback={<p>Loading...</p>}>
          <div className={styles.music}>
            <h2 className={styles.title_web}>FAZERDAZE</h2>
            <section className={styles.player}>
              <section>
                <p className={styles.title_album}>Break!</p>
                <p className={styles.title_track}>Winter</p>
              </section>
              <Image src={zoom} width={'auto'} height={'auto'} alt="zoom-icon" />
            </section>
          </div>
          <div className={styles.main}>
            <Navigation tour={navTour} disco={navDisco} store={navStore} />
            {children}
            <Medsos />
          </div>
        </Suspense>
      </body>
    </html>
  )
}
