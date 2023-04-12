"use strict";
var n = 0, h = 0;
var request = null;
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
function sendRequest(url) {
    console.log(getTime() + " start getURL");
    request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    console.log(getTime() + " end getURL");
}
function viewResponse() {
    n++;
    console.log("viewResponse try " + n);
    if (request != null && request.status == 200) {
        console.log(" ==> " + request.response);
        clearInterval(h);
    }
}
const myURL = 'https://trainingcenter.cloud.ufps.edu.co/sleep?t=5';
console.log(getTime() + " start");
h = setInterval(viewResponse, 1000);
sendRequest(myURL);
console.log(getTime() + " end");
