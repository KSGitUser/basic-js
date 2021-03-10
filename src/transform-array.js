const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new CustomError('Not array');
  }

  const checkSequence = (arr) => {
    let tempArr = [];
    nextIndex = 0;
    arr.map((item, index) => {
      if (index !== nextIndex) {
        return;
      }
      switch (item) {
        case '--discard-next':
          tempArr.push(null);
          tempArr.push(null);
          nextIndex += 2;
          break;
        case '--discard-prev':
          if (tempArr.length) {
            tempArr[tempArr.length - 1] = null;
          }
          tempArr.push(null);
          nextIndex += 1;
          break;
        case '--double-next':
          if (index !== arr.length-1) {
            tempArr.push(arr[index + 1]);
            tempArr.push(arr[index + 1]);
            nextIndex += 2;
          }
          break;
        case '--double-prev':
          if (tempArr.length) {
            tempArr.push(tempArr[tempArr.length - 1])
          }
          nextIndex += 1;
          break;
        default:
          tempArr.push(item);
          nextIndex += 1;
          break;
      }
    });

    const finalArr = [];
    tempArr.map(item => {
      if (item !== null) {
        finalArr.push(item);
      }
    });
    return finalArr;
  }

  return checkSequence(arr);
  // remove line with error and write your code here
};

