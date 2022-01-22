export class Destroyer {
    _local = $(".principal");
    _elemento = $("<img/>");
    _dimensao = 0.06;
    _pararAproximacao = false;
    _top = 100;
    _permitirAtirar = true;

    set permitirAtirar(boleano) {
        this._permitirAtirar = boleano;
    }

    set pararAproximacao(boleano) {
        this._pararAproximacao = boleano;
    }

    mostrarNave(classe, img) {
        this._elemento.attr('src', img);
        this._elemento.addClass(classe);
        this._local.append(this._elemento);
    }


    aproximar() {
        this._pararAproximacao = false;
        const intervalo = setInterval(() => {

            if (this._top < 300) {
                this._top += 0.5;
                this._dimensao += 0.03;
            } else {
                this._top += 1;
                this._dimensao += 0.02;
            }

            this._elemento.css("width", `${this._dimensao}%`);
            this._elemento.css("top", `${this._top}px`);

            if (this._pararAproximacao) {
                clearInterval(intervalo);
            }

            if (this._top === 300 && this._permitirAtirar) {
                this._atirar();
            }

            if (this._top === 1000) {
                this.pararAproximacao = true;
                this._elemento.remove();
            }

        }, 13);
    }


    _atirar() {
        document.querySelector("#laser").play();
        
        let tiro1 = $("<div/>");
        tiro1.addClass("tiro");
        this._local.append(tiro1);
        tiro1.css("left", "130px");

        let tiro2 = $("<div/>");
        tiro2.addClass("tiro");
        this._local.append(tiro2);
        tiro2.css("right", "130px");

        $(".tiro").css("backgroundColor", "aqua");
        $(".tiro").css("boxShadow", "0 0 1em aqua");
        $(".tiro").css("top", "400px");

        let posicaoDoTiro = 400;

        const intervalo = setInterval(() => {
            posicaoDoTiro += 5;
            $(".tiro").css("top", `${posicaoDoTiro}px`);

            if (posicaoDoTiro > 580) {
                clearInterval(intervalo);
                $(".tiro").remove();
              
            }

        }, 13)
    }

    dano() {
        setTimeout(() => {
            let contador = 0;
            let piscar = true;

            const intervalo = setInterval(() => {
                if (piscar) {
                    this._elemento.attr('src', './img/danoDestroyer.png');
                    piscar = false;
                } else {
                    this._elemento.attr('src', './img/destroyer.png');
                    piscar = true;
                }

                if (contador === 7) {
                    clearInterval(intervalo);
                    return
                }

                contador++;
            }, 50);

        }, 300);
    }
}