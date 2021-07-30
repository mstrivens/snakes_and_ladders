const Player = require ('./player.js')

class SnakesAndLadders {
  constructor(player1, player2) {
  this.player1 = new Player(player1)
  this.player2 = new Player(player2)
  this.totalRoll = 0
  this.turn = this.player1
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
  };
  this.snakes = {
    16: 6,
    46: 25,
    49: 11,
    62: 19,
    64: 60,
    74: 53,
    89: 68,
    92: 88,
    95: 75,
    99: 80
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
    this.totalRoll = move.reduce((roll1, roll2) => roll1 + roll2)
    console.log(`You rolled ${this.totalRoll}`)
    this.player1.position += this.totalRoll
    this.gameOver()
    // var player1position = this.player1.position
    // setTimeout(function() {console.log(`You are now on square ${player1position}`)}, 3000)
    this.checkPlayerSquare()
    return this.totalRoll
  }

  checkPlayerSquare() {
    if (this.ladders[this.player1.position] !== undefined) {
      this.player1.position = this.ladders[this.player1.position]
      console.log(`Yay! You have landed on a ladder, you have climbed to square ${this.player1.position}`)
    } else if (this.snakes[this.player1.position] !== undefined) {
      this.player1.position = this.snakes[this.player1.position]
      console.log(`Oops! You have landed on a snake, you have slid down to square ${this.player1.position}`)
    }
  }

  gameOver() {
    if (this.player1.position === 100) {
      return true
      console.log("Game Over!")
    } else if (this.player1.position > 100) {
      var diff = this.player1.position - 100
      this.player1.position = 100
      this.player1.position -= diff
      return false
    } else {
      return false
    }
  }

  swapTurn() {
    this.turn = this.player2
  }
}

module.exports = SnakesAndLadders;
