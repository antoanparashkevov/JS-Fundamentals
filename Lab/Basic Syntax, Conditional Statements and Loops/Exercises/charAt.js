//charAt returns a new string consisting of the of a single UFT-16 code unit
//located at the specified offset into the string(index)
let sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"
