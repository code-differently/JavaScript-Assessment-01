const halfWay = (m) => {
    if (m <= 50) {
      return Math.abs(m - 50);
    } else {
      return Math.abs(m - 50) / 2;
    }
  }
  
module.exports = halfWay;
  