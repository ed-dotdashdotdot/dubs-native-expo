const setChangeFlag = flag => ({
  type: 'SET_FLAG',
  payload: flag,
});
const setChangeLanguage = language => ({
  type: 'SET_LANGUAGE',
  payload: language,
});
const setChangeLocale = locale => ({
  type: 'SET_LOCALE',
  payload: locale,
});

const exportedLanguageObject = {
  setChangeFlag,
  setChangeLanguage,
  setChangeLocale,
};

export default exportedLanguageObject;
