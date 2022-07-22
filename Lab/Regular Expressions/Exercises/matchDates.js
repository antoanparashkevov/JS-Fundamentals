function matchDates(input){
let pattern = /\b(?<date>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g
    let match = pattern.exec(input)
    // let match2 = input.match(pattern)
    // console.log(match2)
    while(match!==null){
        let day = match.groups['date']
        let month = match.groups['month']
        let year = match.groups['year']
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
        match = pattern.exec(input)
    }
}
matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")
