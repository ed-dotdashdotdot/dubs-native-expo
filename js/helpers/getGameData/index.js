import { generateRandomNumber } from '../generateRandomNumber';
import { sliceValue } from '../sliceValue';

import { 
  gameArray, 
  gameSize 
} from '../../../configuration/config.json';

export const getGameData = level => {
  // SHUFFLE
  const workingArray = [...gameArray];
  workingArray.length = gameSize[level];
  const fullArray = [...workingArray];
  const randomNumber = () => Math.random();
  fullArray.sort(() => generateRandomNumber(randomNumber(), 0, 1) - 0.5); // SHUFFLES RAW NUMBERS
  const entries = workingArray.length / 2;
  const gameEntries = sliceValue(fullArray, entries);
  let gameEntriesFinal = [];
  gameEntries.map(value => gameEntriesFinal = [...gameEntriesFinal, `${value}A`, `${value}B`]);
  gameEntriesFinal.sort(() => generateRandomNumber(randomNumber(), 0, 1) - 0.5); // SHUFFLES As AND Bs
  return gameEntriesFinal;
  // DO NOT SHUFFLE
  // const workingArray = [...gameArray];
  // workingArray.length = gameSize[level];
  // const fullArray = [...workingArray];
  // const entries = workingArray.length;
  // const gameEntries = sliceValue(fullArray, entries);
  // let gameEntriesFinal = [];
  // gameEntries.map(value => gameEntriesFinal = [...gameEntriesFinal, `${value}B`]);
  // return gameEntriesFinal;
};
