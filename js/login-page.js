// responsive - resize window

$(window).ready(responsiveSize);
$(window).resize(responsiveSize);

function responsiveSize() {
    let width = $(window).width();

    const left = $('#content .left');
    const right = $('#content .right');



    if (width < 544) {
        if (left.find('col-6'))
            left.css('display', 'none');
        
        if (right.find('col-6')) {
            right.addClass('col-12');
            right.removeClass('col-6');
        }


        $('h2', right).css('textAlign', 'center');
    }

    else if (width < 1185) {
        if (right.find('col-12')) {
            right.addClass('col-6');
            right.removeClass('col-12');
        }


        $('h2', right).css('textAlign', 'left');
        left.css('display', 'block');

        $('hr', left).css('width', '67.77777%');
        $('hr', left).css('top', '13.69863%');
    }

    else if (width > 1185) {
        if (right.find('col-12')) {
            right.addClass('col-6');
            right.removeClass('col-12');
        }
        

        $('h2', right).css('textAlign', 'left');
        left.css('display', 'block');

        $('hr', left).css('width', '56.48148%');
        $('hr', left).css('top', '12.86549%');
    }
}

// responsive - resize window
