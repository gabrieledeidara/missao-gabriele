const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    //primeiro objeto dessa lista

    {
        enunciado: "Qual a melhor maneira de combater o desmatamento?",
        alternativas:
            ["reflorestamento de áreas degradadas",
                "implementação de leis mais rigorosas"]
    },

    //segundo objeto da lista de perguntas

    {
        enunciado: "Como podemos combater a desigualdade social?",
        alternativas:
            ["implementar programas de educação e formação social acessivel a todos",
                "politicas de redistribuição de renda e oportunidades"]
    },

];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {//criando função para mostrar a pergunta
    perguntaAtual = perguntas[atual];//guardando a lista de perguntas dentro da variavel perguntaAtual
    caixaPerguntas.textContent = perguntaAtual.enunciado;//manipulando o conteudo do texto e do enunciado 
    caixaAlternativas.textContent = "";//limpa a texto da caixa alternativas
    mostraAlternativas();//executa a função mostraAlternativa
}
mostraPergunta();//executando a função mmostrar pergunta

function mostraAlternativas() {//insere os botões alternativa
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");//criando botão
        botaoAlternativas.textContent = alternativa;//salvando a alternativa no botão
        caixaAlternativas.appendChild(botaoAlternativas);//insere o botão na DIV do html
    }
}

mostraAlternativas(); //executando a função mostrar alternativas
