function makeADictonary(input) {
  let objects = {};
  for (let element of input) {
    let object = JSON.parse(element);
    // console.log(object)
   objects = Object.assign(objects, object);
  
  }
  let sortedKeys = Object.keys(objects);
//   console.log(sortedKeys);
  //sort by alphabetical order
  sortedKeys.sort((a,b)=>a.localeCompare(b));
//   console.log(sortedKeys);
  for(let term of sortedKeys) {
      let definition = objects[term];
    //   console.log(definition);
      console.log(`Term: ${term} => Definition: ${definition}`)
  }
}
makeADictonary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
