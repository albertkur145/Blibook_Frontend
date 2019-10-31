
// ambil data json
const buku = $('#content .right .rbody .penjualan .buku');
let judulBuku = $('.desk-buku p.judul', buku)
let deskBuku = $('.desk-buku p.deskripsi', buku);
let textJudul = [];
let textDeskripsi = [];


$.each(judulBuku, (key, value) => {
    textJudul.push(value.innerHTML);
});

$.each(deskBuku, (key, value) => {
    textDeskripsi.push(value.innerHTML);
});
// ambil data json


$(window).ready(DOM_Manipulation);
$(window).resize(responsiveSize);


// saat window ready
responsiveSize();

function DOM_Manipulation() {
    borderTab();
}
// saat window ready


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();
    $('.angka').html(width);

    const buku = $('#content .right .rbody .penjualan .buku');
    const image = $('.image-buku', buku);
    const desk = $('.desk-buku', buku);
    const btnDetail = $('.button-detail', buku);


    if (width < 520) {

        if (image.hasClass('col-3')) {
            image.addClass('col-4');
            image.removeClass('col-3');

            desk.addClass('col-6');
            desk.removeClass('col-7');
        }

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 24) {
                let temp = textJudul[i].substring(0, 24) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        $('img', image).css('width', '6.125rem');
        $('img', image).css('height', '10rem');
        $('p.deskripsi', desk).css('display', 'none');

    } else if (width < 753) {

        if (image.hasClass('col-3')) {
            image.addClass('col-4');
            image.removeClass('col-3');

            desk.addClass('col-6');
            desk.removeClass('col-7');
        }

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 33) {
                let temp = textJudul[i].substring(0, 33) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        $('img', image).css('width', '6.5rem');
        $('img', image).css('height', '10rem');
        $('p.deskripsi', desk).css('display', 'none');

    } else if (width < 945) {

        if (image.hasClass('col-3')) {
            image.addClass('col-4');
            image.removeClass('col-3');

            desk.addClass('col-6');
            desk.removeClass('col-7');
        }

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 24) {
                let temp = textJudul[i].substring(0, 24) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 123) {
                let temp = textDeskripsi[i].substring(0, 123) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        $('img', image).css('width', '9.375rem');
        $('img', image).css('height', '14.375rem');
        $('p.deskripsi', desk).css('display', 'block');

    } else if (width < 1185) {
        
        if (image.hasClass('col-4')) {
            image.addClass('col-3');
            image.removeClass('col-4');

            desk.addClass('col-7');
            desk.removeClass('col-6');
        }

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 35) {
                let temp = textJudul[i].substring(0, 35) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 187) {
                let temp = textDeskripsi[i].substring(0, 187) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        $('img', image).css('width', '10rem');
        $('img', image).css('height', '15.75rem');
        $('p.deskripsi', desk).css('display', 'block');

    } else if (width >= 1185) {

        if (image.hasClass('col-4')) {
            image.addClass('col-3');
            image.removeClass('col-4');

            desk.addClass('col-7');
            desk.removeClass('col-6');
        }
        
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 37) {
                let temp = textJudul[i].substring(0, 37) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 233) {
                let temp = textDeskripsi[i].substring(0, 233) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        $('img', image).css('width', '11rem');
        $('img', image).css('height', '15.9375rem');    
        $('p.deskripsi', desk).css('display', 'block');
    }
}
// responsive - resize window


// mark tab
function borderTab() {
    $('#content .left .tab .toko-saya-tab').addClass('is-active');
}
// mark tab