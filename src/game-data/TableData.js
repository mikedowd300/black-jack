import Conditions from './Conditions';
import SeatData from './SeatData';
import Shoe from './Shoe';

const TableData = function() {

  const seatCount = Conditions.seatCount;
  const seats = [];
  for(let seatNumber = 0; seatNumber < seatCount; seatNumber++) {
    seats.push(new SeatData(seatNumber));
  }

  let currentActiveSeatIndex = 0;

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
    dealer: {},
    shoe: new Shoe(),
    currentActiveSeatIndex,
    isDealersTurn,
    getNextActiveSeat,
    includeAllTakenSeats,
    playNextHand,
  }
};

export default TableData;
