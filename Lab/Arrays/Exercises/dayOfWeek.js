function dayOfWeek(numberOfDay) {
    if (numberOfDay > 7 || numberOfDay < 1) {
        console.log("Invalid day!")
    } else {
        let days = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ];
        let index = numberOfDay - 1;
        console.log(days[index])
    }
}

dayOfWeek(3)
