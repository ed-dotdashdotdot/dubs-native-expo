const setImagesDetail = data => ({
  type: 'SET_IMAGES_DETAIL',
  payload: data,
});
const setImagesLoaded = data => ({
  type: 'SET_IMAGES_LOADED',
  payload: data,
});
const setImagesLoading = data => ({
  type: 'SET_IMAGES_LOADING',
  payload: data,
});
const setImagesSections = data => ({
  type: 'SET_IMAGES_SECTIONS',
  payload: data,
});
const setImagesSectionArchitecture = data => ({
  type: 'SET_IMAGES_SECTION_ARCHITECTURE',
  payload: data,
});
const setImagesSectionNature = data => ({
  type: 'SET_IMAGES_SECTION_NATURE',
  payload: data,
});
const setImagesSectionPatterns = data => ({
  type: 'SET_IMAGES_SECTION_PATTERNS',
  payload: data,
});
const setImagesSectionTechnology = data => ({
  type: 'SET_IMAGES_SECTION_TECHNOLOGY',
  payload: data,
});
const setImagesSectionTypography = data => ({
  type: 'SET_IMAGES_SECTION_TYPOGRAPHY',
  payload: data,
});
const setImagesSelected = data => ({
  type: 'SET_IMAGES_SELECTED',
  payload: data,
});
const setImagesFetch = data => ({
  type: 'SET_IMAGES_FETCH',
  payload: data,
});

const exportedGameObject = {
  setImagesDetail,
  setImagesLoaded,
  setImagesLoading,
  setImagesSections,
  setImagesSectionArchitecture,
  setImagesSectionNature,
  setImagesSectionPatterns,
  setImagesSectionTechnology,
  setImagesSectionTypography,
  setImagesSelected,
  setImagesFetch,
};

export default exportedGameObject;
