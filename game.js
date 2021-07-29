// class SnakesAndLadders {
const SIX_SIDED_DICE = 6
const DICE_MODERATOR = 1

  function dice() {
    return Math.floor(Math.random() * SIX_SIDED_DICE) + DICE_MODERATOR
  }

// }

module.exports = dice;
