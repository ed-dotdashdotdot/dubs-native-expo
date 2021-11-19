export const getEndTimes = (newDate, startTime) => {

  const timeDifference = (newDate - startTime) / 1000;
  const timeInSeconds = timeDifference;

  return {
    endTime: newDate,
    timeInSeconds: timeInSeconds
  };

}