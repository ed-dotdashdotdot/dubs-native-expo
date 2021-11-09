import { sliceValue } from '../sliceValue';

export const isButtonFound = (value, found) => found.includes(sliceValue(value));
