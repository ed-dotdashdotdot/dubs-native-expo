import { drawGameDuration } from '../';

describe.only('drawGameDuration()', () => {
  describe('when lang is `de`', () => {
    it.each`
      duration | lang    | expected
      ${null}  | ${'de'} | ${'-'}
      ${0}     | ${'de'} | ${'-'}
      ${0.33}  | ${'de'} | ${'0,33 Sekunden'}
      ${0.5}   | ${'de'} | ${'0,5 Sekunden'}
      ${0.75}  | ${'de'} | ${'0,75 Sekunden'}
      ${1}     | ${'de'} | ${'1 Sekunde'}
      ${2}     | ${'de'} | ${'2 Sekunden'}
      ${2.05}  | ${'de'} | ${'2,05 Sekunden'}
      ${179}   | ${'de'} | ${'179 Sekunden'}
      ${179.5} | ${'de'} | ${'179,5 Sekunden'}
      ${180}   | ${'de'} | ${'180 Sekunden'}
      ${1199}  | ${'de'} | ${'1199 Sekunden'}
      ${1200}  | ${'de'} | ${'1200 Sekunden'}
      ${3600}  | ${'de'} | ${'3600 Sekunden'}
      ${7200}  | ${'de'} | ${'7200 Sekunden'}
      ${5400}  | ${'de'} | ${'5400 Sekunden'}
      ${86400} | ${'de'} | ${'86400 Sekunden'}
      ${86401} | ${'de'} | ${'86401 Sekunden'}
      ${90000} | ${'de'} | ${'90000 Sekunden'}
      ${90001} | ${'de'} | ${'90001 Sekunden'}
    `(
      'should return the expected value when duration is $duration',
      ({ duration, lang, expected }) => {
        expect(
          drawGameDuration(duration, lang)
        ).toBe(expected);
      }
    );
  });
  // describe('when lang is `en`', () => {
  //   it.each`
  //     duration | lang    | expected
  //     ${null}  | ${'en'} | ${'-'}
  //     ${0}     | ${'en'} | ${'-'}
  //     ${0.33}  | ${'en'} | ${'0.33 seconds'}
  //     ${0.5}   | ${'en'} | ${'0.5 seconds'}
  //     ${0.75}  | ${'en'} | ${'0.75 seconds'}
  //     ${1}     | ${'en'} | ${'1 second'}
  //     ${2}     | ${'en'} | ${'2 seconds'}
  //     ${2.05}  | ${'en'} | ${'2.05 seconds'}
  //     ${179}   | ${'en'} | ${'179 seconds'}
  //     ${179.5} | ${'en'} | ${'179.5 seconds'}
  //     ${180}   | ${'en'} | ${'180 seconds'}
  //     ${1199}  | ${'en'} | ${'1199 seconds'}
  //     ${1200}  | ${'en'} | ${'1200 seconds'}
  //     ${3600}  | ${'en'} | ${'3600 seconds'}
  //     ${7200}  | ${'en'} | ${'7200 seconds'}
  //     ${5400}  | ${'en'} | ${'5400 seconds'}
  //     ${86400} | ${'en'} | ${'86400 seconds'}
  //     ${86401} | ${'en'} | ${'86401 seconds'}
  //     ${90000} | ${'en'} | ${'90000 seconds'}
  //     ${90001} | ${'en'} | ${'90001 seconds'}
  //   `(
  //     'should return the expected value when duration is $duration',
  //     ({ duration, lang, expected }) => {
  //       expect(
  //         drawGameDuration(duration, lang)
  //       ).toBe(expected);
  //     }
  //   );
  // });
  // describe('when lang is `es`', () => {
  //   it.each`
  //     duration | lang    | expected
  //     ${null}  | ${'es'} | ${'-'}
  //     ${0}     | ${'es'} | ${'-'}
  //     ${0.33}  | ${'es'} | ${'0,33 segundos'}
  //     ${0.5}   | ${'es'} | ${'0,5 segundos'}
  //     ${0.75}  | ${'es'} | ${'0,75 segundos'}
  //     ${1}     | ${'es'} | ${'1 segundo'}
  //     ${2}     | ${'es'} | ${'2 segundos'}
  //     ${2.05}  | ${'es'} | ${'2,05 segundos'}
  //     ${179}   | ${'es'} | ${'179 segundos'}
  //     ${179.5} | ${'es'} | ${'179,5 segundos'}
  //     ${180}   | ${'es'} | ${'180 segundos'}
  //     ${1199}  | ${'es'} | ${'1199 segundos'}
  //     ${1200}  | ${'es'} | ${'1200 segundos'}
  //     ${3600}  | ${'es'} | ${'3600 segundos'}
  //     ${7200}  | ${'es'} | ${'7200 segundos'}
  //     ${5400}  | ${'es'} | ${'5400 segundos'}
  //     ${86400} | ${'es'} | ${'86400 segundos'}
  //     ${86401} | ${'es'} | ${'86401 segundos'}
  //     ${90000} | ${'es'} | ${'90000 segundos'}
  //     ${90001} | ${'es'} | ${'90001 segundos'}
  //   `(
  //     'should return the expected value when duration is $duration',
  //     ({ duration, lang, expected }) => {
  //       expect(
  //         drawGameDuration(duration, lang)
  //       ).toBe(expected);
  //     }
  //   );
  // });
  // describe('when lang is `fr`', () => {
  //   it.each`
  //     duration | lang    | expected
  //     ${null}  | ${'fr'} | ${'-'}
  //     ${0}     | ${'fr'} | ${'-'}
  //     ${0.33}  | ${'fr'} | ${'0,33 seconde'}
  //     ${0.5}   | ${'fr'} | ${'0,5 seconde'}
  //     ${0.75}  | ${'fr'} | ${'0,75 seconde'}
  //     ${1}     | ${'fr'} | ${'1 seconde'}
  //     ${2}     | ${'fr'} | ${'2 secondes'}
  //     ${2.05}  | ${'fr'} | ${'2,05 secondes'}
  //     ${179}   | ${'fr'} | ${'179 secondes'}
  //     ${179.5} | ${'fr'} | ${'179,5 secondes'}
  //     ${180}   | ${'fr'} | ${'180 secondes'}
  //     ${1199}  | ${'fr'} | ${'1199 secondes'}
  //     ${1200}  | ${'fr'} | ${'1200 secondes'}
  //     ${3600}  | ${'fr'} | ${'3600 secondes'}
  //     ${7200}  | ${'fr'} | ${'7200 secondes'}
  //     ${5400}  | ${'fr'} | ${'5400 secondes'}
  //     ${86400} | ${'fr'} | ${'86400 secondes'}
  //     ${86401} | ${'fr'} | ${'86401 secondes'}
  //     ${90000} | ${'fr'} | ${'90000 secondes'}
  //     ${90001} | ${'fr'} | ${'90001 secondes'}
  //   `(
  //     'should return the expected value when duration is $duration',
  //     ({ duration, lang, expected }) => {
  //       expect(
  //         drawGameDuration(duration, lang)
  //       ).toBe(expected);
  //     }
  //   );
  // });
  // describe('when lang is `it`', () => {
  //   it.each`
  //     duration | lang    | expected
  //     ${null}  | ${'it'} | ${'-'}
  //     ${0}     | ${'it'} | ${'-'}
  //     ${0.33}  | ${'it'} | ${'0,33 secondi'}
  //     ${0.5}   | ${'it'} | ${'0,5 secondi'}
  //     ${0.75}  | ${'it'} | ${'0,75 secondi'}
  //     ${1}     | ${'it'} | ${'1 secondo'}
  //     ${2}     | ${'it'} | ${'2 secondi'}
  //     ${2.05}  | ${'it'} | ${'2,05 secondi'}
  //     ${179}   | ${'it'} | ${'179 secondi'}
  //     ${179.5} | ${'it'} | ${'179,5 secondi'}
  //     ${180}   | ${'it'} | ${'180 secondi'}
  //     ${1199}  | ${'it'} | ${'1199 secondi'}
  //     ${1200}  | ${'it'} | ${'1200 secondi'}
  //     ${3600}  | ${'it'} | ${'3600 secondi'}
  //     ${7200}  | ${'it'} | ${'7200 secondi'}
  //     ${5400}  | ${'it'} | ${'5400 secondi'}
  //     ${86400} | ${'it'} | ${'86400 secondi'}
  //     ${86401} | ${'it'} | ${'86401 secondi'}
  //     ${90000} | ${'it'} | ${'90000 secondi'}
  //     ${90001} | ${'it'} | ${'90001 secondi'}
  //   `(
  //     'should return the expected value when duration is $duration',
  //     ({ duration, lang, expected }) => {
  //       expect(
  //         drawGameDuration(duration, lang)
  //       ).toBe(expected);
  //     }
  //   );
  // });
  // describe('when lang is `pt`', () => {
  //   it.each`
  //     duration | lang    | expected
  //     ${null}  | ${'pt'} | ${'-'}
  //     ${0}     | ${'pt'} | ${'-'}
  //     ${0.33}  | ${'pt'} | ${'0,33 segundos'}
  //     ${0.5}   | ${'pt'} | ${'0,5 segundos'}
  //     ${0.75}  | ${'pt'} | ${'0,75 segundos'}
  //     ${1}     | ${'pt'} | ${'1 segundo'}
  //     ${2}     | ${'pt'} | ${'2 segundos'}
  //     ${2.05}  | ${'pt'} | ${'2,05 segundos'}
  //     ${179}   | ${'pt'} | ${'179 segundos'}
  //     ${179.5} | ${'pt'} | ${'179,5 segundos'}
  //     ${180}   | ${'pt'} | ${'180 segundos'}
  //     ${1199}  | ${'pt'} | ${'1199 segundos'}
  //     ${1200}  | ${'pt'} | ${'1200 segundos'}
  //     ${3600}  | ${'pt'} | ${'3600 segundos'}
  //     ${7200}  | ${'pt'} | ${'7200 segundos'}
  //     ${5400}  | ${'pt'} | ${'5400 segundos'}
  //     ${86400} | ${'pt'} | ${'86400 segundos'}
  //     ${86401} | ${'pt'} | ${'86401 segundos'}
  //     ${90000} | ${'pt'} | ${'90000 segundos'}
  //     ${90001} | ${'pt'} | ${'90001 segundos'}
  //   `(
  //     'should return the expected value when duration is $duration',
  //     ({ duration, lang, expected }) => {
  //       expect(
  //         drawGameDuration(duration, lang)
  //       ).toBe(expected);
  //     }
  //   );
  // });
  // describe('when lang is undefined', () => {
  //   it.each`
  //     duration | lang         | expected
  //     ${null}  | ${undefined} | ${'-'}
  //     ${0}     | ${undefined} | ${'-'}
  //     ${0.33}  | ${undefined} | ${'0.33 seconds'}
  //     ${0.5}   | ${undefined} | ${'0.5 seconds'}
  //     ${0.75}  | ${undefined} | ${'0.75 seconds'}
  //     ${1}     | ${undefined} | ${'1 second'}
  //     ${2}     | ${undefined} | ${'2 seconds'}
  //     ${2.05}  | ${undefined} | ${'2.05 seconds'}
  //     ${179}   | ${undefined} | ${'179 seconds'}
  //     ${179.5} | ${undefined} | ${'179.5 seconds'}
  //     ${180}   | ${undefined} | ${'180 seconds'}
  //     ${1199}  | ${undefined} | ${'1199 seconds'}
  //     ${1200}  | ${undefined} | ${'1200 seconds'}
  //     ${3600}  | ${undefined} | ${'3600 seconds'}
  //     ${7200}  | ${undefined} | ${'7200 seconds'}
  //     ${5400}  | ${undefined} | ${'5400 seconds'}
  //     ${86400} | ${undefined} | ${'86400 seconds'}
  //     ${86401} | ${undefined} | ${'86401 seconds'}
  //     ${90000} | ${undefined} | ${'90000 seconds'}
  //     ${90001} | ${undefined} | ${'90001 seconds'}
  //   `(
  //     'should return the expected (en) value when duration is $duration',
  //     ({ duration, lang, expected }) => {
  //       expect(
  //         drawGameDuration(duration, lang)
  //       ).toBe(expected);
  //     }
  //   );
  // });
});
