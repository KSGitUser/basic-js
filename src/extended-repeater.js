const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {}) {
  defaulOptions = { separator: '+', additionSeparator: '|', repeatTimes: 1 };
  options = { ...defaulOptions, ...options };

  str = String(str);

  if (!str) {
    return '';
  }

  let fullString = '';

  if (options) {
    if (Reflect.has(options, 'repeatTimes')) {
      let separator = '';
      if (Reflect.has(options, 'separator')) {
        separator = options.separator;
      }
      for (let i = 1; i <= options.repeatTimes; i++) {
        let additionStr = '';
        if (Reflect.has(options, 'addition')) {
          additionStr +=
            repeater(options.addition, {
              repeatTimes: options.additionRepeatTimes || 1,
              separator: options.additionSeparator || '|'
            });
        }
        fullString += str + additionStr + (i !== options.repeatTimes ? separator : '');

      }
    }
  }
  return fullString;
};
