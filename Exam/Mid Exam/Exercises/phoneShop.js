function phoneShop(input) {
    let phones = input.shift().split(', ')
    // console.log(phones);
    let index = 0;
    while (input[index] !== "End") {
        let tokens = input[index].split(' - ');
        // console.log(tokens);
        let command = tokens[0];
        if(command === "Add"){
            let newPhone = tokens[1];
            if(!phones.includes(newPhone)){
                phones.push(newPhone)
            }
        }else if(command === "Remove"){
            let newPhone = tokens[1];
            if(phones.includes(newPhone)){
                let indexOfNewPhone = phones.indexOf(newPhone)
                phones.splice(indexOfNewPhone,1)
            }
        }else if(command === "Bonus phone"){
            let newAndOldPhone = tokens[1].split(':');
            let oldPhone = newAndOldPhone[0]
            let newPhone = newAndOldPhone[1]
            if(phones.includes(oldPhone)){
                let indexOfNewPhone = phones.indexOf(oldPhone)
                phones.splice(indexOfNewPhone +1,0,newPhone)
            }
        }else if(command === "Last"){
            let newPhone = tokens[1];
            if(phones.includes(newPhone)){
                let indexOfNewPhone = phones.indexOf(newPhone)
                phones.splice(indexOfNewPhone,1)
                phones.push(newPhone)
            }
        }
        index++
    }
    console.log(phones.join(", "))
}

phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"]
);
phoneShop(['HuaweiP20, XiaomiNote',
'Remove - Samsung',
'Bonus phone - XiaomiNote:Iphone5',
'End'])
