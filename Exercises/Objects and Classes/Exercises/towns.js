function towns(array){
    let finalRes = {};
            for(let i = 0;i<array.length;i++){
                let town = array[i].split(' | ');
                // console.log(town)
                let townName = town[0]
                let latitude = Number(town[1]).toFixed(2)
                let longitude = Number(town[2]).toFixed(2)
                // console.log(latitute,longitute)
                finalRes.town = townName;
                finalRes.latitude = latitude;
                finalRes.longitude = longitude;
                console.log(finalRes)
            }
            
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);