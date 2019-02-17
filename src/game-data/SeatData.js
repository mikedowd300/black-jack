import PlayerData from './PlayerData';

const SeatData = function(seatNumber, shoe) {

  return {
    isTaken: false,
    isInHand: false,
    isActive: false,
    seatNumber,
    shoe,
    player: new PlayerData(shoe),
  }
};

export default SeatData;
