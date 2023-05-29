$(document).ready(function() {
    $(".our-services__decoration-title").click(function() {
        $(".our-services__decoration-content").toggle();
        toggleSign($(".toggle-icon-decoration"));
    });
    $(".our-services__events-title").click(function() {
        $(".our-services__events-content").toggle();
        toggleSign($(".toggle-icon-events"));
    });
    $(".our-services__floral-design-title").click(function() {
        $(".our-services__floral-design-content").toggle();
        toggleSign($(".toggle-icon-floral"));
    });

    function toggleSign(element) {
        if (element.text() == "+") {
            element.text("-");
        } else {
            element.text("+");
        }
    }
});