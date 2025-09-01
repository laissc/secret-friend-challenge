let amigos = [];

function limparCampo(){
    //amigo = document.querySelector("input");
    document.getElementById("amigo").value = "";
}

function adicionarAmigo(){
    // captura texto do usuário
    //let amigo = document.querySelector("input").value
    let amigo = document.getElementById("amigo").value;

    if (amigo.length == 0){
        //validação de nome
        alert("Por favor, insira um nome.");
    }else{
        amigos.push(amigo);
        limparCampo();
        exibirLista();
    }
    console.log(amigos);
}

function exibirLista(){
    let lista = document.getElementById("listaAmigos");

    // limpa a lista antes de nova adição para evitar repetição
    lista.innerHTML = "";

    // percorre array de amigos
    for (let i = 0; i < amigos.length; i++){
        // cria novo elemento li
        let item = document.createElement("li");
        item.textContent = amigos[i];

        // adiciona li dentro de lu
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    tamLista = amigos.length;
    // verifica se tem alguém na lista
    if (tamLista == 0) {
        alert("Sua lista está vazia! \nAdicione pelo menos um amigo antes de sortear.");
    }else{
        // gerar um índice aleatório
        let indice = Math.floor(Math.random() * amigos.length);

        // obter amigo da posição indicada pelo índice
        let sorteado = amigos[indice];

        // exibir na tela
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "<li>" + sorteado + "</li>";
        removerSorteado(indice);
        
    }
}

function removerSorteado(indice){
    // a partir da posição indice, remover 1 elemento
    amigos.splice(indice, 1);
    exibirLista()
}