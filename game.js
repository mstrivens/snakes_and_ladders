const Player = require ('./player.js')


class SnakesAndLadders {
  constructor(player1, player2) {
  this.player1 = new Player(player1)
  this.player2 = new Player(player2)
  }
  static diceSides = 6
  static diceModerator = 1

  sixSidedDice() {
    return Math.floor(Math.random() * SnakesAndLadders.diceSides) + SnakesAndLadders.diceModerator
  }

  roll() {
    var move = []
    move.push(this.sixSidedDice(), this.sixSidedDice())
    var totalRoll = move.reduce((roll1, roll2) => roll1 + roll2)
    this.player1.position += totalRoll
    return totalRoll
  }
}

module.exports = SnakesAndLadders;
