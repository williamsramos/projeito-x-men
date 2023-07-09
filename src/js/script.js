const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        const idSelecionado = personagem.attributes.id.value;

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        //scroll quando seleciona personagem no mobile

        /* 
            OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:
    
            - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele 
    
            - retirar a classe selecionado do personagem que está selecionado
        */
        removerSelecaoDoPersonagem();

        personagem.classList.add("selecionado");

        /* 
            OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, trocar a imagem e nome do personagem grande
                - alterar a imagem do jogador 1
                - alterar o nome do jogador 1
        */

        alterarImagemPersonagemSelecionado(idSelecionado);

        alterarNomePersonagemSelecionado(personagem);
        
        alterarDescricaoPersonagem(personagem);

    });
});

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(idSelecionado) {
    const imagemPersonagemMaior = document.querySelector('.personagem-grande');
    imagemPersonagemMaior.src = `./src/img/card-${idSelecionado}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");
}
