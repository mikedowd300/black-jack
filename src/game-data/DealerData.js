const DealerData = function(shoe) {

  const cards = [
    {
      image: 'http://deckofcardsapi.com/static/img/9C.png',
      code: '9C',
      value: 9
    },
    {
      image: 'http://deckofcardsapi.com/static/img/8C.png',
      code: '8C',
      value: 8
    },
    {
      image: 'http://deckofcardsapi.com/static/img/9D.png',
      code: '9D',
      value: 9
    },
    {
      image: 'http://deckofcardsapi.com/static/img/6C.png',
      code: '6C',
      value: 6
    },
    {
      image: 'http://deckofcardsapi.com/static/img/QH.png',
      code: 'QH',
      value: 10
    }
  ]

  const hasAceUp = () => this.hand.cards[0].value === 11;
  const hasBlackJack = () => this.hand.isBlackJack();
  const isBusted = () => getHandValue() > 21;
  const isHittable = () => getHandValue() < 17; // Conditions affects this.
  const isBlackJack = () => getHandValue() === 21 && cards.length === 2;
  const is21 = (handIndex) => (getHandValue() === 21 && cards.length > 2) || (getHandValue() === 21 && handIndex > 0);
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
    hasAceUp,
    hasBlackJack,
    isBusted,
    isHittable,
    isBlackJack,
    is21,
    getHandValue,
    getAceCount,
  }
};

export default DealerData;
