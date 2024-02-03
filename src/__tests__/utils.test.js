// Your tests here
import {isPalindrome} from "../utils.js";

describe("isPalindrome", ()=>{
    it("should return true if word is a palindrome(reads the same forward and backward)", ()=>{
        const testCase="mom";
        
        const result=isPalindrome(testCase);
        
        expect(result).toBe(true);
    });

    it("should return true if word is a palindrome & have mixed cases", ()=>{
        const testCase="Mom";
        
        const result=isPalindrome(testCase);
        
        expect(result).toBe(true);
    });

    
    it("should return false if word is an empty string", ()=>{
        const testCase="";
        
        const result=isPalindrome(testCase);
        
        expect(result).toBe(false);
    });

    it("should throw an error if word contains non alphabetic chars", ()=>{
        const testCase="wrt2";
        
        //const result=isPalindrome(testCase);
        
        expect(()=>{isPalindrome(testCase)}).toThrow();
    });

    it("should throw an error if input is not string", ()=>{
        const testCase=[];
        
        //const result=isPalindrome(testCase);
        
        expect(()=>{isPalindrome(testCase)}).toThrow();
    });
} )