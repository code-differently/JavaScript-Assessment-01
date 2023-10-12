const evenOddGame = (x, y, even) => {
    if (even) {
      return x % 2 === 0 && y % 2 === 0;
    } else {
      return (x % 2 === 0 && y % 2 !== 0) || (x % 2 !== 0 && y % 2 === 0);
    }
}
  
module.exports = evenOddGame;