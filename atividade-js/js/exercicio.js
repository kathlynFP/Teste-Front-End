var $Selected;


$("[name=q1]").on('click', function () {
    $(".bt").addClass("bt-confirmar");
    let inputRadio = $(this).parent(".checkbox-wrap").parent(".alternativa");

    if (inputRadio.hasClass("selecionada")) {
        inputRadio.removeClass("selecionada");
        $(".bt").removeClass("bt-confirmar");

    } else {
        $(".alternativa").removeClass("selecionada");
        inputRadio.addClass("selecionada");

    }

    $Selected = $(this)[0].id.replace("a", "");

});
$(".bt").on('click', function () {

    $.ajax({
        url: "data/exercicio.js",
        method: "GET",
        success: function (data) {
            let Data = JSON.parse(data);
            if ($Selected == Data[0].gabarito[0]) {
                $(".feedback-positivo").addClass("active");

            } else {
                $(".feedback-negativo").addClass("active");
            }
        }
    });
    $(".bt").removeClass("bt-confirmar");
    $(".alternativas").addClass("disable");

});