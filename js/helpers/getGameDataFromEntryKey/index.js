export const getGameDataFromEntryKey = entryKey => {
  const entryKeySplit = entryKey.split('--');
  return {
    level: entryKeySplit[1].replace('BossMode', ''),
    bossMode: entryKeySplit[1].indexOf('BossMode') !== -1 ? true : false,
    image: entryKeySplit[2],
  }
};
