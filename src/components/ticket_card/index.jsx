import TicketData from "@/utils/ticket_data";
import { TicketCardUI } from "./ticketUI";
import styles from './ticket_card.module.css'
export const TicketCard = () => {
  return (
    <div className={styles.container}>
      {TicketData && TicketData.map((res, idx) => {
        return <TicketCardUI key={idx} title={res.title} date={res.date} />;
      })}
    </div>
  );
};
