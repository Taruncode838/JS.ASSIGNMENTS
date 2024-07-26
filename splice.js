let string = 'INDIA';
let charArray = Array.from(string); 

charArray.splice(4, 0, 'O', 'N', 'E', 'S', 'I', 'A'); 

let result = charArray.join(''); 

console.log(result); // output: "INDONESIA"