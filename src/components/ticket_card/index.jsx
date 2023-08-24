import TicketData from "@/utils/ticket_data";
import { TicketCardUI } from "./ticketUI";

export const TicketCard = () => {
  return (
    <>
      {TicketData && TicketData.map((res, idx) => {
        return <TicketCardUI key={idx} title={res.title} date={res.date} />;
      })}
    </>
  );
};
