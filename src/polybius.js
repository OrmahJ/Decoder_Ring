// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    /*create an object whose key value
    pairs associate each letter with its code equivalent
    */
    const codeValues = [
      {letter: "a", number : "11"}, {letter: "b", number : "21"}, {letter: "c", number : "31"}, 
      {letter: "d", number : "41"}, {letter: "e", number : "51"}, {letter: "f", number : "12"},
      {letter: "g", number : "22"}, {letter: "h", number : "32"}, {letter: "i", number : "42"}, 
      {letter: "j", number : "42"}, {letter: "k", number : "52"}, {letter: "l", number : "13"}, 
      {letter: "m", number : "23"}, {letter: "n", number : "33"}, {letter: "o", number : "43"},
      {letter: "p", number : "53"}, {letter: "q", number : "14"}, {letter: "r", number : "24"},
      {letter: "s", number : "34"}, {letter: "t", number : "44"}, {letter: "u", number : "54"},
      {letter: "v", number : "15"}, {letter: "w", number : "25"}, {letter: "x", number : "35"}, 
      {letter: "y", number : "45"}, {letter: "z", number : "55"}
    ];
    
   //if true (encoding);
   // create array to hold translated values
   let coded = "";
     // if encoding
     if(encode === true){
   // make input lowercase
   const lcInput = input.toLowerCase();
    //loop through input and pull value;
    for (let i = 0; i < lcInput.length; i++){
      // should retain spaces
      if(lcInput[i] === " "){
        coded+=lcInput[i];
      }
      // loop through each object in the array
      codeValues.find((one)=>{
        // where ever the letter value is equal to the index value of the input
        if(one.letter === lcInput[i]){
          //push the corresponding number into codedArray
          coded+= one.number;
        };
      });
    }
   } else {
    //if decoding
    /*double the all spaces (rather than remove- will be useful later)
    so when determining whether the numbers given are even or odd, it isnt
    affected by the number of spaces; (multiplying all spaces by two guarentees an even number of spaces)
    */
const doubleSpace = input.split(' ').join('  ');
//if there is a remainder after dividing the legnth by two, its odd
    if(doubleSpace.length % 2 !== 0){
      return false;
    }
    divided = [];
    coded = "";
    /* loop through the string that has doubled spaces by every second character
    By doubling the spaces, we guarantee that no number will be accidentally paired with a space
    thus throwing off the decoding process any time a space is present;
    */
    for (let i = 0; i < doubleSpace.length; i+=2){
      //we do not need to add 2 spaces to the answer so we will just push one.
      if (doubleSpace[i]=== " "){
        divided.push(" ");
      } else {
        /*if the character we are on is not a space, push the character we are on
        as well as the next one (two digit numbers), into the divided array.
      */
        const tens = doubleSpace[i];
      const ones = doubleSpace[i+1];
      divided.push(`${tens}${ones}`)
      }
    }
    /*The divided array will allow for each element to be one set of
    two numbers rather than two seperate values which is necessary for decoding
    */
    for (let i = 0; i < divided.length; i++){
      //as we loop through the divided array, if the character is a space, add it to the coded string.
      if (divided[i] === " "){
        coded += divided[i];
      } else {
        // if its not a space, (its a number), add it's corresponding letter to the coded string.
      codeValues.find((one)=>{
        if(one.number === divided[i]){
          coded += one.letter;
        }
      })
    }
    }
    }
  
    
     // return coded
     return coded;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
