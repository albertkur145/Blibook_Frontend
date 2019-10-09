
// ambil data json

const buku = $('#promo-murah .items-buku-promo .card-buku');
let judulBuku = $('h5.judul-buku', buku);
let deskBuku = $('p.desk-buku', buku);

let textJudul = [];
let textBuku = [];

$.each(judulBuku, (key, value) => {
    textJudul.push(value.innerHTML);
});

$.each(deskBuku, (key, value) => {
    textBuku.push(value.innerHTML);
});

// akhir ambil data json













// responsive - resize window

$(window).ready(responsiveSize);
$(window).resize(responsiveSize);

function responsiveSize() {
    let width = $(window).width();
    $('.angka').html(width);

    const itemsBuku = $('#promo-murah .items-buku-promo .row');


    if(width < 300) {

        if (itemsBuku.find('.col-sm-3')) {
            $('.col-sm-3', itemsBuku).addClass('col-12');
            $('.col-sm-3', itemsBuku).removeClass('col-sm-3');
        }

        if (itemsBuku.find('.col-sm-4')) {
            $('.col-sm-4', itemsBuku).addClass('col-12');
            $('.col-sm-4', itemsBuku).removeClass('col-sm-4');
        }

        if (itemsBuku.find('.col-6')) {
            $('.col-6', itemsBuku).addClass('col-12');
            $('.col-6', itemsBuku).removeClass('col-6');
        }

        $('.card-buku', itemsBuku).css('width', '100%');
        $('.card-buku', itemsBuku).css('marginLeft', '0');

        // mengatasi jika length string pada judul buku terlalu panjang
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 37) {
                let temp = textJudul[i].substring(0, 37) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        // mengatasi jika length string pada deskripsi buku terlalu panjang
        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 137) {
                let temp = textBuku[i].substring(0, 137) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

    } else if(width < 320) {

        if (itemsBuku.find('.col-sm-3')) {
            $('.col-sm-3', itemsBuku).addClass('col-12');
            $('.col-sm-3', itemsBuku).removeClass('col-sm-3');
        }

        if (itemsBuku.find('.col-sm-4')) {
            $('.col-sm-4', itemsBuku).addClass('col-12');
            $('.col-sm-4', itemsBuku).removeClass('col-sm-4');
        }

        if (itemsBuku.find('.col-6')) {
            $('.col-6', itemsBuku).addClass('col-12');
            $('.col-6', itemsBuku).removeClass('col-6');
        }

        $('.card-buku', itemsBuku).css('width', '75%');
        $('.card-buku', itemsBuku).css('marginLeft', '15%');
        $('.card-buku img', itemsBuku).css('height', '55%');

        // mengatasi jika length string pada judul buku terlalu panjang
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 27) {
                let temp = textJudul[i].substring(0, 27) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        // mengatasi jika length string pada deskripsi buku terlalu panjang
        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 127) {
                let temp = textBuku[i].substring(0, 127) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

    } else if(width < 345) {

        if (itemsBuku.find('.col-sm-3')) {
            $('.col-sm-3', itemsBuku).addClass('col-12');
            $('.col-sm-3', itemsBuku).removeClass('col-sm-3');
        }

        if (itemsBuku.find('.col-sm-4')) {
            $('.col-sm-4', itemsBuku).addClass('col-12');
            $('.col-sm-4', itemsBuku).removeClass('col-sm-4');
        }

        if (itemsBuku.find('.col-6')) {
            $('.col-6', itemsBuku).addClass('col-12');
            $('.col-6', itemsBuku).removeClass('col-6');
        }

        $('.card-buku', itemsBuku).css('width', '75%');
        $('.card-buku', itemsBuku).css('marginLeft', '15%');
        $('.card-buku img', itemsBuku).css('height', '55%');

        // mengatasi jika length string pada judul buku terlalu panjang
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 37) {
                let temp = textJudul[i].substring(0, 37) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        // mengatasi jika length string pada deskripsi buku terlalu panjang
        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 132) {
                let temp = textBuku[i].substring(0, 132) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

    } else if(width < 385) {

        if (itemsBuku.find('.col-sm-3')) {
            $('.col-sm-3', itemsBuku).addClass('col-12');
            $('.col-sm-3', itemsBuku).removeClass('col-sm-3');
        }

        if (itemsBuku.find('.col-sm-4')) {
            $('.col-sm-4', itemsBuku).addClass('col-12');
            $('.col-sm-4', itemsBuku).removeClass('col-sm-4');
        }

        if (itemsBuku.find('.col-6')) {
            $('.col-6', itemsBuku).addClass('col-12');
            $('.col-6', itemsBuku).removeClass('col-6');
        }

        $('.card-buku', itemsBuku).css('width', '75%');
        $('.card-buku', itemsBuku).css('marginLeft', '15%');
        $('.card-buku img', itemsBuku).css('height', '55%');

        // mengatasi jika length string pada judul buku terlalu panjang
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 40) {
                let temp = textJudul[i].substring(0, 40) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        // mengatasi jika length string pada deskripsi buku terlalu panjang
        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 207) {
                let temp = textBuku[i].substring(0, 207) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

    } else if(width < 400) {

        if (itemsBuku.find('.col-sm-3')) {
            $('.col-sm-3', itemsBuku).addClass('col-6');
            $('.col-sm-3', itemsBuku).removeClass('col-sm-3');
        }

        if (itemsBuku.find('.col-sm-4')) {
            $('.col-sm-4', itemsBuku).addClass('col-6');
            $('.col-sm-4', itemsBuku).removeClass('col-sm-4');
        }

        if (itemsBuku.find('.col-12')) {
            $('.col-12', itemsBuku).addClass('col-6');
            $('.col-12', itemsBuku).removeClass('col-12');
        }

        $('.card-buku', itemsBuku).css('width', '105%');
        $('.card-buku', itemsBuku).css('marginLeft', '0');
        $('.card-buku img', itemsBuku).css('height', '50%');

        // mengatasi jika length string pada judul buku terlalu panjang
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 10) {
                let temp = textJudul[i].substring(0, 10) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        // mengatasi jika length string pada deskripsi buku terlalu panjang
        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 59) {
                let temp = textBuku[i].substring(0, 59) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

    } else if(width < 420) {

        if (itemsBuku.find('.col-sm-3')) {
            $('.col-sm-3', itemsBuku).addClass('col-6');
            $('.col-sm-3', itemsBuku).removeClass('col-sm-3');
        }

        if (itemsBuku.find('.col-sm-4')) {
            $('.col-sm-4', itemsBuku).addClass('col-6');
            $('.col-sm-4', itemsBuku).removeClass('col-sm-4');
        }

        if (itemsBuku.find('.col-12')) {
            $('.col-12', itemsBuku).addClass('col-6');
            $('.col-12', itemsBuku).removeClass('col-12');
        }

        $('.card-buku', itemsBuku).css('width', '100%');
        $('.card-buku', itemsBuku).css('marginLeft', '0');
        $('.card-buku img', itemsBuku).css('height', '50%');

        // mengatasi jika length string pada judul buku terlalu panjang
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 11) {
                let temp = textJudul[i].substring(0, 11) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        // mengatasi jika length string pada deskripsi buku terlalu panjang
        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 67) {
                let temp = textBuku[i].substring(0, 67) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

    } else if(width < 440) {

        if (itemsBuku.find('.col-sm-3')) {
            $('.col-sm-3', itemsBuku).addClass('col-6');
            $('.col-sm-3', itemsBuku).removeClass('col-sm-3');
        }

        if (itemsBuku.find('.col-sm-4')) {
            $('.col-sm-4', itemsBuku).addClass('col-6');
            $('.col-sm-4', itemsBuku).removeClass('col-sm-4');
        }

        if (itemsBuku.find('.col-12')) {
            $('.col-12', itemsBuku).addClass('col-6');
            $('.col-12', itemsBuku).removeClass('col-12');
        }

        $('.card-buku', itemsBuku).css('width', '100%');
        $('.card-buku', itemsBuku).css('marginLeft', '0');
        $('.card-buku img', itemsBuku).css('height', '53%');

        // mengatasi jika length string pada judul buku terlalu panjang
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 12) {
                let temp = textJudul[i].substring(0, 12) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        // mengatasi jika length string pada deskripsi buku terlalu panjang
        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 87) {
                let temp = textBuku[i].substring(0, 87) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

    } else if(width < 465) {

        if (itemsBuku.find('.col-sm-3')) {
            $('.col-sm-3', itemsBuku).addClass('col-6');
            $('.col-sm-3', itemsBuku).removeClass('col-sm-3');
        }

        if (itemsBuku.find('.col-sm-4')) {
            $('.col-sm-4', itemsBuku).addClass('col-6');
            $('.col-sm-4', itemsBuku).removeClass('col-sm-4');
        }

        if (itemsBuku.find('.col-12')) {
            $('.col-12', itemsBuku).addClass('col-6');
            $('.col-12', itemsBuku).removeClass('col-12');
        }

        $('.card-buku', itemsBuku).css('width', '100%');
        $('.card-buku', itemsBuku).css('marginLeft', '0');
        $('.card-buku img', itemsBuku).css('height', '55%');

        // mengatasi jika length string pada judul buku terlalu panjang
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 14) {
                let temp = textJudul[i].substring(0, 14) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        // mengatasi jika length string pada deskripsi buku terlalu panjang
        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 107) {
                let temp = textBuku[i].substring(0, 107) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

    } else if(width < 753) {

        if (itemsBuku.find('.col-sm-3')) {
            $('.col-sm-3', itemsBuku).addClass('col-6');
            $('.col-sm-3', itemsBuku).removeClass('col-sm-3');
        }

        if (itemsBuku.find('.col-sm-4')) {
            $('.col-sm-4', itemsBuku).addClass('col-6');
            $('.col-sm-4', itemsBuku).removeClass('col-sm-4');
        }

        if (itemsBuku.find('.col-12')) {
            $('.col-12', itemsBuku).addClass('col-6');
            $('.col-12', itemsBuku).removeClass('col-12');
        }
        
        $('.card-buku', itemsBuku).css('width', '100%');
        $('.card-buku', itemsBuku).css('marginLeft', '0');
        $('.card-buku img', itemsBuku).css('height', '57%');

        // mengatasi jika length string pada judul buku terlalu panjang
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 17) {
                let temp = textJudul[i].substring(0, 17) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        // mengatasi jika length string pada deskripsi buku terlalu panjang
        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 107) {
                let temp = textBuku[i].substring(0, 107) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

    } else if (width < 977) {

        if (itemsBuku.find('.col-sm-3')) {
            $('.col-sm-3', itemsBuku).addClass('col-sm-4');
            $('.col-sm-3', itemsBuku).removeClass('col-sm-3');
        }

        if (itemsBuku.find('.col-6')) {
            $('.col-6', itemsBuku).addClass('col-sm-4');
            $('.col-6', itemsBuku).removeClass('col-6');
        }

        if (itemsBuku.find('.col-12')) {
            $('.col-12', itemsBuku).addClass('col-sm-4');
            $('.col-12', itemsBuku).removeClass('col-12');
        }

        $('.card-buku', itemsBuku).css('width', '100%');
        $('.card-buku', itemsBuku).css('marginLeft', '0');
        $('.card-buku img', itemsBuku).css('height', '56%');

        // mengatasi jika length string pada judul buku terlalu panjang
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 15) {
                let temp = textJudul[i].substring(0, 15) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        // mengatasi jika length string pada deskripsi buku terlalu panjang
        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 127) {
                let temp = textBuku[i].substring(0, 127) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

    } else if (width < 1185) {

        if (itemsBuku.find('.col-sm-4')) {
            $('.col-sm-4', itemsBuku).addClass('col-sm-3');
            $('.col-sm-4', itemsBuku).removeClass('col-sm-4');
        }

        if (itemsBuku.find('.col-6')) {
            $('.col-6', itemsBuku).addClass('col-sm-3');
            $('.col-6', itemsBuku).removeClass('col-6');
        }

        if (itemsBuku.find('.col-12')) {
            $('.col-12', itemsBuku).addClass('col-sm-3');
            $('.col-12', itemsBuku).removeClass('col-12');
        }

        $('.card-buku', itemsBuku).css('width', '100%');
        $('.card-buku', itemsBuku).css('marginLeft', '0');
        $('.card-buku img', itemsBuku).css('height', '56%');

        // mengatasi jika length string pada judul buku terlalu panjang
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 12) {
                let temp = textJudul[i].substring(0, 12) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        // mengatasi jika length string pada deskripsi buku terlalu panjang
        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 137) {
                let temp = textBuku[i].substring(0, 137) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }
        
    } else if (width >= 1185) {

        if (itemsBuku.find('.col-sm-4')) {
            $('.col-sm-4', itemsBuku).addClass('col-sm-3');
            $('.col-sm-4', itemsBuku).removeClass('col-sm-4');
        }

        if (itemsBuku.find('.col-6')) {
            $('.col-6', itemsBuku).addClass('col-sm-3');
            $('.col-6', itemsBuku).removeClass('col-6');
        }

        if (itemsBuku.find('.col-12')) {
            $('.col-12', itemsBuku).addClass('col-sm-3');
            $('.col-12', itemsBuku).removeClass('col-12');
        }

        $('.card-buku', itemsBuku).css('width', '100%');
        $('.card-buku', itemsBuku).css('marginLeft', '0');
        $('.card-buku img', itemsBuku).css('height', '60%');

        // mengatasi jika length string pada judul buku terlalu panjang
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 17) {
                let temp = textJudul[i].substring(0, 17) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        // mengatasi jika length string pada deskripsi buku terlalu panjang
        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 217) {
                let temp = textBuku[i].substring(0, 217) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }
    }
}

// akhir responsive - resize window

















// promote slider

let xOffsetPromote = 0;

$('#promote .slider-container-promote .kanan').on('click', () => {

    let widthWindow = $(window).width();

    if (widthWindow < 945) 
        xOffsetPromote >= 131.25 ? xOffsetPromote = 0 : xOffsetPromote += 43.75;

    else if (widthWindow < 977)
        xOffsetPromote >= 105 ? xOffsetPromote = 0 : xOffsetPromote += 35;

    else if (widthWindow < 1185) {
        if (xOffsetPromote >= 69.75)
            xOffsetPromote >= 81.375 ? xOffsetPromote = 0 : xOffsetPromote += 11.625;
        else
            xOffsetPromote += 23.25;
    }

    else if (widthWindow >= 1185)
        xOffsetPromote >= 69.75 ? xOffsetPromote = 0 : xOffsetPromote += 34.875;
    
        
    $('.slider-container-promote .slides-items-promote').css('marginLeft', '-' +  xOffsetPromote  + 'rem');
});


$('#promote .slider-container-promote .kiri').on('click', () => {

    let widthWindow = $(window).width();

    if (widthWindow < 945)
        xOffsetPromote <= 0 ? xOffsetPromote = 131.25 : xOffsetPromote -= 43.75;

    else if (widthWindow < 977)
        xOffsetPromote <= 0 ? xOffsetPromote = 105 : xOffsetPromote -= 35;

    else if (widthWindow < 1185) {
        if (xOffsetPromote >= 69.75)
            xOffsetPromote >= 81.375 ? xOffsetPromote -= 11.625 : xOffsetPromote -= 23.25;
        else
            xOffsetPromote <= 0 ? xOffsetPromote = 81.375 : xOffsetPromote -= 23.25;
    }

    else if (widthWindow >= 1185) 
        xOffsetPromote <= 0 ? xOffsetPromote = 69.75 : xOffsetPromote -= 34.875;

        
    $('.slider-container-promote .slides-items-promote').css('marginLeft', '-' + xOffsetPromote + 'rem');
});

// akhir promote slider


















// indonesian book slider

let xOffsetIndobook = 0;

$('#indonesian-book .slider-container-indobook .kanan').on('click', () => {
    
    let widthWindow = $(window).width();

    if (widthWindow < 945)
        xOffsetIndobook >= 131.25 ? xOffsetIndobook = 0 : xOffsetIndobook += 43.75;

    else if (widthWindow < 977)
        xOffsetIndobook >= 105 ? xOffsetIndobook = 0 : xOffsetIndobook += 35;

    else if (widthWindow < 1185) {
        if (xOffsetIndobook >= 69.75)
            xOffsetIndobook >= 81.375 ? xOffsetIndobook = 0 : xOffsetIndobook += 11.625;
        else
            xOffsetIndobook += 23.25;
    }

    else if (widthWindow >= 1185)
        xOffsetIndobook >= 69.75 ? xOffsetIndobook = 0 : xOffsetIndobook += 34.875;


    $('.slider-container-indobook .slides-items-indobook').css('marginLeft', '-' + xOffsetIndobook + 'rem');
})


$('#indonesian-book .slider-container-indobook .kiri').on('click', () => {
    
    let widthWindow = $(window).width();

    if (widthWindow < 945)
        xOffsetIndobook <= 0 ? xOffsetIndobook = 131.25 : xOffsetIndobook -= 43.75;

    else if (widthWindow < 977)
        xOffsetIndobook <= 0 ? xOffsetIndobook = 105 : xOffsetIndobook -= 35;

    else if (widthWindow < 1185) {
        if (xOffsetIndobook >= 69.75)
            xOffsetIndobook >= 81.375 ? xOffsetIndobook -= 11.625 : xOffsetIndobook -= 23.25;
        else
            xOffsetIndobook <= 0 ? xOffsetIndobook = 81.375 : xOffsetIndobook -= 23.25;
    }

    else if (widthWindow >= 1185)
        xOffsetIndobook <= 0 ? xOffsetIndobook = 69.75 : xOffsetIndobook -= 34.875;


    $('.slider-container-indobook .slides-items-indobook').css('marginLeft', '-' + xOffsetIndobook + 'rem');
});

// akhir indonesian book slider
