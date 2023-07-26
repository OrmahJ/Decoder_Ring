const { expect } = require("chai");
const polybiusModule = require("../src/polybius.js");
const polybius = polybiusModule.polybius;
describe ("polybius", ()=>{
    it("should return a string value", ()=>{
        const input = "jigga what";

        const actual = polybius(input);
        expect(actual).to.be.a("string");
    });
    it("should convert each letter to it's numbered pair", ()=>{
        const input = "abc";
        
        const expected = "112131";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("converts both 'i' and 'j' to '42'", ()=>{
        const input = "jigga";
        
        const expected = "4242222211";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("should retain spaces no matter how many", ()=>{
        const input = "jigga what ";

        const expected = "4242222211 25321144 ";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("should return 'false' if the decode input value length of all numbers is an odd number", ()=>{
        const input = "12 345";

        const actual = polybius(input, false);
        expect(actual).to.equal(false);
    });
    it("should ignore capital letters", ()=>{
        const input = "ChaCha";

        const expected = "313211313211";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("should translate 42 to both 'i' and 'j' when decoding", ()=>{
        const input = "4242222211";
        
        const actual = polybius(input, false);
        expect(actual).to.include("i");
        expect(actual).to.include("j");
    });
    it("should leave spaces in their respective locations when decoding (including multiple spaces)", ()=>{
        const input = "11 1121 31";

        const actual = polybius(input, false);
        const expected = "a ab c"
        expect(actual).to.equal(expected);
    });
})
