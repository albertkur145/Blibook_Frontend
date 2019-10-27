

$(window).ready(responsiveSize);
$(window).resize(responsiveSize);


function responsiveSize() {
    let width = $(window).width();

    const left = $('#produk .left');
    const right = $('#produk .right');
    const txtPilih = $('.pilih-semua .text-pilih', left);
    const hapusSemua = $('.pilih-semua .hapus-semua', left);
    const detailBuku = $('.buku .detail-buku', left);
    const imgBuku = $('.img-buku', detailBuku);
    const deskBuku = $('.desk-buku', detailBuku);


    if (width < 465) {

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

    } else if (width < 753) {

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

    } else if (width < 945) {

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

    } else if (width >= 945) {

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

    }


}