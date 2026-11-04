// Funções do Painel da Defesa Civil.

// Recebe o nível de risco escolhido e atualiza o alerta exibido na página.
function selecionarRisco(risco) {
    let nivel;
    let mensagem;
    let classe;

    // Define o texto, a mensagem e a classe CSS conforme o nível de risco.
    if (risco === "baixo") {
        nivel = "RISCO BAIXO";
        mensagem = "A região apresenta condições de baixo risco. Continue acompanhando os comunicados da Defesa Civil.";
        classe = "gerenciamento__nivel gerenciamento__nivel--baixo";

    } else if (risco === "moderado") {
        nivel = "RISCO MODERADO";
        mensagem = "Atenção: há condições que exigem acompanhamento. Fique atento aos comunicados da Defesa Civil.";
        classe = "gerenciamento__nivel gerenciamento__nivel--moderado";

    } else {
        nivel = "RISCO ALTO";
        mensagem = "Atenção! Esta região apresenta risco elevado na simulação. Acompanhe as orientações oficiais da Defesa Civil.";
        classe = "gerenciamento__nivel gerenciamento__nivel--alto";
    }

    // Atualiza o nível, a mensagem e a cor do alerta na tela.
    document.getElementById("nivelRiscoAutoridade").innerText = nivel;
    document.getElementById("mensagemAlertaAutoridade").innerText = mensagem;
    document.getElementById("nivelRiscoAutoridade").setAttribute("class", classe);
}

// Mostra na página a região escolhida no campo de seleção.
function atualizarRegiao() {
    // Lê o valor selecionado pela autoridade.
    let regiao = document.getElementById("regiaoMonitorada").value;

    // Monta a mensagem juntando um texto fixo ao nome da região.
    let mensagem = "Região monitorada: " + regiao;

    // Atualiza a mensagem exibida na página.
    document.getElementById("mensagemRegiao").innerText = mensagem;
}

// Alterna o status de uma ocorrência entre pendente e verificada.
function verificarOcorrencia(numero) {

    // Localiza o status, o botão e o card da ocorrência.
    let status = document.getElementById("statusOcorrencia" + numero);
    let botao = document.getElementById("botaoOcorrencia" + numero);
    let card = document.getElementById("cardOcorrencia" + numero);

    // Se estiver pendente, marca como verificada.
    if (status.innerText === "Pendente") {
        status.innerText = "Verificada";
        status.setAttribute("class", "ocorrencias__status ocorrencias__status--verificada");
        botao.innerText = "Desfazer verificação";

        // Aplica o retorno visual de sucesso da Frente C.
        card.setAttribute("class", "ocorrencias__item ocorrencias__item--verificada");

    // Se já estiver verificada, retorna ao estado pendente.
    } else {
        status.innerText = "Pendente";
        status.setAttribute("class", "ocorrencias__status ocorrencias__status--pendente");
        botao.innerText = "Marcar como verificada";

        // Retorna o card à aparência original.
        card.setAttribute("class", "ocorrencias__item");
    }
}

