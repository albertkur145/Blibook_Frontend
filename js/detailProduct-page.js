

// variable global
const deskripsiBuku = $('#detail-product .bottom .left .deskripsi p.desk').text();
const readMore = $('#detail-product .bottom .left .deskripsi p.read-more');
const deskBuku = $('#detail-product .bottom .left .deskripsi p.desk');
let statusBaca = 0;

// read more
function bacaSelengkapnya() {
    let width = $(window).width();

    if (statusBaca == 0) {
        deskBuku.html(deskripsiBuku);
        readMore.html(`<span onclick="bacaSelengkapnya()">Baca Lebih Sedikit</span>`);
        statusBaca = 1;
    } else {
        if (width < 305) 
            deskBuku.text(deskripsiBuku.substring(0, 250) + '...');

        else if (width < 465)
            deskBuku.text(deskripsiBuku.substring(0, 400) + '...');

        else if (width < 753)            
            deskBuku.text(deskripsiBuku.substring(0, 650) + '...');

        else if (width < 945) 
            deskBuku.text(deskripsiBuku.substring(0, 925) + '...');

        else if (width < 1600) 
            deskBuku.text(deskripsiBuku.substring(0, 1225) + '...');     
        

        readMore.html(`<span onclick="bacaSelengkapnya()">Baca Selengkapnya</span>`);
        statusBaca = 0;
    }
}


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();

    const imgBukuTop = $('#detail-product .left .image-buku');
    const ketBukuLeft = $('#detail-product .left .ket-buku');

    const imgBukuBottom = $('#detail-product .bottom .right .image-buku');
    const ketBukuRight = $('#detail-product .bottom .right .ket-buku');

    const topLeft = $('#detail-product .top .left');
    const topRight = $('#detail-product .top .right');
    const bottomLeft = $('#detail-product .bottom .left');
    const bottomRight = $('#detail-product .bottom .right');


    if (width < 305) {

        // manipulasi column
        if (topLeft.hasClass('col-8')) {
            topLeft.addClass('col-12');
            topLeft.removeClass('col-8');

            topRight.addClass('col-12');
            topRight.removeClass('col-4');

            bottomLeft.addClass('col-12');
            bottomLeft.removeClass('col-8');

            bottomRight.addClass('col-12');
            bottomRight.removeClass('col-4');
        }

        if (imgBukuTop.hasClass('col-5')) {
            imgBukuTop.addClass('col-12');
            imgBukuTop.removeClass('col-5');

            ketBukuLeft.addClass('col-12');
            ketBukuLeft.removeClass('col-7');

            imgBukuBottom.removeClass('col-5');
            ketBukuRight.addClass('col-12');
            ketBukuRight.removeClass('col-7');
        }

        // manipulasi html
        if (statusBaca == 0)
            deskBuku.html(deskripsiBuku.substring(0, 250) + '...');
        else
            deskBuku.html(deskripsiBuku);

        // manipulasi css
        $('img', imgBukuTop).css('width', '100%');
        $('img', imgBukuTop).css('height', '100%');
        $('img', imgBukuBottom).css('width', '5.5rem');
        $('img', imgBukuBottom).css('height', '8.5rem');

    } else if (width < 325) {

        // manipulasi column
        if (topLeft.hasClass('col-8')) {
            topLeft.addClass('col-12');
            topLeft.removeClass('col-8');

            topRight.addClass('col-12');
            topRight.removeClass('col-4');

            bottomLeft.addClass('col-12');
            bottomLeft.removeClass('col-8');

            bottomRight.addClass('col-12');
            bottomRight.removeClass('col-4');
        }

        if (imgBukuTop.hasClass('col-12')) {
            imgBukuTop.addClass('col-5');
            imgBukuTop.removeClass('col-12');

            ketBukuLeft.addClass('col-7');
            ketBukuLeft.removeClass('col-12');

            imgBukuBottom.addClass('col-5');
            ketBukuRight.addClass('col-7');
            ketBukuRight.removeClass('col-12');
        }

        // manipulasi html
        if (statusBaca == 0)
            deskBuku.html(deskripsiBuku.substring(0, 400) + '...');
        else
            deskBuku.html(deskripsiBuku);

        // manipulasi css
        $('img', imgBukuTop).css('width', '7rem');
        $('img', imgBukuTop).css('height', '10.75rem');
        $('img', imgBukuBottom).css('width', '5.5rem');
        $('img', imgBukuBottom).css('height', '8.5rem');

    } else if (width < 340) {

        // manipulasi column
        if (topLeft.hasClass('col-8')) {
            topLeft.addClass('col-12');
            topLeft.removeClass('col-8');

            topRight.addClass('col-12');
            topRight.removeClass('col-4');

            bottomLeft.addClass('col-12');
            bottomLeft.removeClass('col-8');

            bottomRight.addClass('col-12');
            bottomRight.removeClass('col-4');
        }

        if (imgBukuTop.hasClass('col-12')) {
            imgBukuTop.addClass('col-5');
            imgBukuTop.removeClass('col-12');

            ketBukuLeft.addClass('col-7');
            ketBukuLeft.removeClass('col-12');

            imgBukuBottom.addClass('col-5');
            ketBukuRight.addClass('col-7');
            ketBukuRight.removeClass('col-12');
        }

        // manipulasi html
        if (statusBaca == 0)
            deskBuku.html(deskripsiBuku.substring(0, 400) + '...');
        else
            deskBuku.html(deskripsiBuku);

        // manipulasi css
        $('img', imgBukuTop).css('width', '7.5rem');
        $('img', imgBukuTop).css('height', '11.25rem');
        $('img', imgBukuBottom).css('width', '6rem');
        $('img', imgBukuBottom).css('height', '9.5rem');

    } else if (width < 360) {

        // manipulasi column
        if (topLeft.hasClass('col-8')) {
            topLeft.addClass('col-12');
            topLeft.removeClass('col-8');

            topRight.addClass('col-12');
            topRight.removeClass('col-4');

            bottomLeft.addClass('col-12');
            bottomLeft.removeClass('col-8');

            bottomRight.addClass('col-12');
            bottomRight.removeClass('col-4');
        }

        if (imgBukuTop.hasClass('col-12')) {
            imgBukuTop.addClass('col-5');
            imgBukuTop.removeClass('col-12');

            ketBukuLeft.addClass('col-7');
            ketBukuLeft.removeClass('col-12');

            imgBukuBottom.addClass('col-5');
            ketBukuRight.addClass('col-7');
            ketBukuRight.removeClass('col-12');
        }

        // manipulasi html
        if (statusBaca == 0)
            deskBuku.html(deskripsiBuku.substring(0, 400) + '...');
        else
            deskBuku.html(deskripsiBuku);

        // manipulasi css
        $('img', imgBukuTop).css('width', '7.75rem');
        $('img', imgBukuTop).css('height', '11.75rem');
        $('img', imgBukuBottom).css('width', '6.25rem');
        $('img', imgBukuBottom).css('height', '9.75rem');

    } else if (width < 380) {

        // manipulasi column
        if (topLeft.hasClass('col-8')) {
            topLeft.addClass('col-12');
            topLeft.removeClass('col-8');

            topRight.addClass('col-12');
            topRight.removeClass('col-4');

            bottomLeft.addClass('col-12');
            bottomLeft.removeClass('col-8');

            bottomRight.addClass('col-12');
            bottomRight.removeClass('col-4');
        }

        if (imgBukuTop.hasClass('col-12')) {
            imgBukuTop.addClass('col-5');
            imgBukuTop.removeClass('col-12');

            ketBukuLeft.addClass('col-7');
            ketBukuLeft.removeClass('col-12');

            imgBukuBottom.addClass('col-5');
            ketBukuRight.addClass('col-7');
            ketBukuRight.removeClass('col-12');
        }

        // manipulasi html
        if (statusBaca == 0)
            deskBuku.html(deskripsiBuku.substring(0, 400) + '...');
        else
            deskBuku.html(deskripsiBuku);

        // manipulasi css
        $('img', imgBukuTop).css('width', '8rem');
        $('img', imgBukuTop).css('height', '12rem');
        $('img', imgBukuBottom).css('width', '6.5rem');
        $('img', imgBukuBottom).css('height', '10rem');

    } else if (width < 400) {

        // manipulasi column
        if (topLeft.hasClass('col-8')) {
            topLeft.addClass('col-12');
            topLeft.removeClass('col-8');

            topRight.addClass('col-12');
            topRight.removeClass('col-4');

            bottomLeft.addClass('col-12');
            bottomLeft.removeClass('col-8');

            bottomRight.addClass('col-12');
            bottomRight.removeClass('col-4');
        }

        if (imgBukuTop.hasClass('col-12')) {
            imgBukuTop.addClass('col-5');
            imgBukuTop.removeClass('col-12');

            ketBukuLeft.addClass('col-7');
            ketBukuLeft.removeClass('col-12');

            imgBukuBottom.addClass('col-5');
            ketBukuRight.addClass('col-7');
            ketBukuRight.removeClass('col-12');
        }

        // manipulasi html
        if (statusBaca == 0)
            deskBuku.html(deskripsiBuku.substring(0, 400) + '...');
        else
            deskBuku.html(deskripsiBuku);

        // manipulasi css
        $('img', imgBukuTop).css('width', '8.25rem');
        $('img', imgBukuTop).css('height', '12.25rem');
        $('img', imgBukuBottom).css('width', '6.75rem');
        $('img', imgBukuBottom).css('height', '10.25rem');

    } else if (width < 465) {

        // manipulasi column
        if (topLeft.hasClass('col-8')) {
            topLeft.addClass('col-12');
            topLeft.removeClass('col-8');

            topRight.addClass('col-12');
            topRight.removeClass('col-4');

            bottomLeft.addClass('col-12');
            bottomLeft.removeClass('col-8');

            bottomRight.addClass('col-12');
            bottomRight.removeClass('col-4');
        }

        if (imgBukuTop.hasClass('col-12')) {
            imgBukuTop.addClass('col-5');
            imgBukuTop.removeClass('col-12');

            ketBukuLeft.addClass('col-7');
            ketBukuLeft.removeClass('col-12');

            imgBukuBottom.addClass('col-5');
            ketBukuRight.addClass('col-7');
            ketBukuRight.removeClass('col-12');
        }

        // manipulasi html
        if (statusBaca == 0)
            deskBuku.html(deskripsiBuku.substring(0, 400) + '...');
        else
            deskBuku.html(deskripsiBuku);

        // manipulasi css
        $('img', imgBukuTop).css('width', '8.75rem');
        $('img', imgBukuTop).css('height', '12.25rem');
        $('img', imgBukuBottom).css('width', '7.5rem');
        $('img', imgBukuBottom).css('height', '11.5rem');

    } else if (width < 753) {

        // manipulasi column
        if (topLeft.hasClass('col-8'))
        {
            topLeft.addClass('col-12');
            topLeft.removeClass('col-8');

            topRight.addClass('col-12');
            topRight.removeClass('col-4');

            bottomLeft.addClass('col-12');
            bottomLeft.removeClass('col-8');

            bottomRight.addClass('col-12');
            bottomRight.removeClass('col-4');
        }

        if (imgBukuTop.hasClass('col-12')) {
            imgBukuTop.addClass('col-5');
            imgBukuTop.removeClass('col-12');

            ketBukuLeft.addClass('col-7');
            ketBukuLeft.removeClass('col-12');

            imgBukuBottom.addClass('col-5');
            ketBukuRight.addClass('col-7');
            ketBukuRight.removeClass('col-12');
        }

        // manipulasi html
        if (statusBaca == 0)
            deskBuku.html(deskripsiBuku.substring(0, 650) + '...');
        else
            deskBuku.html(deskripsiBuku);

        // manipulasi css
        $('img', imgBukuTop).css('width', '9.875rem');
        $('img', imgBukuTop).css('height', '15.5rem');
        $('img', imgBukuBottom).css('width', '8rem');
        $('img', imgBukuBottom).css('height', '12.25rem');

    } else if (width < 945) {

        // manipulasi column
        if (topLeft.hasClass('col-12')) {
            topLeft.addClass('col-8');
            topLeft.removeClass('col-12');

            topRight.addClass('col-4');
            topRight.removeClass('col-12');

            bottomLeft.addClass('col-8');
            bottomLeft.removeClass('col-12');

            bottomRight.addClass('col-4');
            bottomRight.removeClass('col-12');
        }

        if (imgBukuTop.hasClass('col-12')) {
            imgBukuTop.addClass('col-5');
            imgBukuTop.removeClass('col-12');

            ketBukuLeft.addClass('col-7');
            ketBukuLeft.removeClass('col-12');

            imgBukuBottom.addClass('col-5');
            ketBukuRight.addClass('col-7');
            ketBukuRight.removeClass('col-12');
        }

        // manipulasi html
        if (statusBaca == 0)
            deskBuku.html(deskripsiBuku.substring(0, 925) + '...');
        else
            deskBuku.html(deskripsiBuku);

        // manipulasi css
        $('img', imgBukuTop).css('width', '10.1875rem');
        $('img', imgBukuTop).css('height', '16rem');
        $('img', imgBukuBottom).css('width', '4.25rem');
        $('img', imgBukuBottom).css('height', '6.75rem');
        
    } else if (width < 1185) {

        // manipulasi column
        if (topLeft.hasClass('col-12')) {
            topLeft.addClass('col-8');
            topLeft.removeClass('col-12');

            topRight.addClass('col-4');
            topRight.removeClass('col-12');

            bottomLeft.addClass('col-8');
            bottomLeft.removeClass('col-12');

            bottomRight.addClass('col-4');
            bottomRight.removeClass('col-12');
        }

        if (imgBukuTop.hasClass('col-12')) {
            imgBukuTop.addClass('col-5');
            imgBukuTop.removeClass('col-12');

            ketBukuLeft.addClass('col-7');
            ketBukuLeft.removeClass('col-12');

            imgBukuBottom.addClass('col-5');
            ketBukuRight.addClass('col-7');
            ketBukuRight.removeClass('col-12');
        }

        // manipulasi html
        if (statusBaca == 0) 
            deskBuku.html(deskripsiBuku.substring(0, 1225) + '...');
        else
            deskBuku.html(deskripsiBuku);

        // manipulasi css
        $('img', imgBukuTop).css('width', '13rem');
        $('img', imgBukuTop).css('height', '20.25rem');
        $('img', imgBukuBottom).css('width', '6.25rem');
        $('img', imgBukuBottom).css('height', '9rem');

    } else if (width >= 1185) {
        
        // manipulasi column
        if (topLeft.hasClass('col-12')) {
            topLeft.addClass('col-8');
            topLeft.removeClass('col-12');

            topRight.addClass('col-4');
            topRight.removeClass('col-12');
            
            bottomLeft.addClass('col-8');
            bottomLeft.removeClass('col-12');

            bottomRight.addClass('col-4');
            bottomRight.removeClass('col-12');
        }

        if (imgBukuTop.hasClass('col-12')) {
            imgBukuTop.addClass('col-5');
            imgBukuTop.removeClass('col-12');

            ketBukuLeft.addClass('col-7');
            ketBukuLeft.removeClass('col-12');

            imgBukuBottom.addClass('col-5');
            ketBukuRight.addClass('col-7');
            ketBukuRight.removeClass('col-12');
        }

        // manipulasi html
        if (statusBaca == 0) 
            deskBuku.html(deskripsiBuku.substring(0, 1225) + '...');
        else
            deskBuku.html(deskripsiBuku);

        // manipulasi css
        $('img', imgBukuTop).css('width', '14.25rem');
        $('img', imgBukuTop).css('height', '20.75rem');
        $('img', imgBukuBottom).css('width', '6.5rem');
        $('img', imgBukuBottom).css('height', '9.25rem');

    }
}


// document ready
responsiveSize();
$(window).resize(responsiveSize);