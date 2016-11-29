function add(x, y) {
    return new Promise(function (resolve, reject) {
        if (x === 2) {
            setTimeout(function () {
                reject("2号函数未通过xxxxxxx");
            }, 1000);
        }
        else {
            setTimeout(function () {
                resolve(x + y);
            }, 1000);
        }
    });
}
function getpingfang1(x) {
    return new Promise(function (resolve, reject) {
        if (x === 3) {
            setTimeout(function () {
                reject("xxxx");
            }, 1000);
        }
        else {
            setTimeout(function () {
                resolve(x * x);
            }, 1000);
        }
    });
}
function getpingfang2(x) {
    return new Promise(function (resolve, reject) {
        if (x === 4) {
            setTimeout(function () {
                reject("xxxx");
            }, 2000);
        }
        else {
            setTimeout(function () {
                resolve(x * x * x * x);
            }, 2000);
        }
    });
}
var a = function () { };
Promise.all([function () { return getpingfang1(1); }, function () { return getpingfang2(2); }]).then(function (value) {
    return add(value[0], value[1]);
}).then(function (x) {
    console.log(x);
});
