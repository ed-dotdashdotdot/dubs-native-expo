import React from 'react';
import { shallow } from "enzyme";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Options from '../';

describe('Options component', () => {

  const initialState = { 
    game:{},
    images: {},
  };
  const mockStore = configureStore();
  let store, wrapper;
  const props = {
    bossMode: false,
    dimensions: {
      height: 320,
      width: 568,
    },
    image: '1',
    level: 'easy',
  };
  store = mockStore(initialState);
  
  it(`should render Options component`, () => {
    const component = shallow(<Provider store={store}><Options /></Provider>);
    expect(component.length).toBe(1);
  });
  it(`should render by default 'Game home'`, () => {
    const component = shallow(<Provider store={store}><Options /></Provider>);
    expect(component.text()).toBe('Back to home')
  });
  
  
});
