<?php
    header('Content-Type: application/json');

    $pdo = new PDO('mysql:host=localhost;port=3306;dbname=jogo;', 'root', '');

    $stmt = $pdo->prepare('SELECT * FROM jogadores');
    $stmt->execute();

    if ($stmt->rowCount() >= 1) {
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    } else {
        echo json_encode('Nenhum jogador encontrado.');
    }