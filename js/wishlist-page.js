
// ambil data json
const buku = $('#content .right .rbody .wishlist');
let judulBuku = $('.desk-buku p.judul', buku)
let deskBuku = $('.desk-buku p.deskripsi', buku);
let textJudul = [];
let textDeskripsi = [];

console.log(judulBuku);

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
    const desk = $('.desk-buku', wish);
    const btnBeli = $('.button-beli', wish);


    if (width < 436) {

        // if (image.hasClass('col-3')) {
        //     image.addClass('col-12');
        //     image.removeClass('col-3');
        // }

        // if (desk.hasClass('col-6')) {
        //     desk.addClass('col-12');
        //     desk.removeClass('col-6');
        // }

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 10) {
                let temp = textJudul[i].substring(0, 10) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 52) {
                let temp = textDeskripsi[i].substring(0, 52) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }
    }

    else if (width < 465) {
        $('img', image).css('width', '8.125rem');
        $('img', image).css('height', '13.125rem');

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 11) {
                let temp = textJudul[i].substring(0, 11) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 67) {
                let temp = textDeskripsi[i].substring(0, 67) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }
    }
    
    else if (width < 520) {
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 9) {
                let temp = textJudul[i].substring(0, 9) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }
    }


    else if (width < 753) {
        $('img', image).css('width', '7.5rem');
        $('img', image).css('height', '11.875rem');

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 12) {
                let temp = textJudul[i].substring(0, 12) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }
    }

    else if (width < 945) {
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
