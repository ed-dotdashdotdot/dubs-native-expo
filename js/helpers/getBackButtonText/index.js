export const getBackButtonText = section => {
  if (
    section === 'app-info' ||
    section === 'app-settings' ||
    section === 'choose-image' ||
    section === 'image-detail' ||
    section === 'language-select' ||
    section === 'what-is-boss-mode'
  ) {
    return 'back';
  } 
  return 'backToHome';
  // section === 'game-over'
  // section === 'game-paused'
  // section === 'game-ready'
};
