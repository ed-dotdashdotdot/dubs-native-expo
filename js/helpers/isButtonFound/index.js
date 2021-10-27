import sliceValue from '../sliceValue';

const isButtonFound = (value, found) => found.includes(sliceValue(value));

export default isButtonFound;
