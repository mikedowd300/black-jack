module.exports.TableData = function(conditions) {

  const seatCount = conditions && conditions.seatCount && conditions.seatCount > 0 ? conditions.seatCount : 7;
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
    deck:{},
    conditions,
  }
};
