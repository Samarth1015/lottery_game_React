import { useState } from "react";
import { generateNNumber, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n, winningSum }) {
  console.log(generateNNumber(n));
  let [ticket, setTicket] = useState(generateNNumber(n));
  let isWinning = sum(ticket);
  let newTicket = () => {
    setTicket(generateNNumber(n));
  };
  return (
    <div>
      <Ticket ticket={ticket} />
      {isWinning === winningSum ? <h1>You win!!</h1> : null}
      <br />
      <button onClick={newTicket}>Create new ticket!</button>
    </div>
  );
}
