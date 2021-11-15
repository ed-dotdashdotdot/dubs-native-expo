import React from 'react';
import { shallow } from "enzyme";

import ImageGrid from '../';

it(`renders correctly at 768 x 1024`, () => {
  const props = {
    dimensions: {
      height: 768,
      width: 1024
    },
    imageList: ['1','2','3','4','5','6','7','8','9','10','11','12']
  };
  const component = shallow(<ImageGrid {...props} />);
  expect(component).toMatchSnapshot();
});
it(`renders correctly at 1024 x 768`, () => {
  const props = {
    dimensions: {
      height: 1024,
      width: 768
    },
    imageList: ['1','2','3','4','5','6']
  };
  const component = shallow(<ImageGrid {...props} />);
  expect(component).toMatchSnapshot();
});