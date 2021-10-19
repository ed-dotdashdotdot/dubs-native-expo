const setChangeLanguage = language => ({
  type: 'SET_LANGUAGE',
  payload: language,
});

const exportedLanguageObject = {
  setChangeLanguage,
};

export default exportedLanguageObject;
