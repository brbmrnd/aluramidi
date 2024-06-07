const listaAudios = document.querySelectorAll('.audio');
const listaTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i];

    //ativa a tecla com o click
    tecla.onclick = function () {
        listaAudios[i].play();
    }
    //ativa a tecla com o enter/barra de espaço
    tecla.onkeydown = function (eventKey) {
        if (eventKey.code === 'Enter' || eventKey.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    //remove o estado ativo da tecla ao soltar os botões
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
