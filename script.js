const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "TEXTO DA PERGUNTA 1",
        alternativas: [
            {
                texto: "TEXTO DA ALTERNATIVA 1 DA PERGUNTA 1",
                afirmacao: "AFIRMAÇÃO DA ALTERNATIVA 1 DA PERGUNTA 1"
            },
            {
                texto: "TEXTO DA ALTERNATIVA 2 DA PERGUNTA 1",
                afirmacao: "AFIRMAÇÃO DA ALTERNATIVA 2 DA PERGUNTA 1"
            }

        ]
    },
    {
        enunciado: "TEXTO DA PERGUNTA 2",
        alternativas: [
            {
                texto: "TEXTO DA ALTERNATIVA 1 DA PERGUNTA 2",
                afirmacao: "AFIRMAÇÃO DA ALTERNATIVA 1 DA PERGUNTA 2"
            },
            {
                texto: "TEXTO DA ALTERNATIVA 2 DA PERGUNTA 2",
                afirmacao: "AFIRMAÇÃO DA ALTERNATIVA 2 DA PERGUNTA 2"
            }

        ]
    },
    {
        enunciado: "TEXTO DA PERGUNTA 3",
        alternativas: [
            {
                texto: "TEXTO DA ALTERNATIVA 1 DA PERGUNTA 3",
                afirmacao: "AFIRMAÇÃO DA ALTERNATIVA 1 DA PERGUNTA 3"
            },
            {
                texto: "TEXTO DA ALTERNATIVA 2 DA PERGUNTA 3",
                afirmacao: "AFIRMAÇÃO DA ALTERNATIVA 2 DA PERGUNTA 3"
            }

        ]
    }
];

let atual = 0; //variavel que inicia a pergunta 1 
let perguntaAtual; //variavel que recebe a pergunta atual e mostra o enunciado da pergunta
let historiaFinal =""; //variavel que irá mostrar no final o resumo das afirmativas

function mostraPergunta() {//criando função para mostrar a pergunta
    perguntaAtual = perguntas[atual];//guardando a lista de perguntas dentro da variavel perguntaAtual
    caixaPerguntas.textContent = perguntaAtual.enunciado;//manipulando o conteudo do texto e do enunciado 
    caixaAlternativas.textContent = "";//limpa a texto da caixa alternativas
    mostraAlternativas();//executa a função mostraAlternativa
}

function mostraAlternativas() {//insere os botões alternativa
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");//criando botão
        botaoAlternativas.textContent = alternativa.texto;//salvando a alternativa no botão
        botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativa));
        //adiciona o metodo de escuta do click e aciona a função respostaSelecionada chamando a alternativa
        caixaAlternativas.appendChild(botaoAlternativas);//insere o botão na DIV do html
    }
}

mostraAlternativas(); //executando a função mostrar alternativas

function respostaSelecionada(opcaoSelecionada) {//cria a função paraa guardar a resposta selecionada das afirmações
    const afirmacao = opcaoSelecionada.afirmacao;//cria a constante afirmação para guardar o atributo afirmação
    historiaFinal += afirmacao + " ";// variavel historiaFinal coleta os daos de todas as afirmações
    atual++;//atualiza a variavel "atual" percorrendo todos os itens da lista de perguntas
    mostraPergunta();//executa a função mostraPergunta
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta()