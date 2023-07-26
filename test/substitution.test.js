const { expect } = require("chai");
const substitutionModule = require("../src/substitution.js");
const substitution = substitutionModule.substitution;

describe("substitution",()=>{
    it("returns false of no substitution alphabet value is given", () =>{
        const input = "cat";
        const alphabet = undefined;

        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
    it("returns false if the substitution alphabet is not exactly 26 characters", ()=>{
        const input = "cat";
        const alphabet = "bacdfq";

        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet does not contain all unique characters", () =>{
        const input = "cat";
        const alphabet = "asdfghjklasdfghjklasdfghjk";

        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
    it("should encode a message using the given alphabet", ()=>{
        const input = "cat";
        const alphabet = "qawsedrftgyhujikolpzxcvbnm";

        const actual = substitution(input, alphabet);
        const expected = "wqz";
        expect(actual).to.equal(expected);
    });
    it("should work with unique characters when encoding", ()=>{
        const input = "abc";
        const alphabet = "]=1aszxderfcvbgtyhnjuikmlo";

        const actual = substitution(input, alphabet);
        const expected = "]=1";
        expect(actual).to.equal(expected);
    });
    it("should preserve spaces when encoding", ()=>{
        const input = "a abc";
        const alphabet = "qawsedrftgyhujikolpzxcvbnm";

        const actual = substitution(input, alphabet);
        const expected = "q qaw";
        expect(actual).to.equal(expected);
    });
    it("should decode a message using the given alphabet", ()=>{
        const input = "qaw";
        const alphabet = "qawsedrftgyhujikolpzxcvbnm";

        const actual = substitution(input, alphabet, false);
        const expected = "abc";
        expect(actual).to.equal(expected);
    });
    it("should work with unique characters when decoding", ()=>{
        const input = "]=1";
        const alphabet = "]=1aszxderfcvbgtyhnjuikmlo";

        const actual = substitution(input, alphabet, false);
        const expected = "abc";
        expect(actual).to.equal(expected);
    });
    it("should preserve spaces when decoding, no matter how many", ()=>{
        const input = "q qa w";
        const alphabet = "qawsedrftgyhujikolpzxcvbnm";

        const actual = substitution(input, alphabet, false);
        const expected = "a ab c";
        expect(actual).to.equal(expected);
    })
});
