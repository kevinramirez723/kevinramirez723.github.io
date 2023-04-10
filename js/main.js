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

if ($("html").hasClass("chalkboard")) {
    var clock;
    $("#timerbutton").on("click", function() {
        if ($(this).hasClass("active")) {
            clearInterval(clock);
            var h, m;
            clock = setInterval(() => {
                let date = new Date().toLocaleDateString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }).slice(-8);
                // Only updates on digit change
                if (h !== date.substring(0, 2)) {
                    h = date.substring(0, 2);
                    $(".hour").text(h);
                };
                if (m !== date.substring(3, 5)) {
                    m = date.substring(3, 5);
                    $(".minute").text(m);
                };
                $(".second").text(date.substring(6));
                $(".clock").css("visibility", "visible");
            }, 1000)
        }
        else {
            $(".clock").css("visibility", "hidden");
            clearInterval(clock);
        }
    });
}