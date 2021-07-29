# Codewars Kata - Snakes and Ladders in Ruby

## Rules

1.  There are two players and both start off the board on square 0.

2.  Player 1 starts and alternates with player 2.

3.  You follow the numbers up the board in order 1=>100

4.  If the value of both die are the same then that player will have another go.

5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).

6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).

7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)

8.  If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.

### Returns

- Return *Player n Wins!*. Where n is winning player that has landed on square 100 without any remainding moves left.

- Return *Game over!* if a player has won and another player tries to play.

- Otherwise return *Player n is on square x*. Where n is the current player and x is the square they are currently on.

## Approach

- Plain english summary of program:

Program has 2 players

Each player on their go rolls 2 6 sided dice
The player moves the amount of squares
If the 2 dice are the same number then player rolls again
If the player lands on a ladder square they jump up to the top of the ladder
If a player lands on a snake square they drop to the bottom of the snake
Player must land on exactly square 100 at the end otherwise they move back the amount of square they rolled over