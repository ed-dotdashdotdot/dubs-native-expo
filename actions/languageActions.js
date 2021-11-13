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
const setChangePreferredFlag = preferredFlag => ({
  type: 'SET_PREFERRED_FLAG',
  payload: language,
});
const setChangePreferredLanguage = preferredLanguage => ({
  type: 'SET_PREFERRED_LANGUAGE',
  payload: language,
});

const exportedLanguageObject = {
  setChangeFlag,
  setChangeLanguage,
  setChangeLocale,
  setChangePreferredFlag,
  setChangePreferredLanguage,
};

export default exportedLanguageObject;
