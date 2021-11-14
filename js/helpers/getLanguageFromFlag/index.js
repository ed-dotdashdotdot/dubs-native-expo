export const getLanguageFromFlag = (flag = 'En') => {
  switch (flag) {
    case 'Cn' : return 'zh-CN';
    case 'De' : return 'de-DE';
    case 'Es' : return 'es-ES';
    case 'Fr' : return 'fr-FR';
    case 'It' : return 'it-IT';
    case 'Jp' : return 'ja-JP';
    case 'Pt' : return 'pt-PT';
    case 'Ru' : return 'ru-RU';
    default : return 'en-GB';
  };
};
