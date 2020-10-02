module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) return false;
  let team = '';
  for (let i = 0; i < members.length; i++)
    if (typeof members[i] === 'string') team += members[i].trim()[0].toUpperCase();
  team = team.split('').sort().join('');
  return team !== '' ? team : false;
};
