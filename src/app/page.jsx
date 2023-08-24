import Image from 'next/image'
import tour_banner from '../assets/image/tour_banner.png'
import { TicketCard } from '@/components'
import styles from './page.module.css'

export default function Tour() {
  return (
    <main className={styles.container}>
        <Image src={tour_banner} alt='tour_banner' width={'auto'} height={'auto'} className={styles.banner_img}/>
        <h3 className={styles.title}>SOLO NZ TOUR</h3>
        <TicketCard />
    </main>
  )
}
