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
