
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

    if (width >= 1185) {

        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 37) {
                let temp = textJudul[i].substring(0, 37) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 193) {
                let temp = textDeskripsi[i].substring(0, 193) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

    }
}
// responsive - resize window


// mark tab
function borderTab() {
    $('#content .left .tab .toko-saya-tab').addClass('is-active');
}
// mark tab