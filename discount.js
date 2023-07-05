// first 100 = 100tk
// rest to 200 = 90tk
// 200 + = 70tk

function ticketPrice(price) {
  const first100Price = 100;
  const second100Price = 90;
  const restTicketPrice = 70;
  if (price <= 100) {
    const priceOf100ticket = price * first100Price;
    return priceOf100ticket;
  } else if (price <= 200) {
    const priceOf100ticket = 100 * first100Price;
    const rest100Price = price - 100;
    const restTicketPrice = rest100Price * second100Price;
    const totalPriceOf200ticket = priceOf100ticket + restTicketPrice;
    return totalPriceOf200ticket;
  } else {
    const priceOf100ticket = 100 * first100Price;
    const priceOf200ticket = 100 * second100Price;
    const restTicket = price - 200;
    const restTicketPriceOf300 = restTicket * restTicketPrice;
    const totalTicketPriceOf300 =
      priceOf100ticket + priceOf200ticket + restTicketPriceOf300;
    return totalTicketPriceOf300;
  }
}

const totalTicketPrice = ticketPrice(220);
console.log("Total Ticket Price is:", totalTicketPrice);
