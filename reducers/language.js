const defaultLanguageState = {
  selected: 'en-GB',
};

const language = (state = defaultLanguageState, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        ...{
          selected: action.payload,
        }
      };
    default: return state;
  }
};

export default language;
