

// variable global
let toko;
let judulBuku;
let deskBuku;
let textJudul = [];
let textDeskripsi = [];
let success;



// hide confirm
function hideConfirm() {
    $('.dialog-confirm').css('display', 'none');
}


// hide dialog
function hideDialog() {
    $('.dialog-oke').css('display', 'none');

    if (success === 200)
        window.location.href = `${site_url}html/tokoSaya-page.html`;
}


// mark side tab
function borderTab() {
    $('#content .left .tab .toko-saya-tab').addClass('is-active');
}


// direct ke jual buku page
function directJualBukuPage() {
    window.location.href = `${site_url}html/jualBuku-page.html?shop=${toko.shopId}`;
}


// direct ke update buku
function directUpdateBuku(id) {
    window.location.href = `${site_url}html/jualBuku-page.html?update=${id}`;
}


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();

    const buku = $('#content .right .rbody .penjualan .buku');
    const image = $('.image-buku', buku);
    const desk = $('.desk-buku', buku);
    const btnDetail = $('.button-detail', buku);


    if (width < 275) {

        // manipulasi column
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

        // batasan length string
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

        // manipulasi css
        $('img', image).css('width', '100%');
        $('img', image).css('height', '100%');
        $('p.deskripsi', desk).css('display', 'block');

    } else if (width < 305) {

        // manipulasi column
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

        // batasan length string
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

        // manipulasi css
        $('img', image).css('width', '100%');
        $('img', image).css('height', '100%');        
        $('p.deskripsi', desk).css('display', 'block');

    } else if (width < 330) {

        // manipulasi column
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

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 12) {
                let temp = textJudul[i].substring(0, 12) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 12) {
                let temp = textDeskripsi[i].substring(0, 12) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '5.5rem');
        $('img', image).css('height', '8.125rem');

    } else if (width < 355) {

        // manipulasi column
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

        // batasan length string
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

        // manipulasi css
        $('img', image).css('width', '6.125rem');
        $('img', image).css('height', '9.25rem');

    } else if (width < 365) {

        // manipulasi column
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

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 15) {
                let temp = textJudul[i].substring(0, 15) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 32) {
                let temp = textDeskripsi[i].substring(0, 32) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '6.25rem');
        $('img', image).css('height', '9.3125rem');

    } else if (width < 385) {

        // manipulasi column
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

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 16) {
                let temp = textJudul[i].substring(0, 16) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 37) {
                let temp = textDeskripsi[i].substring(0, 37) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '6.3125rem');
        $('img', image).css('height', '9.5rem');

    } else if (width < 405) { 
    
        // manipulasi column
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

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 17) {
                let temp = textJudul[i].substring(0, 17) + "...";
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
        $('img', image).css('width', '7rem');
        $('img', image).css('height', '10.625rem');

    } else if (width < 425) {

        // manipulasi column
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

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 18) {
                let temp = textJudul[i].substring(0, 18) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 62) {
                let temp = textDeskripsi[i].substring(0, 62) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '7.0625rem');
        $('img', image).css('height', '10.5rem');

    } else if (width < 436) {

        // manipulasi column
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

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 19) {
                let temp = textJudul[i].substring(0, 19) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 72) {
                let temp = textDeskripsi[i].substring(0, 72) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '7.375rem');
        $('img', image).css('height', '10.625rem');

    } else if (width < 465) {

        // manipulasi column
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

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 21) {
                let temp = textJudul[i].substring(0, 21) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 107) {
                let temp = textDeskripsi[i].substring(0, 107) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '8rem');
        $('img', image).css('height', '11.75rem');

    } else if (width < 520) {

        // manipulasi column
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

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 12) {
                let temp = textJudul[i].substring(0, 12) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 30) {
                let temp = textDeskripsi[i].substring(0, 30) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '5.875rem');
        $('img', image).css('height', '8.75rem');

    } else if (width < 753) {

        // manipulasi column
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

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 13) {
                let temp = textJudul[i].substring(0, 13) + "...";
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
        $('img', image).css('width', '6.5rem');
        $('img', image).css('height', '10rem');

    } else if (width < 945) {

        // manipulasi column
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

        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 20) {
                let temp = textJudul[i].substring(0, 20) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 157) {
                let temp = textDeskripsi[i].substring(0, 157) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '9.5rem');
        $('img', image).css('height', '14.125rem');

    } else if (width < 1185) {
        
        // manipulasi column
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

        // batasan length string
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

        // manipuilasi css
        $('img', image).css('width', '9.5rem');
        $('img', image).css('height', '14rem');

    } else if (width >= 1185) {

        // manipulasi column
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
        
        // batasan length string
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length > 37) {
                let temp = textJudul[i].substring(0, 37) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textDeskripsi.length; i++) {
            if (textDeskripsi[i].length > 302) {
                let temp = textDeskripsi[i].substring(0, 302) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        $('img', image).css('width', '10.75rem');
        $('img', image).css('height', '15.25rem');    
    }
}


// hapus buku
function hapusBuku(id) {
    hideConfirm();

    if (checkSesi()) {
        let params = new FormData();
        params.append('id', id);

        // tampilkan loading
        $('.loading').css('display', 'flex');

        // hapus data req api
        $.ajax({
            url: `${base_url}products/delete`,
            type: "delete",
            dataType: "json",
            processData: false, // default kirim object/string, form mengandung file
            contentType: false, // default x-www-form-urlencoded

            data: params,

            success: function (response) {
                success = response.status;

                // hilangkan loading
                $('.loading').css('display', 'none');

                // tampilkan pesan dialog
                if (response.status === 200) {
                    $('.dialog-oke .pesan span').html('Buku berhasil dihapus dari toko');
                    $('.dialog-oke').css('display', 'flex');
                } else {
                    $('.dialog-oke .pesan span').html('Gagal! Silahkan coba kembali');
                    $('.dialog-oke').css('display', 'flex');
                }
            }
        });
    }
}


// confirm delete
function confirmDelete(e) {
    let id = $(e).attr('data-id');

    $('.dialog-confirm').css('display', 'flex');
    $('.dialog-confirm .pesan .btn-accept').attr('onclick', `hapusBuku(${id})`);
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


// set toko user
function setShop(response) {
    const toko = $('#content .right .rbody .biodata-toko');
    $('p.nama-toko', toko).html(response.shopName);
    $('p.alamat-toko', toko).html(`${response.shopAddress}, ${response.shopCity}, ${response.shopProvince}`);
}


// set buku yg ada di toko user
function setBuku(response) {
    response.forEach(value => {
        textJudul.push(value.productName);
        textDeskripsi.push(value.productDescription);

        let harga = generateRupiah(value.productPrice);

        $('#content .right .rbody .penjualan .buku').append(`
            <div class="row">

                <!-- image -->
                <div class="col-3 image-buku">
                    <a href="detailProduct-page.html?${value.productId}"><img src="${value.productPhotoLink}"></a>
                </div>
                <!-- image -->

                <!-- desk -->
                <div class="col-7 desk-buku">
                    <a href="detailProduct-page.html?${value.productId}"><p class="judul">${value.productName}</p></a>
                    <p class="deskripsi">${value.productDescription}</p>
                    <p class="harga">Rp. ${harga}</p>
                    <span class="hapus" onclick="confirmDelete(this)" data-id="${value.productId}">Hapus</span>
                    <span class="edit" onclick="directUpdateBuku(${value.productId})">Edit</span>
                </div>
                <!-- desk -->

                <!-- button detail -->
                <div class="col-2 button-detail">
                    <a href="detailProduct-page.html?${value.productId}"><i class="fas fa-eye"></i></a>
                    <p class="tooltip-text"><span>Lihat Buku</span></p>
                </div>
                <!-- button detail -->

            </div>
            <hr>
        `);
    });
}


// get toko user
function getShop() {
    $('.loading').css('display', 'flex'); // tampilkan loading

    $.ajax({
        url: `${base_url}shops/user`,
        type: 'get',
        dataType: 'json',

        data: {
            userId: User.userId
        },

        success: function (response) {
            if (response.status === 200) {
                toko = response.data[0];
                setShop(toko);
            } else {
                $('#content .right .rbody .isEmpty').css('display', 'block');
                $('#content .right .rbody .biodata-toko').css('display', 'none');
                $('#content .right .rbody .penjualan').css('display', 'none');
            }
        }
    }).then(() => {

        $.ajax({
            url: `${base_url}products/shop`,
            type: "get",
            dataType: "json",
            data: {
                shopId: toko.shopId
            },

            success: function (response) {

                // cek apakah toko kosong atau tidak
                if (response.status === 200)
                    setBuku(response.data);
                else
                    $('#content .right .rbody .penjualan .buku .emptyBook').css('display', 'block');

                // hilangkan loading
                $('.loading').css('display', 'none');
            }

        }).then(() => {
            const buku = $('#content .right .rbody .penjualan .buku');
            judulBuku = $('.desk-buku p.judul', buku);
            deskBuku = $('.desk-buku p.deskripsi', buku);
        }).then(() => {
            responsiveSize();
        });
    });
}


// document ready
$(document).ready(() => {

    if (checkSesi())
        getShop();
    else
        window.location.href = `${site_url}html/login-page.html`;

    borderTab();
});

$(window).resize(responsiveSize);