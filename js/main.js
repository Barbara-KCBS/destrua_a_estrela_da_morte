
import { Botao } from "./jogo/Botao.js";

const botoes = new Botao();


$("#botao-entrar").on("click", () => {
    botoes.entrar();
});


$(".botao-iniciar-jogo").on("click", () => {
    botoes.iniciarJogo();
});


$(".botao-desviar").on("click", () => {
    botoes.acaoDesviar();
});


$(".botao-atirar").on("click", () => {
    botoes.acaoAtirar();
});


$(".botao-acelerar").on("click", () => {
    botoes.acaoAcelerar();
});


$(".botao-reiniciar-jogo").on("click", () => {
    botoes.reiniciarJogo();
});

$(".pagina-direita").on("click", () => {
    botoes.paginaParaDireita();
})






















