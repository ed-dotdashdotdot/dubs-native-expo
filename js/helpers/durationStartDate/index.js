export const durationStartDate = existingPaused => {
  if (existingPaused === '') {
    return new Date().getTime();
  }
  return (new Date().getTime() - existingPaused);
};
