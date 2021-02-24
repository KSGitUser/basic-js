const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const K = 0.693;

module.exports = function dateSample(sampleActivity) {
  const intSampleActivity = parseInt(sampleActivity);
  if (!intSampleActivity ||
    typeof sampleActivity !== 'string' ||
    intSampleActivity !== 'number' ||
    intSampleActivity <= 0 || intSampleActivity >= 15) {
    return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / intSampleActivity) / (K / HALF_LIFE_PERIOD));

};
