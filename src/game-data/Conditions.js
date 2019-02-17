const enums = require ('./../utilities/gameTypeEnums');

module.exports = {
  shoeSize: 6,
  penetration: .75,
  shufflePoint: Math.round(this.shoeSize * 52 * (1 - this.penetration)),
  countingMethodName: 'None',
  countingAlgorithm: (shoe) => 0,
  getCount: this.countingAlgorithm,
  seatCount: 7,
  gameType: enums.FUN,
  shoesToPlay: 10000,
  minBet: 2,
  maxBet: 1000,
  playerCanSurrender: true,
  playerCanResplitAces: true,
  canDoubleAny2Cards: true,
  dealerFitsSoft17: true,
  blackJackPays3to3: true,
  blackJackPays6to5: false,
};
