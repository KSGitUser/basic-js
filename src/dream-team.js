const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let dreamTeamName = [];

  members.map(member => {
    if (typeof member === 'string') {
      dreamTeamName.push((member.trim())[0].toUpperCase());
    }
  });

  return !dreamTeamName.length ? false : dreamTeamName.sort().join('');
};
