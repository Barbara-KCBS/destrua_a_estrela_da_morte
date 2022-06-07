export class Historico {

    mostrarHistoricoDeJogadores() {
        $.ajax({
            url: './selecionar.php',
            method: 'GET',
            dataType: 'json'
        }).done(function (result) {

            if (result != 'Nenhum jogador encontrado.') {
                for (let i = 0; i < result.length; i++) {
                    $("tbody").append('<tr><td class="td-nome">' + result[i].nome + '</td><td class="td-missao">' + result[i].missao + '</td><td class="td-pontos">' + result[i].pontos + '</td></th>');
                }
            }

            $(".historico-de-jogadores").fadeIn(3000, function () {
                $(".historico-de-jogadores").removeClass("esconder");
            });
        })
    }

    salvarDadosDoJogador(jogador) {

        let nome = jogador.capturarNome;
        let missao = jogador.capturarStatusDaMissao;
        let pontos = jogador.capturarPontos;

        $.ajax({
            url: './inserir.php',
            method: 'POST',
            data: { nome: nome, missao: missao, pontos: pontos },
            dataType: 'json'
        }).done(this.mostrarHistoricoDeJogadores);

    }
}