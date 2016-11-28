function getValue1(x) {
    return new Promise((resolve, reject) => {
        if (x === 1) {
            // 陷阱 跳出
            setTimeout(function() {
                reject(x);

            }, 1000);
        } else {
            setTimeout(function() {
                resolve(x);
            }, 1000);
        }
    });
}
function getValue2(x) {
    return new Promise((resolve, reject) => {
        if (x === 2) {
            // 陷阱 跳出
            setTimeout(function() {
                reject(x);

            }, 1000);
        } else {
            setTimeout(function() {
                resolve(x);
            }, 1000);
        }
    });
}
function getValue3(x) {
    return new Promise((resolve, reject) => {
        if (x === 3) {
            // 陷阱 跳出
            setTimeout(function() {
                reject(x);

            }, 1000);
        } else {
            setTimeout(function() {
                resolve(x);
            }, 1000);
        }
    });
}


let x = Math.ceil(Math.random() * 3);

getValue1(x).then((x) => {
    console.log("1号函数通过ok", x);
    return getValue2(x);

}).then((x) => {
    console.log("2号函数通过ok", x);
    return getValue3(x);
}).then((x) => {
    console.log("3号函数通过ok", x);

}).catch((e) => { console.log("1号函数未通过xxxxx", x); });







//
// getValue1(x, (x) => {
//     console.log("1号函数通过ok", x);
//     getValue2(x, (x) => {
//         console.log("2号函数通过ok", x);
//         getValue3(x, (x) => {
//             console.log("3号函数通过ok", x);
//
//         }, (e) => {
//             console.log("1号函数未通过xxxxx", x);
//         });
//     }, (e) => {
//         console.log("1号函数未通过xxxxx", x);
//     });
// }, (e) => {
//     console.log("1号函数未通过xxxxx", x);
// });
