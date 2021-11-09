import { drawGameDuration } from '.';

describe('drawGameDuration()', () => {
  describe('when lang is `de`', () => {
    it.each`
      durationMs  | lang    | expected
      ${null}     | ${'de'} | ${'-'}
      ${0}        | ${'de'} | ${'-'}
      ${500}      | ${'de'} | ${'0,5 Sekunden'}
      ${1000}     | ${'de'} | ${'1 Sekunde'}
      ${2000}     | ${'de'} | ${'2 Sekunden'}
      ${2050}     | ${'de'} | ${'2,05 Sekunden'}
      ${179000}   | ${'de'} | ${'179 Sekunden'}
      ${179500}   | ${'de'} | ${'179,5 Sekunden'}
      ${180000}   | ${'de'} | ${'3 Minuten'}
      ${1199000}  | ${'de'} | ${'19 Minuten, 59 Sekunden'}
      ${1200000}  | ${'de'} | ${'20 Minuten'}
      ${3600000}  | ${'de'} | ${'1 Stunde'}
      ${7200000}  | ${'de'} | ${'2 Stunden'}
      ${5400000}  | ${'de'} | ${'1 Stunde, 30 Minuten'}
      ${86400000} | ${'de'} | ${'1 Tag'}
      ${86401000} | ${'de'} | ${'1 Tag, 1 Sekunde'}
      ${90000000} | ${'de'} | ${'1 Tag, 1 Stunde'}
      ${90001000} | ${'de'} | ${'1 Tag, 1 Stunde, 1 Sekunde'}
    `(
      'should return the expected value when durationMs is $durationMs',
      ({ durationMs, lang, expected }) => {
        expect(
          drawGameDuration(durationMs, lang)
        ).toBe(expected);
      }
    );
  });
  describe('when lang is `en`', () => {
    it.each`
      durationMs  | lang    | expected
      ${null}     | ${'en'} | ${'-'}
      ${0}        | ${'en'} | ${'-'}
      ${500}      | ${'en'} | ${'0.5 seconds'}
      ${1000}     | ${'en'} | ${'1 second'}
      ${2000}     | ${'en'} | ${'2 seconds'}
      ${2050}     | ${'en'} | ${'2.05 seconds'}
      ${179000}   | ${'en'} | ${'179 seconds'}
      ${179500}   | ${'en'} | ${'179.5 seconds'}
      ${180000}   | ${'en'} | ${'3 minutes'}
      ${1199000}  | ${'en'} | ${'19 minutes, 59 seconds'}
      ${1200000}  | ${'en'} | ${'20 minutes'}
      ${3600000}  | ${'en'} | ${'1 hour'}
      ${7200000}  | ${'en'} | ${'2 hours'}
      ${5400000}  | ${'en'} | ${'1 hour, 30 minutes'}
      ${86400000} | ${'en'} | ${'1 day'}
      ${86401000} | ${'en'} | ${'1 day, 1 second'}
      ${90000000} | ${'en'} | ${'1 day, 1 hour'}
      ${90001000} | ${'en'} | ${'1 day, 1 hour, 1 second'}
    `(
      'should return the expected value when durationMs is $durationMs',
      ({ durationMs, lang, expected }) => {
        expect(
          drawGameDuration(durationMs, lang)
        ).toBe(expected);
      }
    );
  });
  describe('when lang is `es`', () => {
    it.each`
      durationMs  | lang    | expected
      ${null}     | ${'es'} | ${'-'}
      ${0}        | ${'es'} | ${'-'}
      ${500}      | ${'es'} | ${'0,5 segundos'}
      ${1000}     | ${'es'} | ${'1 segundo'}
      ${2000}     | ${'es'} | ${'2 segundos'}
      ${2050}     | ${'es'} | ${'2,05 segundos'}
      ${179000}   | ${'es'} | ${'179 segundos'}
      ${179500}   | ${'es'} | ${'179,5 segundos'}
      ${180000}   | ${'es'} | ${'3 minutos'}
      ${1199000}  | ${'es'} | ${'19 minutos, 59 segundos'}
      ${1200000}  | ${'es'} | ${'20 minutos'}
      ${3600000}  | ${'es'} | ${'1 hora'}
      ${7200000}  | ${'es'} | ${'2 horas'}
      ${5400000}  | ${'es'} | ${'1 hora, 30 minutos'}
      ${86400000} | ${'es'} | ${'1 día'}
      ${86401000} | ${'es'} | ${'1 día, 1 segundo'}
      ${90000000} | ${'es'} | ${'1 día, 1 hora'}
      ${90001000} | ${'es'} | ${'1 día, 1 hora, 1 segundo'}
    `(
      'should return the expected value when durationMs is $durationMs',
      ({ durationMs, lang, expected }) => {
        expect(
          drawGameDuration(durationMs, lang)
        ).toBe(expected);
      }
    );
  });
  describe('when lang is `fr`', () => {
    it.each`
      durationMs  | lang    | expected
      ${0}        | ${'fr'} | ${'-'}
      ${null}     | ${'fr'} | ${'-'}
      ${500}      | ${'fr'} | ${'0,5 seconde'}
      ${1000}     | ${'fr'} | ${'1 seconde'}
      ${2000}     | ${'fr'} | ${'2 secondes'}
      ${2050}     | ${'fr'} | ${'2,05 secondes'}
      ${179000}   | ${'fr'} | ${'179 secondes'}
      ${179500}   | ${'fr'} | ${'179,5 secondes'}
      ${180000}   | ${'fr'} | ${'3 minutes'}
      ${1199000}  | ${'fr'} | ${'19 minutes, 59 secondes'}
      ${1200000}  | ${'fr'} | ${'20 minutes'}
      ${3600000}  | ${'fr'} | ${'1 heure'}
      ${7200000}  | ${'fr'} | ${'2 heures'}
      ${5400000}  | ${'fr'} | ${'1 heure, 30 minutes'}
      ${86400000} | ${'fr'} | ${'1 jour'}
      ${86401000} | ${'fr'} | ${'1 jour, 1 seconde'}
      ${90000000} | ${'fr'} | ${'1 jour, 1 heure'}
      ${90001000} | ${'fr'} | ${'1 jour, 1 heure, 1 seconde'}
    `(
      'should return the expected value when durationMs is $durationMs',
      ({ durationMs, lang, expected }) => {
        expect(
          drawGameDuration(durationMs, lang)
        ).toBe(expected);
      }
    );
  });
  describe('when lang is `it`', () => {
    it.each`
      durationMs  | lang    | expected
      ${null}     | ${'it'} | ${'-'}
      ${0}        | ${'it'} | ${'-'}
      ${500}      | ${'it'} | ${'0,5 secondi'}
      ${1000}     | ${'it'} | ${'1 secondo'}
      ${2000}     | ${'it'} | ${'2 secondi'}
      ${2050}     | ${'it'} | ${'2,05 secondi'}
      ${179000}   | ${'it'} | ${'179 secondi'}
      ${179500}   | ${'it'} | ${'179,5 secondi'}
      ${180000}   | ${'it'} | ${'3 minuti'}
      ${1199000}  | ${'it'} | ${'19 minuti, 59 secondi'}
      ${1200000}  | ${'it'} | ${'20 minuti'}
      ${3600000}  | ${'it'} | ${'1 ora'}
      ${7200000}  | ${'it'} | ${'2 ore'}
      ${5400000}  | ${'it'} | ${'1 ora, 30 minuti'}
      ${86400000} | ${'it'} | ${'1 giorno'}
      ${86401000} | ${'it'} | ${'1 giorno, 1 secondo'}
      ${90000000} | ${'it'} | ${'1 giorno, 1 ora'}
      ${90001000} | ${'it'} | ${'1 giorno, 1 ora, 1 secondo'}
    `(
      'should return the expected value when durationMs is $durationMs',
      ({ durationMs, lang, expected }) => {
        expect(
          drawGameDuration(durationMs, lang)
        ).toBe(expected);
      }
    );
  });
  describe('when lang is `pt`', () => {
    it.each`
      durationMs  | lang    | expected
      ${null}     | ${'pt'} | ${'-'}
      ${0}        | ${'pt'} | ${'-'}
      ${500}      | ${'pt'} | ${'0,5 segundos'}
      ${1000}     | ${'pt'} | ${'1 segundo'}
      ${2000}     | ${'pt'} | ${'2 segundos'}
      ${2050}     | ${'pt'} | ${'2,05 segundos'}
      ${179000}   | ${'pt'} | ${'179 segundos'}
      ${179500}   | ${'pt'} | ${'179,5 segundos'}
      ${180000}   | ${'pt'} | ${'3 minutos'}
      ${1199000}  | ${'pt'} | ${'19 minutos, 59 segundos'}
      ${1200000}  | ${'pt'} | ${'20 minutos'}
      ${3600000}  | ${'pt'} | ${'1 hora'}
      ${7200000}  | ${'pt'} | ${'2 horas'}
      ${5400000}  | ${'pt'} | ${'1 hora, 30 minutos'}
      ${86400000} | ${'pt'} | ${'1 dia'}
      ${86401000} | ${'pt'} | ${'1 dia, 1 segundo'}
      ${90000000} | ${'pt'} | ${'1 dia, 1 hora'}
      ${90001000} | ${'pt'} | ${'1 dia, 1 hora, 1 segundo'}
    `(
      'should return the expected value when durationMs is $durationMs',
      ({ durationMs, lang, expected }) => {
        expect(
          drawGameDuration(durationMs, lang)
        ).toBe(expected);
      }
    );
  });
  describe('when lang is undefined', () => {
    it.each`
      durationMs  | lang  | expected
      ${null}     | ${''} | ${'-'}
      ${0}        | ${''} | ${'-'}
      ${500}      | ${''} | ${'0.5 seconds'}
      ${1000}     | ${''} | ${'1 second'}
      ${2000}     | ${''} | ${'2 seconds'}
      ${2050}     | ${''} | ${'2.05 seconds'}
      ${179000}   | ${''} | ${'179 seconds'}
      ${179500}   | ${''} | ${'179.5 seconds'}
      ${180000}   | ${''} | ${'3 minutes'}
      ${1199000}  | ${''} | ${'19 minutes, 59 seconds'}
      ${1200000}  | ${''} | ${'20 minutes'}
      ${3600000}  | ${''} | ${'1 hour'}
      ${7200000}  | ${''} | ${'2 hours'}
      ${5400000}  | ${''} | ${'1 hour, 30 minutes'}
      ${86400000} | ${''} | ${'1 day'}
      ${86401000} | ${''} | ${'1 day, 1 second'}
      ${90000000} | ${''} | ${'1 day, 1 hour'}
      ${90001000} | ${''} | ${'1 day, 1 hour, 1 second'}
    `(
      'should return the expected (en) value when durationMs is $durationMs',
      ({ durationMs, lang, expected }) => {
        expect(
          drawGameDuration(durationMs, lang)
        ).toBe(expected);
      }
    );
  });
});
