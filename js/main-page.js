

// variabel global
let xPromote = 0;
let xIndonesian = 0;
let xCartoon = 0;
let xMusic = 0;

const buku = $('#promo-murah .items-buku-promo .buku .card-buku');
let judulBuku = $('h5.judul-buku', buku);
let deskBuku = $('p.desk-buku', buku);
let textJudul = [];
let textBuku = [];


// copy text, agar value asli tidak berubah
$.each(judulBuku, (key, value) => {
    textJudul.push(value.innerHTML);
});

$.each(deskBuku, (key, value) => {
    textBuku.push(value.innerHTML);
});



// responsive - resize window
$(window).ready(responsiveSize);
$(window).resize(responsiveSize);

function responsiveSize() {
    let width = $(window).width();

    const buku = $('#promo-murah .items-buku-promo .buku');
    const img = $('#promo-murah .items-buku-promo .buku .card-buku img');
    const cartoon = $('.cartoon-music .cartoon');
    const music = $('.cartoon-music .music');


    if (width < 250) {

        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
        }

        if (buku.hasClass('col-3')) {
            buku.addClass('col-12');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-4')) {
            buku.addClass('col-12');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-6')) {
            buku.addClass('col-12');
            buku.removeClass('col-6');
        }

        // batasan length judul/desk
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 16) {
                let temp = textJudul[i].substring(0, 16) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 152) {
                let temp = textBuku[i].substring(0, 152) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        img.css('height', '16.375rem');

    } else if (width < 265) {

        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
        }

        if (buku.hasClass('col-3')) {
            buku.addClass('col-12');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-4')) {
            buku.addClass('col-12');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-6')) {
            buku.addClass('col-12');
            buku.removeClass('col-6');
        }

        // batasan length judul/desk
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 18) {
                let temp = textJudul[i].substring(0, 18) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 167) {
                let temp = textBuku[i].substring(0, 167) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        img.css('height', '17.25rem');

    } else if (width < 285) {

        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
        }

        if (buku.hasClass('col-3')) {
            buku.addClass('col-12');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-4')) {
            buku.addClass('col-12');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-6')) {
            buku.addClass('col-12');
            buku.removeClass('col-6');
        }

        // batasan length judul/desk
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 20) {
                let temp = textJudul[i].substring(0, 20) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 177) {
                let temp = textBuku[i].substring(0, 177) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        img.css('height', '18.25rem');

    } else if (width < 305) {

        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
        }

        if (buku.hasClass('col-3')) {
            buku.addClass('col-12');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-4')) {
            buku.addClass('col-12');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-6')) {
            buku.addClass('col-12');
            buku.removeClass('col-6');
        }

        // batasan length judul/desk
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 22) {
                let temp = textJudul[i].substring(0, 22) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 193) {
                let temp = textBuku[i].substring(0, 193) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        img.css('height', '20.5rem');

    } else if (width < 320) {

        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
        }

        if (buku.hasClass('col-3')) {
            buku.addClass('col-6');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-4')) {
            buku.addClass('col-6');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-6');
            buku.removeClass('col-12');
        }

        // batasan length judul/desk
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 9) {
                let temp = textJudul[i].substring(0, 9) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 47) {
                let temp = textBuku[i].substring(0, 47) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        img.css('height', '9.75rem');

    } else if(width < 345) {

        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
        }

        if (buku.hasClass('col-3')) {
            buku.addClass('col-6');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-4')) {
            buku.addClass('col-6');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-6');
            buku.removeClass('col-12');
        }

        // batasan length judul/desk
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 10) {
                let temp = textJudul[i].substring(0, 10) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 57) {
                let temp = textBuku[i].substring(0, 57) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        img.css('height', '10.5rem');

    } else if (width < 365) {

        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
        }

        if (buku.hasClass('col-3')) {
            buku.addClass('col-6');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-4')) {
            buku.addClass('col-6');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-6');
            buku.removeClass('col-12');
        }

        // batasan length judul/desk
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

        // manipulasi css
        img.css('height', '11.25rem');

    } else if(width < 380) {

        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
        }

        if (buku.hasClass('col-3')) {
            buku.addClass('col-6');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-4')) {
            buku.addClass('col-6');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-6');
            buku.removeClass('col-12');
        }

        // batasan length judul/desk
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

        // manipulasi css
        img.css('height', '12.25rem');

    } else if(width < 395) {

        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
        }

        if (buku.hasClass('col-3')) {
            buku.addClass('col-6');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-4')) {
            buku.addClass('col-6');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-6');
            buku.removeClass('col-12');
        }

        // batasan length judul/desk
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 13) {
                let temp = textJudul[i].substring(0, 13) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 97) {
                let temp = textBuku[i].substring(0, 97) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        img.css('height', '13.25rem');

    } else if (width < 410) {
        
        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
        }

        if (buku.hasClass('col-3')) {
            buku.addClass('col-6');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-4')) {
            buku.addClass('col-6');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-6');
            buku.removeClass('col-12');
        }

        // batasan length judul/desk
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 14) {
                let temp = textJudul[i].substring(0, 14) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 117) {
                let temp = textBuku[i].substring(0, 117) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        img.css('height', '14rem');

    } else if (width < 430) {

        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
        }

        if (buku.hasClass('col-3')) {
            buku.addClass('col-6');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-4')) {
            buku.addClass('col-6');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-6');
            buku.removeClass('col-12');
        }

        // batasan length judul/desk
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 15) {
                let temp = textJudul[i].substring(0, 15) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 123) {
                let temp = textBuku[i].substring(0, 123) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        img.css('height', '15.25rem');

    } else if(width < 465) {

        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
        }

        if (buku.hasClass('col-3')) {
            buku.addClass('col-6');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-4')) {
            buku.addClass('col-6');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-6');
            buku.removeClass('col-12');
        }

        // batasan length judul/desk
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 16) {
                let temp = textJudul[i].substring(0, 16) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 133) {
                let temp = textBuku[i].substring(0, 133) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        img.css('height', '16rem');

    } else if (width < 485) {
        
        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
        }

        if (buku.hasClass('col-3')) {
            buku.addClass('col-4');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-6')) {
            buku.addClass('col-4');
            buku.removeClass('col-6');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-4');
            buku.removeClass('col-12');
        }

        // batasan length judul/desk
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 9) {
                let temp = textJudul[i].substring(0, 9) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 73) {
                let temp = textBuku[i].substring(0, 73) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        img.css('height', '11.0625rem');

    }else if (width < 500) {

        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
        }

        if (buku.hasClass('col-3')) {
            buku.addClass('col-4');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-6')) {
            buku.addClass('col-4');
            buku.removeClass('col-6');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-4');
            buku.removeClass('col-12');
        }

        // batasan length judul/desk
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 10) {
                let temp = textJudul[i].substring(0, 10) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 87) {
                let temp = textBuku[i].substring(0, 87) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        img.css('height', '11.75rem');

    } else if (width < 540) {
        
        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
        }

        if (buku.hasClass('col-3')) {
            buku.addClass('col-4');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-6')) {
            buku.addClass('col-4');
            buku.removeClass('col-6');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-4');
            buku.removeClass('col-12');
        }

        // batasan length judul/desk
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 11) {
                let temp = textJudul[i].substring(0, 11) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 97) {
                let temp = textBuku[i].substring(0, 97) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        img.css('height', '12.125rem');

    } else if(width < 753) {

        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            music.addClass('col-12');
            music.removeClass('col-6');
        }

        if (buku.hasClass('col-3')) {
            buku.addClass('col-4');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-6')) {
            buku.addClass('col-4');
            buku.removeClass('col-6');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-4');
            buku.removeClass('col-12');
        }

        // batasan length judul/desk
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 12) {
                let temp = textJudul[i].substring(0, 12) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 103) {
                let temp = textBuku[i].substring(0, 103) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        img.css('height', '12.5rem');

    } else if (width < 945) {

        // manipulasi kolom
        if (cartoon.hasClass('col-12')) {
            cartoon.addClass('col-6');
            cartoon.removeClass('col-12');

            music.addClass('col-6');
            music.removeClass('col-12');
        }

        if (buku.hasClass('col-3')) {
            buku.addClass('col-4');
            buku.removeClass('col-3');
        } else if (buku.hasClass('col-6')) {
            buku.addClass('col-4');
            buku.removeClass('col-6');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-4');
            buku.removeClass('col-12');
        }

        // batasan length judul/desk
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

        // manipulasi css
        img.css('height', '17rem');

    } else if (width < 1185) {

        // manipulasi kolom
        if (cartoon.hasClass('col-12')) {
            cartoon.addClass('col-6');
            cartoon.removeClass('col-12');

            music.addClass('col-6');
            music.removeClass('col-12');
        }

        if (buku.hasClass('col-4')) {
            buku.addClass('col-3');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-6')) {
            buku.addClass('col-3');
            buku.removeClass('col-6');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-3');
            buku.removeClass('col-12');
        }

        // batasan length judul/desk
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 14) {
                let temp = textJudul[i].substring(0, 14) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 173) {
                let temp = textBuku[i].substring(0, 173) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        img.css('height', '17.25rem');
        
    } else if (width >= 1185) {

        // manipulasi kolom
        if (cartoon.hasClass('col-12')) {
            cartoon.addClass('col-6');
            cartoon.removeClass('col-12');

            music.addClass('col-6');
            music.removeClass('col-12');
        }

        if (buku.hasClass('col-4')) {
            buku.addClass('col-3');
            buku.removeClass('col-4');
        } else if (buku.hasClass('col-6')) {
            buku.addClass('col-3');
            buku.removeClass('col-6');
        } else if (buku.hasClass('col-12')) {
            buku.addClass('col-3');
            buku.removeClass('col-12');
        }

        // batasan length judul/desk
        for (let i = 0; i < textJudul.length; i++) {
            if (textJudul[i].length >= 18) {
                let temp = textJudul[i].substring(0, 18) + "...";
                judulBuku[i].innerHTML = temp;
            }
        }

        for (let i = 0; i < textBuku.length; i++) {
            if (textBuku[i].length >= 212) {
                let temp = textBuku[i].substring(0, 212) + "...";
                deskBuku[i].innerHTML = temp;
            }
        }

        // manipulasi css
        img.css('height', '20.5rem');
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
