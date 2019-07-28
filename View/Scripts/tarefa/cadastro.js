//Inicialização Rapida
$(() => {
    $id = -1;

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



    obterTodos();
});