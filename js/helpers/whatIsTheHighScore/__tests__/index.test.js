import { whatIsTheHighScore } from '../';

describe('whatIsTheHighScore()', () => {
  it.each`
    currentHighScoreTime | gameDuration | expected
    ${0}                 | ${12.33}     | ${{highScore: true, time: "12.33"}}
    ${12.34}             | ${12.33}     | ${{highScore: true, time: "12.33"}}
    ${12.34}             | ${12.35}     | ${{highScore: false, time: "12.34"}}
    `(
    "should return the expected object when 'currentHighScoreTime' is $currentHighScoreTime and 'gameDuration' is $gameDuration",
    ({ currentHighScoreTime, gameDuration, expected }) => {
      expect(
        whatIsTheHighScore(
          currentHighScoreTime,
          gameDuration
        )
      ).toEqual(expected);
    }
  );
});
