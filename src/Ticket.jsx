import TicketNum from "./ticketNum";
import "./Ticket.css";
export default function Ticket({ ticket }) {
  return (
    <div className="ticket">
      {ticket.map((num, idx) => {
        return <TicketNum num={num} key={idx} />;
      })}
    </div>
  );
}
