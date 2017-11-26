const BowlingGame = {
    make: function() {
        return Object.create(this.prototype, {
            _rolls: {
                writable: true,
                value: []
            }
        });
    },

    prototype: {
        roll: function(rolls) {
            this._rolls = rolls;
        },

        score: function() {
            let score = 0;
            let i = 0;
            for (var frame = 0; frame < 10; frame++) {
                if (this._isStrike(i)) {
                    score += 10 + this._rolls[i + 1] + this._rolls[i + 2];
                    i++;
                } else if (this._isSpare(i)) {
                    score += 10 + this._rolls[i + 2];
                    i += 2;
                } else {
                    score += this._rolls[i] + this._rolls[i + 1];
                    i += 2;
                }
            }
            return score;
        },

        _isStrike: function(i) {
            return this._rolls[i] == 10;
        },

        _isSpare: function(i) {
            return this._rolls[i] + this._rolls[i + 1] == 10;
        }
    }
}
