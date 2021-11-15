import React from 'react';
import { shallow } from "enzyme";

import WhatIsBossModeTitle from '../';

describe('WhatIsBossModeTitle component', () => {
  it(`renders correctly`, () => {
    const props = {
      textKey: 'TEXT-KEY-STRING'
    };
    const component = shallow(<WhatIsBossModeTitle {...props} />);
    expect(component).toMatchSnapshot();
  });
});
