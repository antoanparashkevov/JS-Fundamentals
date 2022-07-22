function reverseInPlace(arr) {
    //reversing an array but without making new one
    //repeat for all elements from beginning to middle
    /* swap current element with element in other half
       use temp variable to store value during swap

     [10,20,30,40,50,60,70] length/2 = 3.5
      0  1  2  3  4  5  6

      0 -> 6
      1 -> 5
      2 -> 4
      3 -> 3 middle element


    */
    for (let i = 0; i < arr.length / 2; i++) {
        let k = arr.length - 1 -i;
        let temp = arr[i]; //now we have 2 copies of i
        arr[i] = arr[k];//now k is replaced by i and k was deleted
        arr[k]=temp;//now k was swapped with i
    }
    console.log(arr.join(" "))
}

reverseInPlace([10, 20, 30, 40, 50, 60])
reverseInPlace([10, 20, 30, 40, 50, 60,70])
