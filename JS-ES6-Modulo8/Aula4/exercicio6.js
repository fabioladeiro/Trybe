const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let contador = 0;

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      contador ++
      results.push(contador);
    } else {
      results.push(characters[i]);
    }
  } 
    return (results.join(''));
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.deepStrictEqual(removeVowels(parameter),result);
