const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é um possível impacto positivo da inteligência artificial no mercado de trabalho?",
        alternativas: [
            {
                texto: "Aumento da produtividade",
                afirmacao: "A IA pode automatizar tarefas repetitivas, permitindo que os trabalhadores se concentrem em atividades mais criativas e estratégicas."
            },
            {
                texto: "Desemprego generalizado",
                afirmacao: "A automação pode substituir alguns empregos, especialmente aqueles que envolvem tarefas simples e repetitivas."
            }

        ]
    },
    {
        enunciado: "Como a inteligência artificial pode influenciar a educação no futuro?",
        alternativas: [
            {
                texto: " Personalização do aprendizado",
                afirmacao: "A IA pode adaptar os materiais e métodos de ensino às necessidades individuais dos alunos, promovendo uma aprendizagem mais eficaz"
            },
            {
                texto: "Redução da interação humana",
                afirmacao: "O uso excessivo de IA pode diminuir a interação direta entre professores e alunos, afetando o desenvolvimento social e emocional"
            }

        ]
    },
    {
        enunciado: "Qual é um possível desafio ético associado ao avanço da inteligência artificial?",
        alternativas: [
            {
                texto: "Privacidade e segurança de dados",
                afirmacao: "A coleta e análise massiva de dados pessoais pela IA pode levar a preocupações sobre privacidade e segurança."
            },
            {
                texto: "Melhorias na tomada de decisões",
                afirmacao: "Embora a IA possa auxiliar na tomada de decisões, há preocupações éticas sobre quem controla os algoritmos e como eles são usados"
            }

        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();