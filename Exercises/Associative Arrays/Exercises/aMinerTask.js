function aMinerTask(input) {
  let result = {};
  for (let i = 0; i < input.length; i += 2) {
    let resource = input[i];
    // console.log(resource);
    if (result.hasOwnProperty(resource) === false) {
      result[resource] = [];
    }
    if (result[resource].includes(input[i + 1]) === false) {
      result[resource].push(input[i + 1]);
    }
  }
//   console.log(result)
  let quantity = Object.values(result).map(el=>el.map(Number).reduce((a,b)=>a+b))
//   console.log(quantity)
  for(let [resource, quantity] of Object.entries(result)) {
    //   console.log(quantity)
      quantity = quantity.map(Number).reduce((a,b)=>a+b)
      console.log(`${resource} -> ${quantity}`)
  }
}
aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
