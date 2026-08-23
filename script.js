const clock = document.getElementById("clock");
const ampm = document.getElementById("ampm");
const date = document.getElementById("date");
const greeting = document.getElementById("greeting");
const formatBtn = document.getElementById("formatBtn");

let is24Hour = false;

function updateClock(){

const now = new Date();

let hours = now.getHours();

let minutes = now.getMinutes();

let seconds = now.getSeconds();

let session = "AM";

if(hours>=12){

session="PM";

}

let displayHour=hours;

if(!is24Hour){

displayHour=hours%12;

displayHour=displayHour||12;

}

clock.innerHTML=

`${String(displayHour).padStart(2,"0")} :
 ${String(minutes).padStart(2,"0")} :
 ${String(seconds).padStart(2,"0")}`;

ampm.innerHTML=is24Hour?"24 Hour":session;

const days=[
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];

const months=[
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];

date.innerHTML=

`${days[now.getDay()]},
 ${now.getDate()}
 ${months[now.getMonth()]}
 ${now.getFullYear()}`;

if(hours<12){

greeting.innerHTML="🌞 Good Morning";

}
else if(hours<17){

greeting.innerHTML="☀️ Good Afternoon";

}
else if(hours<20){

greeting.innerHTML="🌇 Good Evening";

}
else{

greeting.innerHTML="🌙 Good Night";

}

}

updateClock();

setInterval(updateClock,1000);

formatBtn.onclick=function(){

is24Hour=!is24Hour;

formatBtn.innerHTML=is24Hour?

"Switch to 12 Hour":

"Switch to 24 Hour";

updateClock();

};