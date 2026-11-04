# Prompts de IA utilizados — ZELA Sprint 2

**Disciplinas:** Front-End Design e Web Development  
**Ferramenta:** ChatGPT (OpenAI), em conversas que já tinham o contexto do Challenge ZELA e das sprints anteriores.

Os pedidos abaixo estão organizados por etapa e seguem aproximadamente a ordem do desenvolvimento. Alguns trechos foram abreviados e pedidos semelhantes foram agrupados. **Não é uma transcrição completa:** deixei de fora confirmações, mensagens de teste e pequenos ajustes repetitivos. Depois de cada etapa, explico como a IA ajudou e o que fizemos com as sugestões.

---

## 1. Planejamento e reaproveitamento do projeto

> “Chat, precisamos começar a Sprint 2 de Front End. [...] Estou te mandando dois arquivos, um com componentes da primeira sprint de front end e o outro a Sprint 2 de Web Development que fizemos. [...] Quero que você avalie se podemos aproveitar algo e como aproveitar, e montar um documento meio de passo a passo do que precisa ser feito.”

> “Mas dentro desse arquivo você já pensou o que podemos fazer para os fluxos e tudo que deve ser feito para esse projeto?”

**O que a IA sugeriu:** reaproveitar o projeto de Web Development em vez de começar outro site do zero. Organizou um planejamento com três fluxos: consultar alerta/local seguro, registrar ocorrência e gerenciar alertas/ocorrências na Defesa Civil, distribuídos em cinco páginas.

**O que fizemos:** decidimos integrar as entregas das duas disciplinas, preservando a identidade visual do ZELA e usando o planejamento como roteiro, com adaptações ao longo do desenvolvimento.

---

## 2. Integração das quatro frentes

**Pedido consolidado:** conferir os arquivos produzidos pelas colegas nas Frentes A (botões), B (campos), C (cards e feedbacks) e D (formulário), comparando-os com o código existente para aproveitar os componentes sem criar conflitos ou duplicações.

> “Esse é o arquivo da frente A que faltava.”

> “Vamos seguir para a adaptação da Frente C.”

**O que a IA fez:** comparou os materiais enviados com `style.css`, `componentes.css` e os HTMLs. Orientou a reaproveitar classes já existentes, incorporar correções específicas e adaptar os componentes ao projeto unificado, em vez de copiar todos os CSS separadamente.

**O que fizemos:** integramos o formulário e a confirmação da Frente D, os campos da Frente B, os botões da Frente A e os cards/retornos da Frente C. Os componentes foram elaborados pelas colegas; a integração foi feita e testada no projeto.

---

## 3. Construção e ajustes de Locais Seguros

> “Acho que está muito repetitivo o título de buscar local e depois no mapa tem ‘Abrigos seguros’ [...]. Acho que seria melhor se fosse um card único com a seleção e o mapa, o que acha?”

> “Acho que realmente faria sentido mostrar o resultado só quando clica-se em consultar rota.”

> “Mas não seria mais fácil, em vez de colocar isso no CSS, eu apagar do meu `local-seguro.html`?”

**O que a IA fez:** orientou a unir a busca e o mapa em um único card, mostrar o resultado apenas após uma consulta válida, retirar informações duplicadas e adaptar o `morador.js` para alternar as imagens dos abrigos A e B.

**O que fizemos:** reorganizamos `local-seguro.html` com base nos testes visuais, mantivemos a consulta demonstrativa e simplificamos o HTML, CSS e JavaScript conforme o novo layout.

---

## 4. Reorganização da página inicial

> “Mas nós precisamos ter três fluxos, correto? E o terceiro está aonde?”

> “Então vamos fazer essa mudança no dashboard.”

> “Acho que precisamos mudar o nome dessa aba, não sei se faz mais sentido ela se chamar Morador.”

**O que a IA sugeriu:** evitar que a página inicial repetisse a consulta completa de abrigos. A proposta foi manter o alerta regional e apresentar três cards de acesso: **Locais Seguros**, **Registrar ocorrência** e **Defesa Civil**.

**O que fizemos:** substituímos a área antiga do mapa pelos três cards, preservamos o alerta e renomeamos a página para **Início**, com o título **Bem-vindo ao ZELA**. O painel da Defesa Civil continuou sendo o terceiro fluxo, voltado a outro perfil de usuário.

---

## 5. Validações e retornos dos componentes

> “Ele só aparece um lugar por vez. Se eu preencher o endereço e tentar enviar, aí sim ele aparece o vermelho no abrigo. Isso já estava de antes, mas esqueci de falar.”

**O que a IA explicou:** o `if / else if` fazia a validação parar no primeiro erro. Sugeriu dois `if` independentes, estados visuais com `.campo--erro` e `aria-invalid`, além de verificar o mínimo de cinco caracteres no endereço e esconder o mapa após consultas inválidas.

**O que fizemos:** passamos a mostrar os dois erros quando necessário e testamos os cenários de validação. Também adaptamos o retorno de sucesso da Frente C para destacar as ocorrências verificadas na Defesa Civil e acrescentamos um destaque laranja ao card de risco moderado.

---

## 6. Revisão do código e padronização visual

> “Acho que antes de fazermos algum commit seria interessante revisar se está tudo certo e fazer uma revisão na estrutura do CSS, JS e HTML.”

> “Ficou ótimo, já fiz essas mudanças, só acho que antes do commit podemos apagar o que não tem mais função no CSS e/ou no JS.”

> “Vamos deixar o README por último, vamos focar em terminar o código.”

**O que a IA fez:** analisou os ZIPs atualizados, identificou funções e estilos antigos, orientou a simplificação do `morador.js` e ajudou a padronizar os botões da página Início e da Defesa Civil com o componente da Frente A. Também explicou quais classes poderiam ser apagadas e quais deveriam permanecer para os estados dos componentes.

**O que fizemos:** aplicamos as mudanças no VS Code, testando após cada alteração, e acrescentamos comentários explicativos ao JavaScript. Mantivemos o README para depois da finalização do código.

---

## 7. Responsividade e acessibilidade

> “Testei nas três resoluções e funcionou o Início e Locais Seguros, no 390 as outras duas páginas não ficaram boas.”

> “Ficou ótimo, agora falta a Defesa Civil.”

**O que a IA sugeriu:** regras `@media` para reorganizar cards, formulários, botões e grids em telas menores. Depois orientou testes com teclado, `focus-visible`, `aria-live` e estados `default`, `hover`, `focus`, `active`, `disabled` e `error`.

**O que fizemos:** ajustamos as cinco páginas e testamos em **390px, 768px e 1024px**. Também verificamos a navegação com Tab/Enter, as mensagens de erro e os estados dos botões. O `disabled` foi testado temporariamente e retirado para não bloquear o envio do formulário.

---

## 8. Testes dos fluxos e inspeção final

**Pedido consolidado:** testar os três fluxos do início ao fim e revisar os arquivos antes do commit, procurando problemas reais de HTML, CSS, JavaScript e acessibilidade, sem reescrever o que já funcionava.

**O que a IA fez:** organizou roteiros de testes, apontou pequenas correções nos textos do formulário, na identificação da página de confirmação e nas atualizações acessíveis da Defesa Civil. Também orientou a limpeza final de estilos e o uso da branch `sprint2-integracao-frontend` no GitHub Desktop.

**O que fizemos:** testamos as consultas aos abrigos, o registro e a confirmação de ocorrência e o gerenciamento de alertas e ocorrências. Os **três fluxos funcionaram nos testes realizados**. As alterações foram preparadas para registro por commit e `Push origin`, sem merge com a `main` nesta etapa.

---

## Resumo: o que foi do grupo e o que veio da IA

| Do grupo | Apoio da IA |
|---|---|
| Escopo do ZELA, identidade visual e projeto-base de Web Development | Planejamento para integrar as duas disciplinas |
| Componentes produzidos nas Frentes A, B, C e D | Orientação para reaproveitamento e integração |
| Decisões de layout, como juntar busca e mapa e transformar o Dashboard em Início | Sugestões de HTML, CSS e JavaScript para implementar essas decisões |
| Alterações no VS Code e testes nas páginas | Explicações de lógica, validações, responsividade e acessibilidade |
| Organização do repositório e execução do versionamento | Revisão pré-commit e orientações para GitHub Desktop |

**Observação:** a IA foi usada como apoio para planejar, compreender e revisar o código. Este arquivo registra os principais pedidos e aprendizados, e não todas as mensagens trocadas. O README será preparado separadamente, após a finalização do código.
