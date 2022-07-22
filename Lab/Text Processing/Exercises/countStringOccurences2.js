function countStringOccurences2(text, word) {
     word = ` ${word} `
     text = ` ${text} `
     console.log(word)//with spaces before and after the word
    let counter = 0;
    let index = 0;
  while (text.indexOf(word,index) !==-1) {//while the word disappeared from the text
    counter++;//increase the counter if we find an occurence
    index = text.indexOf(word,index) +1;//rewrite the variable by searching FROM the next index(next word)
  }
  console.log(counter)
}
countStringOccurences2("This is a word and it also is a sentence is", "is");
