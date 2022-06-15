 function spiralMatrix(n) {
        let totalCells = n * n;//9
        let result = [];

        //make only structure.
        for (let i = 1; i <= n; i++) {//from 0 to 2 is the same like from 1 to 3, we have 3 iterations to do
            let rows = [];
            for (let j = 1; j <= n; j++) {

                rows.push(0);//[0] , [0,0] , [0,0,0] ----> result.push([0,0,0])
                // console.log(rows)
                console.log('---')
            }
            result.push(rows);
            // console.log(result)
        }
        // console.log(result)//last iteration ----> [[0,0,0],[0,0,0],[0,0,0]]

        let row = 0;
        let col = 0;
        let step = 0;
        for (let i = 0; i < totalCells;) {//from 0 to 8 is the same like from 1 to 9
            //we make first row [1,2,3]
            //only when row is 0 and col is 0,1,2
            while (col + step < n) {
                //row always is 0
                //0+0 < 3 --> i=1; result[row,col] = 1; col = 0; ->
                //1+0 < 3 --> i=2; result[row,col] = 2; col = 1;
                //2+0 < 3 --> i=3; result[row,col] = 3; col = 2;
                //3+0 < 3 --> NO
                i++;
                result[row][col] = i;
                console.log(result)
                col++;//last iteration ---> 3

            }
            col--;//2
            row++;//1

            while (row + step < n) {//    1    2
                //1+0 < 3 --> i=4; result[row,col] = 4; row = 1;
                //                         2   2
                //2+0 < 3 --> i=5; result[row,col] = 5; row = 2;
                //3+0 < 3 --> NO
                i++;
                result[row][col] = i;
                console.log(result)
                row++;//last iteration --> 3
            }
            row--;//2
            col--;//1

            while (col >= step) {
                //1 >= 0 ? Yes
                //0 >= 0 ? Yes
                //-1 >= 0 ? NO
                i++;
                //i=6
                //i=7
                //       2   1
                //result[row,col] = 6

                //      2   0
                //result[row,col] = 7
                result[row][col] = i;
                // console.log(result)

                col--;//last iteration ---> -1
            }
            col++;//0
            row--;//1
            step++;//1

            while (row >= step) {
                //1 >= 1 ? Yes
                //0 >= 1 ? NO
                i++;//i=8
                //      1   0
                //result[row,col] = 8
                result[row][col] = i;
                // console.log(result)
                row--;//0
            }
            row++;//2
            col++;//1
        }

        // result.forEach(row => console.log(row.join(' ')));



}
spiralMatrix(3,3)
console.log('-------')
// spiralMatrix(5,5)
