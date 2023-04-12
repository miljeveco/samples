"use strict";
var n = 0;
function getTime() {
    let str = "";
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let miliseconds = currentTime.getMilliseconds();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    str += hours + ":" + minutes + ":" + seconds + ":" + miliseconds + " ";
    if (hours > 11) {
        str += "PM";
    }
    else {
        str += "AM";
    }
    return str;
}
function getPromise(url) {
    console.log(getTime() + " start getPromise");
    let promise = new Promise(function (resolve, reject) {
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.onload = function () {
            console.log(getTime() + " onLoad");
            if (req.status == 200) {
                resolve(req.response);
            }
            else {
                reject("There is an Error!");
            }
        };
        req.send();
    });
    console.log(getTime() + " end getPromise");
    return promise;
}
function consumerAsync(myUrl) {
    let promise = getPromise(myURL);
    promise.then((result) => {
        console.log({ result });
    }, (error) => {
        console.log('Error ! ');
    });
}
const myURL = 'https://trainingcenter.cloud.ufps.edu.co/sleep?t=5';
console.log(getTime() + " start");
consumerAsync(myURL);
console.log(getTime() + " end");
