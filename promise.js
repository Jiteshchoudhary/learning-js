let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello coders")
    }, 10000)
});


console.log("START");
p.then((res) => {
    console.log(res);
    console.log("end here")

});
// p.then((res) => {
//     console.log("response we have here@", res);
// });
// async function asyncFunc() {
//     let result = await p;
//     console.log("result", result)
// }
// // asyncFunc().then((res) => {
// //     console.log(res);

// //     console.log("end")
// // });

// asyncFunc().catch((eror) => {
//     console.log(eror);
// })