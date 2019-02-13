module.exports.PlayerData = function(player) {

  // Custom Players will not exist until the game works with default conditions

  const actionOptionsData = [
    {
      name: 'HIT',
      action: () => console.log('HIT ME'),
    },
    {
      name: 'STAY',
      action: () => console.log('STAY'),
    },
    {
      name: 'DOUBLE',
      action: () => console.log('DOUBLE'),
    },
    {
      name: 'SPLIT',
      action: () => console.log('SPLIT'),
    },
  ];

  console.log('adding a player');

  return {
    name: 'Bob',
    bankRoll: 100,
    betSize: 5,
    avatarUrl: 'https://fanfest.com/wp-content/uploads/2018/10/0e1587de-fd74-4e77-9264-62a0bf5e894a-nup_130296_0067-750x450.jpeg',
    handsData: [],
    actionOptionsData,
  }
};
