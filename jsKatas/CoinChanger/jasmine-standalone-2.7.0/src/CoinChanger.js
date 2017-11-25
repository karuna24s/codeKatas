function CoinChanger(amount) {
  let change = [], total = 0;
  [25, 10, 5, 1].map(function(coin) {
    while (total + coin <= amount) {
      change.push(coin);
      total += coin;
    }
  });
  return change;
};
