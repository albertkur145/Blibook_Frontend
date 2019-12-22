

// variable global
let judulBuku;
let deskBuku;
let textJudul = [];
let textDeskripsi = [];


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
            if (textJudul[i].length > 21) {
                let temp = textJudul[i].substring(0, 21) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 167) {
                let temp = textDeskripsi[i].substring(0, 167) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '100%');
        $('img', image).css('height', '100%');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0');
        $('#content .right .rbody .wishlist .desk-buku span.hapus').css('paddingLeft', '0rem');

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
            if (textJudul[i].length > 25) {
                let temp = textJudul[i].substring(0, 25) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 192) {
                let temp = textDeskripsi[i].substring(0, 192) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '100%');
        $('img', image).css('height', '100%');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0');
        $('#content .right .rbody .wishlist .desk-buku span.hapus').css('paddingLeft', '0rem');

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
            if (textJudul[i].length > 4) {
                let temp = textJudul[i].substring(0, 4) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 15) {
                let temp = textDeskripsi[i].substring(0, 15) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '7.5rem');
        $('img', image).css('height', '10.5rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 3.375rem');
        $('#content .right .rbody .wishlist .desk-buku span.hapus').css('paddingLeft', '3.375rem');
        
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
            if (textJudul[i].length > 7) {
                let temp = textJudul[i].substring(0, 7) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 20) {
                let temp = textDeskripsi[i].substring(0, 20) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '7.5rem');
        $('img', image).css('height', '10.625rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 3rem');
        $('#content .right .rbody .wishlist .desk-buku span.hapus').css('paddingLeft', '3rem');

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
            if (textJudul[i].length > 9) {
                let temp = textJudul[i].substring(0, 9) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 43) {
                let temp = textDeskripsi[i].substring(0, 43) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '8.125rem');
        $('img', image).css('height', '10.9375rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 3rem');
        $('#content .right .rbody .wishlist .desk-buku span.hapus').css('paddingLeft', '3rem');
    
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
            if (textJudul[i].length > 10) {
                let temp = textJudul[i].substring(0, 10) + "...";
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
        $('img', image).css('height', '11rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 3rem');
        $('#content .right .rbody .wishlist .desk-buku span.hapus').css('paddingLeft', '3rem');
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
            if (textDeskripsi[i].length > 57) {
                let temp = textDeskripsi[i].substring(0, 57) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '8.125rem');
        $('img', image).css('height', '11rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 2.5rem');
        $('#content .right .rbody .wishlist .desk-buku span.hapus').css('paddingLeft', '2.5rem');
        
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
            if (textJudul[i].length > 12) {
                let temp = textJudul[i].substring(0, 12) + "...";
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
        $('img', image).css('height', '11.125rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 2.5rem');
        $('#content .right .rbody .wishlist .desk-buku span.hapus').css('paddingLeft', '2.5rem');

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
            if (textJudul[i].length > 5) {
                let temp = textJudul[i].substring(0, 5) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 22) {
                let temp = textDeskripsi[i].substring(0, 22) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '7.5rem');
        $('img', image).css('height', '10.5rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 3.25rem');
        $('#content .right .rbody .wishlist .desk-buku span.hapus').css('paddingLeft', '3.25rem');

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
            if (textJudul[i].length > 7) {
                let temp = textJudul[i].substring(0, 7) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 35) {
                let temp = textDeskripsi[i].substring(0, 35) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '7.5rem');
        $('img', image).css('height', '10.6875rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 3.25rem');
        $('#content .right .rbody .wishlist .desk-buku span.hapus').css('paddingLeft', '3.25rem');
        // $('#content .right .rbody .wishlist .desk-buku .deskripsi').css('display', 'none');

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
            if (textDeskripsi[i].length > 102) {
                let temp = textDeskripsi[i].substring(0, 102) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '9.375rem');
        $('img', image).css('height', '13.25rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0 0.125rem 2.25rem');
        $('#content .right .rbody .wishlist .desk-buku span.hapus').css('paddingLeft', '2.25rem');

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
            if (textDeskripsi[i].length > 112) {
                let temp = textDeskripsi[i].substring(0, 112) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '10rem');
        $('img', image).css('height', '13.5rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0');
        $('#content .right .rbody .wishlist .desk-buku span.hapus').css('paddingLeft', '0');

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
            if (textDeskripsi[i].length > 232) {
                let temp = textDeskripsi[i].substring(0, 232) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }
        
        // manipulasi css
        $('img', image).css('width', '11.25rem');
        $('img', image).css('height', '15.625rem');
        $('#content .right .rbody .wishlist .desk-buku p').css('padding', '0.125rem 0');
        $('#content .right .rbody .wishlist .desk-buku span.hapus').css('paddingLeft', '0');
    }
}


// hapus buku
function hapusBuku() {

    // tampilkan loading
    $('.loading').css('display', 'flex');

    // post data ke wishlist
    $.ajax({
        url: "../json/buku.json",
        type: "get",
        dataType: "json",

        success: function (response) {
            console.log('Sukses Delete');
        }
    }).then(() => {

        // hilangkan loading
        $('.loading').css('display', 'none');

        // tampilkan pesan dialog
        $('.dialog-oke').css('display', 'flex');
    });

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


// get wishlist user
function getWishlistUser(response) {

    response.forEach(value => {
        let harga = generateRupiah(value.productPrice);
        textJudul.push(value.productName);
        textDeskripsi.push(value.productDescription);
            
        $('#content .right .rbody .wishlist').append(`
            <div class="row">
                <!-- image -->
                <div class="col-3 image-buku">
                    <a href="detailProduct-page.html?${value.productId}"><img src="../pictures/${value.productPhotoLink}"></a>
                </div>
                <!-- image -->
                
                <!-- desk -->
                <div class="col-6 desk-buku">
                    <a href="detailProduct-page.html?${value.productId}"><p class="judul">${value.productName}</p></a>
                    <p class="deskripsi">${value.productDescription}</p>
                    <p class="harga">Rp. ${harga}</p>
                    <span class="hapus" onclick="hapusBuku()">Hapus</span>
                </div>
                <!-- desk -->

                <!-- button beli -->
                <div class="col-3 button-beli">
                    <a href="bag-page.html">Beli</a>
                </div>
                <!-- button beli -->
            </div>

            <hr>
        `);
    });
    
}


// document ready
$(document).ready(() => {

    // tampilkan loading
    $('.loading').css('display', 'flex');

    $.ajax({
        url: "../json/wishlist.json",
        type: "get",
        dataType: "json",

        success: function(response) {
            if (response.length === 0) 
                $('#content .right .rbody .wishlist .isEmpty').css('display', 'block');
            else
                getWishlistUser(response);

            // hilangkan loading
            $('.loading').css('display', 'none');
        }
        
    }).then(() => {
        const buku = $('#content .right .rbody .wishlist');
        judulBuku = $('.desk-buku p.judul', buku);
        deskBuku = $('.desk-buku p.deskripsi', buku);
    }).then(() => {
        borderTab();
        responsiveSize();
    });

    
})

$(window).resize(responsiveSize);