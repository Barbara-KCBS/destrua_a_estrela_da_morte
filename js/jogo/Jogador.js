export class Jogador {

    _nome;
    _statusDaMissao;
    _pontos = 3

    set adicionarNome(nome) {
        this._nome = nome;
    }
    
    set alterarStatusDaMissao(status) {
        this._statusDaMissao = status;
    }
    get capturarNome() {
        return this._nome;
    }

    get capturarPontos() {
        return this._pontos;
    }

    get capturarStatusDaMissao() {
        return this._statusDaMissao;
    }

    subtrairPontos() {
        this._pontos--;
        $(".pontos-do-jogador").css("background-color", "red");
        setTimeout(() => {
            $(".pontos-do-jogador").fadeIn(1500, () => {
                $(".pontos-do-jogador").css("background-color", "rgba(247, 247, 66, 0.555)");
            })
        }, 1000)
        return this._pontos;
    }

}