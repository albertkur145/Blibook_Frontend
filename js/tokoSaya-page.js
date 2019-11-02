
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

    const buku = $('#content .right .rbody .penjualan .buku');
    const image = $('.image-buku', buku);
    const desk = $('.desk-buku', buku);
    const btnDetail = $('.button-detail', buku);


    if (width < 275) {

        if (image.hasClass('col-3')) {
            image.addClass('col-12');
            image.removeClass('col-3');

            desk.addClass('col-12');
            desk.removeClass('col-7');

            btnDetail.addClass('col-12');
            btnDetail.removeClass('col-2');
        } else if (image.hasClass('col-4')) {
            image.addClass('col-12');
            image.removeClass('col-4');

            desk.addClass('col-12');
            desk.removeClass('col-6');

            btnDetail.addClass('col-12');
            btnDetail.removeClass('col-2');
        }

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 18) {
                let temp = textJudul[i].substring(0, 18) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 197) {
                let temp = textDeskripsi[i].substring(0, 197) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        $('img', image).css('width', '100%');
        $('img', image).css('height', '100%');
        $('p.deskripsi', desk).css('display', 'block');

    } else if (width < 305) {

        if (image.hasClass('col-3')) {
            image.addClass('col-12');
            image.removeClass('col-3');

            desk.addClass('col-12');
            desk.removeClass('col-7');

            btnDetail.addClass('col-12');
            btnDetail.removeClass('col-2');
        } else if (image.hasClass('col-4')) {
            image.addClass('col-12');
            image.removeClass('col-4');

            desk.addClass('col-12');
            desk.removeClass('col-6');

            btnDetail.addClass('col-12');
            btnDetail.removeClass('col-2');
        }

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 22) {
                let temp = textJudul[i].substring(0, 22) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 207) {
                let temp = textDeskripsi[i].substring(0, 207) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        $('img', image).css('width', '100%');
        $('img', image).css('height', '100%');        
        $('p.deskripsi', desk).css('display', 'block');

    } else if (width < 330) {

        if (image.hasClass('col-3')) {
            image.addClass('col-4');
            image.removeClass('col-3');

            desk.addClass('col-6');
            desk.removeClass('col-7');
        } else if (image.hasClass('col-12')) {
            image.addClass('col-4');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnDetail.addClass('col-2');
            btnDetail.removeClass('col-12');
        }

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 19) {
                let temp = textJudul[i].substring(0, 19) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        $('img', image).css('width', '5.625rem');
        $('img', image).css('height', '8.4375rem');
        $('p.deskripsi', desk).css('display', 'none');

    } else if (width < 355) {

        if (image.hasClass('col-3')) {
            image.addClass('col-4');
            image.removeClass('col-3');

            desk.addClass('col-6');
            desk.removeClass('col-7');
        } else if (image.hasClass('col-12')) {
            image.addClass('col-4');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnDetail.addClass('col-2');
            btnDetail.removeClass('col-12');
        }

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 12) {
                let temp = textJudul[i].substring(0, 12) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 29) {
                let temp = textDeskripsi[i].substring(0, 29) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        $('img', image).css('width', '6.25rem');
        $('img', image).css('height', '10.0625rem');
        $('p.deskripsi', desk).css('display', 'block');

    } else if (width < 365) {

        if (image.hasClass('col-3')) {
            image.addClass('col-4');
            image.removeClass('col-3');

            desk.addClass('col-6');
            desk.removeClass('col-7');
        } else if (image.hasClass('col-12')) {
            image.addClass('col-4');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnDetail.addClass('col-2');
            btnDetail.removeClass('col-12');
        }

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 13) {
                let temp = textJudul[i].substring(0, 13) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 32) {
                let temp = textDeskripsi[i].substring(0, 32) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        $('img', image).css('width', '6.375rem');
        $('img', image).css('height', '10.125rem');
        $('p.deskripsi', desk).css('display', 'block');

    } else if (width < 385) {

        if (image.hasClass('col-3')) {
            image.addClass('col-4');
            image.removeClass('col-3');

            desk.addClass('col-6');
            desk.removeClass('col-7');
        } else if (image.hasClass('col-12')) {
            image.addClass('col-4');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnDetail.addClass('col-2');
            btnDetail.removeClass('col-12');
        }

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 14) {
                let temp = textJudul[i].substring(0, 14) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 37) {
                let temp = textDeskripsi[i].substring(0, 37) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        $('img', image).css('width', '6.375rem');
        $('img', image).css('height', '10.125rem');
        $('p.deskripsi', desk).css('display', 'block');

    } else if (width < 405) { 
    
        if (image.hasClass('col-3')) {
            image.addClass('col-4');
            image.removeClass('col-3');

            desk.addClass('col-6');
            desk.removeClass('col-7');
        } else if (image.hasClass('col-12')) {
            image.addClass('col-4');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnDetail.addClass('col-2');
            btnDetail.removeClass('col-12');
        }

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 15) {
                let temp = textJudul[i].substring(0, 15) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 67) {
                let temp = textDeskripsi[i].substring(0, 67) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        $('img', image).css('width', '7.125rem');
        $('img', image).css('height', '11.25rem');
        $('p.deskripsi', desk).css('display', 'block');

    } else if (width < 425) {

        if (image.hasClass('col-3')) {
            image.addClass('col-4');
            image.removeClass('col-3');

            desk.addClass('col-6');
            desk.removeClass('col-7');
        } else if (image.hasClass('col-12')) {
            image.addClass('col-4');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnDetail.addClass('col-2');
            btnDetail.removeClass('col-12');
        }

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 17) {
                let temp = textJudul[i].substring(0, 17) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 72) {
                let temp = textDeskripsi[i].substring(0, 72) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        $('img', image).css('width', '7.125rem');
        $('img', image).css('height', '11.25rem');
        $('p.deskripsi', desk).css('display', 'block');

    } else if (width < 436) {

        if (image.hasClass('col-3')) {
            image.addClass('col-4');
            image.removeClass('col-3');

            desk.addClass('col-6');
            desk.removeClass('col-7');
        } else if (image.hasClass('col-12')) {
            image.addClass('col-4');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnDetail.addClass('col-2');
            btnDetail.removeClass('col-12');
        }

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 17) {
                let temp = textJudul[i].substring(0, 17) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 97) {
                let temp = textDeskripsi[i].substring(0, 97) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        $('img', image).css('width', '7.75rem');
        $('img', image).css('height', '12.4375rem');
        $('p.deskripsi', desk).css('display', 'block');

    } else if (width < 465) {

        if (image.hasClass('col-3')) {
            image.addClass('col-4');
            image.removeClass('col-3');

            desk.addClass('col-6');
            desk.removeClass('col-7');
        } else if (image.hasClass('col-12')) {
            image.addClass('col-4');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnDetail.addClass('col-2');
            btnDetail.removeClass('col-12');
        }


        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 18) {
                let temp = textJudul[i].substring(0, 18) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 103) {
                let temp = textDeskripsi[i].substring(0, 103) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        $('img', image).css('width', '8rem');
        $('img', image).css('height', '12.5rem');
        $('p.deskripsi', desk).css('display', 'block');

    } else if (width < 520) {

        if (image.hasClass('col-3')) {
            image.addClass('col-4');
            image.removeClass('col-3');

            desk.addClass('col-6');
            desk.removeClass('col-7');
        } else if (image.hasClass('col-12')) {
            image.addClass('col-4');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnDetail.addClass('col-2');
            btnDetail.removeClass('col-12');
        }

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 19) {
                let temp = textJudul[i].substring(0, 19) + "...";
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
        } else if (image.hasClass('col-12')) {
            image.addClass('col-4');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnDetail.addClass('col-2');
            btnDetail.removeClass('col-12');
        }

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 21) {
                let temp = textJudul[i].substring(0, 21) + "...";
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
        } else if (image.hasClass('col-12')) {
            image.addClass('col-4');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnDetail.addClass('col-2');
            btnDetail.removeClass('col-12');
        }

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 20) {
                let temp = textJudul[i].substring(0, 20) + "...";
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
        } else if (image.hasClass('col-12')) {
            image.addClass('col-4');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnDetail.addClass('col-2');
            btnDetail.removeClass('col-12');
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
        } else if (image.hasClass('col-12')) {
            image.addClass('col-4');
            image.removeClass('col-12');

            desk.addClass('col-6');
            desk.removeClass('col-12');

            btnDetail.addClass('col-2');
            btnDetail.removeClass('col-12');
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