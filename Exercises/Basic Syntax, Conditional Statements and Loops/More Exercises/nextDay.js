function nextDay(year,month,day){
    // let currentDate = new Date();//this build-in function return the current local date
    // console.log(currentDate)
    let numYear = Number(year);
    let numMonth = Number(month);
    let numDay = Number(day);
    let date = new Date(numYear,numMonth -1,numDay +1);
    let nextDate = new Date(date);
    nextDate.setDate(date.getDate());
    let outputYear = nextDate.getFullYear();
    let outputMonth = nextDate.getMonth() + 1;
    let outputDate = nextDate.getDate();
    console.log(`${outputYear}-${outputMonth}-${outputDate}`)
}
nextDay(2016,10,30)
