const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr, counter = 0) {
    let innerCounter = counter
    if (Array.isArray(arr)) {
      innerCounter += 1;
      if (arr.length === 0) {
        return innerCounter;
      }
      let tempDepth = 0;
      let arrOfCounter = [];
      arr.forEach(item => {
        tempDepth = this.calculateDepth(item, innerCounter);
        arrOfCounter.push(tempDepth);
      });
      innerCounter = Math.max(...arrOfCounter);

    }

    return innerCounter;
  }
};