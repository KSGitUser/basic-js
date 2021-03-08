const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new CustomError('Not array');
  }

  const checkSequence = (arr) => {
    let tempArr = []
    nextIndex = 0;
    arr.map((item, index) => {
      if (index !== nextIndex) {
        return;
      }
      switch (item) {
        case '--discard-next':
          tempArr.push(null);
          tempArr.push(null);
          break;
        case '--discard-prev':
          if (tempArr[tempArr.length - 1]) {
            tempArr[tempArr.length - 1] = null;
          }
          tempArr.push(null);
          nextIndex += 1;
          break;
        case '--double-next':
          if (arr[index + 1]) {
            tempArr.push(arr[index + 1]);
            tempArr.push(arr[index + 1]);
            nextIndex += 2;
          }
          break;
        case '--double-prev':
          if (tempArr[tempArr.length - 1]) {
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

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new CustomError('Not array');
  }

  const checkSequence = (arr) => {
    let tempArr = [...arr];
    for (let i = 0; i < tempArr.length; i++) {
      console.log('tempArr[i] =>', tempArr[i]);
      switch (tempArr[i]) {
        case '--discard-next':
          tempArr = [...tempArr.slice(0, i), ...tempArr.slice(i + 2)]
          break;
        case '--discard-prev':
          tempArr = [...tempArr.slice(0, i - 1), ...tempArr.slice(i + 1)]
          break;
        case '--double-next':
          try {
            tempArr = [...tempArr.slice(0, i), tempArr[i + 1], ...tempArr.slice(i + 1)]
          } catch (e) {
            break;
          }
          break;
        case '--double-prev':
          try {
            tempArr = [...tempArr.slice(0, i), tempArr[i - 1], ...tempArr.slice(i + 1)]
          } catch (e) {
            break;
          }
          break;
        default:
          break;
      }
    }
    return tempArr;
  }

  console.log('checkSequence(arr); =>', checkSequence(arr));

  // remove line with error and write your code here
};

transform([1, 2, 3, '--double-prev', 4, 5]);