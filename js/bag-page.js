

// variabel global
let jumlahBeli = [];
let totalHarga = 0;    
let success;


// hide confirm
function hideConfirm() {
    $('.dialog-confirm').css('display', 'none');
}


// hide dialog
function hideDialog() {
    $('.dialog-oke').css('display', 'none');

    if (success === 200)
        window.location.href = `${site_url}html/bag-page.html`;
}


// button beli enable/disable
function enableButtonBeli(jumlahBeli) {
    const btnBeli = $('#produk .right .detail-pembelian button.btn-beli');

    if (jumlahBeli > 0) {
        btnBeli.css('backgroundColor', '#FF8A00');
        btnBeli.css('cursor', 'pointer');

        btnBeli.hover(() => {
            btnBeli.css('backgroundColor', '#FF9416');
        }, () => {
            btnBeli.css('backgroundColor', '#FF8A00');
        });
    } else {
        btnBeli.css('backgroundColor', '#ACACAC');
        btnBeli.css('cursor', 'not-allowed');

        btnBeli.hover(() => {
            btnBeli.css('backgroundColor', '#A8A8A8');
        }, () => {
            btnBeli.css('backgroundColor', '#ACACAC');
        });
    }
}


// check all (pilih semua)
function checkAll() {
    let checkboxAll = $(`input[type="checkbox"]`);
    jumlahBeli = [];
    totalHarga = 0;

    if($('#check-pilih-semua')[0].checked) {
        $.each(checkboxAll, (key, value) => {
            value.checked = true;

            if (key != 0) {
                jumlahBeli.push($(value).attr('data-id'));
                totalHarga += parseInt($(value).attr('data-harga'));
            }
        });
    } else {
        $.each(checkboxAll, (key, value) => {
            value.checked = false;
            jumlahBeli = [];
            totalHarga = 0;
        });
    }

    // manipulasi dom
    let temp = generateRupiah(totalHarga);
    $('#produk .right .detail-pembelian button.btn-beli').html(`Beli (${jumlahBeli.length})`);
    $('#produk .right .detail-pembelian .total-harga').html(`<p>Rp. ${temp}</p>`);

    enableButtonBeli(jumlahBeli.length);
}


// check one
function checkOne() {
    let checkboxAll = $(`input[type="checkbox"]`);
    jumlahBeli = [];
    totalHarga = 0;

    $('#check-pilih-semua')[0].checked = false;              // checkbox pilih semua di false
    
    $.each(checkboxAll, (key, value) => {
        if (value.checked == true && key != 0) {
            jumlahBeli.push($(value).attr('data-id'));
            totalHarga += parseInt($(value).attr('data-harga'));
        }
    });
    
    // manipulasi dom
    let temp = generateRupiah(totalHarga);
    $('#produk .right .detail-pembelian button.btn-beli').html(`Beli (${jumlahBeli.length})`);
    $('#produk .right .detail-pembelian .total-harga').html(`<p>Rp. ${temp}</p>`);

    enableButtonBeli(jumlahBeli.length);
}


// beli buku
function beliBuku() {
    if (jumlahBeli.length > 0) {
        localStorage.setItem('bag', JSON.stringify(jumlahBeli));
        window.location.href = `${site_url}html/orderList-page.html`;
    } 
}


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();

    const left = $('#produk .left');
    const right = $('#produk .right');
    const detailBuku = $('.buku .detail-buku', left);
    const imgBuku = $('.img-buku', detailBuku);
    const deskBuku = $('.desk-buku', detailBuku);

    if (width < 320) {

        // manipulasi column
        if (left.hasClass('col-8')) {
            left.addClass('col-12');
            left.removeClass('col-8');
            right.addClass('col-12');
            right.removeClass('col-4');
        }

        if (detailBuku.hasClass('col-11')) {
            detailBuku.addClass('col-10');
            detailBuku.removeClass('col-11');
        }

        if (imgBuku.hasClass('col-3')) {
            imgBuku.addClass('col-12');
            imgBuku.removeClass('col-3');

            deskBuku.addClass('col-12');
            deskBuku.removeClass('col-9');
        }

        if (imgBuku.hasClass('col-4')) {
            imgBuku.addClass('col-12');
            imgBuku.removeClass('col-4');

            deskBuku.addClass('col-12');
            deskBuku.removeClass('col-8');
        }

        // manipulasi css
        $('#produk .left .buku .detail-buku .desk-buku p.judul').css('marginTop', '1rem');
        $('#produk .left .buku .detail-buku .img-buku img').css('border', '0.0625rem solid #D5D5D5');
        $('#produk .left .buku .detail-buku .img-buku img').css('borderRadius', '0.5rem');
        $('#produk .left .buku .detail-buku .img-buku img').css('padding', '0.75rem');

    } else if (width < 380) {

        // manipulasi column
        if (left.hasClass('col-8')) {
            left.addClass('col-12');
            left.removeClass('col-8');
            right.addClass('col-12');
            right.removeClass('col-4');
        }

        if (detailBuku.hasClass('col-11')) {
            detailBuku.addClass('col-10');
            detailBuku.removeClass('col-11');
        }

        if (imgBuku.hasClass('col-3')) {
            imgBuku.addClass('col-12');
            imgBuku.removeClass('col-3');

            deskBuku.addClass('col-12');
            deskBuku.removeClass('col-9');
        }

        if (imgBuku.hasClass('col-4')) {
            imgBuku.addClass('col-12');
            imgBuku.removeClass('col-4');

            deskBuku.addClass('col-12');
            deskBuku.removeClass('col-8');
        }

        // manipulasi css
        $('#produk .left .buku .detail-buku .desk-buku p.judul').css('marginTop', '1rem');
        $('#produk .left .buku .detail-buku .img-buku img').css('border', '0.0625rem solid #D5D5D5');
        $('#produk .left .buku .detail-buku .img-buku img').css('borderRadius', '0.5rem');
        $('#produk .left .buku .detail-buku .img-buku img').css('padding', '1rem');

    } else if (width < 753) {

        // manipulasi column
        if (left.hasClass('col-8')) {
            left.addClass('col-12');
            left.removeClass('col-8'); 
            right.addClass('col-12');
            right.removeClass('col-4');
        }

        if (detailBuku.hasClass('col-10')) {
            detailBuku.addClass('col-11');
            detailBuku.removeClass('col-10');
        }

        if (imgBuku.hasClass('col-3')) {
            imgBuku.addClass('col-4');
            imgBuku.removeClass('col-3');

            deskBuku.addClass('col-8');
            deskBuku.removeClass('col-9');
        }

        if (imgBuku.hasClass('col-12')) {
            imgBuku.addClass('col-4');
            imgBuku.removeClass('col-12');

            deskBuku.addClass('col-8');
            deskBuku.removeClass('col-12');
        }

        // manipulasi css
        $('#produk .left .buku .detail-buku .desk-buku p.judul').css('marginTop', '0rem');
        $('#produk .left .buku .detail-buku .img-buku img').css('border', '0');
        $('#produk .left .buku .detail-buku .img-buku img').css('borderRadius', '0');
        $('#produk .left .buku .detail-buku .img-buku img').css('padding', '0');

    } else if (width < 945) {

        // manipulasi column
        if (left.hasClass('col-12')) {
            left.addClass('col-8');
            left.removeClass('col-12');

            right.addClass('col-4');
            right.removeClass('col-12');
        }

        if (detailBuku.hasClass('col-10')) {
            detailBuku.addClass('col-11');
            detailBuku.removeClass('col-10');
        }

        if (imgBuku.hasClass('col-3')) {
            imgBuku.addClass('col-4');
            imgBuku.removeClass('col-3');

            deskBuku.addClass('col-8');
            deskBuku.removeClass('col-9');
        }

        if (imgBuku.hasClass('col-12')) {
            imgBuku.addClass('col-4');
            imgBuku.removeClass('col-12');

            deskBuku.addClass('col-8');
            deskBuku.removeClass('col-12');
        }

        // manipulasi css
        $('#produk .left .buku .detail-buku .desk-buku p.judul').css('marginTop', '0rem');
        $('#produk .left .buku .detail-buku .img-buku img').css('border', '0');
        $('#produk .left .buku .detail-buku .img-buku img').css('borderRadius', '0');
        $('#produk .left .buku .detail-buku .img-buku img').css('padding', '0');

    } else if (width >= 945) {

        // manipulasi column
        if (left.hasClass('col-12')) {
            left.addClass('col-8');
            left.removeClass('col-12');

            right.addClass('col-4');
            right.removeClass('col-12');
        }

        if (detailBuku.hasClass('col-10')) {
            detailBuku.addClass('col-11');
            detailBuku.removeClass('col-10');
        }

        if (imgBuku.hasClass('col-4')) {
            imgBuku.addClass('col-3');
            imgBuku.removeClass('col-4');

            deskBuku.addClass('col-9');
            deskBuku.removeClass('col-8');
        }

        if (imgBuku.hasClass('col-12')) {
            imgBuku.addClass('col-4');
            imgBuku.removeClass('col-12');

            deskBuku.addClass('col-8');
            deskBuku.removeClass('col-12');
        }

        // manipulasi css
        $('#produk .left .buku .detail-buku .desk-buku p.judul').css('marginTop', '0rem');
        $('#produk .left .buku .detail-buku .img-buku img').css('border', '0');
        $('#produk .left .buku .detail-buku .img-buku img').css('borderRadius', '0');
        $('#produk .left .buku .detail-buku .img-buku img').css('padding', '0');
    }

}


// hapus buku
function hapusBuku(id) {
    hideConfirm();
    if (checkSesi()) {
        $('.loading').css('display', 'flex'); // tampilkan loading

        let params = new FormData();
        params.append('cartId', id);

        // hapus buku dari bag
        $.ajax({
            url: `${base_url}wishlists/carts/delete`,
            type: "delete",
            dataType: "json",
            processData: false, // default kirim object, form mengandung string
            contentType: false, // default x-www-form-urlencoded

            data: params,

            success: function (response) {
                success = response.status;

                // hilangkan loading
                $('.loading').css('display', 'none');

                // tampilkan pesan dialog
                $('.dialog-oke .pesan span').html('Buku berhasil dihapus dari bag');
                $('.dialog-oke').css('display', 'flex');
            }
        });
    } else {
        // tampilkan pesan dialog
        $('.dialog-oke .pesan span').html('Silahkan login terlebih dahulu');
        $('.dialog-oke').css('display', 'flex');
    }
}


// confirm delete
function confirmDelete(e) {
    let id = $(e).attr('data-id');

    $('.dialog-confirm').css('display', 'flex');
    $('.dialog-confirm .pesan .btn-accept').attr('onclick', `hapusBuku(${id})`);
}


// add to wishlist
function addWishlist(e) {
    if (checkSesi()) {
        $('.loading').css('display', 'flex');   // tampilkan loading

        let id = $(e).attr('data-id');

        // post buku ke wishlist
        $.ajax({
            url: `${base_url}wishlists/addProduct`,
            type: "post",
            dataType: "json",

            data: {
                userId: User.userId,
                productId: id
            },

            success: function () {
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


// set data bag
function setDataBag(response) {
    const bag = $('#produk .left .buku');

    response.forEach((value) => {

        let harga = generateRupiah(value.productDetailDTO.productPrice);
        
        bag.append(`
            <div class="row">

                <!-- checkbox -->
                <div class="col-1 checkbox-pilih">
                    <input type="checkbox" id="check-pilih" onclick="checkOne(this)" data-id="${value.productDetailDTO.productId}" data-harga="${value.productDetailDTO.productPrice}">
                    <span class="checkbox"></span>
                </div>
                <!-- checkbox -->

                <!-- desk -->
                <div class="col-11 detail-buku">
                    <div class="row">

                        <!-- image -->
                        <div class="col-3 img-buku">
                            <img src="${value.productDetailDTO.productPhotoLink}">
                        </div>
                        <!-- image -->
                        
                        <!-- desk buku -->
                        <div class="col-9 desk-buku">
                            <p class="judul">${value.productDetailDTO.productName}</p>
                            <p class="author">Penulis : ${value.productDetailDTO.productAuthor}</p>
                            <p class="bahasa">Bahasa ${value.productDetailDTO.productLanguage}</p>
                            <p class="harga">Rp. ${harga}</p>

                            <div class="row">

                                <div class="col-6 jumlah">
                                    <p>Jumlah : 1</p>
                                </div>

                                <div class="col-6 aksi text-right">
                                    <span onclick="addWishlist(this)" data-id="${value.productDetailDTO.productId}"><i class="fas fa-heart"></i></span>
                                    <span onclick="confirmDelete(this)" data-id="${value.cartId}"><i class="fas fa-trash"></i></span>
                                </div>
                            </div>
                        </div>
                        <!-- desk buku -->

                    </div>
                </div>
                <!-- desk -->

            </div>

            <hr>
        `);
    });
}


// get data bag
function getDataBag() {

    // tampilkan loading
    $('.loading').css('display', 'flex');

    $.ajax({
        url: `${base_url}carts/user`,
        type: "get",
        dataType: "json",

        data: {
            userId: User.userId
        },

        success: function (response) {
            if (response.status === 200) {
                if (response.data.length != 0) {
                    $('#produk .isEmpty').css('display', 'none');
                    $('#produk .notEmpty').css('display', 'flex');
                    setDataBag(response.data);
                } else {
                    $('#produk .isEmpty').css('display', 'block');
                    $('#produk .notEmpty').css('display', 'none');
                }
            }

            // hilangkan loading
            $('.loading').css('display', 'none');
        }

    }).then(() => {
        checkAll();
        responsiveSize();
    });
}


// document ready
$(document).ready(() => {

    if (localStorage.getItem('bag') !== null);
        localStorage.removeItem('bag');

    if (checkSesi())
        getDataBag();
    else
        window.location.href = `${site_url}html/login-page.html`;

});

$(window).resize(responsiveSize);