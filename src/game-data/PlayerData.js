import HandData from './HandData';

const PlayerData = function(shoe) {

  let bankRoll = 98;
  let wagerSize = 2;
  let activeHandIndex = 0;
  const setBankRoll = amount => bankRoll += amount;
  const setWagerSize = amount => wagerSize += amount;

  const hit = function() {
    shoe.dealCard();
  };
  const takeEvenMoney = () => console.log('EVEN MONEY');
  const getInsurance = () => console.log('YOU ARE INSURED');
  const declineInsurance = () => console.log('NO INSURANCE');

  const insuranceOptionsData = [
    {
      type: 'EVEN MONEY',
      action: takeEvenMoney,
    },
    {
      type: 'YOU ARE INSURED',
      action: getInsurance,
    },
    {
      type: 'NO INSURANCE',
      action: declineInsurance,
    },
  ]

  //Matbe the next active hand could be part of the next active palyer;
  const incActiveHandIndex = () => activeHandIndex++;


  const addActionToInsuanceData = (action, type) => insuranceOptionsData.push({type, action});

  const incBet = (betSize, bankRoll) => {
    let inc = Math.min(1000, bankRoll);;
    if(betSize < 10 ){
      inc = Math.min(2, bankRoll);
    } else if(betSize < 50) {
      inc = Math.min(5, bankRoll);
    } else if(betSize < 100) {
      inc = Math.min(10, bankRoll);
    } else if(betSize < 200) {
      inc = Math.min(20, bankRoll);
    } else if(betSize < 500) {
      inc = Math.min(50, bankRoll);
    } else if(betSize < 1000) {
      inc = Math.min(100, bankRoll);
    } else if(betSize < 5000) {
      inc = Math.min(500, bankRoll);
    }

    return {
      betSize: betSize + inc,
      bankRoll: bankRoll - inc,
    };
  }

  const decBet = (betSize, bankRoll) => {
    let dec = 1000
    if(betSize <= 2) {
      dec = betSize;
    } else if(betSize <= 10 ){
      dec = 2
    } else if(betSize <= 50) {
      dec = 5
    } else if(betSize <= 100) {
      dec = 10
    } else if(betSize <= 200) {
      dec = 20
    } else if(betSize <= 500) {
      dec = 50
    } else if(betSize <= 1000) {
      dec = 100
    } else if(betSize <= 5000) {
      dec = 500
    }

    return {
      betSize: betSize - dec,
      bankRoll: bankRoll + dec,
    };
  }

  return {
    name: 'Bob',
    bankRoll,
    wagerSize,
    avatarUrl: 'https://fanfest.com/wp-content/uploads/2018/10/0e1587de-fd74-4e77-9264-62a0bf5e894a-nup_130296_0067-750x450.jpeg',
    hands: [new HandData(wagerSize, bankRoll, setWagerSize, setBankRoll, shoe)],
    insuranceOptionsData,
    incBet,
    decBet,
    addActionToInsuanceData,
  }
};

export default PlayerData;
