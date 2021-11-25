import React from 'react';
import PropTypes from 'prop-types';

import Component from './component';

import globalStyles from '../../css/style.js';

const InfoInner = ({ children }) => (
  <Component
    content={children}
    styles={globalStyles.infoInner}
  />
);

InfoInner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default InfoInner;
