class SnakesAndLadders {
  static diceSides = 6
  static diceModerator = 1

  sixSidedDice() {
    return Math.floor(Math.random() * SnakesAndLadders.diceSides) + SnakesAndLadders.diceModerator
  }

  roll() {
    var move = []
    move.push(this.sixSidedDice(), this.sixSidedDice())
    return move.reduce((roll1, roll2) => roll1 + roll2)
  }
}

module.exports = SnakesAndLadders;
