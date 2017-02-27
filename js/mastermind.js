//Game variables
var nbround = 0 ;
var score = 0;
var indispensable = new Network("Mastermind");
var classement = document.getElementById('classement');

window.onload = function (){
    indispensable.verif(get('login'));
    indispensable.setLogin(get('login'));
    console.log(indispensable.login)
    game();
}

function restart(){
    document.getElementById('game').innerHTML = '';
    document.getElementById('infoMastermind').innerHTML = '';
    document.getElementById('submit').style.display = "";
    document.getElementById('current2').style.display ="none";
    nbround = 0;
    cleanElem();
    game();
}

function H(){

    if(document.getElementById('HU').style.display == "none") {
        document.getElementById('HU').style.display = "";
        document.getElementById('HG').style.display = "";
        classement.style.display = "";
    }
    else {
        document.getElementById('HU').style.display = "none";
        document.getElementById('HG').style.display = "none";
        classement.style.display = "none";
        classement.innerHTML ='';
    }
}
function Hg(){
    indispensable.printScore(classement);
}

function Hu(){
    indispensable.printScore(classement, indispensable.login);
}


function cleanElem(){
    console.log("clear");
    if(document.getElementById('zone1').firstChild != null){
        document.getElementById('zone1').firstChild.remove();
    }
    if(document.getElementById('zone2').firstChild != null){
        document.getElementById('zone2').firstChild.remove();
    }
    if(document.getElementById('zone3').firstChild != null){
        document.getElementById('zone3').firstChild.remove();
    }
    if(document.getElementById('zone4').firstChild != null){
        document.getElementById('zone4').firstChild.remove();
    }
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(ev.target.hasChildNodes() == false){
        var nodeCopy = document.getElementById(data).cloneNode(true);
        nodeCopy.id = data + ev.target.id;
        ev.target.appendChild(nodeCopy);
        valid();
    }
}

//Function to know if we can valid the current
function valid(){

    var zone1 = document.getElementById('zone1');
    var zone2 = document.getElementById('zone2');
    var zone3 = document.getElementById('zone3');
    var zone4 = document.getElementById('zone4');

    if(zone1.firstChild != null && zone2.firstChild != null && zone3.firstChild != null && zone4.firstChild != null && nbround != 15){
        console.log("on peut valider");
        document.getElementById('submit').disabled = false ;
        document.getElementById('submit').setAttribute('class', 'btn btn-success') ;
    }
    else {
        console.log("manque 1 ou plusieurs éléments");
        document.getElementById('submit').disabled = true ;
        document.getElementById('submit').setAttribute('class', 'btn btn-danger') ;
    }
}


//Function to identify the color selected
function getColor(point){

    switch(point.getAttribute("data")){
        case "blue":
            console.log("Couleur : "+ point.getAttribute("data"));
            break;
        case "red":
            console.log("Couleur : "+ point.getAttribute("data"));
            break;
        case "yellow":
            console.log("Couleur : "+ point.getAttribute("data"));
            break;
        case "green":
            console.log("Couleur : "+ point.getAttribute("data"));
            break;
        case "violet":
            console.log("Couleur : "+ point.getAttribute("data"));
            break;
        case "orange":
            console.log("Couleur : "+ point.getAttribute("data"));
            break;
    }
}



function game(){

    var id = "";

    for(var i=1;i<5;i++){
        var point = Math.floor(Math.random()*6)+1;

        switch(i){
            case 1 :
                var pt = document.getElementById('pt1');
                break;
            case 2 :
                var pt = document.getElementById('pt2');
                break;
            case 3 :
                var pt = document.getElementById('pt3');
                break;
            case 4 :
                var pt = document.getElementById('pt4');
                break;
        }

        switch(point){
            case 1 :
                id = "blue" ;
                pt.innerHTML = '<img src="'+id+'.png" id="'+id+'computer" data="'+id+'computer" width="30px">';
                break;
            case 2 :
                id = "red" ;
                pt.innerHTML = '<img src="'+id+'.png" id="'+id+'computer" data="'+id+'computer" width="30px">';
                break;
            case 3 :
                id = "green" ;
                pt.innerHTML = '<img src="'+id+'.png" id="'+id+'computer" data="'+id+'computer" width="30px">';
                break;
            case 4 :
                id = "orange" ;
                pt.innerHTML = '<img src="'+id+'.png" id="'+id+'computer" data="'+id+'computer" width="30px">';
                break;
            case 5 :
                id = "yellow" ;
                pt.innerHTML = '<img src="'+id+'.png" id="'+id+'computer" data="'+id+'computer" width="30px">';
                break;
            case 6 :
                id = "violet" ;
                pt.innerHTML = '<img src="'+id+'.png" id="'+id+'computer" data="'+id+'computer" width="30px">';
                break;
        }
    }
}

//Function to submit the current selection
function submit(){

    var point1 = document.getElementById('zone1').firstChild.id.slice(0, -5);
    var point2 = document.getElementById('zone2').firstChild.id.slice(0, -5);
    var point3 = document.getElementById('zone3').firstChild.id.slice(0, -5);
    var point4 = document.getElementById('zone4').firstChild.id.slice(0, -5);
    var tab = document.getElementById('game');

    console.log("point1 = "+point1);
    console.log("point2 = "+point2);
    console.log("point3 = "+point3);
    console.log("point4 = "+point4);

    tab.innerHTML += '<tr id="'+(nbround+1)+'" class="text-center lead"><td id="wcolor">'+(nbround+1)+'</td><td id="test1'+(nbround+1).toString()+'"><img src="'+point1+'.png" id="'+point1+'" data="'+point1+'" width="30px"></td><td id="test2'+(nbround+1).toString()+'"><img src="'+point2+'.png" id="'+point2+'" data="'+point2+'" width="30px"></td><td id="test3'+(nbround+1).toString()+'"><img src="'+point3+'.png" id="'+point3+'" data="'+point3+'" width="30px"></td><td id="test4'+(nbround+1).toString()+'"><img src="'+point4+'.png" id="'+point4+'" data="'+point4+'" width="30px"></td><td id="info'+(nbround+1)+'"></td></tr>';

    nbround++;

    compare();
    /*document.getElementById('zone1').firstChild.remove();
     document.getElementById('zone2').firstChild.remove();
     document.getElementById('zone3').firstChild.remove();
     document.getElementById('zone4').firstChild.remove();*/

    valid();

    cleanElem();


}

//Function to compare the player combination and the solution
function compare(){

    console.log('test1'+nbround.toString());

    var pt1 = document.getElementById('test1'+nbround.toString()).firstChild.getAttribute('data');
    var pt2 = document.getElementById('test2'+nbround.toString()).firstChild.getAttribute('data');
    var pt3 = document.getElementById('test3'+nbround.toString()).firstChild.getAttribute('data');
    var pt4 = document.getElementById('test4'+nbround.toString()).firstChild.getAttribute('data');

    var cp1 = document.getElementById('pt1').firstChild.getAttribute('src').slice(0, -4);
    var cp2 = document.getElementById('pt2').firstChild.getAttribute('src').slice(0, -4);
    var cp3 = document.getElementById('pt3').firstChild.getAttribute('src').slice(0, -4);
    var cp4 = document.getElementById('pt4').firstChild.getAttribute('src').slice(0, -4);

    console.log("pt1 = "+pt1);
    console.log("pt2 = "+pt2);
    console.log("pt3 = "+pt3);
    console.log("pt4 = "+pt4);

    console.log("cp1 = "+cp1);
    console.log("cp2 = "+cp2);
    console.log("cp3 = "+cp3);
    console.log("cp4 = "+cp4);

    var pointRouge = 0; //Bonne couleur et bien placé
    var pointBlanc = 0;  //Bonne couleur et mal placé

    var combinaisonJoueur = new Array(pt1, pt2, pt3, pt4);
    var combinaisonOrdi = new Array(cp1, cp2, cp3, cp4);

    tabMasqueJoueurOK = [false,false,false,false];
    tabMasqueOrdiOK = [false,false,false,false];

    for (i=0; i<4;i++)
    {

        if (combinaisonJoueur[i] ==  combinaisonOrdi[i] && !tabMasqueJoueurOK[i])
        {
            tabMasqueJoueurOK[i] = true;
            tabMasqueOrdiOK[i] = true;
            pointRouge+=1;
        }

    }

    for (i=0; i<4;i++)
    {
        for (j=0; j<4;j++)
        {

            if (combinaisonJoueur[i] ==  combinaisonOrdi[j] && !tabMasqueJoueurOK[i] && !tabMasqueOrdiOK[j] && i != j)
            {

                tabMasqueJoueurOK[i] = true;
                tabMasqueOrdiOK[j] = true;
                pointBlanc+=1;

            }
        }
    }

    if(pointRouge>0){
        var tmp = pointRouge;
        while(tmp!=0){
            console.log("dans le for rouge");
            document.getElementById('info'+nbround.toString()).innerHTML += '<img src="red.png" width="20px">';
            score += 2 ;
            tmp -= 1 ;
        }
    }

    if(pointBlanc>0){
        var tmp = pointBlanc;
        while(tmp!=0){
            console.log("dans le for blanc");
            document.getElementById('info'+nbround.toString()).innerHTML += '<img src="white.png" width="17px">';
            score += 1 ;
            tmp -= 1 ;
        }

    }

    if(nbround!=15 && pointRouge == 4){
        var roundLeft = 15 - nbround ;
        score = score*roundLeft*5 ;
        document.getElementById('infoMastermind').innerHTML = '<center><div class="alert alert-success" id="al" role="alert" text-align="center">You Win</div></center>';
        indispensable.addScore(indispensable.login,score);
        document.getElementById('submit').style.display ="none";
    }
    else if(nbround==15){
        document.getElementById('infoMastermind').innerHTML = '<center><div class="alert alert-danger" id="al" role="alert" text-align="center">You Loose</div><center>';
        document.getElementById('submit').style.display ="none";
        document.getElementById('current2').style.display ="";
    }

    document.getElementById("score").innerHTML = score ;

    console.log("score : "+score);
    console.log("Point rouge : "+pointRouge);
    console.log("Point blanc : "+pointBlanc);

}

function showRules(btn){
    var div = document.getElementById('divrules');
    if(div.getAttribute("hidden")){
        div.removeAttribute("hidden");
    }
    else {
        div.setAttribute("hidden", "true");
    }
}

document.getElementById('calcul_acces').addEventListener('click', function(){
    window.location='Calcul.html?login='+indispensable.login;
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
