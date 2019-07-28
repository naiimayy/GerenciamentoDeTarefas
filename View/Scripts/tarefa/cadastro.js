//Inicialização Rapida
$(() => {
    $id = -1;

    function obterTodos() {
        //Limpa o body da table de tarefas
        $("lista-tarefas").empty();

        $.ajax({
            url: 'tarefa/obtertodos',
            method: 'get',
            data: {
                //Inserir campo de busca
            },
        });
    }

});