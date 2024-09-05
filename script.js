const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual estilo de rock você prefere?",
        alternativas: [
            {
                texto: "Rock clássico (Led Zeppelin, The Rolling Stones)",
                afirmacao: "Você prefere o rock clássico, com suas raízes profundas e riffs marcantes que ajudaram a moldar o gênero."
            },
            {
                texto: "Rock alternativo (Radiohead, Nirvana)",
                afirmacao: "Você aprecia o rock alternativo, com suas letras introspectivas e sonoridade experimental."
            }
           
        ]
    },
    {
        enunciado: "Qual elemento de uma música de rock mais te atrai?",
        alternativas: [
            {
                texto: "Riffs de guitarra",
                afirmacao: "Os riffs de guitarra são o que mais chamam sua atenção, levando o ritmo e a energia da música a outro nível."
            },
            {
                texto: "Letras profundas",
                afirmacao: "Você gosta de músicas com letras profundas, que contam histórias ou exploram temas emocionais e existenciais."
            }
           
        ]
    },
    {
        enunciado: "Qual tipo de vocal te agrada mais em uma música de rock?",
        alternativas: [
            {
                texto: "Vocal agressivo e potente (System of a Down, Metallica)",
                afirmacao:"Você prefere um vocal agressivo e potente, que transmite intensidade e emoção."
            },
            {
                texto: "Vocal suave e melódico (Pink Floyd, Pearl Jam)",
                afirmacao:"Você gosta de um vocal suave e melódico, que proporciona uma experiência mais emocional e atmosférica."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
   if (atual >= perguntas.length) {
      mostraResultado () ;
     return;
   }
     perguntaAtual = perguntas [atuall;
     caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.textContent = "";
     textoResultado.textContent = "";
     mostraAlternativas ();
    }

function mostraAlternativas() {
     for (const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativa = document.createElement ("button") ;
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener ("click", ()=>
respostaSelecionada(alternativa)) ;
    caixaAlternativas.appendChild(botaoAlternativa) ;
    }
}
function respostaSelecionada(opcaoSelecionada) {
     const afirmacao = opcaoSelecionada.afirmacao;
     historiaFinal += afirmacao + " ";
     atual++
     mostraPergunta() ;
}

function mostraResultado() {
     caixaPerguntas.textContent = "Resumindo...";
     textoResultado.textContent = historiaFinal;
     caixaAlternativas.textContent = "";
}
mostraPergunta() ;