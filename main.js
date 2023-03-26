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