const HandData = function(wagerSize, bankRoll, setWagerSize, setBankRoll, shoe) {

  //This needs to be passed in or something
  const dealersHand = {value: 1, isBlackJack: () => true};

  const cards = [
    {
      image: 'http://deckofcardsapi.com/static/img/4H.png',
      code: '4H',
      value: 4
    },
    {
      image: 'http://deckofcardsapi.com/static/img/aceDiamonds.png',
      code: 'AD',
      value: 11
    },
    {
      image: 'http://deckofcardsapi.com/static/img/JS.png',
      code: 'JS',
      value: 10
    },
    {
      image: 'http://deckofcardsapi.com/static/img/3S.png',
      code: '3S',
      value: 3
    }
  ];


  const addActionToOptionData = (action, type) => actionOptionsData.push({type, action});

  const hit = () => console.log('HIT');
  const stay = () => console.log('STAY');
  const double = () => console.log('DOUBLE');
  const split = () => console.log('SPLIT');
  const surrender = () => console.log('SURRENDER');

  const actionOptionsData = [{type: 'HIT', action: hit}];

  const getInsuranceBetSize = betSize => betSize / 2;
  const getDoubleBetAmount = () => bankRoll > wagerSize ? wagerSize : bankRoll;
  const getSplitBetAmount = () => bankRoll > wagerSize ? wagerSize : bankRoll;
  const isBusted = () => getHandValue() > 21;
  const isHittable = () => getHandValue() < 21;
  const isSplittable = () => cards.length === 2 && cards[0].value === cards[1].value && bankRoll > 0;
  const isDoubleable = () => cards.length === 2 && getHandValue() < 21 && bankRoll > 0;
  const isBlackJack = () => getHandValue() === 21 && cards.length === 2;
  const is21 = (handIndex) => (getHandValue() === 21 && cards.length > 2) || (getHandValue() === 21 && handIndex > 0);
  const beatDealer = dealersHandValue => getHandValue() > dealersHandValue;
  const pushed = dealersHand => (dealersHand.isBlackJack() && isBlackJack()) || (getHandValue() === dealersHand.value && dealersHand.value < 21);
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
    pushed,
    getDoubleBetAmount,
    getSplitBetAmount,
    setWagerSize,
    setBankRoll,
    actionOptionsData,
    hit,
    shoe,
  }
};

export default HandData;
