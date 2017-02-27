/**
 * Created by WILHELM Nicolas on 29/03/2016.
 */

var indispensable = new Network("Calcul");

var termes = document.querySelectorAll('.termes');
var operateurs = document.querySelectorAll('.operateur');
var infoCalcul = document.querySelectorAll('.infoCalcul');
var start = document.getElementById('StartGame');
var restart = document.getElementById('Restart');
var sent = document.getElementById('Sent');
var answer = document.getElementById('Answer');
var game = document.getElementById('Game');
var H = document.getElementById('H');
var Hg = document.getElementById('HG');
var Hu = document.getElementById('HU');
var op = ['+', '-', 'x'];
var points = 0, totpoints = 0;
var resultat = 0;
var temps = 1, timeLeft = 40;

var intervalID = null, timerID = null;

window.onload = function (){
    indispensable.verif(get('login'));
    indispensable.setLogin(get('login'));

}

function verification(operateurs, termes) {
    var resultat = 0;

    if (operateurs[0].innerHTML == 'x' || operateurs[1].innerHTML == 'x') {
        if (operateurs[0].innerHTML == 'x' && operateurs[1].innerHTML == 'x') {
            resultat = parseInt(termes[0].innerHTML) * parseInt(termes[1].innerHTML) * parseInt(termes[2].innerHTML);
        }
        else if (operateurs[0].innerHTML == 'x') {
            resultat = parseInt(termes[0].innerHTML) * parseInt(termes[1].innerHTML);

            if (operateurs[1].innerHTML == '+') {
                resultat += parseInt(termes[2].innerHTML);
            }
            else if (operateurs[1].innerHTML == '-') {
                resultat -= parseInt(termes[2].innerHTML);
            }
        }
        else {
            resultat = parseInt(termes[2].innerHTML) * parseInt(termes[1].innerHTML);

            if (operateurs[0].innerHTML == '+') {
                resultat += parseInt(termes[0].innerHTML);
            }
            else if (operateurs[0].innerHTML == '-') {
                resultat = parseInt(termes[0].innerHTML) - resultat;
            }
        }
    }
    else {
        resultat = parseInt(termes[0].innerHTML);
        for (var i = 0; i < operateurs.length; i++) {
            if (operateurs[i].innerHTML == '+') {
                resultat += parseInt(termes[i + 1].innerHTML);
            }
            else if (operateurs[i].innerHTML == '-') {
                resultat -= parseInt(termes[i + 1].innerHTML);
            }
        }
    }
    return resultat;
}

document.getElementById('mastermind_acces').addEventListener('click', function(){
    window.location='Mastermind.html?login='+indispensable.login;
})
document.getElementById('morpion_acces').addEventListener('click', function(){
    window.location='Morpion.html?login='+indispensable.login;
})
document.getElementById('memory_acces').addEventListener('click', function(){
    window.location='Memory.html?login='+indispensable.login;
})

document.getElementById('logout').addEventListener('click', function(){
    window.location='Login.html';
})


function generate(termes, operateurs) {
    var points = 5;

    for (var i = 0; i < termes.length; i++) {
        termes[i].innerHTML = Math.floor(10 * Math.random());
    }
    for (var i = 0; i < operateurs.length; i++) {
        operateurs[i].innerHTML = op[Math.floor(3 * Math.random())];
        if (operateurs[i].innerHTML == 'x') {
            points += 2;
        }
    }

    return points;
}

function jeu() {
    points = generate(termes, operateurs);
    resultat = verification(operateurs, termes);
    answer.value = '';
    infoCalcul[0].innerHTML = totpoints;
}

function timer() {

    timerID = setTimeout(function () {
        temps = 0;
        infoCalcul[2].innerHTML = 'End';
        if(totpoints > 0){
            indispensable.addScore(indispensable.login,totpoints);
        }
    }, 40000);

    intervalID = setInterval(function () {
        if (timeLeft > 0) {
            infoCalcul[1].innerHTML = (--timeLeft) + "s";
        }
    }, 1000);


}

sent.addEventListener('click', function () {
    if (temps == 1 && answer.value != '') {
        if (resultat == parseInt(answer.value)) {
            totpoints += points;
            infoCalcul[2].innerHTML = 'True'
        }
        else {
            totpoints += -3;
            infoCalcul[2].innerHTML = 'Wrong'
        }
        jeu();
        infoCalcul[0].innerHTML = totpoints;
    }
})

start.addEventListener('click', function () {
    start.style.display = "none";
    game.style.display = "";
    infoCalcul[1].innerHTML = (--timeLeft) + "s";
    jeu();
    timer();
    console.log(resultat);

})

restart.addEventListener('click', function () {
    jeu();
    clearTimeout(timerID);
    clearInterval(intervalID);
    timeLeft = 40;
    temps = 1;
    timer();
    totpoints = 0;
    infoCalcul[0].innerHTML = totpoints;
    infoCalcul[1].innerHTML = timeLeft + "s";
    infoCalcul[2].innerHTML = '';

})
H.addEventListener('click', function(){
    if(Hu.style.display == "none") {
        Hu.style.display = "";
        Hg.style.display = "";
        classement.style.display = "";
    }
    else {
        Hu.style.display = "none";
        Hg.style.display = "none";
        classement.style.display = "none";
        classement.innerHTML ='';
    }
})
Hg.addEventListener('click', function(){
    indispensable.printScore(classement);
});

Hu.addEventListener('click', function(){
    indispensable.printScore(classement, indispensable.login);
});
