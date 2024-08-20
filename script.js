const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textResultado = document.querySelector(".texto-resultado")

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
        {
        texto: "Ser filho do Elon Musk",
        afirmacao: "Mas será fadado a uma vida simples",
        },
        {
        texto: "Estudar na melhor escola da América Latina ",
        afirmacao: "Mas somente conseguira se comunicar através da dança",
        }
    ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
        {
        texto: "Você prefere que a água dos rios seja feita de suco de laranja",
        afirmacao: "",
        },
        {
        texto: "Ou todos os animais selvagens usem óculos de sol, chapéus e falem coreano",
        afirmacao: "",
        }
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
        {
        texto: "Ter um assistente virtual que só entende comandos quando você fala como se fosse um personagem feminino de desenho animado",
        afirmacao: "",
        },
        {
        texto: "Ou usar um computador que só funciona quando você dança macarena sem camisa",
        afirmacao: "",
        }
        ]
    }   
]

let atual = 0;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado()
        return
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativa)

}}

function respostaSelecionada(alternativa) {
    const afirmacoes = alternativa.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Então, você escolheu...";
    textResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta()