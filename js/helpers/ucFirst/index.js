export const ucFirst = str => ((typeof str === 'string' && str !== '') ? `${str[0].toUpperCase()}${str.substring(1)}` : str);
