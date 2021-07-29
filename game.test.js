const SnakesAndLadders = require('./game.js');

const game = new SnakesAndLadders();
// const roll = require('./game.js');

describe('dice takes mock of 4', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    game.player1.position = 0
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})

  test('dice allows player to roll a dice which returns a random number', () => {
    expect(game.sixSidedDice()).toEqual(4)
  });

  test('roll allows players to roll 2 dice which return a random number', () => {
    expect(game.roll()).toEqual(8)
  })

  test('roll adds the roll value to the player position', () => {
    game.roll()
    expect(game.player1.position).toEqual(8)
  })
});

describe('dice takes mock of 2', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.3);
    game.player1.position = 0
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})

  test('dice allows player to roll a dice which returns a random number', () => {
    expect(game.sixSidedDice()).toEqual(2)
  });

  test('roll allows players to roll 2 dice which return a random number', () => {
    expect(game.roll()).toEqual(4)
  })

  test('roll adds the roll value to the player position', () => {
    game.roll()
    expect(game.player1.position).toEqual(4)
  })
});

describe('new game initializes with player names', () => {
  test('player 1 name is Max', () => {
    game1 = new SnakesAndLadders("Max")
    expect(game1.player1.name).toEqual("Max")
  })
})

describe('a player lands on a ladder which takes them to another square', () => {
  test('player lands on square 2 which takes them to square 38', () => {
    game.player1.position = 2
    game.checkPlayerSquare()
    expect(game.player1.position).toEqual(30)
  })

  test('player lands on square 7 which takes them to square 14', () => {
    game.player1.position = 7
    game.checkPlayerSquare()
    expect(game.player1.position).toEqual(14)
  })
})
