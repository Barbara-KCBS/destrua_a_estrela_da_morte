<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Star Wars</title>
    <link rel="icon" href="./img/icone.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body >
    <audio id="trilha" loop>
        <source src="./audio/StarWarsMainTheme.mp3" type="audio/mpeg"> 
    </audio>
    <audio id="laser">
        <source src="./audio/laser.mp3" type="audio/mpeg"> 
    </audio>
    
    <main class="principal">
        
        <div class="painel-de-pontos esconder">
            <img class="img-piloto" src="./img/piloto.jpg">
            <div class="nome-do-jogador"></div>
            <div class="pontos-do-jogador"></div>
        </div>

        <h1 class="perdeu esconder">A missão falhou!</h1>
        <h1 class="ganhou esconder">Missão cumprida!</h1>

        <div class="entrada-do-jogo">
            <h1>Destrua a estrela da morte</h1>
            <h4>Olá, Piloto! Sua missão é destruir a estrela da morte.</h4>
            <p>Em cada etapa do jogo, aparecerá 3 opções de ações em sua tela . Escolha apenas uma ação em cada etapa. Cada escolha mal sucedida, você perde 1 ponto. Caso a pontuação seja zerada ou a ação escolhida no ato final seja incorreta, a missão será perdida.</p>
            <p>Que a força esteja com você!</p>

            <form name="cad-jogador" method="POST" action="">
                <label for="nome">Apelido: </label>
                <input type="text" name="nome" id="input-nome">

                <input type="submit" form="cad-jogador" value="entrar" id="botao-entrar">
            </form>           
        </div>

        <div class="historico-de-jogadores esconder">
            <table class="tabela-historio-de-jogadores">
                <thead>
                    <th class="thead-jogador">Jogador</th>
                    <th class="thead-missao">Missão</th>
                    <th class="thead-pontos">Pontos</th>
                </thead>
                <tbody>
                </tbody>
            </table>

            <button class="botao-iniciar-jogo">Iniciar Jogo</button>
            <button class="botao-reiniciar-jogo esconder">Reiniciar Jogo</button>
        </div>
    
        <div class="botoes esconder">
            <button class="botao-atirar botao-acao">Atirar</button>
            <button class="botao-desviar botao-acao">Desviar</button>
            <button class="botao-acelerar botao-acao">Acelerar</button>
        </div>

    </main>
    <script src="./js/jquery.js"></script>
    <script type="module" src="./js/main.js"></script>
</body>
</html>