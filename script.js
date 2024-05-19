//your JS code here. If required.
let d = new Date();


let mm = d.getMonth()+1;
let dd = d.getDate();
let yy = d.getFullYear();

let pDiv = document.getElementById("timer");

let ans = `${mm}/${dd}/${yy}`;


setInterval(myFun,1000);
function myFun(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let tmp;
    if(h>12){
        h-=12;
        tmp = `${h}:${m}:${s} PM`;
    }
    else
        tmp = `${h}:${m};${s} AM`;

    pDiv.textContent = `${ans}, ${tmp}`
}