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
    <View style={[
      {
        // backgroundColor: 'red',
        borderRadius: 18,
        backgroundColor: colour === 'green' ? 'green' : colour === 'amber' ? 'orange' : colour === 'red' ? 'red' : 'transparent',
        // backgroundColor: colour === 'amber' && 'amber',
        // backgroundColor: colour === 'red' && 'red',
        // colour === 'amber' && globalStyles.backgroundAmber,
        // colour === 'red' && globalStyles.backgroundRed,
        marginBottom: 24,
      },
      globalStyles.border,
      // globalStyles.borderRadius8,
      // globalStyles.colorWhite,
      // globalStyles.fontFamilyCourier,
      globalStyles.padding12,
      // colour === 'green' && globalStyles.backgroundGreen,
      // colour === 'amber' && globalStyles.backgroundAmber,
      // colour === 'red' && globalStyles.backgroundRed,
      // styles.pageHeading,
    ]}>
      <Text
        style={[
          {
            // backgroundColor: 'red',
            // borderRadius: 18,
            // backgroundColor: colour === 'green' ? 'green' : colour === 'amber' ? 'orange' : colour === 'red' ? 'red' : 'blue',
            // backgroundColor: colour === 'amber' && 'amber',
            // backgroundColor: colour === 'red' && 'red',
            // colour === 'amber' && globalStyles.backgroundAmber,
            // colour === 'red' && globalStyles.backgroundRed,
            padding: 0,
            margin: 0,
          },
          globalStyles.colorWhite,
          globalStyles.fontFamilyCourier,
          styles.pageHeading,
          // globalStyles.padding12,
        ]}
      >
        { text }
      </Text>
    </View>
  );
};

PageHeading.propTypes = {
  colour: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default PageHeading;
