import $ from "jquery";



// $('.booking-subtitle').text('new')
// document.addEventListener('DOMContentLoaded', function () {
//     // let modal = document.querySelector("#form_message")
//     // let btn = document.querySelector("#button")
//     // let close = document.querySelector("#close")

//     // btn.onclick = function () {
//     //     modal.style.display = "block"
//     // }

//     // close.onclick = function () {
//     //     modal.style.display = "none"
//     // }



// });

$(document).ready(function ($) {
    $("#button").click(function () {
        $("#form_message").fadeIn();
        return false
    })
})


$(document).ready(function ($) {
    $("#close").click(function () {
        $(this).parents("#form_message").fadeOut();
        return false
    })
})


$(document).ready(function () {
    $("#btn").click(
        function () {
            sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
            return false;
        }
    );
});

$(document).ready(function () {
    $("#form_message").submit(function () { //устанавливаем событие отправки для формы с id=form
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function () {
                //код в этом блоке выполняется при успешной отправке сообщения
                alert("Ваше сообщение отпрвлено!");
            }
        });
    });
});