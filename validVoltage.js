const validVoltage = (v1, v2) => {
    if (v1 === 5 || v2 === 5 || (v1 + v2) === 5) {
        return true;
    }
    return false;
}
  
module.exports = validVoltage;
  