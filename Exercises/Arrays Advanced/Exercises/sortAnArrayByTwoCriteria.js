function sortAnArrayByTwoCriteria(array) {
    let secondaryCriteria = array.sort();//sort in ascending order by ASCII table
    // console.log(secondaryCriteria)
    let primaryCriteria = secondaryCriteria.sort((a, b) => a.length - b.length);//by ascending order
    console.log(primaryCriteria.join('\n'));

}

sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma'])
