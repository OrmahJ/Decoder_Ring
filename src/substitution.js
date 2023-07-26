// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //if the length of substituted alphabet is not 26 characters long or is not given, return false
    if((!alphabet) || alphabet.length !== 26){
      return false
    }
    //if the substitute alphabet doesnt consist of all different characters, return false.
    for (let i = 0; i < alphabet.length; i++){
      /*loop through all characters in the substitue alphabet and
      remove all characters that match the character we're on in the loop
      */
     const alphMinusI = alphabet.split(alphabet[i]).join("");
     // if there are repeat characters, the length will be less than 25 
     if (alphMinusI.length !== 25){
      return false;
     }
     }
     // Create an array of objects to work with;
     const coder = [
      {letter: "a"}, {letter: "b"}, {letter: "c"}, 
      {letter: "d"}, {letter: "e"}, {letter: "f"},
      {letter: "g"}, {letter: "h"}, {letter: "i"}, 
      {letter: "j"}, {letter: "k"}, {letter: "l"}, 
      {letter: "m"}, {letter: "n"}, {letter: "o"},
      {letter: "p"}, {letter: "q"}, {letter: "r"},
      {letter: "s"}, {letter: "t"}, {letter: "u"},
      {letter: "v"}, {letter: "w"}, {letter: "x"}, 
      {letter: "y"}, {letter: "z"}
     ]
     let ans = ""
     // create a key using the alphabet given
     //loop through substitution and push each value into the coder object with its associated letter via index
     for (let i = 0; i < alphabet.length; i++){
      coder.forEach((one)=>{
        if(coder.indexOf(one)=== alphabet.indexOf(alphabet[i])){
         one["value"] = alphabet[i];
        };
      });
     };

  
     //loop through the input and collect their corresponsing values;
     for(let i = 0; i < input.length; i++){
      //loop through coder to do that
      coder.forEach((one)=>{
        //create alternate values for encoding vs decoding
        let inTo = one.letter;
        let out = one.value
        if (!encode){
          inTo = one.value;
          out = one.letter
        }

        if(input[i] === inTo){
          ans += out;
        }
      })
      //should preserve spaces
      if(input[i] === " "){
        ans += input[i];
      }
    }
    return ans
    }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
