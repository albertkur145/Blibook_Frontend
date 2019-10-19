
// ambil data json
const buku = $('#content .right .rbody .wishlist');
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
    const wish = $('#content .right .rbody .wishlist');
    const image = $('.image-buku', wish);


    if (width < 945) {
        $('img', image).css('width', '9.375rem');
        $('img', image).css('height', '14.375rem');

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
    }

    else if (width < 1185) {
        $('img', image).css('width', '10rem');
        $('img', image).css('height', '15.625rem');

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
    }

    else if (width >= 1185) {
        $('img', image).css('width', '11.25rem');
        $('img', image).css('height', '15.9375rem');

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
    }
}
// responsive - resize window


// mark tab
function borderTab() {
    $('#content .left .tab .wishlist-tab').addClass('is-active');
}
// mark tab
