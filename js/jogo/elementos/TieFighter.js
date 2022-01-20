export class TieFighter {
    _local = $(".principal");
    _elemento = $("<img/>");
    _dimensao = 0.06;
    _pararAproximacao = false;
    _deslocamentoParaEsquerda = 0;
    _rotacao = 0;

    constructor(top, desviar, novaDimensao) {
        this._top = top;
        this._desviar = desviar;
        this._novaDimensao = novaDimensao;
    }

    mostrarNave(classe, img) {
        this._elemento.attr('src', img);
        this._elemento.addClass(classe);
        this._local.append(this._elemento);
    }

    pararAproximacao(boleano) {
        this._pararAproximacao = boleano;
    }

    aproximar(velocidade) {
        this._pararAproximacao = false;
        const intervalo = setInterval(() => {

            this._dimensao += this._novaDimensao;
            this._elemento.css("width", `${this._dimensao}%`);

            this._top += 0.5;
            this._elemento.css("top", `${this._top}px`);

            if (this._pararAproximacao) {
                clearInterval(intervalo);
            }

            if (this._top === 400) {
                this._atirar(450);
            }

            if (this._top >= 400) {
                this._desviarNave();
            }

            if (this._top === 1000) {
                this.pararAproximacao(true);
                this._elemento.remove();
            }

        }, velocidade)
    }

    _desviarNave() {
        if (!this._desviar) {
            return
        }

        if (this._rotacao < 25) {
            this._rotacao += 0.2;
        }

        this._elemento.css("transform", `rotate(${this._rotacao}deg)`);

        this._deslocamentoParaEsquerda += 3;
        this._elemento.css("right", `${this._deslocamentoParaEsquerda}px`);

    }

    _atirar(posicao) {
        document.querySelector("#laser").play();
        let tiro = $("<div/>");
        tiro.addClass("tiro");
        this._local.append(tiro);
        tiro.css("backgroundColor", "rgb(0, 255, 64)");
        tiro.css("boxShadow", "0 0 1em rgb(3, 245, 24");

        let posicaoDoTiro = posicao;

        const intervalo = setInterval(() => {
            posicaoDoTiro += 5;
            tiro.css("top", `${posicaoDoTiro}px`);

            if (posicaoDoTiro > 600) {
                clearInterval(intervalo);
                tiro.remove();
            }

        }, 10)
    }
}
