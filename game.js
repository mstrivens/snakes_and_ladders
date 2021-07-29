class SnakesAndLadders {
  static diceSides = 6
  static diceModerator = 1

  sixSidedDice() {
    return Math.floor(Math.random() * SnakesAndLadders.diceSides) + SnakesAndLadders.diceModerator
  }

  roll() {
    return 8
  }
}

module.exports = SnakesAndLadders;
