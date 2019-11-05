

// mark side tab
function borderTab() {
    $('#content .left .tab .perpustakaan-tab').addClass('is-active');
}


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();
    const buku = $('#content .right .rbody .mybooks .buku');
    
    if (width < 265) {

        // manipulasi column
        if (buku.hasClass('col-3')) {
            buku.addClass('col-12');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-4')) {
            buku.addClass('col-12');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-6')) {
            buku.addClass('col-12');
            buku.removeClass('col-6');
        }

    } else if (width < 375) {

        // manipulasi column
        if (buku.hasClass('col-3')) {
            buku.addClass('col-6');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-4')) {
            buku.addClass('col-6');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-6');
            buku.removeClass('col-12');
        }

    } else if (width < 465) {

        // manipulasi column
        if (buku.hasClass('col-6')) {
            buku.addClass('col-4');
            buku.removeClass('col-6');
        } else if (buku.hasClass('col-3')) {
            buku.addClass('col-4');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-4');
            buku.removeClass('col-12');
        }

    } else if (width < 753) {

        // manipulasi column
        if (buku.hasClass('col-3')) {
            buku.addClass('col-6');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-4')) {
            buku.addClass('col-6');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-6');
            buku.removeClass('col-12');
        }

    } else if (width < 945) {

        // manipulasi column
        if (buku.hasClass('col-6')) {
            buku.addClass('col-4');
            buku.removeClass('col-6');
        } else if (buku.hasClass('col-3')) {
            buku.addClass('col-4');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-4');
            buku.removeClass('col-12');
        }

    } else if (width < 1600) {

        // manipulasi column
        if (buku.hasClass('col-6')) {
            buku.addClass('col-3');
            buku.removeClass('col-6');
        } else if (buku.hasClass('col-4')) {
            buku.addClass('col-3');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-3');
            buku.removeClass('col-12');
        }

    }
}


// document ready
borderTab();
responsiveSize();
$(window).resize(responsiveSize);