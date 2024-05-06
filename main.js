const listaAudios = document.querySelectorAll('.audio');
const listaTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaTeclas.length; i++){
    listaTeclas[i].onclick = function(){
        listaAudios[i].play();
    }
}