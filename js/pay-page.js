

// variabel global
let User = JSON.parse(localStorage.getItem('dataUser'));
const loginTime = localStorage.getItem('loginTime');
let session = null;

let pay;

// responsive - resize window
function responsiveSize() {
    let width = $(window).width();

    const left = $('#content .left');
    const right = $('#content .right');
    const keyRight = $('#content .right .ringkasan-pemesanan .rincian .key');
    const valueRight = $('#content .right .ringkasan-pemesanan .rincian .values');
    const listMetode = $('#content .left .metode-pembayaran .list-metode');


    if (width < 305) {

        // manipulasi column
        if (left.hasClass('col-7')) {
            left.addClass('col-12');
            left.removeClass('col-7');

            right.addClass('col-12');
            right.removeClass('col-5');
        }

        if (keyRight.hasClass('col-8')) {
            keyRight.addClass('col-7');
            keyRight.removeClass('col-8');

            valueRight.addClass('col-5');
            valueRight.removeClass('col-4');
        }

        if (listMetode.find('col-6')) {
            $('.col-6', listMetode).addClass('col-12');
            $('.col-6', listMetode).removeClass('col-6');
        }

    } else if (width < 465) {

        // manipulasi column
        if (left.hasClass('col-7')) {
            left.addClass('col-12');
            left.removeClass('col-7');

            right.addClass('col-12');
            right.removeClass('col-5');
        }

        if (keyRight.hasClass('col-8')) {
            keyRight.addClass('col-7');
            keyRight.removeClass('col-8');

            valueRight.addClass('col-5');
            valueRight.removeClass('col-4');
        }

        if (listMetode.find('col-12')) {
            $('.col-12', listMetode).addClass('col-6');
            $('.col-12', listMetode).removeClass('col-12');
        }

    } else if (width < 753) {

        // manipulasi column
        if (left.hasClass('col-7')) {
            left.addClass('col-12');
            left.removeClass('col-7');

            right.addClass('col-12');
            right.removeClass('col-5');
        }

        if (keyRight.hasClass('col-7')) {
            keyRight.addClass('col-8');
            keyRight.removeClass('col-7');

            valueRight.addClass('col-4');
            valueRight.removeClass('col-5');
        }

        if (listMetode.find('col-12')) {
            $('.col-12', listMetode).addClass('col-6');
            $('.col-12', listMetode).removeClass('col-12');
        }

    } else if (width < 945) {

        // manipulasi column
        if (left.hasClass('col-12')) {
            left.addClass('col-7');
            left.removeClass('col-12');

            right.addClass('col-5');
            right.removeClass('col-12');
        }

        if (keyRight.hasClass('col-8')) {
            keyRight.addClass('col-7');
            keyRight.removeClass('col-8');

            valueRight.addClass('col-5');
            valueRight.removeClass('col-4');
        }

        if (listMetode.find('col-12')) {
            $('.col-12', listMetode).addClass('col-6');
            $('.col-12', listMetode).removeClass('col-12');
        }

    } else if (width <= 1600) {

        // manipulasi column
        if (left.hasClass('col-12')) {
            left.addClass('col-7');
            left.removeClass('col-12');

            right.addClass('col-5');
            right.removeClass('col-12');
        }

        if (keyRight.hasClass('col-7')) {
            keyRight.addClass('col-8');
            keyRight.removeClass('col-7');

            valueRight.addClass('col-4');
            valueRight.removeClass('col-5');
        }

        if (listMetode.find('col-12')) {
            $('.col-12', listMetode).addClass('col-6');
            $('.col-12', listMetode).removeClass('col-12');
        }
    }

}


// user pay
function confirmPay() {

    // tampilkan loading
    $('.loading').css('display', 'flex');

    // post payment
    pay.forEach(value => {
        $.ajax({
            url: `${base_url}orders/pay`,
            type: "post",
            dataType: "json",

            data: {
                orderId: value
            },

            success: function () {
                // hilangkan loading
                $('.loading').css('display', 'none');

                // tampilkan pesan dialog
                $('.dialog-oke .pesan span').html("Sukses! Menunggu konfirmasi penjual");
                $('.dialog-oke').css('display', 'flex');
            }
        });
    });
}


// set rincian pembayaran
function setRincianBayar() {
    let dataBayar = JSON.parse(localStorage.getItem("data-bayar"));

    let tempSubtotal = generateRupiah(dataBayar.subTotal);
    let tempPajak = generateRupiah(dataBayar.pajak);
    let tempTotalPembayaran = generateRupiah(dataBayar.totalPembayaran);

    $('#content .right .ringkasan-pemesanan .rincian .values').html(`
        <p class="txt-bayar">Rp. ${tempSubtotal}</p>
        <p class="txt-bayar">${dataBayar.jumlahBeli}</p>
        <p class="txt-bayar">Rp. ${tempPajak}</p>
        <hr>
        <p class="value-pembayaran">Rp. ${tempTotalPembayaran}</p>
    `);
}


// hide dialog
function hideDialog() {
    $('.dialog-oke').css('display', 'none');
    window.location.href = `${site_url}html/main-page.html`;
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


// cek session
function checkSesi() {
    if (loginTime != null) {
        session = (new Date().getTime() - loginTime) / 1000 / 60 / 60;

        if (User != null && session < 8) {
            return 1;
        } else {
            logout();
            return 0;
        }
    }
}


// document ready
$(document).ready(() => {
    pay = JSON.parse(localStorage.getItem('pay'));

    if (checkSesi()) {
        if (pay === null)
            window.location.href = `${site_url}html/orderList-page.html`;
        else 
            setRincianBayar();
    } else
        window.location.href = `${site_url}html/login-page.html`;

    responsiveSize();
});

$(window).resize(responsiveSize);
