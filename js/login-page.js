

// responsive - resize window
function responsiveSize() {
    let width = $(window).width();

    const left = $('#content .left');
    const right = $('#content .right');


    if (width < 544) {

        // manipulasi column
        if (right.find('col-6')) {
            right.addClass('col-12');
            right.removeClass('col-6');
        }

        // manipulasi css
        left.css('display', 'none');

    } else if (width < 1185) {

        // manipulasi column
        if (right.find('col-12')) {
            right.addClass('col-6');
            right.removeClass('col-12');
        }

        // manipulasi css
        left.css('display', 'block');

    } else if (width >= 1185) {

        // manipulasi column
        if (right.find('col-12')) {
            right.addClass('col-6');
            right.removeClass('col-12');
        }
        
        // manipulasi css
        left.css('display', 'block');

    }
}


// document ready
responsiveSize();
$(window).resize(responsiveSize);