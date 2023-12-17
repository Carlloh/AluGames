function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if(imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        alert(`Dirija-se ao balcão para finalizar a devolução, Sr./Sra. ${nomeUsuario}. Obrigado e até a próxima!`)

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        alert(`Pode recolher o jogo no balcão, Sr./Sra. ${nomeUsuario}. Divirta-se!`);
    }
}
let nomeUsuario = prompt('Digite o seu nome:');