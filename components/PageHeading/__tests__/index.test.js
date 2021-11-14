import React from 'react';
import { shallow } from "enzyme";

import PageHeading from '../';

it(`renders correctly with a colour amber background`, () => {
  const props = {
    colour: 'amber', 
    textKey: "TEXT-KEY", 
  };
  const component = shallow(<PageHeading {...props} />);
  expect(component).toMatchSnapshot();
});
it(`renders correctly with a colour green background`, () => {
  const props = {
    colour: 'green', 
    textKey: "TEXT-KEY", 
  };
  const component = shallow(<PageHeading {...props} />);
  expect(component).toMatchSnapshot();
});
it(`renders correctly with a colour red background`, () => {
  const props = {
    colour: 'red', 
    textKey: "TEXT-KEY", 
  };
  const component = shallow(<PageHeading {...props} />);
  expect(component).toMatchSnapshot();
});
it(`renders correctly with no background colour (black)`, () => {
  const props = {
    textKey: "TEXT-KEY", 
  };
  const component = shallow(<PageHeading {...props} />);
  expect(component).toMatchSnapshot();
});
it(`renders correctly with subTextKeys`, () => {
  const props = {
    textKey: "TEXT-KEY", 
    subTextKeys: "SUB-TEXT-KEY", 
  };
  const component = shallow(<PageHeading {...props} />);
  expect(component).toMatchSnapshot();
});
