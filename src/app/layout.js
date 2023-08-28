"use client"
import './globals.css'
import { Medsos, Navigation, VideoPlayer, Modal } from '@/components'
import { Inter } from 'next/font/google'
import { Bakbak_One } from 'next/font/google'
import { TourRouter, DiscoRouter, MerchRouter } from '@/router'
import { useRouter } from 'next/navigation'
import styles from './layout.module.css'
import { Suspense, useState } from 'react'

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

  const metadata = {
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
            <VideoPlayer />
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
