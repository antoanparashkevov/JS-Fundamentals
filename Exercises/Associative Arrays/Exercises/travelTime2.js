function travelTime2(destinations) {
  const sortByCountryName = (a, b) => a[0].localeCompare(b[0]);
  const sortByPrice = (a, b) => a[1] - b[1];
  const townParse = (town) => town.join(" -> ");
  const outputParse = (country) =>
    `${country[0]} -> ${Object.entries(object[country[0]])
      .sort(sortByPrice)
      .map(townParse)
      .join(" ")}`;

  let object = destinations.reduce((a, b) => {
    let [country, town, price] = b.split(" > ");
    //    console.log(country)
    if (!a.hasOwnProperty(country)) {
      a[country] = {};
      a[country][town] = Number(price); //town is a key of empty object. Empty object is a value of country property
    } else {
      if (!a[country].hasOwnProperty(town)) {
        a[country][town] = Number(price);
      } else {
        if (a[country][town] > Number(price)) {
          a[country][town] = Number(price);
        }
      }
    }
    return a;
  }, {});

  return Object.entries(object)
    .sort(sortByCountryName)
    .map(outputParse)
    .join("\n");
}
console.log(
  travelTime2([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200",
  ])
);
