import React from 'react';
import { shallow } from "enzyme";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import ContinueGameButton from '../';

describe('ContinueGameButton component', () => {
  it(`renders correctly`, () => {
    const initialState = { 
      game: {},
      images: {}
    };
    const mockStore = configureStore();
    let store, wrapper;
    store = mockStore(initialState);
    const component = shallow(<Provider store={store}><ContinueGameButton /></Provider>);
    expect(component).toMatchSnapshot();
  });
  
});
