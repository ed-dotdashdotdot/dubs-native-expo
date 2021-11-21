export const localiseDurationSeconds = (seconds, lang) => {
  const secondsWithComma = seconds.replace('.', ',');
  switch (lang) {
    case 'de-DE' : return secondsWithComma;
    case 'es-ES' : return secondsWithComma;
    case 'fr-FR' : return secondsWithComma;
    case 'it-IT' : return secondsWithComma;
    case 'pt-PT' : return secondsWithComma;
    case 'ru-RU' : return secondsWithComma;
    default : return seconds;
  };
}
