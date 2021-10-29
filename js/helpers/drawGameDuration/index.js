import humanizeDuration from 'humanize-duration';
/* ###
  REQUIREMENTS FOR DURATION DISPLAY FUNCTION
  any time under 180 seconds : show seconds only ( 2 decimal points )
  times over 180 seconds: show minutes and seconds ( no decimal points )
  if decimal points are '.00' don't show them at all
  if decimal points are '.10' etc : only show 1 decimal point
### */
const drawGameDuration = (durationMs, lang) => {
  if (!durationMs) return '-';
  if (durationMs < 180000) { // 180000 = 3 minutes
    return humanizeDuration(durationMs, {
      language: lang,
      fallbacks: ['en'],
      units: ['s']
    });
  }
  return humanizeDuration(Math.floor((durationMs / 1000).toFixed(0) * 1000), {
    language: lang,
    fallbacks: ['en'],
    units: ['d', 'h', 'm', 's']
  });
};

export default drawGameDuration;
