

// ambil data json
const buku = $('#content .right .rbody .wishlist');
let judulBuku = $('.desk-buku p.judul', buku)
let deskBuku = $('.desk-buku p.deskripsi', buku);
let textJudul = [];
let textDeskripsi = [];


// copy data
$.each(judulBuku, (key, value) => {
    textJudul.push(value.innerHTML);
});

$.each(deskBuku, (key, value) => {
    textDeskripsi.push(value.innerHTML);
});


// mark side tab
function borderTab() {
    $('#content .left .tab .wishlist-tab').addClass('is-active');
}


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();
    
    const wish = $('#content .right .rbody .wishlist');
    const image = $('.image-buku', wish);
    const desk = $('.desk-buku', wish);
    const btnBeli = $('.button-beli', wish);


    if (width < 280) {

        // manipulasi column
        if (image.hasClass('col-3')) {
            image.addClass('col-12');
            image.removeClass('col-3');

            desk.addClass('col-12');
            desk.removeClass('col-6');

            btnBeli.addClass('col-12');
            btnBeli.removeClass('col-3');
        }

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 15) {
                let temp = textJudul[i].substring(0, 15) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 73) {
                let temp = textDeskripsi[i].substring(0, 73) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '100%');
        $('img', image).css('height', '100%');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0');
        $('#content .right .rbody .wishlist .desk-buku a.hapus').css('paddingLeft', '0rem');
        $('#content .right .rbody .wishlist .desk-buku p.deskripsi').css('display', 'block');

    } else if (width < 305) {

        // manipulasi column
        if (image.hasClass('col-3')) {
            image.addClass('col-12');
            image.removeClass('col-3');

            desk.addClass('col-12');
            desk.removeClass('col-6');

            btnBeli.addClass('col-12');
            btnBeli.removeClass('col-3');
        }

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 17) {
                let temp = textJudul[i].substring(0, 17) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 83) {
                let temp = textDeskripsi[i].substring(0, 83) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '100%');
        $('img', image).css('height', '100%');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0');
        $('#content .right .rbody .wishlist .desk-buku a.hapus').css('paddingLeft', '0rem');
        $('#content .right .rbody .wishlist .desk-buku p.deskripsi').css('display', 'block');

    } else if (width < 345) {

        // manipulasi column
        if (image.hasClass('col-12')) {
            image.addClass('col-3');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnBeli.addClass('col-3');
            btnBeli.removeClass('col-12');
        }

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 9) {
                let temp = textJudul[i].substring(0, 9) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '7.5rem');
        $('img', image).css('height', '11.25rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 3.375rem');
        $('#content .right .rbody .wishlist .desk-buku a.hapus').css('paddingLeft', '3.375rem');
        $('#content .right .rbody .wishlist .desk-buku p.deskripsi').css('display', 'none');
        
    } else if (width < 385) {

        // manipulasi column
        if (image.hasClass('col-12')) {
            image.addClass('col-3');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnBeli.addClass('col-3');
            btnBeli.removeClass('col-12');
        }

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 11) {
                let temp = textJudul[i].substring(0, 11) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '7.5rem');
        $('img', image).css('height', '11.25rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 3rem');
        $('#content .right .rbody .wishlist .desk-buku a.hapus').css('paddingLeft', '3rem');
        $('#content .right .rbody .wishlist .desk-buku p.deskripsi').css('display', 'none');

    } else if (width < 405) {

        // manipulasi column
        if (image.hasClass('col-12')) {
            image.addClass('col-3');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnBeli.addClass('col-3');
            btnBeli.removeClass('col-12');
        }
        
        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 7) {
                let temp = textJudul[i].substring(0, 7) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 27) {
                let temp = textDeskripsi[i].substring(0, 27) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '8.125rem');
        $('img', image).css('height', '13.125rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 3rem');
        $('#content .right .rbody .wishlist .desk-buku a.hapus').css('paddingLeft', '3rem');
        $('#content .right .rbody .wishlist .desk-buku p.deskripsi').css('display', 'block');
    
    } else if (width < 425) {

        // manipulasi column
        if (image.hasClass('col-12')) {
            image.addClass('col-3');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnBeli.addClass('col-3');
            btnBeli.removeClass('col-12');
        }

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 7) {
                let temp = textJudul[i].substring(0, 7) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 47) {
                let temp = textDeskripsi[i].substring(0, 47) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '8.125rem');
        $('img', image).css('height', '13.125rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 3rem');
        $('#content .right .rbody .wishlist .desk-buku a.hapus').css('paddingLeft', '3rem');
        $('#content .right .rbody .wishlist .desk-buku p.deskripsi').css('display', 'block');

    } else if (width < 436) {

        // manipulasi column
        if (image.hasClass('col-12')) {
            image.addClass('col-3');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnBeli.addClass('col-3');
            btnBeli.removeClass('col-12');
        }

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 10) {
                let temp = textJudul[i].substring(0, 10) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 54) {
                let temp = textDeskripsi[i].substring(0, 54) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '8.125rem');
        $('img', image).css('height', '13.125rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 2.5rem');
        $('#content .right .rbody .wishlist .desk-buku a.hapus').css('paddingLeft', '2.5rem');
        $('#content .right .rbody .wishlist .desk-buku p.deskripsi').css('display', 'block');
        
    } else if (width < 465) {

        // manipulasi column
        if (image.hasClass('col-12')) {
            image.addClass('col-3');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnBeli.addClass('col-3');
            btnBeli.removeClass('col-12');
        }

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 11) {
                let temp = textJudul[i].substring(0, 11) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 59) {
                let temp = textDeskripsi[i].substring(0, 59) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '8.125rem');
        $('img', image).css('height', '13.125rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 2.5rem');
        $('#content .right .rbody .wishlist .desk-buku a.hapus').css('paddingLeft', '2.5rem');
        $('#content .right .rbody .wishlist .desk-buku p.deskripsi').css('display', 'block');

    } else if (width < 520) {

        // manipulasi column
        if (image.hasClass('col-12')) {
            image.addClass('col-3');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnBeli.addClass('col-3');
            btnBeli.removeClass('col-12');
        }

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 9) {
                let temp = textJudul[i].substring(0, 9) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '7.5rem');
        $('img', image).css('height', '11.875rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 3.25rem');
        $('#content .right .rbody .wishlist .desk-buku a.hapus').css('paddingLeft', '3.25rem');
        $('#content .right .rbody .wishlist .desk-buku p.deskripsi').css('display', 'none');

    } else if (width < 753) {

        // manipulasi column
        if (image.hasClass('col-12')) {
            image.addClass('col-3');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnBeli.addClass('col-3');
            btnBeli.removeClass('col-12');
        }

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 12) {
                let temp = textJudul[i].substring(0, 12) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '7.5rem');
        $('img', image).css('height', '11.875rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 3.25rem');
        $('#content .right .rbody .wishlist .desk-buku a.hapus').css('paddingLeft', '3.25rem');
        $('#content .right .rbody .wishlist .desk-buku p.deskripsi').css('display', 'none');

    } else if (width < 945) {

        // manipulasi column
        if (image.hasClass('col-12')) {
            image.addClass('col-3');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnBeli.addClass('col-3');
            btnBeli.removeClass('col-12');
        }

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 14) {
                let temp = textJudul[i].substring(0, 14) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 82) {
                let temp = textDeskripsi[i].substring(0, 82) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '9.375rem');
        $('img', image).css('height', '14.375rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 2.25rem');
        $('#content .right .rbody .wishlist .desk-buku a.hapus').css('paddingLeft', '2.25rem');
        $('#content .right .rbody .wishlist .desk-buku p.deskripsi').css('display', 'block');

    } else if (width < 1185) {

        // manipulasi column
        if (image.hasClass('col-12')) {
            image.addClass('col-3');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnBeli.addClass('col-3');
            btnBeli.removeClass('col-12');
        }

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 24) {
                let temp = textJudul[i].substring(0, 24) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 117) {
                let temp = textDeskripsi[i].substring(0, 117) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '10rem');
        $('img', image).css('height', '15.625rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0');
        $('#content .right .rbody .wishlist .desk-buku a.hapus').css('paddingLeft', '0');
        $('#content .right .rbody .wishlist .desk-buku p.deskripsi').css('display', 'block');

    } else if (width >= 1185) {

        // manipulasi column
        if (image.hasClass('col-12')) {
            image.addClass('col-3');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnBeli.addClass('col-3');
            btnBeli.removeClass('col-12');
        }

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 30) {
                let temp = textJudul[i].substring(0, 30) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 142) {
                let temp = textDeskripsi[i].substring(0, 142) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }
        
        // manipulasi css
        $('img', image).css('width', '11.25rem');
        $('img', image).css('height', '15.9375rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0');
        $('#content .right .rbody .wishlist .desk-buku a.hapus').css('paddingLeft', '0');
        $('#content .right .rbody .wishlist .desk-buku p.deskripsi').css('display', 'block');

    }
}


// document ready
borderTab();
responsiveSize();
$(window).resize(responsiveSize);