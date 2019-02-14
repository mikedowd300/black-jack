// module.exports.PlayerData = function(player) {
//
//   const hit = () => console.log('HIT');
//   const stay = () => console.log('STAY');
//   const double = () => console.log('DOUBLE');
//   const split = () => console.log('SPLIT');
//   const surrender = () => console.log('SURRENDER');
//   const getInsuranceBetSize = betSize => betSize / 2;
//   const actionOptionsData = [
//     {
//       type: 'HIT',
//       action: hit,
//     },
//     {
//       type: 'STAY',
//       action: stay,
//     },
//     {
//       type: 'DOUBLE',
//       action: double,
//     },
//     {
//       type: 'SPLIT',
//       action: split,
//     },
//     {
//       type: 'SURRENDER',
//       action: surrender,
//     },
//   ];
//
//   const addAction = (action, type) => actionOptionsData.push({type, action});
//
//   const incBet = (betSize, bankRoll) => {
//     let inc = Math.min(1000, bankRoll);;
//     if(betSize < 10 ){
//       inc = Math.min(2, bankRoll);
//     } else if(betSize < 50) {
//       inc = Math.min(5, bankRoll);
//     } else if(betSize < 100) {
//       inc = Math.min(10, bankRoll);
//     } else if(betSize < 200) {
//       inc = Math.min(20, bankRoll);
//     } else if(betSize < 500) {
//       inc = Math.min(50, bankRoll);
//     } else if(betSize < 1000) {
//       inc = Math.min(100, bankRoll);
//     } else if(betSize < 5000) {
//       inc = Math.min(500, bankRoll);
//     }
//
//     return {
//       betSize: betSize + inc,
//       bankRoll: bankRoll - inc,
//     };
//   }
//
//   const decBet = (betSize, bankRoll) => {
//     let dec = 1000
//     if(betSize <= 2) {
//       dec = betSize;
//     } else if(betSize <= 10 ){
//       dec = 2
//     } else if(betSize <= 50) {
//       dec = 5
//     } else if(betSize <= 100) {
//       dec = 10
//     } else if(betSize <= 200) {
//       dec = 20
//     } else if(betSize <= 500) {
//       dec = 50
//     } else if(betSize <= 1000) {
//       dec = 100
//     } else if(betSize <= 5000) {
//       dec = 500
//     }
//
//     return {
//       betSize: betSize - dec,
//       bankRoll: bankRoll + dec,
//     };
//   }
//
//   // const updateBetSizeAndBankRoll = (player, action) => {
//     // console.log(player);
//     // const { incBet, decBet, betSize, bankRoll } = player;
//     // const update = action === 'inc'
//     //   ? incBet(betSize, bankRoll)
//     //   : decBet(betSize, bankRoll)
//     //return {}//{...player, betSize: update.betSize, bankRoll: update.bankRoll}
//   // }
//
//   return {
//     ...player,
//     name: 'Bob',
//     bankRoll: 98,
//     betSize: 2,
//     avatarUrl: 'https://fanfest.com/wp-content/uploads/2018/10/0e1587de-fd74-4e77-9264-62a0bf5e894a-nup_130296_0067-750x450.jpeg',
//     handsData: [],
//     // actionOptionsData,
//     // getInsuranceBetSize,
//     // updateBetSizeAndBankRoll,
//     // incBet,
//     // decBet,
//     // addAction,
//   }
// };

module.exports.PlayerData = function(player) {

  const hit = () => console.log('HIT');
  const stay = () => console.log('STAY');
  const double = () => console.log('DOUBLE');
  const split = () => console.log('SPLIT');
  const surrender = () => console.log('SURRENDER');
  const getInsuranceBetSize = betSize => betSize / 2;
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

  const addAction = (action, type) => actionOptionsData.push({type, action});

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
    bankRoll: 98,
    betSize: 2,
    avatarUrl: 'https://fanfest.com/wp-content/uploads/2018/10/0e1587de-fd74-4e77-9264-62a0bf5e894a-nup_130296_0067-750x450.jpeg',
    handsData: [],
    actionOptionsData,
    getInsuranceBetSize,
    incBet,
    decBet,
    addAction,
  }
};
