
function add(x, y) {
    return new Promise((resolve, reject) => {
        if (x === 2) {
            setTimeout(() => {
                reject("2号函数未通过xxxxxxx");
            }, 1000);
        }
        else {
            setTimeout(() => {
                resolve(x + y);
            }, 1000);
        }
    });
}


function getpingfang1(x) {
    return new Promise((resolve, reject) => {
        if (x === 3) {
            setTimeout(() => {
                reject("xxxx");
            }, 1000);
        }
        else {
            setTimeout(() => {
                resolve(x * x);
            }, 1000);
        }
    });
}


function getpingfang2(x) {
    return new Promise((resolve, reject) => {
        if (x === 4) {
            setTimeout(() => {
                reject("xxxx");
            }, 2000);
        }
        else {
            setTimeout(() => {
                resolve(x * x * x * x);
            }, 2000);
        }
    });
}

let a =  () => {}




Promise.all([() => getpingfang1(1), () => getpingfang2(2)]).then(
    (value) => {
        return add(value[0], value[1]);
    }
).then(
    (x) => {
        console.log(x);
    }

    )

// let tmp1;

// getpingfang1(1).then(
//     (x) => {
//         tmp1 = x;
//         console.log(x);
//         return getpingfang2(2);
//     }).then(
//     (x) => {
//
//         console.log(x);
//         return add(tmp1, x);
//     }
//     ).then(
//     (x) => {
//
//         console.log(x);
//     }
//     ).catch(
//     () => {
//         console.log("err");
//     }
//
//     );

//
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p1'), 2000, )
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p2'), 1000, 'p2')
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p3'), 500, 'p3')
// });
//
// Promise.race([p1, p2, p3]).then((value) => {
//     console.log(value)
// }).catch((err) => {
//     console.log(err.message)
// })
//
//
// Promise.all([p1, p2, p3]).then((value) => {
//     console.log(value)
// }).catch((err) => {
//     console.log(err.message)
// })
