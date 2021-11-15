import React from 'react';
import { shallow } from "enzyme";

import Component from '../';

describe('Component', () => {

  const props = {
    styles: { backgroundColor: 'red' }
  };

  it(`renders correctly with 0 children`, () => {
    const component = shallow(<Component />);
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly with 1 child`, () => {
    const component = shallow(<Component><Text>Child</Text></Component>);
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly with 2 children`, () => {
    const component = shallow(<Component><Text>Child</Text><Text>Another child</Text></Component>);
    expect(component).toMatchSnapshot();
  });
});
