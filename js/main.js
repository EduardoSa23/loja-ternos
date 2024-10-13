$(document).ready(function () {
    let mascaraTelefone = $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
            messages: {
                nome: 'Por favor, insira o seu nome',
                email: 'Digite um email valido',
                telefone: 'Digite um telefone',
                mensagem: 'Informe o motivo do contato',
            },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada com sucesso! Entraremos em contato em 2 dias úteis");
            form.reset();
        },
        invalidHandler: function (form, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
            alert("Por favor, preencha os campos obrigatórios!");
            }
        }
    })
});

document.querySelectorAll('.size-options').forEach(function(sizeOptions) {
    sizeOptions.addEventListener('click', function(event) {
        if (event.target.classList.contains('size')) {
            sizeOptions.querySelectorAll('.size').forEach(function(btn) {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
        }
    });
});