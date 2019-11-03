

// responsive - resize window
function responsiveSize() {
    let width = $(window).width();

    const left = $('#content .left');
    const right = $('#content .right');
    const keyLeft = $('#content .left .biodata .key');
    const valueLeft = $('#content .left .biodata .values');
    const keyRight = $('#content .right .rincian-bayar .key');
    const valueRight = $('#content .right .rincian-bayar .values');
    const imgBuku = $('#content .left .pesanan .img-buku');
    const deskBuku = $('#content .left .pesanan .desk-buku');


    if (width < 305) {

        // manipulasi column
        if (left.hasClass('col-7')) {
            left.addClass('col-12');
            left.removeClass('col-7');

            right.addClass('col-12');
            right.removeClass('col-5');
        }
        
        if (keyLeft.hasClass('col-4')) {
            keyLeft.removeClass('col-4');

            valueLeft.addClass('col-12');
            valueLeft.removeClass('col-8');
        }

        if (keyLeft.hasClass('col-3')) {
            keyLeft.removeClass('col-3');

            valueLeft.addClass('col-12');
            valueLeft.removeClass('col-9');
        }

        if (keyRight.hasClass('col-8')) {
            keyRight.addClass('col-7');
            keyRight.removeClass('col-8');

            valueRight.addClass('col-5');
            valueRight.removeClass('col-4');
        }

        if (imgBuku.hasClass('col-4')) {
            imgBuku.addClass('col-12');
            imgBuku.removeClass('col-4');

            deskBuku.addClass('col-12');
            deskBuku.removeClass('col-8');
        }

    } else if (width < 465) {

        // manipulasi column
        if (left.hasClass('col-7')) {
            left.addClass('col-12');
            left.removeClass('col-7');

            right.addClass('col-12');
            right.removeClass('col-5');
        }

        if (keyLeft.hasClass('col-4')) {
            keyLeft.addClass('col-3');
            keyLeft.removeClass('col-4');

            valueLeft.addClass('col-9');
            valueLeft.removeClass('col-8');
        }

        if (valueLeft.hasClass('col-12')) {
            keyLeft.addClass('col-3');

            valueLeft.addClass('col-9');
            valueLeft.removeClass('col-12');
        }

        if (keyRight.hasClass('col-8')) {
            keyRight.addClass('col-7');
            keyRight.removeClass('col-8');

            valueRight.addClass('col-5');
            valueRight.removeClass('col-4');
        }

        if (imgBuku.hasClass('col-12')) {
            imgBuku.addClass('col-4');
            imgBuku.removeClass('col-12');

            deskBuku.addClass('col-8');
            deskBuku.removeClass('col-12');
        }

    } else if (width < 753) {

        // manipulasi column
        if (left.hasClass('col-7')) {
            left.addClass('col-12');
            left.removeClass('col-7');

            right.addClass('col-12');
            right.removeClass('col-5');
        }

        if (keyLeft.hasClass('col-3')) {
            keyLeft.addClass('col-4');
            keyLeft.removeClass('col-3');

            valueLeft.addClass('col-8');
            valueLeft.removeClass('col-9');
        }

        if (valueLeft.hasClass('col-12')) {
            keyLeft.addClass('col-4');

            valueLeft.addClass('col-8');
            valueLeft.removeClass('col-12');
        }

        if (keyRight.hasClass('col-7')) {
            keyRight.addClass('col-8');
            keyRight.removeClass('col-7');

            valueRight.addClass('col-4');
            valueRight.removeClass('col-5');
        }

        if (imgBuku.hasClass('col-12')) {
            imgBuku.addClass('col-4');
            imgBuku.removeClass('col-12');

            deskBuku.addClass('col-8');
            deskBuku.removeClass('col-12');
        }

    } else if (width < 945) {

        // manipulasi column
        if (left.hasClass('col-12')) {
            left.addClass('col-7');
            left.removeClass('col-12');

            right.addClass('col-5');
            right.removeClass('col-12');
        }

        if (keyLeft.hasClass('col-4')) {
            keyLeft.addClass('col-3');
            keyLeft.removeClass('col-4');

            valueLeft.addClass('col-9');
            valueLeft.removeClass('col-8');
        }

        if (valueLeft.hasClass('col-12')) {
            keyLeft.addClass('col-3');

            valueLeft.addClass('col-9');
            valueLeft.removeClass('col-12');
        }

        if (keyRight.hasClass('col-8')) {
            keyRight.addClass('col-7');
            keyRight.removeClass('col-8');

            valueRight.addClass('col-5');
            valueRight.removeClass('col-4');
        }

        if (imgBuku.hasClass('col-12')) {
            imgBuku.addClass('col-4');
            imgBuku.removeClass('col-12');

            deskBuku.addClass('col-8');
            deskBuku.removeClass('col-12');
        }

    } else if (width <= 1600) {

        // manipulasi column
        if (left.hasClass('col-12')) {
            left.addClass('col-7');
            left.removeClass('col-12');

            right.addClass('col-5');
            right.removeClass('col-12');
        }

        if (keyLeft.hasClass('col-3')) {
            keyLeft.addClass('col-4');
            keyLeft.removeClass('col-3');

            valueLeft.addClass('col-8');
            valueLeft.removeClass('col-9');
        }

        if (valueLeft.hasClass('col-12')) {
            keyLeft.addClass('col-4');

            valueLeft.addClass('col-8');
            valueLeft.removeClass('col-12');
        }

        if (keyRight.hasClass('col-7')) {
            keyRight.addClass('col-8');
            keyRight.removeClass('col-7');

            valueRight.addClass('col-4');
            valueRight.removeClass('col-5');
        }

        if (imgBuku.hasClass('col-12')) {
            imgBuku.addClass('col-4');
            imgBuku.removeClass('col-12');

            deskBuku.addClass('col-8');
            deskBuku.removeClass('col-12');
        }

    }

}


// document ready
responsiveSize();
$(window).resize(responsiveSize);