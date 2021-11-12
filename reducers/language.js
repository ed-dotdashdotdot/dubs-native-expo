const defaultLanguageState = {
  preferred: 'de-DE', // user can over-ride the selection made by the app
  selected: 'en-GB', // app calculates this by device region
};

const language = (state = defaultLanguageState, action) => {
  switch (action.type) {
    case 'SET_FLAG':
      return {
        ...state,
        ...{
          flag: action.payload,
        }
      };
    case 'SET_LANGUAGE':
      return {
        ...state,
        ...{
          selected: action.payload,
        }
      };
    case 'SET_LOCALE':
      return {
        ...state,
        ...{
          locale: action.payload,
        }
      };
    default: return state;
  }
};

export default language;
