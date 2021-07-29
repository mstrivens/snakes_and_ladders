const SnakesAndLadders = require('./game.js');

const game = new SnakesAndLadders();
// const roll = require('./game.js');

describe('dice takes mock of 4', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})

  test('dice allows player to roll a dice which returns a random number', () => {
    expect(game.dice()).toEqual(4)
  });

  test('roll allows players to roll 2 dice which return a random number', () => {
    expect(game.roll()).toEqual(8)
  })
});

describe('dice takes mock of 2', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.3);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})

  test('dice allows player to roll a dice which returns a random number', () => {
    expect(game.dice()).toEqual(2)
  });
});
