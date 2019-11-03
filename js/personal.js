

// responsive - resize window
function responsiveSize() {
    let width = $(window).width();
    $('.angka').html(width);
    

    if (width < 465) {

        // manipulasi column
        if ($('#content .left').hasClass('col-4')) {
            $('#content .left').addClass('col-12');
            $('#content .left').removeClass('col-4');

            $('#content .right').addClass('col-12');
            $('#content .right').removeClass('col-8');
        }

        else if ($('#content .left').hasClass('col-3')) {
            $('#content .left').addClass('col-12');
            $('#content .left').removeClass('col-3');

            $('#content .right').addClass('col-12');
            $('#content .right').removeClass('col-9');
        }
    
    } else if (width < 753) {

        // manipulasi column
        if ($('#content .left').hasClass('col-3')) {
            $('#content .left').addClass('col-4');
            $('#content .left').removeClass('col-3');

            $('#content .right').addClass('col-8');
            $('#content .right').removeClass('col-9');
        }

        else if ($('#content .left').hasClass('col-12')) {
            $('#content .left').addClass('col-4');
            $('#content .left').removeClass('col-12');

            $('#content .right').addClass('col-8');
            $('#content .right').removeClass('col-12');
        }

    } else if (width >= 753) {

        // manipulasi column
        if ($('#content .left').hasClass('col-4')) {
            $('#content .left').addClass('col-3');
            $('#content .left').removeClass('col-4');

            $('#content .right').addClass('col-9');
            $('#content .right').removeClass('col-8');
        } 
        
        else if ($('#content .left').hasClass('col-12')) {
            $('#content .left').addClass('col-3');
            $('#content .left').removeClass('col-12');

            $('#content .right').addClass('col-9');
            $('#content .right').removeClass('col-12');
        }

    }
}


// document ready
responsiveSize();
$(window).resize(responsiveSize);


