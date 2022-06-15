function chessBoard(n){
let size = Number(n);
let currentColour = 'black';//we start from black
let previousColour = '';
    console.log('<div class="chessboard">')
    for(let row = 1;row<=size;row++){
        console.log('  <div>')
        for(let col = 1;col<=size;col++){
            console.log(`    <span class="${currentColour}"></span>`);
           previousColour=currentColour;//1 iteration, previousColour = black;2 iteration = white
            currentColour=previousColour === 'black' ? "white": 'black'
        }
        console.log('  </div>')
        if (size % 2 === 0) {
            previousColour = currentColour
            currentColour = previousColour === 'black' ? 'white' : 'black'
        }

        console.log('</div>')
    }

    console.log('</div>')
}
chessBoard(3)
/*
* function chessBoard(arg) {
    let size = Number(arg)
    let currentColour = 'black'
    let previousColour = ''


    for (let rows = 1; rows <= size; rows++) {


        for (let columns = 1; columns <= size; columns++) {


            previousColour = currentColour
            currentColour = previousColour === 'black' ? 'white' : 'black'
        }

        console.log('  </div>')

    }


}*/
