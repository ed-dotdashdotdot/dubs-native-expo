import React from 'react';
import { shallow } from "enzyme";

import WhatIsBossModeExample from '../';

describe('WhatIsBossModeExample component', () => {
  it(`renders correctly in normal mode`, () => {
    const props = {
      display: 'normal'
    };
    const component = shallow(<WhatIsBossModeExample {...props} />);
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly in boss mode`, () => {
    const props = {
      display: 'boss'
    };
    const component = shallow(<WhatIsBossModeExample {...props} />);
    expect(component).toMatchSnapshot();
  });
});
