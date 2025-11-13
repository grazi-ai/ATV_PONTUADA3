function toggleClasse(element) {

    /*quando o card fecha a imagem diminui tbm*/
    const imagensZoom = document.querySelectorAll('.container-fig img.zoom-ativo');
    imagensZoom.forEach(img => {
        img.classList.remove('zoom-ativo');
    });

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if (card !== element) {
            card.classList.remove('card-serie-select');
            card.classList.add('card-serie');

            const conteudo = card.querySelector('.conteudo');
            if (conteudo) {
                conteudo.classList.remove('visivel');
                conteudo.classList.add('escondido');
            }
        }
    });


    element.classList.toggle('card-serie');
    element.classList.toggle('card-serie-select');

    const conteudoInterno = element.querySelector('.conteudo');
    if (conteudoInterno) {
        const isVisivel = conteudoInterno.classList.contains('visivel');

        if (isVisivel) {
            conteudoInterno.classList.remove('visivel');
            conteudoInterno.classList.add('escondido');
        } else {
            conteudoInterno.classList.remove('escondido');
            conteudoInterno.classList.add('visivel');
        }
    }
}

function toggleZoom(imgElement) {
    imgElement.classList.toggle('zoom-ativo');

}

