const HandData = function(wagerSize, bankRoll, setWagerSize, setBankRoll) {
  const cards = [];
  const getDoubleBetAmount = () => bankRoll > wagerSize ? wagerSize : bankRoll;
  const getSplitBetAmount = () => bankRoll > wagerSize ? wagerSize : bankRoll;
  const isBusted = () => getHandValue() > 21;
  const isHittable = () => getHandValue() < 21;
  const isSplittable = () => cards.length === 2 && cards[0].value === cards[1].value && bankRoll > 0;
  const isDoubleable = () => cards.length === 2 && getHandValue() < 21 && bankRoll > 0;
  const isBlackJack = () => getHandValue() === 21 && cards.length === 2;
  const is21 = (handIndex) => (getHandValue() === 21 && cards.length > 2) || (getHandValue() === 21 && handIndex > 0);
  const beatDealer = dealersHandValue => getHandValue() > dealersHandValue;
  const getAceCount = () => cards.filter(card => card.value === 11).length;
  const getHandValue = () => {
    let value = 0;
    let aceCount = getAceCount();
    cards.forEach(card => { value += card.value });
    while(aceCount > 0 && value > 21) {
      value -= 10;
      aceCount--;
    }
    return value;
  }

  return {
    cards,
    getAceCount,
    getHandValue,
    wagerSize,
    isBusted,
    isHittable,
    isSplittable,
    isDoubleable,
    isBlackJack,
    is21,
    beatDealer,
    getDoubleBetAmount,
    getSplitBetAmount,
    setWagerSize,
    setBankRoll
  }
};

export default HandData;
