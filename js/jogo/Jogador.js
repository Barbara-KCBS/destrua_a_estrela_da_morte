export class Jogador {

    _nome;
    _statusDaMissao;
    _pontos = 3

    adicionarNome(nome) {
        this._nome = nome;
    }

    capturarNome() {
        return this._nome;
    }

    capturarPontos() {
        return this._pontos;
    }

    capturarStatusDaMissao() {
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

    alterarStatusDaMissao(status) {
        this._statusDaMissao = status;
    }
}