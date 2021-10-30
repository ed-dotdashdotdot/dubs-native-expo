import React from 'react';
// import classnames from 'classnames';
import Translate from '../../../Translate';

// import './css/index.scss';

const ImageGridError = props => {
  const {
    title,
  } = { ...props };

  return (
    <div
      className={classnames(
        'choose-image-grid-error',
        title
      )}
    >
      <Translate textKey="anErrorHasOccured" />
    </div>
  );
};

export default ImageGridError;
