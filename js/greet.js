var myDate = new Date();
var  hrs = myDate.getHours();
var msg = "";

if (hrs<12) msg = "Bom dia!";      // After 6am
if (hrs >= 12 && hrs<17) msg = "Boa tarde!";    // After 12pm
if (hrs >= 17 && hrs<=24) msg = "Boa noite!";      // After 5pm

document.write(msg);


