import Conditions from './Conditions';
import SeatData from './SeatData';
import Shoe from './Shoe';
import DealerData from './DealerData';

const TableData = function() {

  const seatCount = Conditions.seatCount;
  const seats = [];
  const shoe = new Shoe();
  const insuranceClosed = false;
  for(let seatNumber = 0; seatNumber < seatCount; seatNumber++) {
    seats.push(new SeatData(seatNumber, shoe));
  }

  let currentActiveSeatIndex = 0;
  let dealer = new DealerData();

  const getNextActiveSeat = (currentSeatIndex) => {
    let found = false;
    let index = currentSeatIndex;
    while (index < 7 && !found) {
      let seat = seats[index];
      if(seat.isTaken && seat.isInHand){
        found = true;
        seat[index].isActive = true;
      } else {
        index++;
      }
    }
    return index;
  }

  const isOfferingInsurance = () => dealer.hasAceUp() && !insuranceClosed;

  const isDealersTurn = () => currentActiveSeatIndex === 7;

  const includeAllTakenSeats = () => {
    seats.forEach(seat => {
      if(seat.isTaken) {
        seat.isInHand = true;
      }
    })
  };

  const playNextHand = () => {
    currentActiveSeatIndex = 0;
    includeAllTakenSeats();
    //Place your bets method()
    getNextActiveSeat(currentActiveSeatIndex);
    //an then more stuff
  }

  return {
    seats,
    dealer,
    shoe,
    currentActiveSeatIndex,
    isDealersTurn,
    getNextActiveSeat,
    includeAllTakenSeats,
    playNextHand,
  }
};

export default TableData;
