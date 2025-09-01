//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

/*
Implemente uma função para adicionar amigos
Desenvolva uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos criada anteriormente.

Tarefas específicas:
Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.

Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.

Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."

Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().

Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.*/

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

