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

function consultarRota() {

    // Recupera os valores informados pelo usuário.
    let endereco = document.getElementById("endereco").value;
    let abrigo = document.getElementById("abrigo").value;

    // Limpa as mensagens da consulta anterior.
    document.getElementById("erro-endereco").innerText = "";
    document.getElementById("erro-abrigo").innerText = "";
    document.getElementById("resultadoConsulta").innerText = "";

    // Retorna os campos ao estado normal.
    document.getElementById("campo-endereco").setAttribute("class", "campo");
    document.getElementById("campo-abrigo").setAttribute("class", "campo");

    document.getElementById("endereco").setAttribute("aria-invalid", "false");
    document.getElementById("abrigo").setAttribute("aria-invalid", "false");

    // Esconde o mapa até a nova consulta ser validada.
    document.getElementById("resultadoRotas").setAttribute("class", "rotas rotas--consulta rotas--ocultas");

    // Valida o endereço.
    if (endereco.trim().length < 5) {
        document.getElementById("erro-endereco").innerText = "Informe um endereço com pelo menos 5 caracteres.";
        document.getElementById("campo-endereco").setAttribute("class", "campo campo--erro");
        document.getElementById("endereco").setAttribute("aria-invalid", "true");
    }

    // Valida o abrigo separadamente.
    if (abrigo === "") {
        document.getElementById("erro-abrigo").innerText = "Selecione um abrigo para continuar.";
        document.getElementById("campo-abrigo").setAttribute("class", "campo campo--erro");
        document.getElementById("abrigo").setAttribute("aria-invalid", "true");
    }

    // Só mostra o resultado quando os dois campos estão preenchidos.
    if (endereco.trim().length >= 5 && abrigo !== "") {
        if (abrigo === "a") {
            selecionarAbrigoA();
            document.getElementById("resultadoConsulta").innerText = "Abrigo A selecionado! Confira o mapa demonstrativo abaixo.";

        } else {
            selecionarAbrigoB();
            document.getElementById("resultadoConsulta").innerText = "Abrigo B selecionado! Confira o mapa demonstrativo abaixo.";
        }

        // Exibe o mapa após a validação.
        document.getElementById("resultadoRotas").setAttribute("class", "rotas rotas--consulta");
    }
}
