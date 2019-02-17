import HandData from './HandData';

const PlayerData = function(player) {
  let bankRoll = 98;
  let wagerSize = 2;
  const setBankRoll = amount => bankRoll += amount;
  const setWagerSize = amount => wagerSize += amount;
  const hit = () => console.log('HIT');
  const stay = () => console.log('STAY');
  const double = () => console.log('DOUBLE');
  const split = () => console.log('SPLIT');
  const surrender = () => console.log('SURRENDER');
  const getInsuranceBetSize = betSize => betSize / 2;
  const takeEvenMoney = () => console.log('EVEN MONEY');
  const getInsurance = () => console.log('YOU ARE INSURED');
  const declineInsurance = () => console.log('NO INSURANCE');
  const actionOptionsData = [
    {
      type: 'HIT',
      action: hit,
    },
    {
      type: 'STAY',
      action: stay,
    },
    {
      type: 'DOUBLE',
      action: double,
    },
    {
      type: 'SPLIT',
      action: split,
    },
    {
      type: 'SURRENDER',
      action: surrender,
    },
  ];

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

  const addActionToOptionData = (action, type) => actionOptionsData.push({type, action});
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
    hands: [new HandData(bankRoll, wagerSize, setBankRoll, setWagerSize, actionOptionsData)],
    actionOptionsData,
    insuranceOptionsData,
    getInsuranceBetSize,
    incBet,
    decBet,
    addActionToOptionData,
    addActionToInsuanceData,
  }
};

export default PlayerData;
