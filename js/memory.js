var imageclicked = "";
var imageCid = "";
var count = 0;
var tmp = new Array("image1.png", "image2.png", "image3.png", "image4.png", "image5.png", "image6.png", "image7.png", "image8.png",
    "image9.png", "image10.png", "image11.png", "image12.png", "image13.png", "image14.png", "image15.png", "image16.png");
var black = document.createElement('img');
black.src = "black.png";
var pics = tmp.concat(tmp);

var restart=  document.getElementById('restart');
var indispensable = new Network("Memory");

var H = document.getElementById('H');
var Hu = document.getElementById('HU');
var Hg = document.getElementById('HG');
var classement = document.getElementById('classement');

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


function game(){
    var tableau = document.getElementById('plateau');
    var tr1 = document.getElementById('line1') ;
    var tr2 = document.getElementById('line2') ;
    var tr3 = document.getElementById('line3') ;
    var tr4 = document.getElementById('line4') ;
    var black = document.createElement('img');
    black.src = "black.png";

    tr1.innerHTML = '';
    tr2.innerHTML = '';
    tr3.innerHTML = '';
    tr4.innerHTML = '';

    var tmp = new Array("image1.png", "image2.png", "image3.png", "image4.png", "image5.png", "image6.png", "image7.png", "image8.png",
        "image9.png", "image10.png", "image11.png", "image12.png", "image13.png", "image14.png", "image15.png", "image16.png");

    var pics = tmp.concat(tmp);

    shuffle(pics);
    //console.log(pics);

    for(var i=0;i<8;i++){
        tr1.innerHTML += '<td><img src="black.png" data="" id="l1'+i+'" width="80px" class="black" onclick="play(this)"></td>'
        tr2.innerHTML += '<td><img src="black.png" data="" id="l2'+i+'" width="80px" class="black" onclick="play(this)"></td>'
        tr3.innerHTML += '<td><img src="black.png" data="" id="l3'+i+'" width="80px" class="black" onclick="play(this)"></td>'
        tr4.innerHTML += '<td><img src="black.png" data="" id="l4'+i+'" width="80px" class="black" onclick="play(this)"></td>'
    }

    var compteur = 0;

    for(var a=1;a<5;a++){
        for(var b=0;b<8;b++){
            var image = document.getElementById('l'+a.toString()+b.toString());
            image.setAttribute("data", pics[compteur]);
            compteur += 1 ;
        }
    }

}

window.onload = function init(){
    indispensable.verif(get('login'));
    indispensable.setLogin(get('login'));
    game();
}


restart.addEventListener('click', function(){
    game();
    count = 0;
    imageclicked = "";
    imageCid = "";
    document.getElementById('coun').innerHTML = count;

})

//Fonction qui retourne la carte quand on clique dessus
function play(image){

    if(imageclicked == ""){
        image.src = image.getAttribute("data") ;
        imageclicked = image.getAttribute("data");
        imageCid = image.id ;
    }

    else{
        image.src = image.getAttribute("data") ;
        if(imageclicked == image.getAttribute("data") && imageCid != image.getAttribute("id")){
            

            var blck = document.getElementsByClassName("black");
            console.log(blck.length);
            if(blck.length == 2){
                indispensable.addScore(indispensable.login, count);
            }

            

            document.getElementById(imageCid).parentElement.innerHTML = '<img src="'+imageclicked+'" id="'+imageCid+'" width="80px">' ;
            image.parentElement.innerHTML = '<img src="'+image.getAttribute("data")+'" id="'+image.id+'" width="80px">' ;
            image.remove();

            imageclicked = "";
        }
        else{
            count += 1 ;
            document.getElementById('coun').innerHTML = count;
            setTimeout(function() {
                image.src = "black.png" ;
                document.getElementById(imageCid).src = "black.png";
                imageclicked = "";
            }, 200);
        }
    }   

}

//Fonction pour mélanger un Array
function shuffle(a)
{
    var j = 0;
    var valI = '';
    var valJ = valI;
    var l = a.length - 1;
    while(l > -1)
    {
        j = Math.floor(Math.random() * l);
        valI = a[l];
        valJ = a[j];
        a[l] = valJ;
        a[j] = valI;
        l = l - 1;
    }
    return a;
}

document.getElementById('calcul_acces').addEventListener('click', function(){
    window.location='Calcul.html?login='+indispensable.login;
})
document.getElementById('morpion_acces').addEventListener('click', function(){
    window.location='Morpion.html?login='+indispensable.login;
})
document.getElementById('mastermind_acces').addEventListener('click', function(){
    window.location='Mastermind.html?login='+indispensable.login;
})

document.getElementById('logout').addEventListener('click', function(){
    window.location='Login.html';
})

