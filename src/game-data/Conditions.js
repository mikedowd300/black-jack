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
};
