export const sanitiseDeviceLocale = deviceLocale => {
  
  // console.log(`sanitiseDeviceLocale: ${deviceLocale}`);

  // console.log('===');
  // console.log(deviceLocale);
  // console.log('===');

  switch (deviceLocale) {
    case 'zh-CN': return {
      flag: "CN",
      language: "zh-CN",
    };
    case "de-DE": return {
      flag: "DE",
      language: "de-DE"
    };
    case "en-US": return {
      flag: "US",
      language: "en-GB"
    };
    case "es-ES": return {
      flag: "ES",
      language: "es-ES"
    };
    case "fr-FR": return {
      flag: "FR",
      language: "fr-FR"
    };
    case "it-IT": return {
      flag: "IT",
      language: "it-IT"
    }; 
    case "ja-JP": return {
      flag: "JP",
      language: "ja-JP"
    };
    case "pt-PT": return {
      flag: "PT",
      language: "pt-PT"
    };
    case "ru-RU": return {
      flag: "RU",
      language: "ru-RU"
    };
    default: return {
      flag: "EN",
      language: "en-GB"
    };
  };
}