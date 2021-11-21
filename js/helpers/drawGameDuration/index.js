import humanizeDuration from 'humanize-duration';
/* ###
  REQUIREMENTS FOR DURATION DISPLAY FUNCTION
  any time under 180 seconds : show seconds only ( 2 decimal points )
  times over 180 seconds: show minutes and seconds ( no decimal points )
  if decimal points are '.00' don't show them at all
  if decimal points are '.10' etc : only show 1 decimal point
### */
export const drawGameDuration = (duration, lang) => {
  if (!duration) return '-';
  // console.log(duration.slice(-1))
  if (duration.slice(-1) === '0') { duration = `${duration}1`; }
  duration = `${duration}000001`
  const durationMs = Number(duration * 1000).toFixed(2);
  // if (durationMs < 180000) { // 180000 = 3 minutes
  return humanizeDuration(durationMs, {
    language: lang,
    fallbacks: [ 'en' ],
    units: [ 's' ],
    maxDecimalPoints: 2,
    // minDecimalPoints: 2,
    // decimal: " point ",
  });
  // }
  // return humanizeDuration(Math.floor((durationMs).toFixed(0)), {
  //   language: lang,
  //   fallbacks: ['en'],
  //   units: ['d', 'h', 'm', 's']
  // });
};
