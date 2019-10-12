// responsive - resize window

$(window).ready(responsiveSize);
$(window).resize(responsiveSize);

function responsiveSize() {
    let width = $(window).width();

    const productDetail = $('#product-detail .row');
    const keteranganBuku = $('.keterangan-buku', productDetail);
    const imageProduct = $('.image-product', productDetail);


    if (width < 465) {
        if (imageProduct.hasClass('col-5')) {
            imageProduct.addClass('col-12');
            imageProduct.removeClass('col-5');
        }

        if (keteranganBuku.hasClass('col-7')) {
            keteranganBuku.addClass('col-12');
            keteranganBuku.removeClass('col-7');
        }

        keteranganBuku.css('paddingLeft', '2rem');
        $('.btn-beli-sekarang').css('width', '100%');
        $('.btn-tambah-bag').css('width', '100%');
        $('.btn-tambah-bag').css('marginLeft', '-1rem');
    }

    else if (width < 753) {
        if (imageProduct.hasClass('col-12')) {
            imageProduct.addClass('col-5');
            imageProduct.removeClass('col-12');
        }

        if (keteranganBuku.hasClass('col-12')) {
            keteranganBuku.addClass('col-7');
            keteranganBuku.removeClass('col-12');
        }

        keteranganBuku.css('paddingLeft', '2.5rem');
        $('.btn-beli-sekarang').css('width', '100%');
        $('.btn-tambah-bag').css('width', '100%');
        $('.btn-tambah-bag').css('marginLeft', '-1.5rem');
    }

    else if (width < 945) {
        if (imageProduct.hasClass('col-12')) {
            imageProduct.addClass('col-5');
            imageProduct.removeClass('col-12');
        }

        if (keteranganBuku.hasClass('col-12')) {
            keteranganBuku.addClass('col-7');
            keteranganBuku.removeClass('col-12');
        }

        keteranganBuku.css('paddingLeft', '3rem');
        $('.btn-beli-sekarang').css('width', '85%');
        $('.btn-tambah-bag').css('width', '85%');
        $('.btn-tambah-bag').css('marginLeft', '-2.5rem');
    }


    else if (width < 1185) {
        if (imageProduct.hasClass('col-12')) {
            imageProduct.addClass('col-5');
            imageProduct.removeClass('col-12');
        }

        if (keteranganBuku.hasClass('col-12')) {
            keteranganBuku.addClass('col-7');
            keteranganBuku.removeClass('col-12');
        }

        keteranganBuku.css('paddingLeft', '5rem');
        $('.btn-beli-sekarang').css('width', '80%');
        $('.btn-tambah-bag').css('width', '80%');
        $('.btn-tambah-bag').css('marginLeft', '-3.4375rem');
    }

    else if (width > 1185) {
        if (imageProduct.hasClass('col-12')) {
            imageProduct.addClass('col-5');
            imageProduct.removeClass('col-12');
        }

        if (keteranganBuku.hasClass('col-12')) {
            keteranganBuku.addClass('col-7');
            keteranganBuku.removeClass('col-12');
        }

        keteranganBuku.css('paddingLeft', '2rem');
        $('.btn-beli-sekarang').css('width', '60%');
        $('.btn-tambah-bag').css('width', '60%');
        $('.btn-tambah-bag').css('marginLeft', '-7.6875rem');
    }
}

// responsive - resize window
