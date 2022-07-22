function travelTime(input) {
  let travelList = {};
  for (let data of input) {
    let [country, town, price] = data.split(" > ");
    if (travelList.hasOwnProperty(country) === false) {
      travelList[country] = new Map();
    }
    if(travelList[country].has(town)){
        let oldPrice = travelList[country].get(town);//we take the value of property town
        if(oldPrice> price){
            travelList[country].set(town,price)//we took the cheapest one
        }
    }else if(!travelList[country].has(town)){
        travelList[country].set(town,price)
    }
  }
//   console.log(travelList);
  let sortedTravelList = Object.entries(travelList).sort((a,b)=>a[0].localeCompare(b[0]))//sort countries alphabetically
//   console.log(sortedTravelList)
  for(let [key,countryAndPrices] of sortedTravelList){
    //   console.log(key)//our contries
      let result = ''
      result+= `${key} -> `
      let sortedCountryAndPrices = Array.from(countryAndPrices.entries()).sort((a,b)=>a[1]-b[1])
      for(let [country,price] of sortedCountryAndPrices){
            result+= `${country} -> ${price} `
      }
      console.log(result)
  }
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
