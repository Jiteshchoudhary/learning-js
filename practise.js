let string = "jitesh awesome";
console.log(string.indexOf("it"))





// // // javascript es6 introduced many features first it is introduced
// // //the let and const variable declaration etc which is not hoisted
// // //and also provide the block scope variable etc

// // //if we declared lets without initlaization it give an undefined
// // //can you give an example of it yes.
// // // let y = 34;
// // // if (0) {
// // //     let y = 53;
// // //     console.log('y we have here@@', y);
// // // } else {
// // //     let y = 35;
// // //     console.log("inside the else block", y);
// // // }
// // // console.log(cat);
// // // console.log("y value outside we have here@@", y);
// // // console.log("z value we have here@@", z);
// // // let z;
// // // console.log("z we have here@@", z);

// // //const is basically introduced in es6 it is same as let but only difference
// // //that initalization is required at time otherwise it is throgh error
// // //aprart from that we can reassign and recreate the same values
// // //we can just modified the const properties of it
// // //
// // // const hello = 54;
// // // const isArray = [];
// // // isArray.push(91);
// // // isArray.push(87);
// // // console.log("isArray we have here@@", isArray);
// // // const obj = Object.freeze({ id: 1, name: "jitesh", surname: "choudhary" });
// // // console.log("inital object value we have here", obj);
// // // obj.id = 45;
// // // console.log("object we have here@@", obj);
// // // // console.log(hello);

// // // let array = [1, 2, 4, 35, 95];

// // // for (const i = 0; i < 5; i++) {
// // //     console.log(i);
// // // }

// // // for (const i of array) {
// // //     console.log(`i we have here`, i);
// // // }
// // //const vs var =>
// // // //event loop example
// // // console.log("start");
// // // let p = new Promise((resolve, reject) => {
// // //     resolve('Promise is resolved successfully');
// // // });
// // // setTimeout(() => {
// // //     console.log(`set timeout is running`);
// // // }, 1000);

// // // setInterval(() => {
// // //     console.log("Set interval is running ");
// // // }, 1000);

// // // setImmediate(() => {
// // //     console.log("set immediate ")
// // // });
// // // console.log("end");
// // // p.then((res) => {
// // //     console.log("response we have here", res);
// // // }).catch((error) => {
// // //     console.log(error);
// // // });

// // // console.log("var is hoisted its value is undefined", hoisted);
// // // var hoisted = 95;
// // // console.log("hoisted var", hoisted);
// // // // funtion as expression is not hoisted;
// // // console.log("add we have here", add, "typeof it", typeof add);
// // // add(5, 4)

// // // var add = function (a, b) {
// // //     let sum = a + b;
// // //     console.log('sum we have', sum);
// // //     return sum;
// // // }
// // //
// // let arrow = () => {
// //     greater = 45;
// //     return greater;
// //     //inside this is not work but if its is wrap inside the function then output will be different okay.
// // }

// // // function sums(a, b) {
// // //     let add = () => {
// // //         console.log(this);
// // //     }
// // //     add();
// // //     return a + b;
// // // }
// // // console.log('sum we have here', sums(42, 43));


// // // mine = 49;
// // // arrow();
// // // console.log(mine);
// // // console.log(global);
// // let sum = 43 + 64 / -0;
// // console.log(sum);

// // console.log(typeof 'hi');
// // console.log(typeof 10n);
// // console.log(typeof 100)
// // console.log(typeof arrow);
// // console.log(typeof 10 + 'hi')
// // console.log(typeof (10 + 'hi'));

// // const isEven = [2, 4, 6];
// // //Some any //
// // console.log(isEven.every((ele) => ele % 2 == 0))


// // //array
// // //add element in array push unshift op

// function flattenArray(array) {
//     console.log("array length", array.length);
//     let tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         let element = array[i];
//         if (Array.isArray(element)) {
//             flattenArray(element)
//         } else {
//             tempArray.push(element);
//         }
//     }
//     return tempArray;
// }

// function flatArray(array) {
//     let tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         let element = array[i];
//         if (Array.isArray(element)) {
//             flatArray(element);
//         } else {
//             tempArray.push(element);
//         }
//     }
//     return tempArray;
// }
// const nestedArray = [12, [23, [4343, [34]]]];
// console.log(flattenArray(nestedArray));
// console.log(flatArray(nestedArray));