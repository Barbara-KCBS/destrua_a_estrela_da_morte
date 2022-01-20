import { Historico } from "./Historico.js";

export class Visualizacao {
    _statusDaMissao = ["FALHOU", "CUMPRIDA"];
    _dados = new Historico();

    constructor(navePrincipal, jogador) {
        this._navePrincipal = navePrincipal;
        this._jogador = jogador;
    }

    mostrarOpcoesDeACao() {
        $(".botoes").removeClass("esconder");
    }

    esconderOpcoesDeAcao() {
        $(".botoes").addClass("esconder");
    }

    mostrarPainelDePontos(boleano) {
        if (boleano) {
            this._jogador.adicionarNome($("#input-nome").val().toUpperCase())
            $(".nome-do-jogador").text(this._jogador.capturarNome());
            $(".pontos-do-jogador").text(this._jogador.capturarPontos());
            $(".painel-de-pontos").removeClass("esconder");
        } else {
            $(".painel-de-pontos").addClass("esconder");
        }
    }

    jogadorPerdeu() {
        this._navePrincipal.pararAproximacao(true);
        $("body").find("img").remove();
        $(".painel-de-pontos").addClass("esconder");
        $(".perdeu").fadeIn(2000, () => {
            $(".perdeu").removeClass("esconder");
        })
        this._jogador.alterarStatusDaMissao(this._statusDaMissao[0]);
        setTimeout(() => {
            $(".botao-reiniciar-jogo").removeClass("esconder");
            this._dados.salvarDadosDoJogador(this._jogador);
        }, 3000);
    }

    jogadorGanhou() {

        setTimeout(() => {
            this._navePrincipal.pararAproximacao(true);
            $("body").find("img").remove();
            $(".painel-de-pontos").addClass("esconder");

            let video = $("<video/>");
            video.attr("src", "./video/destruindo-estrela-da-morte.mp4");
            video.addClass("video");
            $(".principal").append(video);
            document.querySelector("video").play();
        }, 1500)

        setTimeout(() => {
            $("body").find("video").remove();
            $(".ganhou").fadeIn(2000, () => {
                $(".ganhou").removeClass("esconder");
            })
            this._jogador.alterarStatusDaMissao(this._statusDaMissao[1]);
            setTimeout(() => {
                $(".botao-reiniciar-jogo").removeClass("esconder");
                this._dados.salvarDadosDoJogador(this._jogador);
            }, 2000);

        }, 11500);
    }
}