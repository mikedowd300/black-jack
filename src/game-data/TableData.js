module.exports.TableData = function(conditions) {

  // Custom Table conditions will not exist until the game works with default conditions

  const seatCount = conditions && conditions.seatCount && conditions.seatCount > 0 ? conditions.seatCount : 7;
  const seats = [];
  for(let seatNumber = 0; seatNumber < seatCount; seatNumber++) {
    seats.push({
      isTaken: false,
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
