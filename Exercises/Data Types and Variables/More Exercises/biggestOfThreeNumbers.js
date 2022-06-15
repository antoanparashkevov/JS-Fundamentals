function biggestOfThreeNumbers(n1,n2,n3){
    let bigNum = 0;
    if(n1>=n2&& n1>=n3){
        bigNum=n1;
    }else if(n2>=n1 && n2>=n3){
        bigNum=n2
    }else{
        bigNum=n3
    }
    console.log(bigNum)
}
biggestOfThreeNumbers(-2,3,5)
