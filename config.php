<?php
    if(isset($_POST['submit']))
    {
        $numero_loja = $_POST['numero_loja'];
        $nome_loja = $_POST['nome_loja'];
        $cnpj = $_POST['cnpj'];
        $raz_social = $_POST['raz_social'];
        $fantasia = $_POST['fantasia'];
        $cpf = $_POST['cpf'];
        $nome_compl = $_POST['nome_compl'];
        $endereco = $_POST['endereco'];
        $telefone = $_POST['telefone'];
        $email = $_POST['email'];
        $vinculo = $_POST['vinculo'];
        $entrada = $_POST['entrada'];
        $saida = $_POST['saida'];
        $digital1 = $_POST['digital1'];
        $digital2 = $_POST['digital2'];
    }
    else {
        echo "O formulário ainda não foi enviado.";
    }


    $dbHost = 'Localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'DB_CONTROLE-PROMOTORES';

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    if ($conn->connect_errno) {
        die("COnexão falha: " . $conn->connect_error);
      } else {
        echo "Envio Completo"; 
      }
      $conn->close();
      else {
        
      }

?>