// Write your tests here!
const { expect } = require("chai");
const caesarModule = require("../src/caesar.js");

const caesar = caesarModule.caesar;

describe("caesar", ()=>{
    it("returns false if the shift amount is zero", () =>{
        const input = "thinkful";
        const shift = 0;
        
        
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });
    it("returns false if the shift amount is less than -25", () =>{
        const input = "thinkful";
        const shift = -26;
        
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });
    it("returns false if the shift amount is greater than 25", () =>{
        const input = "thinkful";
        const shift = 26;
        
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });
    it("returns a message shifted by the given shift value", () =>{
        const input = "thinkful";
        const shift = 1;

        const expected = "uijolgvm";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected)

    });
    it("should return a code with all non-alphabet characters untouched", ()=>{
        const input = "the cat!";
        const shift = 1;

        const expected = "uif dbu!";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it ("should appropriately handle letters at the end of the alphbet with a positive shift value", ()=>{
        const input = "xyz";
        const shift = 4;
        
        const expected = "bcd";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it("should appropriately handle letters at the beginning of the alphabet with a negative shift value", ()=>{
        const input = "abc";
        const shift = -4;
        
        const expected = "wxy";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it("should decode messages by shifting letters in the opposite direction as is represented by the shift given", ()=>{
        const input = "bzq ozqsr"
        const shift = -1;

        const expected = "car parts";
        const actual = caesar(input, shift, false);
        expect(actual).to.equal(expected);
    });
    it("should not be affected by capital letters", ()=>{
        const input = "CaR";
        const shift = 1;

        const expected = "dbs";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it("should retain spaces no matter how many", ()=>{
        const input = "c a r";
        const shift = 1;

        const expected = "d b s";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
});