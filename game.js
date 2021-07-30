const Player = require ('./player.js')

class SnakesAndLadders {
  constructor(player1, player2) {
  this.player1 = new Player(player1)
  this.player2 = new Player(player2)
  this.ladders = {
    2: 30,
    7: 14,
    8: 31,
    15: 26,
    21: 42,
    28: 84,
    36: 44,
    51: 67,
    71: 91,
    78: 98,
    87: 94
  }
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
    console.log(`You rolled ${totalRoll}`)
    this.player1.position += totalRoll
    // var player1position = this.player1.position
    // setTimeout(function() {console.log(`You are now on square ${player1position}`)}, 3000)
    this.checkPlayerSquare()
    return totalRoll
  }

  checkPlayerSquare() {
    if (this.ladders[this.player1.position] !== undefined) {
      this.player1.position = this.ladders[this.player1.position]
      console.log(`You have landed on a ladder, you have climbed to square ${this.player1.position}`)
    } else if (this.player1.position === 16) {
      this.player1.position = 6
    }
  }
}

module.exports = SnakesAndLadders;
