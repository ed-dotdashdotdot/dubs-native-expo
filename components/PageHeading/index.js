import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import allActions from '../../actions';

// import NewGameButtons from '../shared/NewGameButtons';
// import Translate from '../Translate';

import globalStyles from '../../css/style.js';
import styles from './styles.js';

const PageHeading = props => {
  const { colour, text } = { ...props };
  // const game = useSelector(state => state.game);
  // const language = useSelector(state => state.language);
  // const { gameActions } = { ...allActions };
  // const dispatch = useDispatch();

  return (
    <Text style={[
      globalStyles.border,
      globalStyles.borderRadius8,
      globalStyles.colorWhite,
      globalStyles.fontFamilyCourier,
      globalStyles.padding12,
      colour === 'green' && globalStyles.backgroundGreen,
      colour === 'amber' && globalStyles.backgroundAmber,
      colour === 'red' && globalStyles.backgroundRed,
      styles.pageHeading,
    ]}>
      { text }
    </Text>
  );
};

PageHeading.propTypes = {
  colour: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default PageHeading;
