const assert = require('assert');
// escreva a função findTheNeedle para passar nos testes abaixo:
function findTheNeedle(arr, word) {
  let contador = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === word) return i;
    if (arr[i] !== word) contador ++;
    if (contador >= arr.length) return -1;
  }
}
//

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
