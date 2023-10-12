const distanceAdjust = (m, factor) => {
    if (m < 50) {
      return Math.abs(m - 50);
    } else if (m == 50) {
      return 0;
    } else {
      if (factor % 2 == 0) {
        return Math.abs(m - 50) / 2;
      } else {
        return Math.abs(m - 50) * 2;
      }
    }
  }
  
  module.exports = distanceAdjust;