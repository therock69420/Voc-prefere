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
        texto: "Ser o único que fala normalmente em uma sala cheia de pessoas que só podem gritar",
        afirmacao: "",
        },
        {
        texto: "Ser o único que só pode sussurrar em uma sala cheia de pessoas que gritam?",
        afirmacao: "",
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
        texto: "Ou todos os animais selvagens usem óculos de sol e chapéus",
        afirmacao: "",
        }
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
        {
        texto: "Ter um assistente virtual que só entende comandos quando você fala como se fosse um personagem de desenho animado",
        afirmacao: "",
        },
        {
        texto: "Ou usar um computador que só funciona quando você dança a macarena",
        afirmacao: "",
        }
        ]
    }   
]

let atual = 0;

function mostraPergunta(){
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent = ""
    mostraAlternativas()
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button")
        botaoAlternativa.textContent = alternativa.texto
        botaoAlternativa.addEventListener("click", function() {
            atual++;
            mostraPergunta()
    })
        caixaAlternativas.appendChild(botaoAlternativa)

}}

mostraPergunta()