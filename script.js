const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é uma menina ou um menino?",
        alternativas: [
            "Eu sou uma menina",
            "Eu sou um menino"
        ]
    },

    {
        enunciado: "Você é melhor usando",
        alternativas: [
            "Uma espada",
            "Um arco e flecha"
        ]
    },

    {
        enunciado: "Você vai em direção da caverna ou do bosque escuro?",
        alternativas: [
            "Bosque escuro",
            "Caverna"
        ]
    },

    {
        enunciado: "Você vê dois buracos, em qual você pula?",
        alternativas: [
            "Buraco 1",
            "Buraco 2"
        ]
    },

    {
        enunciado: "…",
        alternativas: [
            "######",
            "#### ## ##### ## #######"
        ]
    },
];

let atual = 0;
let perguntaAtual;
function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();