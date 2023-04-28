"use strict";

// Toggles digital clock, updates in real-time on seconds interval.
let intervalID;
function toggleClock(link) {
    if (link.hasClass("primed")) {
        let h, m;
        intervalID = setInterval(() => {
            let date = new Date().toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }).slice(-8);
            // Only updates on digit change
            if (h !== date.substring(0, 2)) {
                h = date.substring(0, 2);
                $(".hour").text(h);
            }
            if (m !== date.substring(3, 5)) {
                m = date.substring(3, 5);
                $(".minute").text(m);
            }
            $(".second").text(date.substring(6));
            $(".clock").css("visibility", "visible");
        }, 1000)
        link.removeClass("primed")
    }
    else {
        $(".clock").css("visibility", "hidden");
        intervalID = clearInterval(intervalID);
        link.addClass("primed")
    }
}

function simpleAlert() {
    alert("This is a simple alert.");
}

function numericSort() {
    let num_arr = $("#numInput")
        .val()
        .split(",")
        .map(e => parseFloat(e))
        .filter(e => !isNaN(e));
    $("#sort-input").text(`Input: ${num_arr}`);
    num_arr.sort(function(a, b) {
        return a - b;
    });
    $("#sort-output").text(`Output: ${num_arr}`);
}

$("#search-btn").on("click", function() {
    var searchTerm = $("#wiki-search").val();
    var connect = new XMLHttpRequest();
    var url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=4&gsrsearch=${searchTerm}`;
    connect.open("GET", url);
    connect.send();
    connect.onload = function() {
        var wikiObject = JSON.parse(this.response);
        var pages = wikiObject.query.pages;
        for (let i in pages) {
            var newDiv = document.createElement("div");
            newDiv.setAttribute("class", "row");
            $("#wiki-output").append(newDiv);
            newDiv.innerText = pages[i].title;
        }
    }
});

$("#card-wrapper").on("click", "a, button", function(event) {
    switch($(this).attr("id")) {
        case "clock-toggle":
            toggleClock($(this));
            break;
        case "simple-alert":
            simpleAlert();
            break;
        case "sort-btn":
            numericSort();
            break;
        default:
    }
});

$("#card-wrapper").on("keypress", "input", function(event) {
    switch($(this).attr("id")) {
        case "numInput":
            if (event.keyCode === 13) {
                event.preventDefault();
                numericSort();
            }
            break;
        default:
    }
});