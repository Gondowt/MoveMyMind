var indispensable = new Network();

var mastermind = document.getElementById('Mastermind');
var morpion = document.getElementById('Morpion');
var memory = document.getElementById('Memory');
var calcul = document.getElementById('Calcul');

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

window.onload = function (){
    indispensable.verif(get('login'));
    indispensable.setLogin(get('login'));
}

mastermind.addEventListener('click', function(){
    window.location='Mastermind.html?login='+indispensable.login;
})

morpion.addEventListener('click', function(){
    window.location='Morpion.html?login='+indispensable.login;
})

memory.addEventListener('click', function(){
    window.location='Memory.html?login='+indispensable.login;
})

calcul.addEventListener('click', function(){
    window.location='Calcul.html?login='+indispensable.login;
})
