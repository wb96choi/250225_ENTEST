$(document).ready(function () {
    var dropArea = $(".drop_area");
    var dragItem = $(".drag_item");
    var originalPosition = dragItem.position();

    dragItem.on('mousedown touchstart', function (e) {
        var offsetX, offsetY;

        if (e.type === 'mousedown') {
            offsetX = e.clientX - dragItem.position().left;
            offsetY = e.clientY - dragItem.position().top;
        } else if (e.type === 'touchstart') {
            offsetX = e.touches[0].clientX - dragItem.position().left;
            offsetY = e.touches[0].clientY - dragItem.position().top;
        }

        $(document).on('mousemove touchmove', function (e) {
            var clientX, clientY;

            if (e.type === 'mousemove') {
                clientX = e.clientX;
                clientY = e.clientY;
            } else if (e.type === 'touchmove') {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            }

            dragItem.css({
                top: clientY - offsetY,
                left: clientX - offsetX
            });

            e.preventDefault();  // Prevent scrolling on touch devices
        });

        $(document).on('mouseup touchend', function () {
            $(document).off('mousemove touchmove');

            if (isInsideDropArea(dragItem, dropArea)) {
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

        e.preventDefault();
    });

    function isInsideDropArea(dragItem, dropArea) {
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
        );
    }

    console.log("drag.js loaded");
});
