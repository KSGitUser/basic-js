const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }

  if (!date || !date.constructor || !date.constructor.name || date.constructor.name !== 'Date') {
    throw new Error('Not date');
  }

  const seasonName = {
    spring: 'spring',
    summer: 'summer',
    fall: 'autumn',
    winter: 'winter'
  }

  try {
    const month = date.getMonth();
    date.toLocaleString();

    switch (true) {
      case (month === 11 || month === 0 || month === 1):
        return seasonName.winter;
      case (month >= 2 && month <= 4):
        return seasonName.spring;
      case (month >= 5 && month <= 7):
        return seasonName.summer;
      case (month >= 8 && month <= 10):
        return seasonName.fall;
      default:
        throw new Error('Not date');
    }
  } catch (e) {
    throw new Error('Not date');
  }
};
