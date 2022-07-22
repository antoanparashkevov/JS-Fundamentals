function gramophone(band, album, song) {
    let durationSong = (album.length * band.length) * song.length / 2
    console.log(durationSong)
    let counter = durationSong / 2.5;
    console.log(`The plate was rotated ${Math.ceil(counter)} times.`)


}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
