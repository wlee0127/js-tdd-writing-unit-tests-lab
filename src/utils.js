// Your code here
export function isPalindrome(arg) {
    const cleanString = arg.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    if(arg.length===0) {
        return false
    }else if( !/^[A-Za-z]+$/.test(arg)){
        throw new Error("word contains non-alphabateic chars");
    }else if(typeof(arg)!=="string"){
        throw new Error("input is not string");
    }else {
        return cleanString === cleanString.split('').reverse().join('')        
    }
}