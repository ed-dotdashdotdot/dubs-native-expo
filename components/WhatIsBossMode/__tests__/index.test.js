import React from 'react';
import { shallow } from "enzyme";

import WhatIsBossMode from '../';

describe('WhatIsBossMode component', () => {
  it(`renders correctly in boss mode`, () => {
    const props = {
      bossMode: true
    };
    const component = shallow(<WhatIsBossMode {...props} />);
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly in normal mode`, () => {
    const props = {
      bossMode: false
    };
    const component = shallow(<WhatIsBossMode {...props} />);
    expect(component).toMatchSnapshot();
  });
});
