export const whichLevelColour = level => {
  if (level === 'easy') return 'green';
  if (level === 'normal') return 'amber';
  if (level === 'hard') return 'red';
  return false;
}
