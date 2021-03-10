const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Not array');
  }

  let tempArr = [];
  const f = [];
  nextIndex = 0;
  let index = -1;

  while (index < arr.length - 1) {
    index = nextIndex;
    let item = arr[index];

    switch (item) {
      case '--discard-next':
        tempArr = [...tempArr, null, null];
        nextIndex += 2;
        continue;
      case '--discard-prev':
        if (tempArr.length) {
          if (tempArr[tempArr.length - 1] !== null) {
            f.pop();
          }
          tempArr[tempArr.length - 1] = null;
        }
        tempArr.push(null);
        nextIndex += 1;
        continue;
      case '--double-next':
        if (index !== arr.length - 1) {
          tempArr = [...tempArr, arr[index + 1], arr[index + 1]];
          if (tempArr[index + 1] !== null) {
            f.push(arr[index + 1]);
            f.push(arr[index + 1]);
          }
          nextIndex += 2;
        }
        continue;
      case '--double-prev':
        if (tempArr.length) {
          if (tempArr[tempArr.length - 1] !== null) {
            f.push(f[f.length - 1]);
          }
          tempArr.push(tempArr[tempArr.length - 1]);
        }
        nextIndex += 1;
        continue;
      default:
        tempArr.push(item);
        f.push(item);
        nextIndex += 1;
        continue;
    }
  };

  return f;

};

