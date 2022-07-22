function storeProvision(arr1, arr2) {
  // console.log(arr1)
  // console.log(arr2)
  let storedItems = {};
  for (let i = 0; i < arr1.length; i += 2) {
    let currProvision = arr1[i]; //i = 0
    // console.log(currProvision);
    // storedItems[currProvision] =
    storedItems[currProvision] = Number(arr1[i + 1]); //storedItems["Chips"] = 5
  }
  // console.log(storedItems);
  for (let i = 0; i < arr2.length; i += 2) {
    let currProduct = arr2[i];
    if (!storedItems.hasOwnProperty(currProduct)) {
      storedItems[currProduct] = 0;
    }
    storedItems[currProduct] += Number(arr2[i + 1]);
  }
  // for(let product in storedItems) {
  //   // console.log(product);
  //     console.log(`${product} -> ${storedItems[product]}`)
  // }
  //or
  for(let product of Object.keys(storedItems)) {
    //because Object.keys returns an array
    console.log(`${product} -> ${storedItems[product]}`)
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
