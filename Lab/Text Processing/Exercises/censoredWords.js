function censoredWords(txt, word) {
  while (txt.includes(word)) {
    txt = txt.replace(word, "*".repeat(word.length));
  }
  console.log(txt)
}
censoredWords("A small sentence with some small words", "small");
censoredWords("A small sentence with some words", "small");
