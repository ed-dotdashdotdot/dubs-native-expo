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
    images: [
      // 'type1',
      // 'type2',
      // 'cat',
      // 'square-template-easy-landscape',
      // 'square-template-easy-portrait',
      // 'square-template-easy',
      // '14',
      // '15',
      // 'grid-numbered-easy-landscape',
      // 'grid-numbered-easy-portrait',
      // 'grid-numbered-normal-landscape',
      // 'grid-numbered-normal-portrait',
      // 'grid-numbered-hard-landscape',
      // 'grid-numbered-hard-portrait',
      '2',
      '20',
      '21',
      '22',
      '23',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '1',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
    ]
  },
  sectionNature: {
    name: 'nature',
    loading: false,
    loaded: true,
    error: false,
    total: 0,
    images: ['1', '2', '6', '7', '8', '9']
  },
  sectionPatterns: {
    name: 'patterns',
    loading: false,
    loaded: true,
    error: false,
    total: 0,
    images: ['22', '23']
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
  ]
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
    // case 'SET_GAME_DATA': return {
    //   ...state,
    //   ...{
    //     data: action.payload,
    //   }
    // };
    // case 'SET_GAME_FOUND': return {
    //   ...state,
    //   ...{
    //     found: [...state.found, ...action.payload],
    //   }
    // };
    // case 'INJECT_GAME_FOUND': return {
    //   ...state,
    //   found: action.payload,
    // };
    // case 'SET_GAME_ID': return {
    //   ...state,
    //   ...{
    //     id: action.payload,
    //   }
    // };
    // case 'SET_GAME_HIGHLIGHT': return {
    //   ...state,
    //   ...{
    //     highlight: action.payload,
    //   }
    // };
    // case 'SET_GAME_INVERT': return {
    //   ...state,
    //   ...{
    //     invert: action.payload,
    //   }
    // };
    // case 'SET_GAME_LEVEL': return {
    //   ...state,
    //   ...{
    //     level: action.payload,
    //   }
    // };
    // case 'SET_GAME_SELECTED': return {
    //   ...state,
    //   ...{
    //     selected: action.payload,
    //   }
    // };
    // case 'SET_GAME_STATUS': return {
    //   ...state,
    //   ...{
    //     status: action.payload,
    //   }
    // };
    default: return state;
  }
};

export default images;
