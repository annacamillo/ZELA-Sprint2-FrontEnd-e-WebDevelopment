/* FUNÇÕES DA PÁGINA LOCAIS SEGUROS */

// Exibe o mapa demonstrativo da rota para o Abrigo A.
function selecionarAbrigoA() {
    document.getElementById("imagemMapa").setAttribute("src", "img/mapa-abrigo-a.png");
    document.getElementById("imagemMapa").setAttribute("alt", "Mapa demonstrativo com rota para o Abrigo A em Juiz de Fora");
}

// Exibe o mapa demonstrativo da rota para o Abrigo B.
function selecionarAbrigoB() {
    document.getElementById("imagemMapa").setAttribute("src", "img/mapa-abrigo-b.png");
    document.getElementById("imagemMapa").setAttribute("alt", "Mapa demonstrativo com rota para o Abrigo B em Juiz de Fora");
}

// Valida os campos e mostra o mapa do abrigo escolhido.
function consultarRota() {

    // Recupera os valores informados pelo usuário.
    let endereco = document.getElementById("endereco").value;
    let abrigo = document.getElementById("abrigo").value;

    // Limpa as mensagens de erro e o resultado da consulta anterior.
    document.getElementById("erro-endereco").innerText = "";
    document.getElementById("erro-abrigo").innerText = "";
    document.getElementById("resultadoConsulta").innerText = "";

    // Esconde o mapa anterior até que a nova consulta seja validada.
    document.getElementById("resultadoRotas").setAttribute("class", "rotas rotas--consulta rotas--ocultas");

    // Verifica se o endereço foi preenchido.
    if (endereco.trim() === "") {
        document.getElementById("erro-endereco").innerText = "Informe um endereço para continuar.";

    // Verifica se o usuário selecionou um abrigo.
    } else if (abrigo === "") {
        document.getElementById("erro-abrigo").innerText = "Selecione um abrigo para continuar.";

    // Se o Abrigo A foi escolhido, exibe seu mapa e a confirmação.
    } else if (abrigo === "a") {
        selecionarAbrigoA();
        document.getElementById("resultadoRotas").setAttribute("class", "rotas rotas--consulta");
        document.getElementById("resultadoConsulta").innerText = "Abrigo A selecionado! Confira o mapa demonstrativo abaixo.";

    // Caso contrário, exibe o mapa e a confirmação do Abrigo B.
    } else {
        selecionarAbrigoB();
        document.getElementById("resultadoRotas").setAttribute("class", "rotas rotas--consulta");
        document.getElementById("resultadoConsulta").innerText = "Abrigo B selecionado! Confira o mapa demonstrativo abaixo.";
    }
}