//to combine array we have to way
//one is use method concat
//but es6 introduced the spread operator 
const items = [1, 2, 4, 6];
const itemTwo = [9, 21, 45, 634];
const finalArray = items.concat(itemTwo);
console.log("finalArray", finalArray);

//using spread operator 
const spreadOperator = [...finalArray, ...items, ...itemTwo];
console.log(spreadOperator);