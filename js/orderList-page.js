

// variabel global
let User = JSON.parse(localStorage.getItem('dataUser'));
const loginTime = localStorage.getItem('loginTime');
let session = null;

let bag;
let pay = [];

let subTotal = 0;
let pajak = 0;
let totalPembayaran = 0;


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();

    const left = $('#content .left');
    const right = $('#content .right');
    const keyLeft = $('#content .left .biodata .key');
    const valueLeft = $('#content .left .biodata .values');
    const keyRight = $('#content .right .rincian-bayar .key');
    const valueRight = $('#content .right .rincian-bayar .values');
    const imgBuku = $('#content .left .pesanan .img-buku');
    const deskBuku = $('#content .left .pesanan .desk-buku');


    if (width < 305) {

        // manipulasi column
        if (left.hasClass('col-7')) {
            left.addClass('col-12');
            left.removeClass('col-7');

            right.addClass('col-12');
            right.removeClass('col-5');
        }
        
        if (keyLeft.hasClass('col-4')) {
            keyLeft.removeClass('col-4');

            valueLeft.addClass('col-12');
            valueLeft.removeClass('col-8');
        }

        if (keyLeft.hasClass('col-3')) {
            keyLeft.removeClass('col-3');

            valueLeft.addClass('col-12');
            valueLeft.removeClass('col-9');
        }

        if (keyRight.hasClass('col-8')) {
            keyRight.addClass('col-7');
            keyRight.removeClass('col-8');

            valueRight.addClass('col-5');
            valueRight.removeClass('col-4');
        }

        if (imgBuku.hasClass('col-4')) {
            imgBuku.addClass('col-12');
            imgBuku.removeClass('col-4');

            deskBuku.addClass('col-12');
            deskBuku.removeClass('col-8');
        }

    } else if (width < 465) {

        // manipulasi column
        if (left.hasClass('col-7')) {
            left.addClass('col-12');
            left.removeClass('col-7');

            right.addClass('col-12');
            right.removeClass('col-5');
        }

        if (keyLeft.hasClass('col-4')) {
            keyLeft.addClass('col-3');
            keyLeft.removeClass('col-4');

            valueLeft.addClass('col-9');
            valueLeft.removeClass('col-8');
        }

        if (valueLeft.hasClass('col-12')) {
            keyLeft.addClass('col-3');

            valueLeft.addClass('col-9');
            valueLeft.removeClass('col-12');
        }

        if (keyRight.hasClass('col-8')) {
            keyRight.addClass('col-7');
            keyRight.removeClass('col-8');

            valueRight.addClass('col-5');
            valueRight.removeClass('col-4');
        }

        if (imgBuku.hasClass('col-12')) {
            imgBuku.addClass('col-4');
            imgBuku.removeClass('col-12');

            deskBuku.addClass('col-8');
            deskBuku.removeClass('col-12');
        }

    } else if (width < 753) {

        // manipulasi column
        if (left.hasClass('col-7')) {
            left.addClass('col-12');
            left.removeClass('col-7');

            right.addClass('col-12');
            right.removeClass('col-5');
        }

        if (keyLeft.hasClass('col-3')) {
            keyLeft.addClass('col-4');
            keyLeft.removeClass('col-3');

            valueLeft.addClass('col-8');
            valueLeft.removeClass('col-9');
        }

        if (valueLeft.hasClass('col-12')) {
            keyLeft.addClass('col-4');

            valueLeft.addClass('col-8');
            valueLeft.removeClass('col-12');
        }

        if (keyRight.hasClass('col-7')) {
            keyRight.addClass('col-8');
            keyRight.removeClass('col-7');

            valueRight.addClass('col-4');
            valueRight.removeClass('col-5');
        }

        if (imgBuku.hasClass('col-12')) {
            imgBuku.addClass('col-4');
            imgBuku.removeClass('col-12');

            deskBuku.addClass('col-8');
            deskBuku.removeClass('col-12');
        }

    } else if (width < 945) {

        // manipulasi column
        if (left.hasClass('col-12')) {
            left.addClass('col-7');
            left.removeClass('col-12');

            right.addClass('col-5');
            right.removeClass('col-12');
        }

        if (keyLeft.hasClass('col-4')) {
            keyLeft.addClass('col-3');
            keyLeft.removeClass('col-4');

            valueLeft.addClass('col-9');
            valueLeft.removeClass('col-8');
        }

        if (valueLeft.hasClass('col-12')) {
            keyLeft.addClass('col-3');

            valueLeft.addClass('col-9');
            valueLeft.removeClass('col-12');
        }

        if (keyRight.hasClass('col-8')) {
            keyRight.addClass('col-7');
            keyRight.removeClass('col-8');

            valueRight.addClass('col-5');
            valueRight.removeClass('col-4');
        }

        if (imgBuku.hasClass('col-12')) {
            imgBuku.addClass('col-4');
            imgBuku.removeClass('col-12');

            deskBuku.addClass('col-8');
            deskBuku.removeClass('col-12');
        }

    } else if (width <= 1600) {

        // manipulasi column
        if (left.hasClass('col-12')) {
            left.addClass('col-7');
            left.removeClass('col-12');

            right.addClass('col-5');
            right.removeClass('col-12');
        }

        if (keyLeft.hasClass('col-3')) {
            keyLeft.addClass('col-4');
            keyLeft.removeClass('col-3');

            valueLeft.addClass('col-8');
            valueLeft.removeClass('col-9');
        }

        if (valueLeft.hasClass('col-12')) {
            keyLeft.addClass('col-4');

            valueLeft.addClass('col-8');
            valueLeft.removeClass('col-12');
        }

        if (keyRight.hasClass('col-7')) {
            keyRight.addClass('col-8');
            keyRight.removeClass('col-7');

            valueRight.addClass('col-4');
            valueRight.removeClass('col-5');
        }

        if (imgBuku.hasClass('col-12')) {
            imgBuku.addClass('col-4');
            imgBuku.removeClass('col-12');

            deskBuku.addClass('col-8');
            deskBuku.removeClass('col-12');
        }
    }

}


// hide dialog
function hideDialog() {
    $('.dialog-oke').css('display', 'none');

    data = {
        "subTotal": subTotal,
        "jumlahBeli": bag.length,
        "pajak": pajak,
        "totalPembayaran": totalPembayaran
    };

    localStorage.setItem("pay", JSON.stringify(pay));
    localStorage.setItem("data-bayar", JSON.stringify(data));

    window.location.href = `${site_url}html/pay-page.html`;
}


// konfirmasi pesanan redirect ke pay
function konfirmasiPesanan() {

    if (!checkSesi()) 
        window.location.href = `${site_url}html/login-page.html`;
    else {
        // post initiate order
        bag.forEach(value => {
            $('.loading').css('display', 'flex');    // tampilkan loading

            $.ajax({
                url: `${base_url}orders/initiate`,
                type: "post",
                dataType: "json",

                data: {
                    "userId": User.userId,
                    "productId": value
                },

                success: function (response) {
                    pay.push(response.data[0].orderId);
                    $('.loading').css('display', 'none');   // hilangkan loading

                    // tampilkan pesan dialog
                    $('.dialog-oke .pesan span').html('Pesanan berhasil dikonfirmasi');
                    $('.dialog-oke').css('display', 'flex');
                }
            });
        });
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


// set user detail
function setUser(response) {
    $('#content .left .biodata .values').html(`
        <p class="value">${response.userName}</p>
        <p class="value">${response.userEmail}</p>
        <p class="value">${response.userPhone}</p>
    `);
}


// set pay user
function setPayUser(response) {
    let pesanan = $('#content .left .pesanan');
    let harga = generateRupiah(response.productPrice);
    subTotal += response.productPrice;

    // list pesanan
    pesanan.append(`
        <div class="row">
                        
            <!-- image -->
            <div class="col-4 img-buku">
                <img src="${response.productPhotoLink}">
            </div>
            <!-- image -->

            <!-- deskripsi -->
            <div class="col-8 desk-buku">
                <p class="judul">${response.productName}</p>
                <p class="penulis">Penulis : ${response.productAuthor}</p>
                <p class="bahasa">Bahasa ${response.productLanguage}</p>
                <p class="harga">Rp. ${harga}</p>
                <p class="jumlah">Jumlah : 1</p>
            </div>
            <!-- deskripsi -->
            
        </div>
        
        <hr>
    `);

    setPembayaranUser();
}


// set rincian pembayaran
function setPembayaranUser() {
    pajak = subTotal * 0.1;
    totalPembayaran = pajak + subTotal;
    
    let tempSubTotal = generateRupiah(subTotal);
    let tempPajak = generateRupiah(pajak);
    let tempTotalBayar = generateRupiah(totalPembayaran);

    $('#content .right .rincian-bayar .values').html(`
        <p class="txt-bayar">Rp. ${tempSubTotal}</p>
        <p class="txt-bayar">${bag.length}</p>
        <p class="txt-bayar">Rp. ${tempPajak}</p>
        <hr>
        <p class="value-pembayaran">Rp. ${tempTotalBayar}</p>
    `);
}


// get pay user
function getPayUser() {

    // tampilkan loading
    $('.loading').css('display', 'flex');

    // get user
    $.ajax({
        url: `${base_url}users`,
        type: "get",
        dataType: "json",
        
        data: {
            id: User.userId
        },

        success: function (response) {
            setUser(response);
        }
        
    }).then(() => {

        // get buku yang ingin dibeli
        bag.forEach(value => {
            $.ajax({
                url: `${base_url}products`,
                type: "get",
                dataType: "json",

                data: {
                    id: value
                },

                success: function (response) {
                    setPayUser(response);

                    // hilangkan loading
                    $('.loading').css('display', 'none');
                }

            });
        });
    
    }).then(() => {
        responsiveSize();
    });
}


// cek session
function checkSesi() {
    if (loginTime != null) {
        session = (new Date().getTime() - loginTime) / 1000 / 60 / 60;

        if (User != null && session < 8) {
            optUser = $('.nav-blibuku .user');
            namaUser = User.userName;

            $('.nav-blibuku .masuk').css('display', 'none');
            $('.nav-blibuku .daftar').css('display', 'none');
            $('.nav-blibuku .user').css('display', 'block');

            return 1;
        } else {
            logout();
            $('.nav-blibuku .masuk').css('display', 'block');
            $('.nav-blibuku .daftar').css('display', 'block');
            $('.nav-blibuku .user').css('display', 'none');

            return 0;
        }
    }
}


// document ready
$(document).ready(() => {

    bag = JSON.parse(localStorage.getItem('bag'));

    if (checkSesi()) {  
        if (bag === null) 
            window.location.href = `${site_url}html/bag-page.html`;
        else
            getPayUser();
    } else
        window.location.href = `${site_url}html/login-page.html`;

});

$(window).resize(responsiveSize);