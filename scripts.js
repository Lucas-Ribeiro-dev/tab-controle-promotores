$(document).ready(function() {
    $('#cnpj').mask('00.000.000/0000-00', {reverse: true});
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#telefone').mask('(00) 0000-0000');
    $('#entrada').mask('00:00');
    $('#saida').mask('00:00');
});