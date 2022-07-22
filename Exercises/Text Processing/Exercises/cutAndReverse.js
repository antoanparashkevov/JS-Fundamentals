function cutAndReverse(string){
let firstHalf = string.split('').slice(0,string.length/2).reverse()
let secondHalf = string.split('').slice(string.length/2).reverse()
    // console.log(firstHalf)
    let firstHalfWords = []
    let firstHalfWord = firstHalf[0]
   for(let i = 1;i<firstHalf.length;i++){
       // console.log(firstHalf[i])
       if(firstHalf[i] !== firstHalf[i].toUpperCase()){
           firstHalfWord =firstHalfWord.concat(firstHalf[i])

       }else{
           firstHalfWords.push(firstHalfWord)
           firstHalfWord = firstHalf[i]
       }

   }
   firstHalfWords.push(firstHalfWord)
   console.log(firstHalfWords.join(''))
    let secondHalfWord = secondHalf[0]
    let secondHalfArray = []
    for(let i = 1;i<secondHalf.length;i++){
        // console.log(firstHalf[i])
        if(secondHalf[i] !== secondHalf[i].toUpperCase()){
            secondHalfWord =secondHalfWord.concat(secondHalf[i])

        }else{
            secondHalfArray.push(secondHalfWord)
            secondHalfWord = secondHalf[i]
        }

    }
    secondHalfArray.push(secondHalfWord)
    console.log(secondHalfArray.join(''))

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
