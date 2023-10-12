const catScratch = (alone, hour) => {
    if (alone && hour >= 10 && hour <= 15) {
        return true;
    }
    return false;
}

module.exports = catScratch;
  