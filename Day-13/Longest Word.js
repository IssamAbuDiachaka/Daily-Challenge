function getLongestWord(sentence) {
  // Split into words
  let words = sentence.split(" ");

  // remove trailing periods
  words = words.map(word => word.replace(/\./g, ""));

  // Track longest word
  let longestWord = words[0];

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
    return longestWord;
}
