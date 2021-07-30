const SnakesAndLadders = require('./game.js');

const game = new SnakesAndLadders();
// const roll = require('./game.js');

describe('dice takes mock of 4', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.4);
    game.player1.position = 0
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})

  test('dice allows player to roll a dice which returns a random number', () => {
    expect(game.sixSidedDice()).toEqual(3)
  });

  test('roll allows players to roll 2 dice which return a random number', () => {
    expect(game.roll()).toEqual(6)
  })

  test('roll adds the roll value to the player position', () => {
    game.roll()
    expect(game.player1.position).toEqual(6)
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

  test('game ends when player lands exactly on square 100', () => {
    game.player1.position = 96
    game.roll()
    expect(game.gameOver()).toEqual(true)
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

  test('player lands on square 8 which takes them to square 31', () => {
    game.player1.position = 8
    game.checkPlayerSquare()
    expect(game.player1.position).toEqual(31)
  })

  test('player lands on square 9 which is not a ladder', () => {
    game.player1.position = 9
    game.checkPlayerSquare()
    expect(game.player1.position).toEqual(9)
  })
})

describe('a player lands on a snake which takes them to another square', () => {
  test('player lands on square 16 which takes them to square 6', () => {
    game.player1.position = 16
    game.checkPlayerSquare()
    expect(game.player1.position).toEqual(6)
  })

  test('player lands on square 16 which takes them to square 6', () => {
    game.player1.position = 46
    game.checkPlayerSquare()
    expect(game.player1.position).toEqual(25)
  })
})
