"use strict";

// Toggle Clock listner
var clock;
$("#clock-toggle").on("click", function() {
    if ($(this).hasClass("primed")) {
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
        $(this).removeClass("primed")
    }
    else {
        $(".clock").css("visibility", "hidden");
        clearInterval(clock);
        $(this).addClass("primed")
    }
});

// Simple alert listner
$("#simple-alert").on("click", function() {
    alert("This is a simple alert.");
});


// Helper function for Numeric Sort
function isInt(value) {
    if (isNaN(value)) {
        return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
}
 // Numeric Sort listner
$("#numeric-sort").on("click", function() {
    do{
        var n = prompt("Select length of array. (Integer between 2-6)", "");
    } while(!isInt(n) || (+n < 2 || +n > 6));
    var num_arr = new Array;
    for (let i = 0; i < n; i++) {
        do {
            var x = prompt(`Please insert array element ${i}. (Integers only)`, "");
        } while (!isInt(x));
        num_arr.push(+x);
    }
    $(".input").text(`Input array: ${num_arr}`);
    num_arr.sort(function(a, b) {
        return a - b;
    });
    $(".output").text(`Output array: ${num_arr}`);
});