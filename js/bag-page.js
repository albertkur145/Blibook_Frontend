

// check all (pilih semua)
function checkAll() {
    let checkboxAll = $(`input[type="checkbox"]`);

    if($('#check-pilih-semua')[0].checked) {
        $.each(checkboxAll, (key, value) => {
            value.checked = true;
        });
    } else {
        $.each(checkboxAll, (key, value) => {
            value.checked = false;
        });
    }
}


// check one
function checkOne() {
    $('#check-pilih-semua')[0].checked = false;
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


// document ready
responsiveSize();
$(window).resize(responsiveSize);