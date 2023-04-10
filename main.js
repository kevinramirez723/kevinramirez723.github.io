function buildNav(selector) {
    $(selector).load("nav.html", function(){
        var url_lst = window.location.href.split("/");
        var active = url_lst[url_lst.length - 1];
        if (active == "") {
            active = "index.html";
        }
        $(`a[href="${active}"]`).addClass('active').attr('aria-current', 'page');
    });
}


$(document).ready(function() {
    var clock;
    $("#timerbutton").on('click', function() {
        if ($(this).hasClass("active")) {
            clearInterval(clock);
            // TODO: make more efficient by only changing hour / minute when necessary
            clock = setInterval(() => {
                let date = new Date().toLocaleDateString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }).slice(-8);
                $(".hour").text(date.substring(0, 2));
                $(".minute").text(date.substring(3, 5));
                $(".second").text(date.substring(6));
                $(".clock").css('visibility', 'visible');
            }, 1000)
        }
        else {
            $(".clock").css('visibility', 'hidden');
            clearInterval(clock);
        }
    });
});