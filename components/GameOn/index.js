import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import GameBoard from '../GameBoard';
import LoadingImage from '../LoadingImage';

const GameOn = props => {
  const images = useSelector(state => state.images);
  const { dimensions, level } = { ...props };
  return (
    <View>
      {/* { */}
        {/* // images.loaded ? ( */}
          <GameBoard
            dimensions={dimensions}
            level={level}
          />
        {/* ) : ( */}
          {/* <LoadingImage 
            imageToUse='3' 
          />
        ) */}
      {/* } */}
    </View>
  );
}

export default GameOn;
