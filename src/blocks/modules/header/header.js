import $ from "jquery";





$(document).ready(function ($) {
    $("#button").click(function () {
        $("#ajax_message").fadeIn();
        return false
    })
    $("#close").click(function () {
        $(this).parents("#ajax_message").fadeOut();
        return false
    })
    $("#ajax_message").submit(function () {
        $.ajax({
            type: "POST",
            url: "http://localhost/send.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#ajax_message").trigger("reset");
        });
        return false;
    });
})
