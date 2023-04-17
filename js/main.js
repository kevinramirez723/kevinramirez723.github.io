"use strict";

// Reuses navbar for each page
$("nav").load("nav.html", function(){
    const segments = window.location.pathname.split('/');
    // Handles potential trailing slash
    var active = segments.pop() || segments.pop();
    if (active === "kevinramirez723.github.io") {
        active = "index.html";
    }
    $(`a[href="${active}"]`).addClass("active");

    // Triggers navbar fade-in animation only on visit from external site
    if (document.referrer !== "") {
        var prev_host = new URL(document.referrer).hostname;
        if (prev_host === "kevinramirez723.github.io") {
            $("#navbarNav").addClass("disable-animation");
        }
    }
});

// Reuses footer for each page
$.get("footer.html", function(data) {
    $("footer").replaceWith(data);
});