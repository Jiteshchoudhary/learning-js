function updateValue(obj) {
    obj.value = 5;
    obj = { value: 10 }; // New object assignment
    return obj;
}
let myObj = { value: 0 };
updateValue(myObj);
console.log(myObj.value);
