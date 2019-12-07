

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


// get user detail
function getUser(response) {
    response.forEach(value => {
        $('#content .left .biodata .values').html(`
            <p class="value">${value.userName}</p>
            <p class="value">${value.userEmail}</p>
            <p class="value">${value.userPhone}</p>
        `);
    });
}


// get pay user
function getPayUser(response) {
    let pesanan = $('#content .left .pesanan');
    let subTotal = 0;

    response.forEach(value => {
        let harga = generateRupiah(value.productPrice);
        subTotal += value.productPrice;

        // list pesanan
        pesanan.append(`
            <div class="row">
                            
                <!-- image -->
                <div class="col-4 img-buku">
                    <img src="../pictures/${value.productPhotoLink}">
                </div>
                <!-- image -->

                <!-- deskripsi -->
                <div class="col-8 desk-buku">
                    <p class="judul">${value.productName}</p>
                    <p class="penulis">Penulis : ${value.productAuthor}</p>
                    <p class="bahasa">Bahasa ${value.productLanguage}</p>
                    <p class="harga">Rp. ${harga}</p>
                    <p class="jumlah">Jumlah : 1</p>
                </div>
                <!-- deskripsi -->
                
            </div>
            
            <hr>
        `);
    });


    // rincian pembayaran
    let pajak = subTotal * 0.1;
    let totalPembayaran = pajak + subTotal;

    let tempSubTotal = generateRupiah(subTotal);
    let tempPajak = generateRupiah(pajak);
    let tempTotalBayar = generateRupiah(totalPembayaran);
    
    $('#content .right .rincian-bayar .values').html(`
        <p class="txt-bayar">Rp. ${tempSubTotal}</p>
        <p class="txt-bayar">${response.length}</p>
        <p class="txt-bayar">Rp. ${tempPajak}</p>
        <hr>
        <p class="value-pembayaran">Rp. ${tempTotalBayar}</p>
    `);
}


// document ready
$(document).ready(() => {

    // get pay
    $.ajax({
        url: "../json/pay.json",
        type: "get",
        dataType: "json",

        success: function(response) {
            getPayUser(response);
        }
        
    }).then(() => {

        // get user
        $.ajax({
            url: "../json/user.json",
            type: "get",
            dataType: "json",

            success: function(response) {
                getUser(response);
            }
        });

    }).then(() => {
        responsiveSize();
    }); 
    
});

$(window).resize(responsiveSize);