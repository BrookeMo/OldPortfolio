$(document).ready(function () {

    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();

    $("#show").click(function () {
        $(".myPortfolio").toggle();
    });
    
    $("#textIcon").click(function () {
        $("#phoneNumber").toggle();
    });
});

