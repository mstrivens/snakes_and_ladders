const Player = require ('./player.js')
const player = new Player("Max")

describe('player initializes with name and player position of 0', () => {
  test('new player object has a name', () => {
    expect(player.name).toEqual('Max')
  })
})
