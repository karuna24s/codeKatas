function BowlingGame() {
  this.rolls = [];
}

BowlingGame.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function ()  {
  var result = 0;
  var rollIndex = 0;
  var game = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrike()) {
        result += game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
        rollIndex++;
    } else if (isSpare()) {
        result += game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
        rollIndex += 2;
    } else {
        result += game.rolls[rollIndex] + game.rolls[rollIndex + 1];
        rollIndex += 2;
    }
  }
  return result;

  function isStrike() {
    return game.rolls[rollIndex] == 10;
  }

  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10
  }

};
