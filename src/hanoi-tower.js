const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const secondsForOneTurn = 60 * 60 / turnsSpeed;

  const turns = 2 ** disksNumber - 1;

  return { turns, seconds: Math.floor(turns * secondsForOneTurn) }
};
