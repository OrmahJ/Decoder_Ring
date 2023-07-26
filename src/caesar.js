// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
 

  function caesar(input, shift, encode = true) {
    // if the shift value is not given, 0, less than -25 or greater than 25 it should return false.
    if (!shift || shift === 0 || shift < -25 || shift > 25){
      return false
    }
    /*if decoding, flip the sign on the shift value
    to shift in the opposite direction given; this change will be the only difference
    in code between encoding and decoding, so the distinction will be made prior to beginning
    rather than repeating the same code twice
    */
   let newShift = shift;
    if (encode === false){
      newShift = 0 - shift;
    }
    // both capital and lowercase letters should be treated the same
    const lcInput = input.toLowerCase();
    //place lowercased input into an array where each character is assigned an index
    const iArray = lcInput.split('');
    //create an array for the coded letters to go
    const codeArray = [];
    // create an array of letters.
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // loop through the input array
    for (let i = 0; i < iArray.length; i++){
       /*if the character isnt a letter, (not in alphabet array),
        push whatever that character is into the code;
        It's important that this stays in the for loop so it's done once per character
        and can maintain its position among the letters */
      if (!alphabet.includes(iArray[i])){
        codeArray.push(iArray[i]);
     }
     //for each letter, find the matching letter in the alphabet array
      for (let j = 0; j < alphabet.length; j++){
      if (iArray[i] === alphabet[j]){
        // find the index of the letter; should return a number
        const currentPositionNum = alphabet.indexOf(alphabet[j]);
        /* add the shift to determine the new placement;
        errors may occur here depending on the placement and shift size;
        1. lapping will cause error (√ accounted for)
        2. non-letter characters will not be accounted for (√ accounted for)
        */
        // find the position of the new letter
        let newPositionNum = currentPositionNum + newShift;
        //letters where the shift extends beyond the alphabet length to the right wrap around
        if (newPositionNum > 25){
          newPositionNum = newPositionNum - 26;
        }
        //letters where the shift extends beyond to the left wrap around
        if (newPositionNum < 0){
          newPositionNum = 26 + currentPositionNum + newShift;
        }
        codeArray.push(alphabet[newPositionNum]);
      }
    }
    }
    //return coded array as a string;
const code = codeArray.join('');
return code;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
