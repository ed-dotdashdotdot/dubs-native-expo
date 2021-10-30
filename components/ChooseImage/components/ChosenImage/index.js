import React from 'react';

import ChosenImageStyled from './styles';
import './css/index.scss';

const ChosenImage = props => {
  const { number } = { ...props };
  return (
    <ChosenImageStyled
      className="chosen-image"
    >
      {/* <div className="chosen-image"> */}
      <img src={`http://localhost/dubs-cdn/image/?image=${number}&size=medium`} alt="" />
      {/* <img src={`../../../../../../img/game-board/medium/${number}.jpg`} alt="" /> */}
      {/* </div> */}
    </ChosenImageStyled>
  );
};

export default ChosenImage;
