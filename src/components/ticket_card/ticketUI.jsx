import { Button } from '..'
import styles from './ticket_card.module.css'

export const TicketCardUI = ({title, date}) => {
    return(
        <div className={styles.card_container}>
            <section className={styles.text_container}>
                <p className={styles.title}>{title}</p>
                <p className={styles.date}>{date}</p>
            </section>
            <Button className={styles.button} title={"Buy Ticket"}/>
        </div>
    )
}