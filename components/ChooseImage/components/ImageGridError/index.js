import React from 'react';
import Translate from '../../../Translate';

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
