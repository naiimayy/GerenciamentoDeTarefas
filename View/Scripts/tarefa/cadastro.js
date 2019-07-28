//Inicialização Rapida
$(() => {
    $id = -1;

    $(".table").on("click", ".botao-editar", function () {
        $id = $(this).data("id");
        $.ajax({
            url: '/tarefa/obterpeloid/' + $id,
            method: 'get',
            success: function (data) {
                $id = data.Id;
                $('#campo-projeto').val(data.IdProjeto);
                $('#campo-categoria').val(data.IdCategoria);
                $('#campo-usuario').val(data.IdUsuarioResponsavel);

                $('#campo-titulo').val(data.Titulo);
                $('#campo-descricao').val(data.Descricao);
                $('#campo-duracao').val( data.Duracao.getFullYear() + "-" + (data.Duracao.getMonth() + 1) + "-" + data.Duracao.getDate());

                $("#modalCadastroTarefa").modal("show");
            }
        })
    });

    $("#campo-pesquisa").on("keyup", function (e) {
        if (e.keyCode == 13) {
            obterTodos();
        }
    });

    function obterTodos() {
        //Limpa o body da table de tarefas
        $("lista-tarefas").empty();
        $busca = $('#campo-pesquisa').val();

        $.ajax({
            url: 'tarefa/obtertodos',
            method: 'get',
            data: {
                //Inserir campo de busca
                busca: $busca
            },
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    var registro = data[i];

                    var linha = document.createElement('tr');

                    var colunaCodigo = document.createElement('td');
                    colunaCodigo.innerHTML = registro.Id;

                    var colunaUsuario = document.createElement('td');
                    colunaUsuario.innerHTML = registro.Usuario.Nome;

                    var colunaProjeto = document.createElement('td');
                    colunaProjeto.innerHTML = registro.Projeto.Nome;

                    var colunaCategoria = document.createElement('td');
                    colunaCategoria.innerHTML = registro.Categoria.Nome;

                    var colunaTitulo = document.createElement('td');
                    colunaTitulo.innerHTML = registro.Titulo;

                    var colunaDescricao = document.createElement('td');
                    colunaDescricao.innerHTML = registro.Descricao;

                    var colunaDuracao = document.createElement('td');
                    colunaDuracao = registro.Duracao;

                    var botaoEditar = document.createElement('button');

                    botaoEditar.innerHTML = "<i class=\"fas fa-pen\"></i> Editar";
                    botaoEditar.classList.add('btn', 'btn-primary', 'mr-3', 'botao-editar')
                    botaoEditar.setAttribute('data-id', registro.Id);


                    var botaoApagar = document.createElement('button');

                    botaoApagar.innerHTML = "<i class=\"fas fa-trash\"></i> Apagar";
                    botaoApagar.classList.add('btn', 'btn-danger', 'botao-apagar')
                    botaoApagar.setAttribute('data-id', registro.Id);

                    var colunaAcao = document.createElement('td');

                    colunaAcao.appendChild(botaoEditar);
                    colunaAcao.appendChild(botaoApagar);

                    linha.appendChild(colunaCodigo);
                    linha.appendChild(colunaUsuario);
                    linha.appendChild(colunaProjeto);
                    linha.appendChild(colunaCategoria);
                    linha.appendChild(colunaTitulo);
                    linha.appendChild(colunaDescricao);
                    linha.appendChild(colunaDuracao);
                    linha.appendChild(colunaAcao);
                    document.getElementById('lista-tarefas').appendChild(linha);
                }
            }
        });
    }

    $("#tarefa-botao-salvar").on("click", function () {
        if ($id == -1) {
            inserir();
        } else {
            alterar();
        }
    });

    function alterar() {
        $projeto = $('#campo-projeto').val();
        $categoria = $('#campo-categoria').val();
        $usuario = $('#campo-usuario').val();

        $titulo = $('#campo-titulo').val();
        $descricao = $('#campo-descricao').val();
        $duracao = $('#campo-duracao').val();

        $.ajax({
            method: "post",
            url: "/tarefa/update",
            data: {
                IdUsuarioResponsavel: $usuario,
                IdCategoria: $categoria,
                IdProjeto: $projeto,

                Titulo: $titulo,
                Descricao: $descricao,
                Duracao: $duracao,
                Id: $id
            },
            success: function (data) {
                $id = -1;
                $("#modalCadastroTarefa").modal("hide");
                obterTodos();
                limparCampos();
            },
            error: function (data) {
                console.log("ERRO");
            }
        })
    }

    function inserir() {
        $projeto = $('#campo-projeto').val();
        $categoria = $('#campo-categoria').val();
        $usuario = $('#campo-usuario').val();

        $titulo = $('#campo-titulo').val();
        $descricao = $('#campo-descricao').val();
        $duracao = $('#campo-duracao').val();

        $.ajax({
            method: "post",
            url: "/tarefa/store",
            data: {
                IdUsuarioResponsavel: $usuario,
                IdCategoria: $categoria,
                IdProjeto: $projeto,

                Titulo: $titulo,
                Descricao: $descricao,
                Duracao: $duracao
            },
            success: function (data) {
                $id = -1;
                $("#modalCadastroTarefa").modal("hide");
                obterTodos();
                limparCampos();
            },
            error: function (data) {
                console.log("ERRO");
            }
        })
    }

    function limparCampos() {
        $('#campo-projeto').val("");
        $('#campo-categoria').val("");
        $('#campo-usuario').val("");

        $('#campo-titulo').val("");
        $('#campo-descricao').val("");
        $('#campo-duracao').val('2000-01-01');
    }

    $(".table").on("click", ".botao-apagar", function () {
        $id = $(this).data("id");
        $.ajax({
            url: '/tarefa/apagar/' + $id,
            method: 'get',
            success: function (data) {
                obterTodos();
            },
            error: function (data) {
                console.log('Deu ruim');
            }
        });
    });

    obterTodos();
});