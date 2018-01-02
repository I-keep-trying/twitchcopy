/* function test() {
    do stuff
}
function test2() {

}

setTimeout(function() { test(); }, 300);
test2; */

//(function(){

function delay(array) {
    return new Promise(resolve => setTimeout(resolve, 300));
}             
    async function delayedLog(item) {
        await delay();
        console.log(item);
                    
    }
    async function processArray(array) {
        for (const item of array) {
            await delayedLog(item);
        }
        console.log('Done!');
    }

    processArray([1, 2, 3]);

//})();

// https://blog.lavrton.com/javascript-loops-how-to-handle-async-await-6252dd3c795
var promise = job1();

promise

    .then(function (data1) {
        console.log('data1', data1);
        return job2();
    })

    .then(function (data2) {
        console.log('data2', data2);
        return 'Hello world';
    })

    .then(function (data3) {
        console.log('data3', data3);
    });

function job1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('result of job 1');
        }, 1000);
    });
}

function job2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('result of job 2');
        }, 1000);
    });
}

async function test() {
    for (let i = 0; i < 2; i++) {
        console.log('Before await for ', i);
        let result = await Promise.resolve(i);
        console.log('After await. Value is ', result);
    }
}

test().then(_ => console.log('After test() resolved'));

console.log('After calling test');