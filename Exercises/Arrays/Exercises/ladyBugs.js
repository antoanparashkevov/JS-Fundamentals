function ladyBugs(arr) {
    let area = Array(arr[0]).fill(0);//0 0 0 0 0
    console.log(area);
    let ladyBugs = arr[1].split(' ');//only 0 index
    console.log(ladyBugs);

    //we filled ladybugs on our area
    for (let i = 0; i < ladyBugs.length; i++) {//only 1 iteration with 0
        if (area[ladyBugs[i]] === 0) {//area[3] === 0 ? Yes -> area[3] -> 1
            area[ladyBugs[i]] = 1;
        }
    }
    console.log(area);

    for (let j = 2; j < arr.length; j++) {
        let command = arr[j].split(' ');//One string convert to one array : 3 left 2 - > ['3','left','2']
        console.log(command);
        let currSpot = +command[0];//this '+' converts from String to Number type
        let direction = command[1];
        let moves = +command[2];

        switch (direction) {
            case "right":
                if (area[currSpot] === 1) {
                    area[currSpot] = 0;//We moved from there to another place
                    while (area[currSpot + moves] !== 0 && currSpot + moves < area.length) {//1 !== 0 ? && 0+1 < area.length ? area.length = 3
                        moves += moves;//from 1 to 2
                    }
                    if (area[currSpot + moves] === 0) {//if this new place is empty
                        area[currSpot + moves] = 1;//fill it
                    }
                }
                break;


            case "left":
                if(area[currSpot] === 1){
                    area[currSpot] = 0;

                    while(area[currSpot-moves] !== 0 && currSpot-moves >= 0){
                        moves+=moves;//2+2 = 4
                    }
                    if(area[currSpot-moves] ===0){
                        area[currSpot-moves] =1;
                    }
                }
                break;
        }
    }
       console.log(area.join(' '))
}


ladyBugs([ 5, '3',
    '3 left 2',
    '1 left -2'])
