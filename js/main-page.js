
function responsiveSize() {
    let width = $(window).width();
    $('.angka').html(width);

    const buku = $('#promo-murah .items-buku-promo .card-buku');
    let judulBuku = $('h5.judul-buku', buku);
    let deskBuku = $('p.desk-buku', buku);
    

    if(width < 980) {

        $('#promo-murah .items-buku-promo .row .col-sm-3').addClass('col-sm-4');
        $('#promo-murah .items-buku-promo .row .col-sm-3').removeClass('col-sm-3');

        // mengatasi jika length string pada judul buku terlalu panjang
        $.each(judulBuku, (key, value) => {
            let text = value.innerHTML;

            if (text.length > 15) {
                value.innerHTML = text.substring(0, 15) + '...';
            }
        });


        // mengatasi jika length string pada deskripsi buku terlalu panjang
        $.each(deskBuku, (key, value) => {
            let text = value.innerHTML;

            if (text.length > 102) {
                value.innerHTML = text.substring(0, 102) + '...';
            }
        });

    } else {

        $('#promo-murah .items-buku-promo .row .col-sm-4').addClass('col-sm-3');
        $('#promo-murah .items-buku-promo .row .col-sm-4').removeClass('col-sm-4');


        // mengatasi jika length string pada judul buku terlalu panjang
        $.each(judulBuku, (key, value) => {
            let text = value.innerHTML;

            if(text.length > 20) {
                value.innerHTML = text.substring(0, 20) + '...';
            }
        });


        // mengatasi jika length string pada deskripsi buku terlalu panjang
        $.each(deskBuku, (key, value) => {
            let text = value.innerHTML;

            if (text.length > 117) {
                value.innerHTML = text.substring(0, 117) + '...';
            }
        });

    }
}


$(window).ready(responsiveSize);
$(window).resize(responsiveSize);





// bestsellers slider

let xOffsetEducation = 0;
let statsEducation = 0;

$('#education .slider-container-education .kanan').on('click', () => {
    if ((window.innerWidth >= 992 && xOffsetEducation >= 1113) || (window.innerWidth <= 576 && xOffsetEducation >= 1446)) {
        statsEducation = 1;
    }


    if (window.innerWidth >= 992) {
        if (statsEducation == 0) 
            xOffsetEducation += 371;
        else {
            xOffsetEducation = 0;
            statsEducation = 0;
        }
    }
    else if (window.innerWidth <= 576) {
        if (statsEducation == 0) 
            xOffsetEducation+=482;
        else {
            xOffsetEducation = 0;
            statsEducation = 0;
        }
    }

    console.log(xOffsetEducation);
    $('.slider-container-education .slides-items-education').css('marginLeft', '-' + xOffsetEducation + 'px');
})


$('#education .slider-container-education .kiri').on('click', () => {
    if (xOffsetEducation == 0) {
        statsEducation = 1;
    }


    if (window.innerWidth >= 992) {
        if (statsEducation == 0)
            xOffsetEducation -= 371;
        else {
            xOffsetEducation = 1113;
            statsEducation = 0;
        }
    }
    else if (window.innerWidth <= 576) {
        if (statsEducation == 0)
            xOffsetEducation -= 477;
        else {
            xOffsetEducation = 1446;
            statsEducation = 0;
        }
    }

    console.log(xOffsetEducation);
    $('.slider-container-education .slides-items-education').css('marginLeft', '-' + xOffsetEducation + 'px');
});




// indonesian book slider

let xOffsetIndobook = 0;
let statsIndobook = 0;

$('#indonesian-book .slider-container-indobook .kanan').on('click', () => {
    if ((window.innerWidth >= 992 && xOffsetIndobook >= 1113) || (window.innerWidth <= 576 && xOffsetIndobook >= 1446)) {
        statsIndobook = 1;
    }


    if (window.innerWidth >= 992) {
        if (statsIndobook == 0)
            xOffsetIndobook += 371;
        else {
            xOffsetIndobook = 0;
            statsIndobook = 0;
        }
    }
    else if (window.innerWidth <= 576) {
        if (statsIndobook == 0)
            xOffsetIndobook += 482;
        else {
            xOffsetIndobook = 0;
            statsIndobook = 0;
        }
    }

    console.log(xOffsetIndobook);
    $('.slider-container-indobook .slides-items-indobook').css('marginLeft', '-' + xOffsetIndobook + 'px');
})


$('#indonesian-book .slider-container-indobook .kiri').on('click', () => {
    if (xOffsetIndobook == 0) {
        statsIndobook = 1;
    }


    if (window.innerWidth >= 992) {
        if (statsIndobook == 0)
            xOffsetIndobook -= 371;
        else {
            xOffsetIndobook = 1113;
            statsIndobook = 0;
        }
    }
    else if (window.innerWidth <= 576) {
        if (statsIndobook == 0)
            xOffsetIndobook -= 477;
        else {
            xOffsetIndobook = 1446;
            statsIndobook = 0;
        }
    }

    console.log(xOffsetIndobook);
    $('.slider-container-indobook .slides-items-indobook').css('marginLeft', '-' + xOffsetIndobook + 'px');
});