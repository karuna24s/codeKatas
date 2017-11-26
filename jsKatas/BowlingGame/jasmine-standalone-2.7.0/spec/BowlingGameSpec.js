describe('BowlingGame', () => {
    let game;

    beforeEach(() => {
        game = BowlingGame.make();
    });

    it('can score a gutter ball', () => {
        game.roll([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0]);
        expect(game.score()).toBe(0);
    });

    it('can score a game of ones', () => {
        game.roll([1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1]);
        expect(game.score()).toBe(20);
    });

    it('can score a spare', () => {
        game.roll([1,9, 3,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0]);
        expect(game.score()).toBe(16);
    });

    it('can score a strike', () => {
        game.roll([10, 3,3, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0]);
        expect(game.score()).toBe(22);
    });

    it('can score a perfect game', () => {
        game.roll([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
        expect(game.score()).toBe(300);
    });
});
