// responsive - resize window

$(window).ready(responsiveSize);
$(window).resize(responsiveSize);

function responsiveSize() {
    let width = $(window).width();
    $('.angka').html(width);

    const keteranganBuku = $('#product-detail .keterangan-buku');


    if (width < 753) {
        keteranganBuku.css('paddingLeft', '2.75rem');
        $('.btn-beli-sekarang').css('width', '100%');
        $('.btn-tambah-bag').css('width', '100%');
        $('.btn-tambah-bag').css('marginLeft', '-1.5rem');
    }

    else if (width < 945) {
        keteranganBuku.css('paddingLeft', '3rem');
        $('.btn-beli-sekarang').css('width', '85%');
        $('.btn-tambah-bag').css('width', '85%');
        $('.btn-tambah-bag').css('marginLeft', '-2.5rem');
    }


    else if (width < 1185) {
        keteranganBuku.css('paddingLeft', '5rem');
        $('.btn-beli-sekarang').css('width', '80%');
        $('.btn-tambah-bag').css('width', '80%');
        $('.btn-tambah-bag').css('marginLeft', '-3.4375rem');
    }

    else if (width > 1185) {
        keteranganBuku.css('paddingLeft', '2rem');
        $('.btn-beli-sekarang').css('width', '60%');
        $('.btn-tambah-bag').css('width', '60%');
        $('.btn-tambah-bag').css('marginLeft', '-7.6875rem');
    }
}

// responsive - resize window
