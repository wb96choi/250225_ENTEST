$(document).ready(function () {
    var dropArea = $(".drop_area");
    var dragItem = $(".drag_item");
    var originalPosition = dragItem.position();

    dragItem.on('mousedown', function (e){
        var offsetX = e.clientX - dragItem.position().left;
        var offsetY = e.clientY - dragItem.position().top;
        $(document).on('mousemove', function(e){
            dragItem.css({
                top: e.clientY - offsetY,
                left: e.clientX - offsetX
            });
        });
        $(document).on('mouseup', function(){
            $(document).off('mousemove');



            
            if (isInsideDropArea(dragItem, dropArea)){
                dragItem.addClass('dropped');
                dragItem.appendTo(dropArea);
                dragItem.css({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                });
            } else {
                dragItem.removeClass('dropped');
                dragItem.animate(originalPosition, 'fast');
            }
        });
    });

    function isInsideDropArea(dragItem, dropArea){
        var dropAreaOffset = dropArea.offset();
        var dropRight = dropAreaOffset.left + dropArea.outerWidth();
        var dropBottom = dropAreaOffset.top + dropArea.outerHeight();
        var dragItemOffset = dragItem.offset();
        var dragRight = dragItemOffset.left + dragItem.outerWidth();
        var dragBottom = dragItemOffset.top + dragItem.outerHeight();

        return !(
            dragRight < dropAreaOffset.left ||
            dragItemOffset.left > dropRight ||
            dragBottom < dropAreaOffset.top ||
            dragItemOffset.top > dropBottom
        )
    };


    console.log("drag.js loaded");
});

