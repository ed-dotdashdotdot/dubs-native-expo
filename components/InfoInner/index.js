import React from 'react';
import PropTypes from 'prop-types';

import Component from './component';

import globalStyles from '../../css/style.js';

const InfoInner = props => {
  const { children } = { ...props };
  return (
    <Component
      content={children}
      styles={globalStyles.infoInner}
    />
  );
};

InfoInner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default InfoInner;
