import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Translate from '../Translate';

import { colours, fontFamily } from '../../configuration/config.json';

const GameOnHeader = props => {
  const { bossMode, level } = { ...props };
  return (
    <View 
      style={{
        flex: 1,
        height: 24,
        justifyContent: 'center',
        position: 'absolute',
        top: 12,
        width: '100%',
      }}
    >
      <Text 
        style={{
          color: colours.white,
          fontFamily: fontFamily,
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        <Translate textKey={`${level}Level`} />
        {
          bossMode && (
            <Text>
              (
                <Translate textKey="bossMode" />
              )
            </Text>
          )
        }
      </Text>
    </View>
  );
};

GameOnHeader.propTypes = {
  bossMode: PropTypes.bool.isRequired,
  level: PropTypes.string.isRequired,
};

export default GameOnHeader;
