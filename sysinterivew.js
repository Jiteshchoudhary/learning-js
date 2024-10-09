
3:06 PM
var x = 21;
var test = function () {
    console.log(x);
    var x = 20;
};
test();
You
3:07 PM
undefined
Hover over a message to pin it
keep

3:07 PM
-----------------------------------
var b = 1;
function outer() {
    var b = 2
    function inner() {
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();
You
3:08 PM
3

3:08 PM
--------------------------------
    let data = 100;
{
    let data = 222;
    {
        console.log(data);
        data = 900
    }
}
console.log(data);
You
3:09 PM
222
900

3: 10 PM
---------------------------------------
    let test = {
        a: 22
    };
let one = test;
let two = JSON.parse(JSON.stringify(test));
test.a = 90;
console.log('one ==== ', one);
console.log('two ==== ', two);
You
3: 11 PM
a: 90,
    a: 22

3: 11 PM
------------------------------------
    new Promise((resolve, reject) => {
        console.log('first');
        return 23;
    }).then(data => {
        console.log('1 ans = ', data);
        return data++;
    }).then(data => {
        console.log('2 ans = ', data);
        return ++data;
    }).then(data => {
        console.log('3 ans = ', data);
    });
You
3: 13 PM
first, 23, 23, 24

3: 16 PM
-------------------------------
    main()
async function main() {
    console.log('start');
    await display();
    console.log('end');
}

async function display() {
    setTimeout(function () {
        console.log('timeout');
    }, 10000);
    console.log('display');
    return {};
}
You
3: 17 PM
start, diplay end timeout

3: 28 PM
------------------------------------
const obj = { a: 4 };
const str = 'test';
console.log(delete obj.a);
console.log(delete str);

3: 31 PM
--------------------------------
    console.log('test');

setImmediate(() => console.log('setImmediate'));

setTimeout(() => console.log('setTimeout'));

process.nextTick(() => console.log('nextTick'))

console.log('log 2');
You
3: 32 PM
test, log2, nextTick, setImmediate, setTimeout

3: 33 PM
--------------------------------
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}
You
3: 35 PM
3, 3, 3

3: 35 PM
-------------------------------------------
    let test = 0
console.log(test++ + ++test);
You
3: 36 PM
2

3: 36 PM
----------------------------------------
    class Chameleon {
        static colorChange(newColor) {
            this.newColor = newColor;
            return this.newColor;
        }

        constructor({ newColor = 'green' } = {}) {
            this.newColor = newColor;
        }
    }

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange'));
You
3: 37 PM
orange

3: 48 PM
----------------------------
## Write a program to count number of vowels and consonants in a given string

// dsfkefjweijoifj@#$%^&*99082098{}[];''dadas