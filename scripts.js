// Scripts das Máscaras de INPUT
$(document).ready(function() {
    $('#cnpj').mask('00.000.000/0000-00', {reverse: true});
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#telefone').mask('(00) 0000-0000');
    $('#entrada').mask('00:00h');
    $('#saida').mask('00:00h');
});

const digital1 = document.getElementById('digital1');
const digital2 = document.getElementById('digital2');


function cadastrarDigital(dedo) {
    Swal.fire({
        title: 'Cadastrar Digital',
        text: `Deseja cadastrar a digital do ${dedo}?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
    }).then((result) => {
        if (result.isConfirmed) {
            // Desabilitar o botão enquanto a requisição está sendo feita
            digital1.disabled = true;
            digital2.disabled = true;

            fetch('api/cadastrar-digital', {
                method: 'POST',
                body: JSON.stringify({ dedo: dedo })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        Swal.fire('Sucesso!', 'Digital cadastrada com sucesso!', 'success');
                    } else {
                        Swal.fire('Erro!', 'Não foi possível cadastrar a digital. Tente novamente.', 'error');
                    }
                })
                .catch(error => {
                    Swal.fire('Erro!', 'Ocorreu um erro inesperado. Tente novamente.', 'error');
                })
                .finally(() => {
                    // Habilitar o botão novamente após a requisição
                    digital1.disabled = false;
                    digital2.disabled = false;
                });
        }
    });
}

digital1.addEventListener('click', () => {
    event.preventDefault();
    cadastrarDigital('1');
});

digital2.addEventListener('click', () => {
    event.preventDefault();
    cadastrarDigital('2');
});