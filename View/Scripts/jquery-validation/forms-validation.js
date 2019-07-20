$(() => {
    $('#form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 2
            },
            login: {
                required: true,
                minlength: 5
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            nome: {
                required: "O campo Nome é exigido.",
                minlength: "O nome deve conter 2 caractéres no mínimo."
            },
            login: {
                required: "O campo Login é exigido.",
                minlength: "O login deve conter 5 caracteres no mínimo"
            },
            password: {
                required: "O campo Senha é exigido.",
                minlength: "A senha deve conter 5 caracteres no mínimo"
            }
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            error.addClass("help-block text-danger");
            if (element.prop("type") === ("checkbox")) {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(".error").addClass("text-danger").removeClass("text-success");
            $(element).addClass("bordered border-danger").removeClass("bordered border-success");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).addClass("bordered border-success").removeClass("bordered border-danger");
        }
    });
});