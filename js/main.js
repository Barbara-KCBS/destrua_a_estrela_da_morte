
import { Botao } from "./jogo/Botao.js";

const botao = new Botao();


$("#botao-entrar").on("click", () => {
    botao.entrar();
});


$(".botao-iniciar-jogo").on("click", () => {
    botao.iniciarJogo();
});


$(".botao-desviar").on("click", () => {
    botao.acaoDesviar();
});


$(".botao-atirar").on("click", () => {
    botao.acaoAtirar();
});


$(".botao-acelerar").on("click", () => {
    botao.acaoAcelerar();
});


$(".botao-reiniciar-jogo").on("click", () => {
    botao.reiniciarJogo();
});






















