var btnSobre = document.getElementById('btn-sobre');
var btnProjetos = document.getElementById('btn-projeto');

var textoSobre = document.getElementById('textoSobre');
var textoProjetos = document.getElementById('textoProjeto');

function mostrarProjeto(){
    btnProjetos.style.background = 'black';
    btnProjetos.style.setProperty('color','#fff', 'important');

    btnSobre.style.setProperty('background-color','white', 'important');
    btnSobre.style.setProperty('color','black', 'important');

    textoSobre.style.display = 'none';
    textoProjetos.style.display = 'block';
}

function mostrarSobre(){
    btnSobre.style.background = 'black';
    btnSobre.style.color = '#ffffff';

    btnProjetos.style.setProperty('background-color','white', 'important');
    btnProjetos.style.setProperty('color','black', 'important');

    textoProjetos.style.display = 'none';
    textoSobre.style.display = 'block';
}