// Regular Expressions Sample of Javascript 

let re;

// Reg exg Flags
re = /hello/
re = /hello/i; // i = case insensative
// re = /hello/g // Global Search: looks thorugh entire input for each instance of matching reg exp 
 
// console.log(re);
// console.log(re.source);

// exec() - Return result in an array if there is a match or if no match null

// const result = re.exec("hello world");

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

//test() - Returns true of false 

// const result = re.test("Hello");
// console.log(result);

//match() - Return result of the array or null 
// const str = "Hello There";
// const result = str.match(re);
// console.log(result);

//search()- Returns the index of the first match if not found returns -1

// const str = "Hello There";
// const result = str.search(re);
// console.log(result);

//replace()- Returns new sting with some or all matches of a pattern
const str = "Hello There";
const newStr= str.replace(re, "Hi");
console.log(newStr);

let re;
//Literal characters
re = /hello/;
re = /hello/i;

//Metacharcter Symbols
re = /^h/i  // Must start with 
re = / world$/i  // Must start with 
re = /^hello$/i // Must begin an end with
re = /h.llo/i // Matches any ONE character
re = /h*llo/i // Matches any character 0 or more times

re = /gre?a?y/i; // Optional Character
re = /gre?a?y\?/i; // Escape Character

//Brackets [] - Character Sets 
re = /gr[ae]y/i; // Must be an "a" or "e" 
re = /[GF]ray/i; // Must be an "G" or "F" 
re = /[^GF]ray/i; // Match anything except of a "G" or "F"
re = /[A-Z]ray/; // Match anything any uppercase letter 
re = /[a-z]ray/; // Match anything any lowercase letter 
re = /[A-Za-z]ray/; // Match anything any letter, of any case 
re = /[0-9][0-9]ray/; //Match any digit

//Braces {} - Quantifiers

re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur exactly between {m} amount of times
re = /Hel{2,}o/i; // Must occur at least {m} time

//Parentheses () - Grouping 
re = /^([0-9]x){3}$/ 


//Shorthand Character Classes
re = /\w/; //Word character - alphanumeric or -
re = /\w+/; //+ = One or more word characters
re = /\W/; //+ = One or more word characters
re = /\d/; //Match any digit
re = /\d+/; //Match any digit 0 or more times
re = /\D/; //Match any non-digits
re = /\s/; //Match white-space char
re = /\S/; //Match non-whitespace char
re = /Hell\b/i; //Word boundary

//Assertions 
re = /x(?=y)/; //Match x only is followed by y
re = /x(?!y)/; //Match x only NOT followed by y

// String to match
const str= "dljekxsdsd";

//Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
  if(re.test(str)){
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`)
  }
}

reTest(re, str);
