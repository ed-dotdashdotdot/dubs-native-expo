import React from 'react';
import renderer from 'react-test-renderer';

import DrawGameDuration from '../';

describe('DrawGameDuration()', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<DrawGameDuration duration="1000" lang="en" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('when lang is `de`', () => {
    it.each`
      duration    | lang    
      ${null}     | ${'de'} 
      ${0}        | ${'de'} 
      ${500}      | ${'de'} 
      ${1000}     | ${'de'} 
      ${2000}     | ${'de'} 
      ${2050}     | ${'de'} 
      ${179000}   | ${'de'} 
      ${179500}   | ${'de'} 
      ${180000}   | ${'de'} 
      ${1199000}  | ${'de'} 
      ${1200000}  | ${'de'} 
      ${3600000}  | ${'de'} 
      ${7200000}  | ${'de'} 
      ${5400000}  | ${'de'} 
      ${86400000} | ${'de'} 
      ${86401000} | ${'de'} 
      ${90000000} | ${'de'} 
      ${90001000} | ${'de'} 
    `(
      'should renders correctly value when duration is $duration',
      ({ duration, lang }) => {
        const tree = renderer
          .create(<DrawGameDuration duration={duration} lang={lang} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      }
    );
  });
  describe('when lang is `en`', () => {
    it.each`
      duration    | lang    
      ${null}     | ${'en'} 
      ${0}        | ${'en'} 
      ${500}      | ${'en'} 
      ${1000}     | ${'en'} 
      ${2000}     | ${'en'} 
      ${2050}     | ${'en'} 
      ${179000}   | ${'en'} 
      ${179500}   | ${'en'} 
      ${180000}   | ${'en'} 
      ${1199000}  | ${'en'} 
      ${1200000}  | ${'en'} 
      ${3600000}  | ${'en'} 
      ${7200000}  | ${'en'} 
      ${5400000}  | ${'en'} 
      ${86400000} | ${'en'} 
      ${86401000} | ${'en'} 
      ${90000000} | ${'en'} 
      ${90001000} | ${'en'} 
    `(
      'should renders correctly value when duration is $duration',
      ({ duration, lang }) => {
        const tree = renderer
          .create(<DrawGameDuration duration={duration} lang={lang} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      }
    );
  });
  describe('when lang is `es`', () => {
    it.each`
      duration    | lang    
      ${null}     | ${'es'} 
      ${0}        | ${'es'} 
      ${500}      | ${'es'} 
      ${1000}     | ${'es'} 
      ${2000}     | ${'es'} 
      ${2050}     | ${'es'} 
      ${179000}   | ${'es'} 
      ${179500}   | ${'es'} 
      ${180000}   | ${'es'} 
      ${1199000}  | ${'es'} 
      ${1200000}  | ${'es'} 
      ${3600000}  | ${'es'} 
      ${7200000}  | ${'es'} 
      ${5400000}  | ${'es'} 
      ${86400000} | ${'es'} 
      ${86401000} | ${'es'} 
      ${90000000} | ${'es'} 
      ${90001000} | ${'es'} 
    `(
      'should renders correctly value when duration is $duration',
      ({ duration, lang }) => {
        const tree = renderer
          .create(<DrawGameDuration duration={duration} lang={lang} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      }
    );
  });
  describe('when lang is `fr`', () => {
    it.each`
      duration    | lang    
      ${null}     | ${'fr'} 
      ${0}        | ${'fr'} 
      ${500}      | ${'fr'} 
      ${1000}     | ${'fr'} 
      ${2000}     | ${'fr'} 
      ${2050}     | ${'fr'} 
      ${179000}   | ${'fr'} 
      ${179500}   | ${'fr'} 
      ${180000}   | ${'fr'} 
      ${1199000}  | ${'fr'} 
      ${1200000}  | ${'fr'} 
      ${3600000}  | ${'fr'} 
      ${7200000}  | ${'fr'} 
      ${5400000}  | ${'fr'} 
      ${86400000} | ${'fr'} 
      ${86401000} | ${'fr'} 
      ${90000000} | ${'fr'} 
      ${90001000} | ${'fr'} 
    `(
      'should renders correctly value when duration is $duration',
      ({ duration, lang }) => {
        const tree = renderer
          .create(<DrawGameDuration duration={duration} lang={lang} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      }
    );
  });
  describe('when lang is `it`', () => {
    it.each`
      duration    | lang    
      ${null}     | ${'it'} 
      ${0}        | ${'it'} 
      ${500}      | ${'it'} 
      ${1000}     | ${'it'} 
      ${2000}     | ${'it'} 
      ${2050}     | ${'it'} 
      ${179000}   | ${'it'} 
      ${179500}   | ${'it'} 
      ${180000}   | ${'it'} 
      ${1199000}  | ${'it'} 
      ${1200000}  | ${'it'} 
      ${3600000}  | ${'it'} 
      ${7200000}  | ${'it'} 
      ${5400000}  | ${'it'} 
      ${86400000} | ${'it'} 
      ${86401000} | ${'it'} 
      ${90000000} | ${'it'} 
      ${90001000} | ${'it'} 
    `(
      'should renders correctly value when duration is $duration',
      ({ duration, lang }) => {
        const tree = renderer
          .create(<DrawGameDuration duration={duration} lang={lang} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      }
    );
  });
  describe('when lang is `pt`', () => {
    it.each`
      duration    | lang    
      ${null}     | ${'pt'} 
      ${0}        | ${'pt'} 
      ${500}      | ${'pt'} 
      ${1000}     | ${'pt'} 
      ${2000}     | ${'pt'} 
      ${2050}     | ${'pt'} 
      ${179000}   | ${'pt'} 
      ${179500}   | ${'pt'} 
      ${180000}   | ${'pt'} 
      ${1199000}  | ${'pt'} 
      ${1200000}  | ${'pt'} 
      ${3600000}  | ${'pt'} 
      ${7200000}  | ${'pt'} 
      ${5400000}  | ${'pt'} 
      ${86400000} | ${'pt'} 
      ${86401000} | ${'pt'} 
      ${90000000} | ${'pt'} 
      ${90001000} | ${'pt'} 
    `(
      'should renders correctly value when duration is $duration',
      ({ duration, lang }) => {
        const tree = renderer
          .create(<DrawGameDuration duration={duration} lang={lang} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      }
    );
  });
});
