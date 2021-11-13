const defaultLanguageState = {
  preferred: '', // user can over-ride the selection made by the app
  preferredFlag: '', 
  preferredLanguage: '', 
  selected: 'en-GB', 
  locale: '', 
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
    case 'SET_PREFERRED_FLAG':
      return {
        ...state,
        ...{
          preferredFlag: action.payload,
        }
      };
    case 'SET_PREFERRED_LANGUAGE':
      return {
        ...state,
        ...{
          preferredLanguage: action.payload,
        }
      };
    default: return state;
  }
};

export default language;
