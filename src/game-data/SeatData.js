import PlayerData from './PlayerData';

const SeatData = function(seatNumber, shoe) {

  const player = new PlayerData(shoe);
  const getIsActive = () => seatNumber === player.activePlayerIndex;

  return {
    isTaken: false,
    isInHand: false,
    getIsActive,
    seatNumber,
    shoe,
    player,
  }
};

export default SeatData;
