/**
 * Created by WILHELM Nicolas.
 */

var indispensable = new Network();

var login = document.getElementById('login');
var more = document.getElementById('More');
var champs = document.querySelectorAll('.champs');
var info = document.querySelectorAll('.infoFormu');
var form = document.getElementById('formulaire');
var caseLogin = document.getElementById('caseLogin');
var caseRegister = document.getElementById('caseRegister');
var SentRegistration = document.getElementById('Sent');

login.addEventListener('click', function(){
    indispensable.loggin(champs[0].value, champs[1].value);
});

more.addEventListener('click', function(){
    if(form.style.display == "none"){
        form.style.display = "";
        caseLogin.style.borderRadius = "0px 20px 0px 0px";
        caseRegister.style.borderRadius = "20px 0px 0px 0px";
        more.style.display = "none";
    }
});

SentRegistration.addEventListener('click', function(){
    indispensable.subscribe(champs[4].value, champs[5].value, champs[2].value, champs[3].value);
});