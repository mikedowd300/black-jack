import PlayerData from './PlayerData';

const SeatData = function(seatNumber) {

  return {
    isTaken: false,
    isInHand: false,
    isActive: false,
    seatNumber,
    player: new PlayerData(),
  }
};

export default SeatData;
