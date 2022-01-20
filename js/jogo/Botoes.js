import { Xwing } from "./elementos/Xwing.js";
import { Jogador } from "./Jogador.js";
import { Turnos } from "./Turnos.js";
import { Visualizacao } from "./Visualizacao.js";
import { Historico } from "./Historico.js";

export class Botoes {

    _xWingNave = new Xwing();
    _jogador = new Jogador();
    _visualizacao = new Visualizacao(this._xWingNave, this._jogador);
    _turnos = new Turnos(this._visualizacao, this._xWingNave);
    _historio = new Historico();


    entrar() {

        document.querySelector("#trilha").play();
        if ($("#input-nome").val() === "") {
            return
        }
        $(".entrada-do-jogo").fadeOut(1000);
        this._historio.mostrarHistoricoDeJogadores();

    }


    iniciarJogo() {
        $(".botao-iniciar-jogo").addClass("esconder");

        $(".historico-de-jogadores").fadeOut(1500, () => {
            $("tbody").find("tr").remove();
        });

        setTimeout(() => {
            this._visualizacao.mostrarPainelDePontos(true);
            this._turnos.executarTurnoAtual();
        }, 2500);

    }


    acaoDesviar() {
        this._visualizacao.esconderOpcoesDeAcao();

        if (this._turnos.nomeDoTurnoAtual() != this._turnos.nomeDoTurno(0)) {
            $(".pontos-do-jogador").text(this._jogador.subtrairPontos());
            if (this._turnos.naveInimigaAtual() != "") {
                this._xWingNave.dano();
            }
        }
        this._xWingNave.desviar(20);

        if (this._jogador.capturarPontos() === 0 || this._turnos.nomeDoTurnoAtual() === this._turnos.nomeDoTurno(3)) {
            this._visualizacao.jogadorPerdeu();
            return
        }

        if (this._turnos.naveInimigaAtual() != "") {
            this._turnos.naveInimigaAtual().pararAproximacao(false);
            this._turnos.naveInimigaAtual().aproximar(5);
        }
        this._turnos.executarTurnoAtual();
    }


    acaoAtirar() {

        this._visualizacao.esconderOpcoesDeAcao();

        if (this._turnos.nomeDoTurnoAtual() === this._turnos.nomeDoTurno(0) || this._turnos.nomeDoTurnoAtual() === this._turnos.nomeDoTurno(2)) {
            $(".pontos-do-jogador").text(this._jogador.subtrairPontos());
            if (this._turnos.naveInimigaAtual() != "") {
                this._xWingNave.dano();
            }
        }

        if (this._turnos.nomeDoTurnoAtual() === this._turnos.nomeDoTurno(1)) {
            this._turnos.naveInimigaAtual().permitirAtirar(false);
            this._turnos.naveInimigaAtual().dano();
            this._xWingNave.atirar(500);
        } else {
            this._xWingNave.atirar(700);
        }

        if (this._jogador.capturarPontos() === 0) {
            this._visualizacao.jogadorPerdeu();
            return
        }

        if (this._turnos.nomeDoTurnoAtual() === this._turnos.nomeDoTurno(3)) {
            this._visualizacao.jogadorGanhou();
            return
        }

        this._xWingNave.aproximarNave(300);

        if (this._turnos.naveInimigaAtual() != "") {
            this._turnos.naveInimigaAtual().pararAproximacao(false);
            this._turnos.naveInimigaAtual().aproximar(5);
        }
        this._turnos.executarTurnoAtual();
    }



    acaoAcelerar() {
        this._visualizacao.esconderOpcoesDeAcao();

        if (this._turnos.nomeDoTurnoAtual() != this._turnos.nomeDoTurno(2)) {
            this._xWingNave.acelerar(100);
            $(".pontos-do-jogador").text(this._jogador.subtrairPontos());
            if (this._turnos.naveInimigaAtual() != "") {
                this._xWingNave.dano();
            }

        } else {
            this._xWingNave.acelerar(30);
        }
        if (this._jogador.capturarPontos() === 0 || this._turnos.nomeDoTurnoAtual() === this._turnos.nomeDoTurno(3)) {
            this._visualizacao.jogadorPerdeu();
            return
        }

        if (this._turnos.naveInimigaAtual() != "") {
            this._turnos.naveInimigaAtual().pararAproximacao(false);
            this._turnos.naveInimigaAtual().aproximar(5);
        }
        this._turnos.executarTurnoAtual();
    }


    reiniciarJogo() {
        document.location.reload();
    }
}
