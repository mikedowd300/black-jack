import Conditions from './Conditions';
import Deck from './Deck';

const Shoe = function() {
  const CARDS_PER_DECK = 52;
  let cards = [];
  for(let i = 0; i < Conditions.shoeSize; i++) {
    cards = cards.concat(Deck);
  }

  const discardPile = [];
  const getCount = Conditions.getCount;
  const shufflePoint = Conditions.shufflePoint;
  const getTrueCount = ()  => getCount() / (Deck.length / CARDS_PER_DECK);
  const getAcesLeft = () => cards.filter(card => card.value === 11).length;

  const shuffle = () => {
    cards.concat(discardPile);
    const shuffledCards = [];
    while(cards.length > 0) {
      const cardIndex = Math.floor((Math.random() * cards.length));
      shuffledCards.push(cards[cardIndex]);
      cards = cards.slice(0, cardIndex).concat(cards.slice(cardIndex + 1, cards.length));
    }
    cards = cards.concat(shuffledCards);
  };

  const dealCard = () => cards.pop();

  const burnCard = () => discardPile.push(dealCard());

  const isShuffleTime = () => shufflePoint >= cards.length;

  return  {
    shuffle,
    shufflePoint,
    discardPile,
    getCount,
    getTrueCount,
    getAcesLeft,
    dealCard,
    burnCard,
    isShuffleTime,
    cards,
  }
};

export default Shoe;
