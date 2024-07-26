function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
  }
  const paragraph = "This is a sample paragraph with multiple words.";
console.log(countWords(paragraph));