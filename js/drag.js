$(document).ready(function () {
    $(".sticker").draggable();
    $(".drop-area").droppable({
        drop: function(event, ui) {
            $(this).addClass("highlight");
        }
    });


    console.log("drag.js loaded");
});

