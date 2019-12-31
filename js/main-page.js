

// variabel global
let xPromote = 0;
let xIndonesian = 0;
let xCartoon = 0;
let xNovel = 0;

let judulBuku;
let deskBuku;
let textJudul = [];
let textBuku = [];


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();

    const buku = $('#promo-murah .items-buku-promo .buku');
    const img = $('#promo-murah .items-buku-promo .buku .card-buku img');
    const cartoon = $('.cartoon-novel .cartoon');
    const novel = $('.cartoon-novel .novel');


    if (width < 250) {

        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            novel.addClass('col-12');
            novel.removeClass('col-6');
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

            novel.addClass('col-12');
            novel.removeClass('col-6');
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

            novel.addClass('col-12');
            novel.removeClass('col-6');
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

            novel.addClass('col-12');
            novel.removeClass('col-6');
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

            novel.addClass('col-12');
            novel.removeClass('col-6');
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
            if (textJudul[i].length >= 7) {
                let temp = textJudul[i].substring(0, 7) + "...";
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
        img.css('height', '8.5rem');

    } else if(width < 345) {

        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            novel.addClass('col-12');
            novel.removeClass('col-6');
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

            novel.addClass('col-12');
            novel.removeClass('col-6');
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

            novel.addClass('col-12');
            novel.removeClass('col-6');
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

            novel.addClass('col-12');
            novel.removeClass('col-6');
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

            novel.addClass('col-12');
            novel.removeClass('col-6');
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

            novel.addClass('col-12');
            novel.removeClass('col-6');
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

            novel.addClass('col-12');
            novel.removeClass('col-6');
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

            novel.addClass('col-12');
            novel.removeClass('col-6');
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
        img.css('height', '10.5rem');

    }else if (width < 500) {

        // manipulasi kolom
        if (cartoon.hasClass('col-6')) {
            cartoon.addClass('col-12');
            cartoon.removeClass('col-6');

            novel.addClass('col-12');
            novel.removeClass('col-6');
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

            novel.addClass('col-12');
            novel.removeClass('col-6');
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

            novel.addClass('col-12');
            novel.removeClass('col-6');
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

            novel.addClass('col-6');
            novel.removeClass('col-12');
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

            novel.addClass('col-6');
            novel.removeClass('col-12');
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

            novel.addClass('col-6');
            novel.removeClass('col-12');
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

    } else if (kode === 'novel') {
        if (widthGlobal < 280)
            xNovel >= 92.125 ? xNovel = 0 : xNovel += 8.375;

        else if (widthGlobal < 300)
            xNovel >= 83.75 ? xNovel = 0 : xNovel += 8.375;

        else if (widthGlobal < 325)
            xNovel >= 91.25 ? xNovel = 0 : xNovel += 9.125;

        else if (widthGlobal < 440)
            xNovel >= 91.25 ? xNovel = 0 : xNovel += 9.125;

        else if (widthGlobal < 465)
            xNovel >= 82.125 ? xNovel = 0 : xNovel += 9.125;

        else if (widthGlobal < 510)
            xNovel >= 106.875 ? xNovel = 0 : xNovel += 10.6875;

        else if (widthGlobal < 753)
            xNovel >= 96.1875 ? xNovel = 0 : xNovel += 10.6875;

        else if (widthGlobal < 945)
            xNovel >= 108.75 ? xNovel = 0 : xNovel += 10.875;

        else if (widthGlobal < 1185)
            xNovel >= 116.25 ? xNovel = 0 : xNovel += 11.625;

        else if (widthGlobal >= 1185)
            xNovel >= 104.625 ? xNovel = 0 : xNovel += 11.625;

        // manipulasi margin slider
        slides.css('marginLeft', `-${xNovel}rem`);
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

    } else if (kode === 'novel') {
        if (widthGlobal < 280)
            xNovel <= 0 ? xNovel = 92.125 : xNovel -= 8.375;

        else if (widthGlobal < 300)
            xNovel <= 0 ? xNovel = 83.75 : xNovel -= 8.375;

        else if (widthGlobal < 325)
            xNovel <= 0 ? xNovel = 91.25 : xNovel -= 9.125;

        else if (widthGlobal < 440)
            xNovel <= 0 ? xNovel = 91.25 : xNovel -= 9.125;

        else if (widthGlobal < 465)
            xNovel <= 0 ? xNovel = 82.125 : xNovel -= 9.125;

        else if (widthGlobal < 510)
            xNovel <= 0 ? xNovel = 106.875 : xNovel -= 10.6875;

        else if (widthGlobal < 753)
            xNovel <= 0 ? xNovel = 96.1875 : xNovel -= 10.6875;

        else if (widthGlobal < 945)
            xNovel <= 0 ? xNovel = 108.75 : xNovel -= 10.875;

        else if (widthGlobal < 1185)
            xNovel <= 0 ? xNovel = 116.25 : xNovel -= 11.625;

        else if (widthGlobal >= 1185)
            xNovel <= 0 ? xNovel = 104.625 : xNovel -= 11.625;

        // manipulasi margin slider
        slides.css('marginLeft', `-${xNovel}rem`);

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


// tambah buku tertentu (salah satunya : buku dibawah 100K)
function tambahBukuTertentu(value) {

    // copy data, supaya yang asli tidak berubah waktu dimanipulasi
    textJudul.push(value.productName);
    textBuku.push(value.productDescription);

    // ubah menjadi format rupiah
    let harga = generateRupiah(value.productPrice);

    // add buku ke dom
    $('#promo-murah .items-buku-promo .row').append(`
        <div class="col-3 buku">
            <a href="detailProduct-page.html?${value.productId}">
                <div class="card-buku">
                    <img src="${value.productPhotoLink}">
                    <div class="card-body-buku">
                        <h5 class="judul-buku">${value.productName}</h5>
                        <p class="harga-buku">Rp. ${harga}</p>
                        <p class="desk-buku">${value.productDescription}</p>
                    </div>
                </div>
            </a>
        </div>    
    `);
}


// get all promote
function getAllPromote() {

    // ubah tanda panah bawah menjadi loading
    $('.lihat-semua span').html(`<img src="../gif/flip.gif">`);

    $.ajax({
        url: `${base_url}products/search/price`,
        type: "get",
        dataType: "json",

        data: {
            lessThan: 100000
        },

        success: function(response) {
            
            // append mulai dari index 12 (karena index 0-11 sudah tertampil)
            for (let i = 12; i < response.length; i++) {
                tambahBukuTertentu(response[i]);
            }

            // setelah berhasil, hapus loading
            $('.lihat-semua span').css('display', 'none');
        }

    }).then(() => {
        const buku = $('#promo-murah .items-buku-promo .buku .card-buku');
        judulBuku = $('h5.judul-buku', buku);
        deskBuku = $('p.desk-buku', buku);
    }).then(() => {
        responsiveSize();
    });
}


// document ready
$(document).ready(() => {

    // tampilkan loading
    $('.loading').css('display', 'flex');

    // get api buku (percintaan)
    $.ajax({
        url: `${base_url}products/category`,
        type: "get",
        dataType: "json",

        data: {
            name: 'Percintaan'
        },

        success: function (response) {
            let iPercintaan = 1;

            response.forEach(value => {
                if (iPercintaan <= 12) {
                    $('.promote .slider-container .slides-items').append(`<a href="detailProduct-page.html?${value.productId}"><img src="${value.productPhotoLink}" class="prod-hover"></a>`);
                    iPercintaan++;
                }
            });
        }
    }).then(() => {

        // get api buku (kartun)
        $.ajax({
            url: `${base_url}products/category`,
            type: "get",
            dataType: "json",

            data: {
                name: 'Kartun'
            },

            success: function (response) {
                let iKartun = 1;

                response.forEach(value => {
                    if (iKartun <= 12) {
                        $('.cartoon-novel .cartoon .slider-container .slides-items').append(`<a href="detailProduct-page.html?${value.productId}"><img src="${value.productPhotoLink}" class="prod-hover"></a>`);
                        iKartun++;
                    }   
                });
                

                // hilangkan loading
                $('.loading').css('display', 'none');
            }

        }).then(() => {

            // get api buku (novel)
            $.ajax({
                url: `${base_url}products/category`,
                type: "get",
                dataType: "json",

                data: {
                    name: 'Novel'
                },

                success: function (response) {
                    let iNovel = 1;

                    response.forEach(value => {
                        if (iNovel <= 12) {
                            $('.cartoon-novel .novel .slider-container .slides-items').append(`<a href="detailProduct-page.html?${value.productId}"><img src="${value.productPhotoLink}" class="prod-hover"></a>`);
                            iNovel++;
                        }
                    });
                }
            });
        }).then(() => {

            // get api buku (indonesia)
            $.ajax({
                url: `${base_url}products/country`,
                type: "get",
                dataType: "json",

                data: {
                    country: 'Indonesia'
                },

                success: function (response) {
                    let iIndonesia = 1;

                    response.forEach(value => {
                        if (iIndonesia <= 12) {
                            $('.indonesian .slider-container .slides-items').append(`<a href="detailProduct-page.html?${value.productId}"><img src="${value.productPhotoLink}" class="prod-hover"></a>`);
                            iIndonesia++;
                        }
                    });
                }

            })
            
        }).then(() => {

            // get api buku (dibawah 100K)
            $.ajax({
                url: `${base_url}products/search/price`,
                type: "get",
                dataType: "json",

                data: {
                    lessThan: 100000
                },

                success: function (response) {
                    let iPromoMurah = 1;
                    response.forEach(value => {
                        if (iPromoMurah <= 12) {
                            tambahBukuTertentu(value);
                            iPromoMurah++;
                        }
                    });
                }
            }).then(() => {
                const buku = $('#promo-murah .items-buku-promo .buku .card-buku');
                judulBuku = $('h5.judul-buku', buku);
                deskBuku = $('p.desk-buku', buku)
            }).then(() => {
                responsiveSize();
            });
        });

    });
    
});

$(window).resize(responsiveSize);


