<?php

    header('Content-Type: application/json');

    $nome = $_POST['nome'];
    $missao = $_POST['missao'];
    $pontos = $_POST['pontos'];

    $pdo = new PDO('mysql:host=localhost;port=3306;dbname=jogo', 'root', '');

    $stmt = $pdo->prepare('INSERT INTO jogadores (nome, missao, pontos) VALUES (:nom, :mis, :pon)');
    $stmt->bindValue(':nom', $nome);
    $stmt->bindValue(':mis', $missao);
    $stmt->bindValue(':pon', $pontos);
    $stmt->execute();

    if ($stmt->rowCount() >= 1) {
        echo json_encode('Jogador salvo com sucesso');
    } else {
        echo json_encode('Falha ao salvar jogador');
    }