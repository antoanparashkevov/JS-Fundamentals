function inventory(input) {
  let heroes = [];
    for (const element of input) {
        let info = element.split(' / ');
        // console.log(info);
        let heroName = info[0];
        let level = Number(info[1]);
        let items = info[2].split(', ').join(', ');
        // console.log(items);
        let currHeroObj = {
            Hero: heroName,
            level,
            items
        }
        // console.log(currHeroObj);
        heroes.push(currHeroObj);//because we want to push it into array, we need

    }
    console.log(`Before acdending by level`)
    console.log(heroes[0])
    console.log(heroes[1])
    console.log(heroes[2])
    console.log(`After acsending`)
    heroes.sort((a,b)=> a.level-b.level);
    for (const hero of heroes) {
        console.log(hero)
        console.log(`Hero: ${hero.Hero}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items}`)
    }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
