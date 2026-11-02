// Funções do formulário de ocorrência (fluxo 2).


// Roda quando a pessoa toca em "Enviar ocorrência".
// Devolve true (pode enviar) ou false (tem erro, não envia).
function validarFormulario() {

    // Começa apagando os erros da tentativa anterior.
    limparErros();

    // Guarda se encontramos algum erro. Começa como "não".
    let temErro = false;


    // 1. TIPO DE OCORRÊNCIA
    // querySelector procura com um seletor igual ao do CSS:
    // "o input de name tipo que está marcado". Se nenhum estiver, devolve null.
    let tipoEscolhido = document.querySelector('input[name="tipo"]:checked');

    if (tipoEscolhido === null) {
        document.getElementById("erro-tipo").innerText = "Escolha o tipo de ocorrência.";
        document.getElementById("grupo-tipo").setAttribute("class", "grupo grupo--erro");
        temErro = true;
    }


    // 2. ENDEREÇO
    // .value pega o que foi digitado; .trim() tira os espaços do começo e do fim.
    let endereco = document.getElementById("endereco").value.trim();

    if (endereco.length < 5) {
        document.getElementById("erro-endereco").innerText = "Digite um endereço com rua e número ou um ponto conhecido.";
        document.getElementById("campo-endereco").setAttribute("class", "campo campo--erro");
        // Avisa o leitor de tela que este campo está com erro.
        document.getElementById("endereco").setAttribute("aria-invalid", "true");
        temErro = true;
    }


    // 3. FOTO (opcional)
    // Só confere se a pessoa escolheu algum arquivo.
    let foto = document.getElementById("foto");

    if (foto.files.length > 0) {
        // O tipo de uma imagem sempre começa com "image/" (ex.: image/jpeg, image/png).
        let tipoArquivo = foto.files[0].type;

        if (tipoArquivo.startsWith("image/") === false) {
            document.getElementById("erro-foto").innerText = "Escolha um arquivo de imagem (JPG ou PNG).";
            document.getElementById("campo-foto").setAttribute("class", "campo campo--erro");
            temErro = true;
        }
    }

    // A descrição não precisa ser conferida aqui:
    // o maxlength="200" do HTML já impede passar do limite.


    // 4. RESULTADO
    if (temErro === true) {
        document.getElementById("erro-geral").innerText = "Corrija os campos destacados para enviar.";
        return false;   // cancela o envio
    } else {
        // Estado disabled: trava o botão para evitar dois envios.
        document.getElementById("botao-enviar").disabled = true;
        document.getElementById("botao-enviar").innerText = "Enviando...";
        return true;    // deixa o formulário ir para confirmacao.html
    }
}


// Apaga todas as mensagens e volta os campos ao visual normal.
function limparErros() {
    document.getElementById("erro-tipo").innerText = "";
    document.getElementById("erro-endereco").innerText = "";
    document.getElementById("erro-foto").innerText = "";
    document.getElementById("erro-geral").innerText = "";

    document.getElementById("grupo-tipo").setAttribute("class", "grupo");
    document.getElementById("campo-endereco").setAttribute("class", "campo");
    document.getElementById("campo-foto").setAttribute("class", "campo");

    document.getElementById("endereco").setAttribute("aria-invalid", "false");
}


// Atualiza o contador da descrição a cada letra digitada.
function atualizarContador() {
    let texto = document.getElementById("descricao").value;

    // .length conta quantas letras o texto tem.
    document.getElementById("contador-descricao").innerText = texto.length + "/200";
}


// Preenche o endereço com uma localização de mentira.
// É uma simulação: o protótipo não pede a localização real do celular.
function usarLocalizacao() {
    document.getElementById("endereco").value = "Localização atual (simulada)";
}
