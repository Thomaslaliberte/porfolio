
function afficherDate(){
let dateActuel = new Date();
let nomDuJour = dateActuel.getDay();
let tab_jour = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
//tab_jour[dateActuel.getDay()]
let year = dateActuel.getFullYear();
let month = dateActuel.getMonth() +1;
let day = dateActuel.getDate();
let hour = dateActuel.getHours();
if (hour < 10 ){
    hour = "0" + hour;
}
let min = dateActuel.getMinutes();
if (min < 10 ){
    min = "0" + min;
}
let sec = dateActuel.getSeconds();
if (sec < 10 ){
    sec = "0" + sec;
}
let displayDate = document.getElementById("horloge");
displayDate.innerHTML= tab_jour[dateActuel.getDay()] +" "+ year +"/"+ month +"/"+ day + " " + hour +":"+ min + ":"+ sec;

}


setInterval(afficherDate, 1000)