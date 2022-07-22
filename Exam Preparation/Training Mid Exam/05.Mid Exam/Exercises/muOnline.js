function muOnline(input){
    let rooms = input.split('|')
    // console.log(txt)
    let currHealth = 100;
    let earnedBitcoins = 0
    let room = 1;
   for(let i = 0;i<rooms.length;i++){
       let tokens = rooms[i].split(' ');
       let command = tokens[0]

       if(command === "potion"){
           let heal = Number(tokens[1]);
           if(currHealth<100){
               if((currHealth+heal)> 100){
                   heal= 100 - currHealth
                   currHealth=100;

               }else{
                   currHealth+=heal;
               }
           }else{
               console.log(`You healed for ${heal} hp.`)
               console.log(`Current health: ${currHealth} hp.`)
               break;
           }
           console.log(`You healed for ${heal} hp.`)
           console.log(`Current health: ${currHealth} hp.`)
       }else if(command === 'chest'){
           let bitcoins = Number(tokens[1])
           earnedBitcoins+=bitcoins
           console.log(`You found ${bitcoins} bitcoins.`)
       }else{
           let damage = Number(tokens[1])
           currHealth-=damage;
           if(currHealth>0){
               console.log(`You slayed ${command}.`)
           }else{
               console.log(`You died! Killed by ${command}.`)
               console.log(`Best room: ${room}`)
               break;
           }
       }
       room++;
   }
   if(currHealth>0){
       console.log( "You've made it!")
       console.log(`Bitcoins: ${earnedBitcoins}`)
       console.log(`Health: ${currHealth}`)
   }
}
// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
// muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')
