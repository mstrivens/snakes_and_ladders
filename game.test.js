const dice = require('./game.js');


// test('SnakesAndLadders', () => {
//
//   beforeEach(() => {
//     jest.spyOn(global.Math, 'random').mockReturnValue(2)
//   });

  test('dice allows player to roll a dice which returns a random number', () => {
    expect(dice()).toEqual(2)
  });
// });
