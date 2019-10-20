
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

// ambil data json



// responsive - resize window

$(window).ready(responsiveSize);
$(window).resize(responsiveSize);

function responsiveSize() {
    let width = $(window).width();
    const itemsBuku = $('#promo-murah .items-buku-promo .row');

    if (width < 300) {

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


        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 37) {
                let temp = textJudul[i].substring(0, 37) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 137) {
                let temp = textBuku[i].substring(0, 137) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

    } else if (width < 320) {

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


        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 27) {
                let temp = textJudul[i].substring(0, 27) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

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


        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 37) {
                let temp = textJudul[i].substring(0, 37) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

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


        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 40) {
                let temp = textJudul[i].substring(0, 40) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

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


        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 10) {
                let temp = textJudul[i].substring(0, 10) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

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


        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 11) {
                let temp = textJudul[i].substring(0, 11) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

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


        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 12) {
                let temp = textJudul[i].substring(0, 12) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

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


        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 14) {
                let temp = textJudul[i].substring(0, 14) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

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


        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 17) {
                let temp = textJudul[i].substring(0, 17) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

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


        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 15) {
                let temp = textJudul[i].substring(0, 15) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

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


        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 12) {
                let temp = textJudul[i].substring(0, 12) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

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


        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 17) {
                let temp = textJudul[i].substring(0, 17) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 217) {
                let temp = textBuku[i].substring(0, 217) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }
    }
}

// responsive - resize window

















// promote slider

let xOffsetPromote = 0;

$('#promote .slider-container-promote .kanan').on('click', () => {

    let widthWindow = $(window).width();


    if (widthWindow < 285)
        xOffsetPromote >= 160.1875 ? xOffsetPromote = 0 : xOffsetPromote += 14.5625;

    else if (widthWindow < 305)
    {
        if (xOffsetPromote >= 145.625)
            xOffsetPromote >= 156.6875 ? xOffsetPromote = 0 : xOffsetPromote += 11.0625;
        else
            xOffsetPromote += 14.5625;
    } 

    else if (widthWindow < 400)
        xOffsetPromote >= 151.25 ? xOffsetPromote = 0 : xOffsetPromote += 13.75;

    else if (widthWindow < 440)
        xOffsetPromote >= 137.5 ? xOffsetPromote = 0 : xOffsetPromote += 13.75;

    else if (widthWindow < 465)
        xOffsetPromote >= 137.1875 ? xOffsetPromote = 0 : xOffsetPromote += 27.4375;

    else if (widthWindow < 501)
        xOffsetPromote >= 162.5 ? xOffsetPromote = 0 : xOffsetPromote += 16.25;

    else if (widthWindow < 753)
        xOffsetPromote >= 162.8125 ? xOffsetPromote = 0 : xOffsetPromote += 32.5625;

    else if (widthWindow < 945) 
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


    if (widthWindow < 285)
        xOffsetPromote <= 0 ? xOffsetPromote = 160.1875 : xOffsetPromote -= 14.5625;

    else if (widthWindow < 305) {
        if (xOffsetPromote >= 145.625)
            xOffsetPromote >= 156.6875 ? xOffsetPromote -= 11.0625 : xOffsetPromote -= 14.5625;
        else
            xOffsetPromote <= 0 ? xOffsetPromote = 156.6875 : xOffsetPromote -= 14.5625;
    }  

    else if (widthWindow < 400)
        xOffsetPromote <= 0 ? xOffsetPromote = 151.25 : xOffsetPromote -= 13.75;
    
    else if (widthWindow < 440)
        xOffsetPromote <= 0 ? xOffsetPromote = 137.5 : xOffsetPromote -= 13.75;

    else if (widthWindow < 465)
        xOffsetPromote <= 0 ? xOffsetPromote = 137.1875 : xOffsetPromote -= 27.4375;

    else if (widthWindow < 501)
        xOffsetPromote <= 0 ? xOffsetPromote = 162.5 : xOffsetPromote -= 16.25;

    else if (widthWindow < 753)
        xOffsetPromote <= 0 ? xOffsetPromote = 162.8125 : xOffsetPromote -= 32.5625;

    else if (widthWindow < 945)
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


    if (widthWindow < 285)
        xOffsetIndobook >= 160.1875 ? xOffsetIndobook = 0 : xOffsetIndobook += 14.5625;

    else if (widthWindow < 305) {
        if (xOffsetIndobook >= 145.625)
            xOffsetIndobook >= 156.6875 ? xOffsetIndobook = 0 : xOffsetIndobook += 11.0625;
        else
            xOffsetIndobook += 14.5625;
    } 

    else if (widthWindow < 400)
        xOffsetIndobook >= 151.25 ? xOffsetIndobook = 0 : xOffsetIndobook += 13.75;

    else if (widthWindow < 440)
        xOffsetIndobook >= 137.5 ? xOffsetIndobook = 0 : xOffsetIndobook += 13.75;

    else if (widthWindow < 465)
        xOffsetIndobook >= 137.1875 ? xOffsetIndobook = 0 : xOffsetIndobook += 27.4375;

    else if (widthWindow < 501)
        xOffsetIndobook >= 162.5 ? xOffsetIndobook = 0 : xOffsetIndobook += 16.25;

    else if (widthWindow < 753)
        xOffsetIndobook >= 162.8125 ? xOffsetIndobook = 0 : xOffsetIndobook += 32.5625;

    else if (widthWindow < 945)
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


    if (widthWindow < 285)
        xOffsetIndobook <= 0 ? xOffsetIndobook = 160.1875 : xOffsetIndobook -= 14.5625;

    else if (widthWindow < 305) {
        if (xOffsetIndobook >= 145.625)
            xOffsetIndobook >= 156.6875 ? xOffsetIndobook -= 11.0625 : xOffsetIndobook -= 14.5625;
        else
            xOffsetIndobook <= 0 ? xOffsetIndobook = 156.6875 : xOffsetIndobook -= 14.5625;
    }  

    else if (widthWindow < 400)
        xOffsetIndobook <= 0 ? xOffsetIndobook = 151.25 : xOffsetIndobook -= 13.75;

    else if (widthWindow < 440)
        xOffsetIndobook <= 0 ? xOffsetIndobook = 137.5 : xOffsetIndobook -= 13.75;

    else if (widthWindow < 465)
        xOffsetIndobook <= 0 ? xOffsetIndobook = 137.1875 : xOffsetIndobook -= 27.4375;

    else if (widthWindow < 501)
        xOffsetIndobook <= 0 ? xOffsetIndobook = 162.5 : xOffsetIndobook -= 16.25;

    else if (widthWindow < 753)
        xOffsetIndobook <= 0 ? xOffsetIndobook = 162.8125 : xOffsetIndobook -= 32.5625;

    else if (widthWindow < 945)
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
