const timerStartDate = existingPaused => {
  if (existingPaused === '') {
    return new Date().getTime();
  }
  return (new Date().getTime() - existingPaused);
};

export default timerStartDate;
