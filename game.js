class SnakesAndLadders {
  static sixSidedDice = 6
  static diceModerator = 1

  dice() {
    return Math.floor(Math.random() * SnakesAndLadders.sixSidedDice) + SnakesAndLadders.diceModerator
  }

  roll() {
    return 8
  }

}

module.exports = SnakesAndLadders;
