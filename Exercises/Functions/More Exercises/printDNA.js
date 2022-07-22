function printDNA(n){
    let arr = 'ATCGTTAGGG'.split('');
    // console.log(arr);
    for(let i =1;i<=n;i++){
        // console.log(i);
        let [a,b]=arr.splice(0,2)//this will return the deleted items.
        // console.log([a,b])
        // console.log(arr);
        if(i===1 || i%4 === 1){//if we are on first or fifth position for example
            console.log(`**${a}${b}**`)
        }else if(i===2||i%4===2){//if we are on second or sixth position for example
            console.log(`*${a}--${b}*`)
        }else if(i === 3 || i%4 === 3){//if we are on third or seventh position for example
            console.log(`${a}----${b}`)
        }else if(i === 4 || i%4 === 0){//if we are on fourth or eight position for example
            console.log(`*${a}--${b}*`)
        }
    arr.push(a)//we push first element that we got to the end of the array
    arr.push(b)//we push second element that we got to the end of the array
    }
}
// printDNA(4)
printDNA(10)
