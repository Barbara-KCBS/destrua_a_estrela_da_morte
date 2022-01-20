export class EstrelaDaMorte {
    _elemento = $("<img/>");
    _dimensao = 1.2;

    mostrarEstrelaDaMorte() {
        this._elemento.attr('src', './img/estrela-da-morte.png');
        this._elemento.addClass("estrela-da-morte");
        $(".principal").append(this._elemento);
    }

    alterarDimensao(valor) {
        this._dimensao += valor;
        this._elemento.css("width", `${this._dimensao}%`);
    }
}