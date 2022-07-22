class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
        this.isOn = false;

        //these three function can be written outside the constructor and we can remove this. in front of it
        // this.turnOff = () => {
        //     this.isOn = true;
        //     this.quality -= 1
        //
        // }
        // this.turnOn = () => {
        //     this.isOn = false;
        //     this.quality -= 1;
        // }
        // this.showInfo = () => {
        //     return JSON.stringify(info)
        // }
        // this.price = () => {
        //     //    number (800 – {age * 2} + (quality * 0.5))
        //     return 800 - (this.info.age * 2) + this.quality * 0.5
        // }
    }

    turnOff() {
        this.isOn = true;
        this.quality -= 1
    }

    turnOn = () => {
        this.isOn = false;
        this.quality -= 1;
    }
    showInfo = () => {
        return JSON.stringify(this.info)
    }
    // price = () => {
    //     //    number (800 – {age * 2} + (quality * 0.5))
    //     return 800 - (this.info.age * 2) + this.quality * 0.5
    // }
    get price (){
        return 800 - (this.info.age * 2) + this.quality * 0.5
    }

}

let infoAboutLaptop = {
    producer: "Dell",
    age: 2,
    brand: "XPS"
}

let laptop = new Laptop(infoAboutLaptop, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)//like that if we use get outside of the constructor
console.log(laptop.price())//like that if we type simple function outside of the constructor
console.log(laptop.price())//like that if we type arrow function inside of the constructor




