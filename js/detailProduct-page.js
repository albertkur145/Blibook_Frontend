

// variable global
let deskripsiBuku;
let readMore;
let deskBuku;
let statusBaca;

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
        $('img', imgBukuTop).css('width', '6.9375rem');
        $('img', imgBukuTop).css('height', '10.375rem');

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
        $('img', imgBukuTop).css('width', '7rem');
        $('img', imgBukuTop).css('height', '10.5rem');

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
        $('img', imgBukuTop).css('width', '7.25rem');
        $('img', imgBukuTop).css('height', '10.625rem');

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
        $('img', imgBukuTop).css('width', '7.5rem');
        $('img', imgBukuTop).css('height', '10.75rem');

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
        $('img', imgBukuTop).css('width', '7.875rem');
        $('img', imgBukuTop).css('height', '10.875rem');

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
        $('img', imgBukuTop).css('width', '8.125rem');
        $('img', imgBukuTop).css('height', '11.125rem');

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
        $('img', imgBukuTop).css('width', '9.75rem');
        $('img', imgBukuTop).css('height', '13.875rem');

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
        $('img', imgBukuBottom).css('height', '6.375rem');
        
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
        $('img', imgBukuTop).css('height', '21.25rem');
        $('img', imgBukuBottom).css('width', '6.5rem');
        $('img', imgBukuBottom).css('height', '9.25rem');
    }
}


// add to bag
function addBag() {

    if (checkSesi()) {
        let id = window.location.search.substring(1);

        // tampilkan loading
        $('.loading').css('display', 'flex');

        // post data ke bag
        $.ajax({
            url: `${base_url}carts/addProduct`,
            type: "post",
            dataType: "json",

            data: {
                userId: User.userId,
                productId: id
            },

            success: function () {
                window.location.href = `${site_url}html/bag-page.html`;
            }
        });
    } else {
        // tampilkan pesan dialog
        $('.dialog-oke .pesan span').html('Silahkan login terlebih dahulu');
        $('.dialog-oke').css('display', 'flex');
    }
}


// add to wishlist
function addWishlist() {

    if (checkSesi()) {
        let id = window.location.search.substring(1);

        // tampilkan loading
        $('.loading').css('display', 'flex');

        // post buku ke wishlist
        $.ajax({
            url: `${base_url}wishlists/addProduct`,
            type: "post",
            dataType: "json",

            data: {
                userId: User.userId,
                productId: id
            },

            success: function() {
                // hilangkan loading
                $('.loading').css('display', 'none');

                // tampilkan pesan dialog
                $('.dialog-oke .pesan span').html('Buku berhasil ditambahkan ke wishlist');
                $('.dialog-oke').css('display', 'flex');
            }
        });
    } else {
        // tampilkan pesan dialog
        $('.dialog-oke .pesan span').html('Silahkan login terlebih dahulu');
        $('.dialog-oke').css('display', 'flex');
    }

}


// hide dialog
function hideDialog() {
    $('.dialog-oke').css('display', 'none');
}


// generate format rupiah
function generateRupiah(angka) {
    if (angka != 0) {
        let harga = angka.toString();                           // misal : 75250330

        let sisa = harga.length % 3;                            // cari sisa bagi length, hasil : 2
        let rupiah = harga.substring(0, sisa);                  // substring untuk dapat angka depan, hasil : 75
        let belakang = harga.substring(sisa).match(/\d{3}/g);   // substring untuk dapat angka belakang, hasil : [250, 330]
                                                                // match return array, test return boolean, /g semua match
        let penghubung = sisa ? '.' : '';                       // jika ada sisa, maka penghubungnya adalah .
        rupiah += penghubung + belakang.join('.');              // 75 += . + 250.330   HASIL : 75.250.330

        return rupiah;
    }

    return 0;
}


// set buku detail ke dom
function setBukuDetail(value) {
    const topLeft = $('#detail-product .top .left');
    const topRight = $('#detail-product .top .right');
    const ketBuku = $('#detail-product .top .left .ket-buku');
    const bottom = $('#detail-product .bottom');

    // cari produk yang diklik user
    let harga = generateRupiah(value.productPrice)

    $('.image-buku', topLeft).html(`<img src="${value.productPhotoLink}">`);
    $('.judul', ketBuku).html(`<p>${value.productName}</p>`)
    $('.value-penulis', ketBuku).html(`<p class="value">${value.productAuthor}</p>`);
    $('.value-isbn', ketBuku).html(`<p class="value">${value.productIsbn}</p>`);
    $('.value-kategori', ketBuku).html(`<p class="value">${value.productCategory} / ${value.productReleaseYear}</p>`);
    $('.value-halaman', ketBuku).html(`<p class="value">${value.productLength}</p>`);
    $('.value-bahasa', ketBuku).html(`<p class="value">${value.productLanguage}</p>`);
    $('.value-harga', ketBuku).html(`<p class="harga">Rp. ${harga}</p>`);
    $('.left .deskripsi .desk', bottom).html(`${value.productDescription}`);
    // $('.right .image-buku', bottom).html(`<img src="../pictures/${value.productPhotoLink}">`);
    // $('.right .ket-buku p.judul-buku').html(`${value.productName}`);
    // $('.right .ket-buku p.harga').html(`Rp. ${harga}`);

    $('.box-toko').html(`
        <h2 class="nama-toko">${value.shopName}</h2>
        <p>${value.shopAddress}</p>
        <p>${value.shopCity}, ${value.shopProvince}</p>
    `);
}


// get detail buku
function getDetailBuku() {
    let id = window.location.search.substring(1);

    // tampilkan loading
    $('.loading').css('display', 'flex');

    // get detail buku
    $.ajax({
        url: `${base_url}products`,
        type: "get",
        dataType: "json",

        data: {
            id: id
        },

        success: function (response) {
            setBukuDetail(response);

            // hilangkan loading
            $('.loading').css('display', 'none');
        }

    }).then(() => {
        deskripsiBuku = $('#detail-product .bottom .left .deskripsi p.desk').text();
        readMore = $('#detail-product .bottom .left .deskripsi p.read-more');
        deskBuku = $('#detail-product .bottom .left .deskripsi p.desk');
        statusBaca = 0;
    }).then(() => {
        responsiveSize();
    });
}


// document ready
$(document).ready(() => {
    getDetailBuku();
});

$(window).resize(responsiveSize);