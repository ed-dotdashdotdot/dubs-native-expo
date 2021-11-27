const defaultImagesState = {
  detail: '',
  loaded: false,
  selected: '',
  // sectionTopRated: {
  //   name: 'topRated',
  //   loading: false,
  //   loaded: true,
  //   total: 0,
  //   images: ['1', '2', '21']
  // },
  // sectionDifficult: {
  //   name: 'difficult',
  //   loading: false,
  //   loaded: true,
  //   total: 0,
  //   images: ['5', '10']
  // },
  sectionArchitecture: {
    name: 'architecture',
    loading: false,
    loaded: true,
    error: false,
    total: 0,
    images: ['1', '2', '3', '4', '5', '10', '20', '21']
  },
  sectionNature: {
    name: 'nature',
    loading: false,
    loaded: true,
    error: false,
    total: 0,
    images: ['6', '7', '8', '9']
  },
  sectionPatterns: {
    name: 'patterns',
    loading: false,
    loaded: true,
    error: false,
    total: 0,
    images: ['11', '12', '22', '23']
  },
  sectionTechnology: {
    name: 'technology',
    loading: false,
    loaded: true,
    error: false,
    total: 0,
    images: ['13', '14', '15']
  },
  sectionTypography: {
    name: 'typography',
    loading: false,
    loaded: true,
    error: false,
    total: 0,
    images: ['16', '17', '18', '19'],
  },
  sections: [
    {
      name: 'architecture',
    }, {
      name: 'nature',
    }, {
      name: 'patterns',
    }, {
      name: 'technology',
    }, {
      name: 'typography',
    }
  ],
  fetch: '',
};

const images = (state = defaultImagesState, action) => {
  switch (action.type) {
    case 'SET_IMAGES_DETAIL': return {
      ...state,
      ...{
        detail: action.payload,
      }
    };
    case 'SET_IMAGES_LOADED': return {
      ...state,
      ...{
        loaded: action.payload,
      }
    };
    case 'SET_IMAGES_LOADING': return {
      ...state,
      ...{
        loading: action.payload,
      }
    };
    case 'SET_IMAGES_SECTIONS': return {
      ...state,
      ...{
        sections: action.payload,
      }
    };
    case 'SET_IMAGES_SECTION_ARCHITECTURE': return {
      ...state,
      ...{
        sectionArchitecture: action.payload,
      }
    };
    case 'SET_IMAGES_SECTION_NATURE': return {
      ...state,
      ...{
        sectionNature: action.payload,
      }
    };
    case 'SET_IMAGES_SECTION_PATTERNS': return {
      ...state,
      ...{
        sectionPatterns: action.payload,
      }
    };
    case 'SET_IMAGES_SECTION_TECHNOLOGY': return {
      ...state,
      ...{
        sectionTechnology: action.payload,
      }
    };
    case 'SET_IMAGES_SECTION_TYPOGRAPHY': return {
      ...state,
      ...{
        sectionTypography: action.payload,
      }
    };
    case 'SET_IMAGES_SELECTED': return {
      // ...state.filter(val => val.images.sections.name !== action.section),
      ...state,
      ...{
        selected: action.payload,
      }
    };
    case 'SET_IMAGES_FETCH': return {
      ...state,
      ...{
        fetch: action.payload,
      }
    };
    default: return state;
  }
};

export default images;
