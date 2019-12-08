

// responsive - resize window
function responsiveSize() {
    let width = $(window).width();

    const left = $('#content .left');
    const right = $('#content .right');
    const keyRight = $('#content .right .ringkasan-pemesanan .rincian .key');
    const valueRight = $('#content .right .ringkasan-pemesanan .rincian .values');
    const listMetode = $('#content .left .metode-pembayaran .list-metode');


    if (width < 305) {

        // manipulasi column
        if (left.hasClass('col-7')) {
            left.addClass('col-12');
            left.removeClass('col-7');

            right.addClass('col-12');
            right.removeClass('col-5');
        }

        if (keyRight.hasClass('col-8')) {
            keyRight.addClass('col-7');
            keyRight.removeClass('col-8');

            valueRight.addClass('col-5');
            valueRight.removeClass('col-4');
        }

        if (listMetode.find('col-6')) {
            $('.col-6', listMetode).addClass('col-12');
            $('.col-6', listMetode).removeClass('col-6');
        }

    } else if (width < 465) {

        // manipulasi column
        if (left.hasClass('col-7')) {
            left.addClass('col-12');
            left.removeClass('col-7');

            right.addClass('col-12');
            right.removeClass('col-5');
        }

        if (keyRight.hasClass('col-8')) {
            keyRight.addClass('col-7');
            keyRight.removeClass('col-8');

            valueRight.addClass('col-5');
            valueRight.removeClass('col-4');
        }

        if (listMetode.find('col-12')) {
            $('.col-12', listMetode).addClass('col-6');
            $('.col-12', listMetode).removeClass('col-12');
        }

    } else if (width < 753) {

        // manipulasi column
        if (left.hasClass('col-7')) {
            left.addClass('col-12');
            left.removeClass('col-7');

            right.addClass('col-12');
            right.removeClass('col-5');
        }

        if (keyRight.hasClass('col-7')) {
            keyRight.addClass('col-8');
            keyRight.removeClass('col-7');

            valueRight.addClass('col-4');
            valueRight.removeClass('col-5');
        }

        if (listMetode.find('col-12')) {
            $('.col-12', listMetode).addClass('col-6');
            $('.col-12', listMetode).removeClass('col-12');
        }

    } else if (width < 945) {

        // manipulasi column
        if (left.hasClass('col-12')) {
            left.addClass('col-7');
            left.removeClass('col-12');

            right.addClass('col-5');
            right.removeClass('col-12');
        }

        if (keyRight.hasClass('col-8')) {
            keyRight.addClass('col-7');
            keyRight.removeClass('col-8');

            valueRight.addClass('col-5');
            valueRight.removeClass('col-4');
        }

        if (listMetode.find('col-12')) {
            $('.col-12', listMetode).addClass('col-6');
            $('.col-12', listMetode).removeClass('col-12');
        }

    } else if (width <= 1600) {

        // manipulasi column
        if (left.hasClass('col-12')) {
            left.addClass('col-7');
            left.removeClass('col-12');

            right.addClass('col-5');
            right.removeClass('col-12');
        }

        if (keyRight.hasClass('col-7')) {
            keyRight.addClass('col-8');
            keyRight.removeClass('col-7');

            valueRight.addClass('col-4');
            valueRight.removeClass('col-5');
        }

        if (listMetode.find('col-12')) {
            $('.col-12', listMetode).addClass('col-6');
            $('.col-12', listMetode).removeClass('col-12');
        }
    }

}


// document ready
$(document).ready(() => {
    responsiveSize();
});

$(window).resize(responsiveSize);
