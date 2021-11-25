import React from 'react';
import Translate from '../../../Translate';

const ChooseImageGridError = ({ title }) => (
  <div
    className={classnames(
      'choose-image-grid-error',
      title
    )}
  >
    <Translate textKey="anErrorHasOccured" />
  </div>
);

export default ChooseImageGridError;
