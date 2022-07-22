function shoppingList(input){
        let groceriesList = input.shift().split('!');
        // console.log(groceriesList)
        // console.log(input)
    let index = 0;
        while(input[index]!=="Go Shopping!"){
            let txt = input[index].split(' ');
            // console.log(txt)
            let command = txt[0];
            // console.log(command)
            if(command === "Urgent"){
                let item = txt[1];
                // console.log(item)
                if(!groceriesList.includes(item)){//if it doesn't already exist in our array, add them to the beginning
                    groceriesList.unshift(item)
                }
            }else if(command === "Unnecessary"){
                let item = txt[1];
                if(groceriesList.includes(item)){
                    //take the index of the item because we know that it exist in our array
                    let indexToRemove = groceriesList.indexOf(item)
                    groceriesList.splice(indexToRemove,1);//remove only this item on this index
                }
            }else if(command === "Correct"){
                let oldItem = txt[1];
                let newItem = txt[2];
                // console.log(newItem)
                // console.log(oldItem);
                if(groceriesList.includes(oldItem)){
                    let indexToRemove = groceriesList.indexOf(oldItem)
                    groceriesList.splice(indexToRemove,1,newItem);//remove old item and replace it with the new one
                }
            }else if(command === "Rearrange"){
                let item = txt[1];
                if(groceriesList.includes(item)){
                    let indexToRemove = groceriesList.indexOf(item)
                    groceriesList.splice(indexToRemove,1);//remove the item
                    groceriesList.push(item)//push it to the last position
                }
            }
            index++;
        }
        console.log(groceriesList.join(', '))
}
// shoppingList((["Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"])
// )
shoppingList((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
)
