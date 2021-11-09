export const drawStopwatch = (durationMs) => {
  if (!durationMs) return '00:00';

  const duration = Math.round(durationMs / 1000);

  // const d = Number(duration);
  let d = Math.floor(duration / (3600 * 24));
  let h = Math.floor((duration % (3600 * 24)) / 3600);
  let m = Math.floor((duration % 3600) / 60);
  let s = Math.floor(duration % 3600 % 60);

  if (d < 10) { d = `0${d}`; }
  if (h < 10) { h = `0${h}`; }
  if (m < 10) { m = `0${m}`; }
  if (s < 10) { s = `0${s}`; }

  const dDisplay = d > 0 ? `${d}:` : '';
  let hDisplay = h > 0 ? `${h}:` : '';
  if (dDisplay && dDisplay !== 0) {
    if (hDisplay === '') {
      hDisplay = '00:';
    }
  }
  const mDisplay = m > 0 ? `${m}:` : '00:';
  const sDisplay = s > 0 ? `${s}` : '00';
  return `${dDisplay}${hDisplay}${mDisplay}${sDisplay}`;
};
