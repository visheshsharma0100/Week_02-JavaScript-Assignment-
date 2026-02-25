/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
 const lowerStr = str.toLowerCase()
  let str1="";
 let flag=false;
  for(let i=lowerstr.length-1;i>=0;i--){
    str1+=lowerstr[i];
  }
  if(lowerstr==str1){
    flag=true;
  }
  return flag;
}

module.exports = isPalindrome;