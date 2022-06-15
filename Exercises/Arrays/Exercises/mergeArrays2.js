function mergeArrays2(arr1, arr2) {
    return arr1.map((el, i) => i % 2 == 0 ? Number(el) + Number(arr2[i]) : el + arr2[i]).join(' - ');
}

console.log(mergeArrays2(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
));
