let string = "hello there wassup with u";

let consonants = 0;
let vowels = 0;

for (let i = 0; i < string.length; i++) {
  let char = string[i].toLowerCase();

  if (char.match(/[aeiou]/)) {
    vowels++;
  } else if (char.match(/[bcdfghjklmnpqrstvwxyz]/)) {
    consonants++;
  }
}

console.log(`Vowels: ${vowels}`);
console.log(`Consonants: ${consonants}`);