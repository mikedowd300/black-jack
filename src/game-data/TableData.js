import Conditions from './Conditions';
import Shoe from './Shoe';

const TableData = function() {

  const seatCount = Conditions.seatCount;
  const seats = [];
  for(let seatNumber = 0; seatNumber < seatCount; seatNumber++) {
    seats.push({
      isTaken: false,
      isInHand: false,
      player: {},
      seatNumber,
    });
  }

  return {
    seats,
    dealer: {},
    shoe:new Shoe(),
  }
};

export default TableData;
