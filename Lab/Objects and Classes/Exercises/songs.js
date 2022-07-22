function songs(input) {
    class Songs {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = []
    let numberOfSongs = input.shift()
    let typeOfSong = input.pop()
    for(let i = 0;i<numberOfSongs;i++){
        // console.log(input[i])
        let [type,name,time] = input[i].split('_');
        let song = new Songs(type,name,time);
        // console.log(song)
        songs.push(song)
    }
    if(typeOfSong === 'all'){
        songs.forEach((element)=>console.log(element.name))
    }else{
        let filtered = songs.filter((element)=>element.type===typeOfSong);
        // console.log(filtered)//this returns new object that is filtered by type
        filtered.forEach((element)=>console.log(element.name));
    }
}

songs([4,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'banana_John Criminal_4:01',
    'favourite'])
