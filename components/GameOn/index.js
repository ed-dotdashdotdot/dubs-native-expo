import React from 'react';
import PropTypes from 'prop-types';

import GameBoard from '../GameBoard';

const GameOn = ({ dimensions, level }) => (
  <GameBoard
    dimensions={dimensions}
    level={level}
  />
);

GameOn.propTypes = {
  dimensions: PropTypes.object.isRequired,
  level: PropTypes.string.isRequired,
};

export default GameOn;
