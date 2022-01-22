import { EstrelaDaMorte } from "./EstrelaDaMorte.js";

export class Xwing {

    _pararAproximacao = false;
    _local = $(".principal");
    _elemento = $("<img/>");
    _estrelaDaMorte = new EstrelaDaMorte();
    _iniciouJogo = true;
    _pausarRotacao = false;

    set pararAproximacao(boleano) {
        this._pararAproximacao = boleano;
    }
    
    mostrarNave() {
        this._elemento.attr('src', './img/x-wing.png');
        this._elemento.addClass("x-wing");
        this._local.append(this._elemento);
    }

    aproximarNave(velocidade) {
        if (this._iniciouJogo) {
            this._estrelaDaMorte.mostrarEstrelaDaMorte();
            this._iniciouJogo = false;
        }

        this._pararAproximacao = false;
        let rotacao = 0;
        let rotacaoParaEsquerda = true;

        const intervalo = setInterval(() => {

            this._estrelaDaMorte.alterarDimensao(0.05);

            if (!this._pausarRotacao) {
                if (rotacaoParaEsquerda) {
                    rotacao += 0.5;
                    if (rotacao === 1.5) rotacaoParaEsquerda = false;
                } else {
                    rotacao -= 0.5;
                    if (rotacao === 0) rotacaoParaEsquerda = true;
                }

                this._elemento.css("transform", `rotate(${rotacao}deg)`);
            }


            if (this._pararAproximacao) {
                clearInterval(intervalo);
            }

        }, velocidade)
    }



    desviar(velocidade) {
        this._pausarRotacao = true;
        let rotacao = 0
        let posicaoXwing = 0;
        let xWingParaDireita = true;
        const intervalo = setInterval(() => {

            if (xWingParaDireita) {
                posicaoXwing += 10;
            } else {
                posicaoXwing -= 10;
                if (posicaoXwing === 0) {
                    clearInterval(intervalo);
                    this._pausarRotacao = false;
                }
            }

            if (xWingParaDireita) {
                rotacao -= 0.2;
            } else {
                rotacao += 0.2;
            }

            this._elemento.css("transform", `rotate(${rotacao}deg)`);

            this._elemento.css("left", `${posicaoXwing}px`);

            if (posicaoXwing === 600) {
                xWingParaDireita = false;
            }

        }, velocidade)
    }


    acelerar(velocidade) {
        this._pararAproximacao = false;
        this.aproximarNave(velocidade);
    }

    atirar(pontoFinal) {
        document.querySelector("#laser").play();
        let tiro = $("<div/>");
        tiro.addClass("tiro");
        this._local.append(tiro);
        tiro.css("backgroundColor", "orange");
        tiro.css("boxShadow", "0 0 1em orange");
        tiro.css("bottom", `275px`);
        let posicaoTiro = 275;
        let altura = 20;
        let largura = 5;

        const intervalo = setInterval(() => {
            posicaoTiro += 30;
            altura -= 0.3;
            largura -= 0.5;

            tiro.css("height", `${altura}px`);
            tiro.css("width ", `${largura}px`);
            tiro.css("bottom", `${posicaoTiro}px`);

            if (posicaoTiro > pontoFinal) {
                clearInterval(intervalo);
                tiro.remove();
            }

        }, 20)
    }

    dano() {
        setTimeout(() => {
            let contador = 0;
            let piscar = true;

            const intervalo = setInterval(() => {
                if (piscar) {
                    this._elemento.attr('src', './img/dano.png');
                    piscar = false;
                } else {
                    this._elemento.attr('src', './img/x-wing.png');
                    piscar = true;
                }

                if (contador === 7) {
                    clearInterval(intervalo);
                    return
                }

                contador++;
            }, 50)
        }, 800);
    }
}