import React from 'react';
import { shallow } from "enzyme";

import WhatIsBossModeDescription from '../';

describe('WhatIsBossModeDescription component', () => {
  it(`renders correctly`, () => {
    const props = {
      textKey: 'TEXT-KEY-STRING'
    };
    const component = shallow(<WhatIsBossModeDescription {...props} />);
    expect(component).toMatchSnapshot();
  });
});
