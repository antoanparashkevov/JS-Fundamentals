function trainingSplice(){
    let arr2=[1,2,3,3,5];
    console.log('That is original Array');
    console.log(arr2);
    console.log('On 3rd index i replace with Number');
    arr2.splice(3,0,4)//only replacing
    console.log(arr2);
    console.log('On 4th index i delete it');
    arr2.splice(4,1)//only deleting
    console.log(arr2);
    console.log('On 4th index i delete 1 item and replace with new String variable');
    arr2.splice(4,1,'i changed the element')//replacing and deleting
    console.log(arr2);
    console.log('On 3rd index i delete two items');
    arr2.splice(3,2)//deleting two items from index 3 two steps
    console.log(arr2);
}
trainingSplice()
