function catalogue(array) {
  let catalog = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i].split(" : ");
    //   console.log(element);
    let product = {
      name: element[0],
      price: Number(element[1]),
    };
    catalog.push(product);
    //   console.log(product);
  }
  //   console.log(catalog);
  catalog.sort((a, b) => a.name.localeCompare(b.name));
  //   console.log(catalog);
  let currentLetter = '';
  for(let product of catalog) {
    //   console.log(product)
      //on the first iteration, currentLetter is empty string and we will enter into else condition
      if(product.name.charAt(0).toUpperCase() === currentLetter){
          console.log(`  ${product.name}: ${product.price}`);
      }else{
          currentLetter = product.name.charAt(0).toUpperCase();
          console.log(currentLetter)
          console.log(`  ${product.name}: ${product.price}`);
      }
  }
}
catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
