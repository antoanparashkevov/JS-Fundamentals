function theImmitationGame(input) {
  let commands = {
    Move,
    Insert,
    ChangeAll,
  };
  //take encoded message.
  //repeat for every line of input
  let message = input.shift();
  // console.log(message);
  while (input[0] !== "Decode") {
    let line = input.shift();
    //- parse line.
    let tokens = line.split("|"); //this is called pipe line
    //- find and execute command with parse parameters.
    let command = tokens[0];
    message = commands[command](message,tokens[1],tokens[2]); //this will return the functions itself

  }
  console.log(`The decrypted message is: ${message}`)

  function Move(str, num) {
    //take first N letters starting from beginning
    let start = str.substring(0, num);

    //remove from start
    //place at the end
    let end = str.substring(num); //from num to end

    //return result
    return end + start;
  }
  function Insert(str, index, text) {
    //we must split the text into two same parts
    let start = str.substring(0, index);
    // return start
    let end = str.substring(index);
    // return end

    //return first half + text+ second half

    return start + text + end;
  }
  function ChangeAll(str, match, text) {
    let tokens = str.split(match);
    return tokens.join(text);
    //tokenize by removing match
    //stitch by text (зашивам)
  }
  // let str1 = "lloHe";
  // let str2 = "llHe";
  // let str3 = "zzHe";
  // console.log(Move(str1, 3));
  // console.log(Insert(str2, 2, "o")); //lloHe
  // console.log(ChangeAll(str3, "z", "l")); //llHe
}

theImmitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
