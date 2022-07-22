function loadingBar(num) {
    let numAsString = num.toString()
    let numAsArray = numAsString.split('');
    // console.log(numAsArray);
    function percentSignFunc(){
        let percentSign = '';
        for (let i = 1; i <= numAsArray[0]; i++) {
            percentSign+="%"
        }
        return percentSign
    }
   let dotSign = () =>{
        let dotSign = ''
        for(let i= 1;i<=10 -numAsArray[0];i++){
            dotSign+='.'
        }
        return dotSign
    }


    // console.log(percentSignFunc());
    // console.log(dotSign());

    if(num === 100){
        console.log(`100% Complete!`);
    }else{
        console.log(`${num}% [${percentSignFunc()}${dotSign()}]`)
        console.log(`Still loading...`)
    }
}

loadingBar(30)
loadingBar(100)
