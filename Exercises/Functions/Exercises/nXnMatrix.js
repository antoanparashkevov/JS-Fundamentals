function nXnMatrix(n){
    function row(num){
       let row = Array(num).fill(num)
        return row
    }
    for(let i = 1;i<=n;i++){
        console.log(row(n).join(' '))
    }
}
nXnMatrix(7)
