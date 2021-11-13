export const getFlagFromLanguage = language => {
  switch (language) {
    case 'zh-CN' : return 'Cn';
    case 'de-DE' : return 'De';
    case 'es-ES' : return 'Es';
    case 'fr-FR' : return 'Fr';
    case 'it-IT' : return 'It';
    case 'ja-JP' : return 'Jp';
    case 'pt-PT' : return 'Pt';
    case 'ru-RU' : return 'Ru';
    default : return 'En';
  };
};
