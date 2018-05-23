$(document).ready(function () {

    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();

    $("#show").click(function () {
        $(".myPortfolio").toggle();
    });
    $("#resumeButton").click(function () {
        $("#resume").toggle();
    });
    $("#textIcon").click(function () {
        $("#phoneNumber").toggle();
    });
    $("#emailIcon").click(function () {
        $("#form").toggle();
    });
});

