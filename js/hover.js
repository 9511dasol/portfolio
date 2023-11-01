$(document).ready(function () {
    $(".skill").hover(
        function () {
            $(this).addClass("hovered");
        },
        function () {
            $(this).removeClass("hovered");
        }
    );
});