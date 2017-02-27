var L1c1 = document.getElementById('l1c1');
var L1c2 = document.getElementById('l1c2');
var L1c3 = document.getElementById('l1c3');
var L2c1 = document.getElementById('l2c1');
var L2c2 = document.getElementById('l2c2');
var L2c3 = document.getElementById('l2c3');
var L3c1 = document.getElementById('l3c1');
var L3c2 = document.getElementById('l3c2');
var L3c3 = document.getElementById('l3c3');
var Gagnant = document.getElementById('gagnant');
var Score1 = document.getElementById('score1');
var Score2 = document.getElementById('score2');
var New_Game = document.getElementById('nouvelle_partie');
var Player1 =  document.getElementById('player1');
var Valid_player1 = document.getElementById('valid_player1');
var Player2 =  document.getElementById('player2');
var Valid_player2 = document.getElementById('valid_player2');
var indispensable = new Network("Morpion");


var i=0;
var score_joueur1=0;
var score_joueur2=0;

document.getElementById('mastermind_acces').addEventListener('click', function(){
    window.location='Mastermind.html?login='+indispensable.login;
})

document.getElementById('memory_acces').addEventListener('click', function(){
    window.location='Memory.html?login='+indispensable.login;
})
document.getElementById('mental_acces').addEventListener('click', function(){
    window.location='Calcul.html?login='+indispensable.login;
})

document.getElementById('logout').addEventListener('click', function(){
    window.location='Login.html';
})

window.onload = function (){
    indispensable.verif(get('login'));
    indispensable.setLogin(get('login'));
}

Valid_player1.addEventListener('click',function() {
    score1.innerHTML = 'Score ' + Player1.value + ': 0';
});

Valid_player2.addEventListener('click',function() {
    score2.innerHTML = 'Score ' + Player2.value + ': 0';
});

New_Game.addEventListener('click',function() {
    i=0;
    L1c1.innerHTML ='';
    L1c2.innerHTML = '';
    L1c3.innerHTML = '';
    L2c1.innerHTML = '';
    L2c2.innerHTML = '';
    L2c3.innerHTML = '';
    L3c1.innerHTML = '';
    L3c2.innerHTML = '';
    L3c3.innerHTML = '';
    Gagnant.innerHTML = '';
});

L1c1.addEventListener('click',function() {

    if ( (L1c1.innerHTML !== 'X') && (L1c1.innerHTML !== 'O') && (i<9))
    {
        if ((i==0) || (i==2) || (i==4) || (i==6) || (i==8)) {
            L1c1.innerHTML='O';
            i++;
        }

        else {
            L1c1.innerHTML='X';
            i++;
        }
        verif();
    }

});

L1c2.addEventListener('click',function() {

    if (!(L1c2.innerHTML == 'X') && !(L1c2.innerHTML == 'O') && (i<9))
    {
        if ((i==0) || (i==2) || (i==4) || (i==6) || (i==8)) {
            L1c2.innerHTML='O';
            i++;
        }

        else {
            L1c2.innerHTML='X';
            i++;
        }
        verif();

    }
});

L1c3.addEventListener('click',function() {

    if (!(L1c3.innerHTML == 'X') && !(L1c3.innerHTML == 'O') && (i<9))
    {
        if ((i==0) || (i==2) || (i==4) || (i==6) || (i==8)) {
            L1c3.innerHTML='O';
            i++;
        }

        else {
            L1c3.innerHTML='X';
            i++;
        }
        verif();

    }
});

L2c1.addEventListener('click',function() {

    if (!(L2c1.innerHTML == 'X') && !(L2c1.innerHTML == 'O') && (i<9))
    {
        if ((i==0) || (i==2) || (i==4) || (i==6) || (i==8)) {
            L2c1.innerHTML='O';

            i++;
        }

        else {
            L2c1.innerHTML='X';
            i++;
        }
        verif();
    }
});

L2c2.addEventListener('click',function() {

    if (!(L2c2.innerHTML == 'X') && !(L2c2.innerHTML == 'O') && (i<9))
    {
        if ((i==0) || (i==2) || (i==4) || (i==6) || (i==8)) {
            L2c2.innerHTML='O';
            i++;
        }

        else {
            L2c2.innerHTML='X';
            i++;
        }
        verif();
    }
});

L2c3.addEventListener('click',function() {

    if (!(L2c3.innerHTML == 'X') && !(L2c3.innerHTML == 'O') && (i<9))
    {
        if ((i==0) || (i==2) || (i==4) || (i==6) || (i==8)) {
            L2c3.innerHTML='O';
            i++;
        }

        else {
            L2c3.innerHTML='X';
            i++;
        }
        verif();

    }
});

L3c1.addEventListener('click',function() {

    if (!(L3c1.innerHTML == 'X') && !(L3c1.innerHTML == 'O') && (i<9))
    {
        if ((i==0) || (i==2) || (i==4) || (i==6) || (i==8)) {
            L3c1.innerHTML='O';
            i++;
        }

        else {
            L3c1.innerHTML='X';
            i++;
        }
        verif();

    }
});

L3c2.addEventListener('click',function() {

    if (!(L3c2.innerHTML == 'X') && !(L3c2.innerHTML == 'O') && (i<9))
    {
        if ((i==0) || (i==2) || (i==4) || (i==6) || (i==8)) {
            L3c2.innerHTML='O';
            i++;
        }

        else {
            L3c2.innerHTML='X';
            i++;
        }
        verif();

    }
});

L3c3.addEventListener('click',function() {

    if (!(L3c3.innerHTML == 'X') && !(L3c3.innerHTML == 'O') && (i<9))
    {
        if ((i==0) || (i==2) || (i==4) || (i==6) || (i==8)) {
            L3c3.innerHTML='O';
            i++;
        }

        else {
            L3c3.innerHTML='X';
            i++;
        }
        verif();

    }
});

function verif () {
    if ((checkhorizontal() == true) || (checkvertical() == true) || (checkdiagonal() == true)) {
        if (!(i%2) == 0) {

            if(Player1.value !=''){
                Gagnant.innerHTML=Player1.value + " Win !";
                score_joueur1+=1;
                Score1.innerHTML="Score " + Player1.value + " : "+ score_joueur1;
                i=9;
            }
            else {
                Gagnant.innerHTML="Player1 Win !";
                score_joueur1+=1;
                Score1.innerHTML="Score Player1 : "+ score_joueur1;
                i=9;
            }
        }

        else {
            if(Player2.value !=''){
                Gagnant.innerHTML=Player2.value + " Win !";
                score_joueur2+=1;
                Score2.innerHTML="Score " + Player2.value + " : "+ score_joueur2;
                i=9;}
            else {
                Gagnant.innerHTML="Player2 Win !";
                score_joueur2+=1;
                Score2.innerHTML="Score Player2 : "+ score_joueur2;
                i=9;}
        }

    }

    else if (i==9) {
        Gagnant.innerHTML="Equality!";
    }

}


function checkhorizontal() {
    if (((L1c1.innerHTML != '') && ((L1c1.innerHTML == L1c2.innerHTML) && (L1c2.innerHTML == L1c3.innerHTML)))
        || ((L2c1.innerHTML != '') && ((L2c1.innerHTML == L2c2.innerHTML) && (L2c2.innerHTML == L2c3.innerHTML)))
        || ((L3c1.innerHTML != '') && ((L3c1.innerHTML == L3c2.innerHTML) && (L3c2.innerHTML == L3c3.innerHTML))))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function checkvertical() {
    if (((L1c1.innerHTML != '') && ((L1c1.innerHTML == L2c1.innerHTML) && (L2c1.innerHTML == L3c1.innerHTML)))
        || ((L1c2.innerHTML != '') && ((L1c2.innerHTML == L2c2.innerHTML) && (L2c2.innerHTML == L3c2.innerHTML)))
        || ((L1c3.innerHTML != '') && ((L1c3.innerHTML == L2c3.innerHTML) && (L2c3.innerHTML == L3c3.innerHTML))))
    {
        return true;
    }
    else
    {
        return false;
    }

}



function checkdiagonal() {
    if (((L2c2.innerHTML !=='') && ((L1c1.innerHTML == L2c2.innerHTML)) && (L2c2.innerHTML == L3c3.innerHTML))
        || ((L2c2.innerHTML !=='') && (((L3c1.innerHTML == L2c2.innerHTML)) && (L2c2.innerHTML == L1c3.innerHTML))))
    {
        return true;
    }
    else
    {
        return false;
    }

}
