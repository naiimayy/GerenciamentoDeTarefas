
$(function () {
    $id = -1;
    $(".table").on("click", ".botaoEditar", function () {
        $id = $(this).data("id");
        $.ajax({
            url: '/categoria/obterpeloid/' + $id,
            method: 'get',
            success: function (data) {
                $id = data.Id;
                $("#campo-nome").val(data.Nome);
                $("#modalCadastroCategoria").modal("show");
            }
        })
    });

    $("campo-pesquisa").on("keyup", function (e) {
        if (e.keyCode == 13) {
            obterTodos();
        }
    });

    function obterTodos()
});
