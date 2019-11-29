

// variabel global
let jumlahBeli = [];
let totalHarga = 0;    


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
}


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();

    const left = $('#produk .left');
    const right = $('#produk .right');
    const txtPilih = $('.pilih-semua .text-pilih', left);
    const hapusSemua = $('.pilih-semua .hapus-semua', left);
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

        if (txtPilih.hasClass('col-6')) {
            txtPilih.addClass('col-10');
            txtPilih.removeClass('col-6');

            hapusSemua.removeClass('col-5');
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

        if (txtPilih.hasClass('col-6')) {
            txtPilih.addClass('col-10');
            txtPilih.removeClass('col-6');

            hapusSemua.removeClass('col-5');
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

        if (txtPilih.hasClass('col-10')) {
            txtPilih.addClass('col-6');
            txtPilih.removeClass('col-10');

            hapusSemua.addClass('col-5');
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

        if (txtPilih.hasClass('col-10')) {
            txtPilih.addClass('col-6');
            txtPilih.removeClass('col-10');

            hapusSemua.addClass('col-5');
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

        if (txtPilih.hasClass('col-10')) {
            txtPilih.addClass('col-6');
            txtPilih.removeClass('col-10');

            hapusSemua.addClass('col-5');
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


// get data bag
function getDataBag(response) {
    const bag = $('#produk .left .buku');

    response.forEach((value) => {

        let harga = generateRupiah(value.productPrice);

        bag.append(`
            <div class="row">

                <!-- checkbox -->
                <div class="col-1 checkbox-pilih">
                    <input type="checkbox" id="check-pilih" onclick="checkOne(this)" data-id="${value.productId}" data-harga="${value.productPrice}">
                    <span class="checkbox"></span>
                </div>
                <!-- checkbox -->

                <!-- desk -->
                <div class="col-11 detail-buku">
                    <div class="row">

                        <!-- image -->
                        <div class="col-3 img-buku">
                            <img src="../pictures/${value.productPhotoLink}">
                        </div>
                        <!-- image -->
                        
                        <!-- desk buku -->
                        <div class="col-9 desk-buku">
                            <p class="judul">${value.productName}</p>
                            <p class="author">Penulis : ${value.productAuthor}</p>
                            <p class="bahasa">Bahasa ${value.productLanguage}</p>
                            <p class="harga">Rp. ${harga}</p>

                            <div class="row">

                                <div class="col-6 jumlah">
                                    <p>Jumlah : 1</p>
                                </div>

                                <div class="col-6 aksi text-right">
                                    <a href=""><i class="fas fa-heart"></i></a>
                                    <a href=""><i class="fas fa-trash"></i></a>
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


// document ready
$(document).ready(() => {

    $.ajax({
        url: "../json/bag.json",
        type: "get",
        dataType: "json",

        success: function(response) {
            getDataBag(response);
        }
        
    }).then(() => {
        responsiveSize();
    });
    
});

$(window).resize(responsiveSize);