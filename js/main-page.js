

// variabel global
let xPromote = 0;
let xIndonesian = 0;
let xCartoon = 0;
let xMusic = 0;


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
    $('.angka').html(width);

    const itemsBuku = $('#promo-murah .items-buku-promo .row');
    const cartoon = $('.cartoon-music .cartoon');
    const music = $('.cartoon-music .music');

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



        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
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


        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
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



        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
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



        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
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


        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
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


        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
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


        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
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



        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
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



        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
        }

    } else if (width < 945) {

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


        // manipulasi kolom
        if (cartoon.hasClass('col-12')) {
            cartoon.addClass('col-6');
            cartoon.removeClass('col-12');

            music.addClass('col-6');
            music.removeClass('col-12');
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



        // manipulasi kolom
        if (cartoon.hasClass('col-12')) {
            cartoon.addClass('col-6');
            cartoon.removeClass('col-12');

            music.addClass('col-6');
            music.removeClass('col-12');
        }
        
    } else if (width >= 1185) {

        // manipulasi column
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

        // manipulasi css
        $('.card-buku', itemsBuku).css('width', '100%');
        $('.card-buku', itemsBuku).css('marginLeft', '0');
        $('.card-buku img', itemsBuku).css('height', '60%');

        // batasan length string
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


        // manipulasi kolom
        if (cartoon.hasClass('col-12')) {
            cartoon.addClass('col-6');
            cartoon.removeClass('col-12');

            music.addClass('col-6');
            music.removeClass('col-12');
        }
    }
}


// promote slider
function sliderKanan(kode) {
    const slides = $(`.${kode} .slider-container .slides-items`);
    let widthGlobal = $(window).width();

    if (kode === 'promote') {
        if (widthGlobal < 280)
            xPromote >= 92.125 ? xPromote = 0 : xPromote += 8.375;

        else if (widthGlobal < 300)
            xPromote >= 83.75 ? xPromote = 0 : xPromote += 8.375;

        else if (widthGlobal < 325)
            xPromote >= 91.25 ? xPromote = 0 : xPromote += 9.125;

        else if (widthGlobal < 440)
            xPromote >= 91.25 ? xPromote = 0 : xPromote += 9.125;

        else if (widthGlobal < 465)
            xPromote >= 82.125 ? xPromote = 0 : xPromote += 9.125;

        else if (widthGlobal < 510)
            xPromote >= 106.875 ? xPromote = 0 : xPromote += 10.6875;

        else if (widthGlobal < 753)
            xPromote >= 96.1875 ? xPromote = 0 : xPromote += 10.6875;

        else if (widthGlobal < 945)
            xPromote >= 87 ? xPromote = 0 : xPromote += 10.875;

        else if (widthGlobal < 1185)
            xPromote >= 81.375 ? xPromote = 0 : xPromote += 11.625;

        else if (widthGlobal >= 1185)
            xPromote >= 69.75 ? xPromote = 0 : xPromote += 11.625;
    
        // manipulasi margin slider
        slides.css('marginLeft', `-${xPromote}rem`);

    } else if (kode === 'indonesian') {
        if (widthGlobal < 280)
            xIndonesian >= 92.125 ? xIndonesian = 0 : xIndonesian += 8.375;

        else if (widthGlobal < 300)
            xIndonesian >= 83.75 ? xIndonesian = 0 : xIndonesian += 8.375;

        else if (widthGlobal < 325)
            xIndonesian >= 91.25 ? xIndonesian = 0 : xIndonesian += 9.125;

        else if (widthGlobal < 440)
            xIndonesian >= 91.25 ? xIndonesian = 0 : xIndonesian += 9.125;

        else if (widthGlobal < 465)
            xIndonesian >= 82.125 ? xIndonesian = 0 : xIndonesian += 9.125;

        else if (widthGlobal < 510)
            xIndonesian >= 106.875 ? xIndonesian = 0 : xIndonesian += 10.6875;

        else if (widthGlobal < 753)
            xIndonesian >= 96.1875 ? xIndonesian = 0 : xIndonesian += 10.6875;

        else if (widthGlobal < 945)
            xIndonesian >= 87 ? xIndonesian = 0 : xIndonesian += 10.875;

        else if (widthGlobal < 1185)
            xIndonesian >= 81.375 ? xIndonesian = 0 : xIndonesian += 11.625;

        else if (widthGlobal >= 1185)
            xIndonesian >= 69.75 ? xIndonesian = 0 : xIndonesian += 11.625;


        // manipulasi margin slider
        slides.css('marginLeft', `-${xIndonesian}rem`);

    } else if (kode === 'cartoon') {
        if (widthGlobal < 280) 
            xCartoon >= 92.125 ? xCartoon = 0 : xCartoon += 8.375;

        else if (widthGlobal < 300)
            xCartoon >= 83.75 ? xCartoon = 0 : xCartoon += 8.375;

        else if (widthGlobal < 325)
            xCartoon >= 91.25 ? xCartoon = 0 : xCartoon += 9.125;

        else if (widthGlobal < 440) 
            xCartoon >= 91.25 ? xCartoon = 0 : xCartoon += 9.125;
        
        else if (widthGlobal < 465)
            xCartoon >= 82.125 ? xCartoon = 0 : xCartoon += 9.125;
        
        else if (widthGlobal < 510)
            xCartoon >= 106.875 ? xCartoon = 0 : xCartoon += 10.6875;

        else if (widthGlobal < 753)
            xCartoon >= 96.1875 ? xCartoon = 0 : xCartoon += 10.6875;

        else if (widthGlobal < 945)
            xCartoon >= 108.75 ? xCartoon = 0 : xCartoon += 10.875;

        else if (widthGlobal < 1185)
            xCartoon >= 116.25 ? xCartoon = 0 : xCartoon += 11.625;

        else if (widthGlobal >= 1185)
            xCartoon >= 104.625 ? xCartoon = 0 : xCartoon += 11.625;

        // manipulasi margin slider
        slides.css('marginLeft', `-${xCartoon}rem`);

    } else if (kode === 'music') {
        if (widthGlobal < 280)
            xMusic >= 92.125 ? xMusic = 0 : xMusic += 8.375;

        else if (widthGlobal < 300)
            xMusic >= 83.75 ? xMusic = 0 : xMusic += 8.375;

        else if (widthGlobal < 325)
            xMusic >= 91.25 ? xMusic = 0 : xMusic += 9.125;

        else if (widthGlobal < 440)
            xMusic >= 91.25 ? xMusic = 0 : xMusic += 9.125;

        else if (widthGlobal < 465)
            xMusic >= 82.125 ? xMusic = 0 : xMusic += 9.125;

        else if (widthGlobal < 510)
            xMusic >= 106.875 ? xMusic = 0 : xMusic += 10.6875;

        else if (widthGlobal < 753)
            xMusic >= 96.1875 ? xMusic = 0 : xMusic += 10.6875;

        else if (widthGlobal < 945)
            xMusic >= 108.75 ? xMusic = 0 : xMusic += 10.875;

        else if (widthGlobal < 1185)
            xMusic >= 116.25 ? xMusic = 0 : xMusic += 11.625;

        else if (widthGlobal >= 1185)
            xMusic >= 104.625 ? xMusic = 0 : xMusic += 11.625;

        // manipulasi margin slider
        slides.css('marginLeft', `-${xMusic}rem`);
    }
}

function sliderKiri(kode) {
    const slides = $(`.${kode} .slider-container .slides-items`);
    let widthGlobal = $(window).width();

    if (kode === 'promote') {
        if (widthGlobal < 280)
            xPromote <= 0 ? xPromote = 92.125 : xPromote -= 8.375;

        else if (widthGlobal < 300)
            xPromote <= 0 ? xPromote = 83.75 : xPromote -= 8.375;

        else if (widthGlobal < 325)
            xPromote <= 0 ? xPromote = 91.25 : xPromote -= 9.125;

        else if (widthGlobal < 440)
            xPromote <= 0 ? xPromote = 91.25 : xPromote -= 9.125;

        else if (widthGlobal < 465)
            xPromote <= 0 ? xPromote = 82.125 : xPromote -= 9.125;

        else if (widthGlobal < 510)
            xPromote <= 0 ? xPromote = 106.875 : xPromote -= 10.6875;

        else if (widthGlobal < 753)
            xPromote <= 0 ? xPromote = 96.1875 : xPromote -= 10.6875;

        else if (widthGlobal < 945)
            xPromote <= 0 ? xPromote = 87 : xPromote -= 10.875;

        else if (widthGlobal < 1185)
            xPromote <= 0 ? xPromote = 81.375 : xPromote -= 11.625;

        else if (widthGlobal >= 1185)
            xPromote <= 0 ? xPromote = 69.75 : xPromote -= 11.625;

        // manipulasi margin slider
        slides.css('marginLeft', `-${xPromote}rem`);

    } else if (kode === 'indonesian') {
        if (widthGlobal < 280)
            xIndonesian <= 0 ? xIndonesian = 92.125 : xIndonesian -= 8.375;

        else if (widthGlobal < 300)
            xIndonesian <= 0 ? xIndonesian = 83.75 : xIndonesian -= 8.375;

        else if (widthGlobal < 325)
            xIndonesian <= 0 ? xIndonesian = 91.25 : xIndonesian -= 9.125;

        else if (widthGlobal < 440)
            xIndonesian <= 0 ? xIndonesian = 91.25 : xIndonesian -= 9.125;

        else if (widthGlobal < 465)
            xIndonesian <= 0 ? xIndonesian = 82.125 : xIndonesian -= 9.125;

        else if (widthGlobal < 510)
            xIndonesian <= 0 ? xIndonesian = 106.875 : xIndonesian -= 10.6875;

        else if (widthGlobal < 753)
            xIndonesian <= 0 ? xIndonesian = 96.1875 : xIndonesian -= 10.6875;

        else if (widthGlobal < 945)
            xIndonesian <= 0 ? xIndonesian = 87 : xIndonesian -= 10.875;

        else if (widthGlobal < 1185)
            xIndonesian <= 0 ? xIndonesian = 81.375 : xIndonesian -= 11.625;

        else if (widthGlobal >= 1185)
            xIndonesian <= 0 ? xIndonesian = 69.75 : xIndonesian -= 11.625;

        // manipulasi margin slider
        slides.css('marginLeft', `-${xIndonesian}rem`);

    } else if (kode === 'cartoon') {
        if (widthGlobal < 280) 
            xCartoon <= 0 ? xCartoon = 92.125 : xCartoon -= 8.375;

        else if (widthGlobal < 300)
            xCartoon <= 0 ? xCartoon = 83.75 : xCartoon -= 8.375;

        else if (widthGlobal < 325)
            xCartoon <= 0 ? xCartoon = 91.25 : xCartoon -= 9.125;
        
        else if (widthGlobal < 440)
            xCartoon <= 0 ? xCartoon = 91.25 : xCartoon -= 9.125;
        
        else if (widthGlobal < 465)
            xCartoon <= 0 ? xCartoon = 82.125 : xCartoon -= 9.125;

        else if (widthGlobal < 510) 
            xCartoon <= 0 ? xCartoon = 106.875 : xCartoon -= 10.6875;

        else if (widthGlobal < 753)
            xCartoon <= 0 ? xCartoon = 96.1875 : xCartoon -= 10.6875;

        else if (widthGlobal < 945)
            xCartoon <= 0 ? xCartoon = 108.75 : xCartoon -= 10.875;

        else if (widthGlobal < 1185)
            xCartoon <= 0 ? xCartoon = 116.25 : xCartoon -= 11.625;

        else if (widthGlobal >= 1185)
            xCartoon <= 0 ? xCartoon = 104.625 : xCartoon -= 11.625;

        // manipulasi margin slider
        slides.css('marginLeft', `-${xCartoon}rem`);

    } else if (kode === 'music') {
        if (widthGlobal < 280)
            xMusic <= 0 ? xMusic = 92.125 : xMusic -= 8.375;

        else if (widthGlobal < 300)
            xMusic <= 0 ? xMusic = 83.75 : xMusic -= 8.375;

        else if (widthGlobal < 325)
            xMusic <= 0 ? xMusic = 91.25 : xMusic -= 9.125;

        else if (widthGlobal < 440)
            xMusic <= 0 ? xMusic = 91.25 : xMusic -= 9.125;

        else if (widthGlobal < 465)
            xMusic <= 0 ? xMusic = 82.125 : xMusic -= 9.125;

        else if (widthGlobal < 510)
            xMusic <= 0 ? xMusic = 106.875 : xMusic -= 10.6875;

        else if (widthGlobal < 753)
            xMusic <= 0 ? xMusic = 96.1875 : xMusic -= 10.6875;

        else if (widthGlobal < 945)
            xMusic <= 0 ? xMusic = 108.75 : xMusic -= 10.875;

        else if (widthGlobal < 1185)
            xMusic <= 0 ? xMusic = 116.25 : xMusic -= 11.625;

        else if (widthGlobal >= 1185)
            xMusic <= 0 ? xMusic = 104.625 : xMusic -= 11.625;

        // manipulasi margin slider
        slides.css('marginLeft', `-${xMusic}rem`);

    }
}
