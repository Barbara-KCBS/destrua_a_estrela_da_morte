import { Destroyer } from "./elementos/Detroyer.js";
import { TieFighter } from "./elementos/TieFighter.js";

export class Turnos {
    _listaDeTurnos = ["tie-fighter", "canhao de plasma atacando", "corredor livre", "ponto fraco a frente"];
    _nomeDoTurnoAtual;
    _turnoAtual = this._listaDeTurnos[0];
    _metodoDoTurnoAtual;
    _naveInimigaAtual;

    constructor(jogo, navePrincipal) {
        this._jogo = jogo;
        this._navePrincipal = navePrincipal;
    }

    nomeDoTurno(indice) {
        return this._listaDeTurnos[indice];
    }

    nomeDoTurnoAtual() {
        return this._nomeDoTurnoAtual;
    }

    naveInimigaAtual() {
        return this._naveInimigaAtual;
    }

    executarTurnoAtual() {
        if (this._turnoAtual === this._listaDeTurnos[0]) {
            this._tieFighterAtacando();
        }
        if (this._turnoAtual === this._listaDeTurnos[1]) {
            this._canhaoDePlasmaAtacando();
        }
        if (this._turnoAtual === this._listaDeTurnos[2]) {
            this._corredorLivre();
        }
        if (this._turnoAtual === this._listaDeTurnos[3]) {
            this._pontoFracoAhFrente();
        }
    }

    _tieFighterAtacando() {
        this._nomeDoTurnoAtual = this._listaDeTurnos[0];
        this._navePrincipal.mostrarNave();
        this._navePrincipal.aproximarNave(250);

        const tieFighter = new TieFighter(100, true, 0.01);
        this._naveInimigaAtual = tieFighter;
        tieFighter.mostrarNave("nave-inimiga", './img/tie-fighter.png');
        tieFighter.aproximar(10);

        let contador = 0;
        const intervalo = setInterval(() => {
            if (contador === 4) {
                clearInterval(intervalo);
                this._navePrincipal.pararAproximacao(true);
                tieFighter.pararAproximacao(true);
                this._jogo.mostrarOpcoesDeACao();
                this._turnoAtual = this._listaDeTurnos[1];
                return
            }
            contador++;
        }, 1000)
    }

    _canhaoDePlasmaAtacando() {
        this._nomeDoTurnoAtual = this._listaDeTurnos[1];
        this._navePrincipal.aproximarNave(300);
        const destroyer = new Destroyer();
        this._naveInimigaAtual = destroyer;
        destroyer.mostrarNave("nave-inimiga", './img/destroyer.png');
        destroyer.aproximar();

        let contador = 0;
        const intervalo = setInterval(() => {
            if (contador === 4) {
                clearInterval(intervalo);
                this._navePrincipal.pararAproximacao(true);
                destroyer.pararAproximacao(true);
                this._jogo.mostrarOpcoesDeACao();
                this._turnoAtual = this._listaDeTurnos[2];
                return
            }
            contador++;
        }, 1000)
    }

    _corredorLivre() {
        this._nomeDoTurnoAtual = this._listaDeTurnos[2];
        this._naveInimigaAtual = "";
        this._navePrincipal.aproximarNave(300);
        let contador = 0;
        const intervalo = setInterval(() => {
            if (contador === 8) {
                clearInterval(intervalo);
                this._navePrincipal.pararAproximacao(true);
                this._jogo.mostrarOpcoesDeACao();
                this._turnoAtual = this._listaDeTurnos[3];
                return
            }
            contador++;
        }, 1000)
    }


    _pontoFracoAhFrente() {
        this._nomeDoTurnoAtual = this._listaDeTurnos[3];
        this._navePrincipal.aproximarNave(300);
        let contador = 0;
        const intervalo = setInterval(() => {
            if (contador === 4) {
                clearInterval(intervalo);
                this._navePrincipal.pararAproximacao(true);
                this._jogo.mostrarOpcoesDeACao();
                return
            }
            contador++;
        }, 1000)
    }
}
