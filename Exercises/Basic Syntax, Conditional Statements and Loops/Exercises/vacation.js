function vacation(count, type, dayOfWeek) {
    let pricePerOne = 0;
    let totalPrice = 0;
    switch (type) {
        case "Students":
            if (dayOfWeek === "Friday") {
                pricePerOne = 8.45;
            } else if (dayOfWeek === "Saturday") {
                pricePerOne = 9.80;
            } else if (dayOfWeek === "Sunday") {
                pricePerOne = 10.46;
            }
            totalPrice = count * pricePerOne;
            if (count >= 30) {
                totalPrice = totalPrice * 0.85;
            }
            break;
        case "Business":
            if (dayOfWeek === "Friday") {
                pricePerOne = 10.90;
            } else if (dayOfWeek === "Saturday") {
                pricePerOne = 15.60;
            } else if (dayOfWeek === "Sunday") {
                pricePerOne = 16;
            }
            totalPrice = count*pricePerOne;
            if (count >= 100) {
                count-=10;
                totalPrice = pricePerOne * count
            }
            break;
        case "Regular":
            if (dayOfWeek === "Friday") {
                pricePerOne = 15;
            } else if (dayOfWeek === "Saturday") {
                pricePerOne = 20;
            } else if (dayOfWeek === "Sunday") {
                pricePerOne = 22.50;
            }
            totalPrice = count*pricePerOne
            if(count>=10 && count<=20){
                totalPrice = totalPrice*0.95;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}

vacation(40, "Regular", "Saturday")
