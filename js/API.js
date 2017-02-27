/**
 * Created by WILHELM Nicolas.
 */

function Network(game) {
    this.login ='';
    this.game = game;
};

Network.prototype.subscribe = function (login, password, firstname, lastname) {
    var index = 0, statut = 200;
    $.ajax({
        type: "GET",
        data: null,
        url: "https://wasteyourtime.firebaseio.com/User/.json",
        dataType: "json",
        success: function (result) {
            console.dir(result);

            result.forEach(function (res) {
                if (res.login == login) {
                    statut =  400;
                }
                index += 1;
            })
        },
        complete: function () {
            if(statut == 200) {
                var user = {};
                user.lastname = lastname;
                user.firstname = firstname;
                user.pwd = password;
                user.login = login;
                var userJSON = JSON.stringify(user);

                this.login = login;

                $.ajax({
                    type: "PUT",
                    data: userJSON,
                    url: "https://wasteyourtime.firebaseio.com/User/" + index + "/.json?",
                    dataType: "json",
                    success : function(){
                        window.location='Sommaire.html?login='+login;
                    }
                })
            }
        }
    });
};

Network.prototype.loggin = function (login, password) {
    status = 400;

    $.ajax({
        type: "GET",
        data: null,
        url: "https://wasteyourtime.firebaseio.com/User/.json",
        dataType: "json",
        success: function (result) {
            console.dir(result);
            console.log(result);
            result.forEach(function (res) {

                if (res.login == login && res.pwd == password) {
                    this.login = res.login;
                    status = 200;
                }
            })
        },
        complete: function () {
            if (status == 200) {
                info[0].innerHTML = "You're log";
                console.log(login);
                window.location='Sommaire.html?login='+login;
            }
            else {
                info[0].innerHTML = "Error Try again";

            }
        }
    });
};

Network.prototype.verif = function (login) {
    status = 400;
    $.ajax({
        type: "GET",
        data: null,
        url: "https://wasteyourtime.firebaseio.com/User/.json",
        dataType: "json",
        success: function (result) {
            console.dir(result);
            console.log(result);
            result.forEach(function (res) {

                if (res.login == login) {
                    this.login = res.login;
                    status = 200;
                }
            })
        },
        complete: function () {
            if(status != 200){
                window.location='Login.html';
            }
        }
    });
};

Network.prototype.printScore = function (classement, login) {
    var scoreTab = [];

    $.ajax({
        type: "GET",
        data: null,
        url: "https://wasteyourtime.firebaseio.com/Game/"+this.game+"/Scores/.json",
        dataType: "json",
        success: function (result) {
            result.forEach(function (res) {
                if (login != undefined && res.login == login) {
                    scoreTab.push([res.login ,res.points]);
                }
                else if(login == undefined){
                    scoreTab.push([res.login ,res.points]);
                }
            })
        },
        complete : function(){
            classement.innerHTML = ''
            for(var i = 0; i < scoreTab.length; i++){
                classement.innerHTML += '<div class="row">'
                classement.innerHTML += '<div class="col-sm-4">'+ (i+1) +'</div>'
                classement.innerHTML += '<div class="col-sm-4">'+ scoreTab[i][0] +'</div>'
                classement.innerHTML += '<div class="col-sm-4">'+ scoreTab[i][1] +'</div>'
                classement.innerHTML += '</div>'
            }
        }
    });
};

Network.prototype.setLogin = function(login){
    this.login = login;
    console.log(this.login);
}

Network.prototype.addScore = function(login, points){
    var scoreTab = [], i = 0, j=1;
    var game = this.game;
    if(game=="Memory"){
        j=-1;
    }

    $.ajax({
        type: "GET",
        data: null,
        url: "https://wasteyourtime.firebaseio.com/Game/"+game+"/Scores/.json",
        dataType: "json",
        success: function (result) {
            result.forEach(function (res){
                scoreTab.push([res.login ,res.points]);
            })
        },
        complete : function(){
            scoreTab.push([login ,points]);
            scoreTab = scoreTab.sort(function(a,b) {
                console.log('j :'+j)
                if (a[1] === b[1]) {
                    return 0;
                }
                else {
                    return (a[1] > b[1]) ? (-1) : (1);
                }
            });

            if(game == "Memory"){
                scoreTab.reverse();
            }

            for(var i = 0; i < scoreTab.length; i++){
                var score = {};
                score.login = scoreTab[i][0];
                score.points = scoreTab[i][1];
                var scoreJSON = JSON.stringify(score);

                $.ajax({
                    type: "PUT",
                    data: scoreJSON,
                    url: "https://wasteyourtime.firebaseio.com/Game/"+game+"/Scores/" + i + "/.json?",
                    dataType: "json"
                })
            }
        }
    })
};

function get(param) {
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace(/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );
    if ( param ) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}