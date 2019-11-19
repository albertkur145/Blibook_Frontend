

// variabel global
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
function responsiveSize() {
    let width = $(window).width();
    const buku = $('#promo-murah .items-buku-promo .buku');
    const img = $('#promo-murah .items-buku-promo .buku .card-buku img');


    if (width < 250) {

        // manipulasi kolom
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

        // manipulasi column
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

    } else if (width < 345) {

        // manipulasi column
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

        // manipulasi column
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

    } else if (width < 380) {

        // manipulasi column
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

    } else if (width < 395) {

        // manipulasi column
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

        // manipulasi column
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

        // manipulasi column
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

    } else if (width < 465) {

        // manipulasi kolom
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

        // manipulasi column
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

    } else if (width < 500) {

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

        // manipulasi column
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

    } else if (width < 753) {

        // manipulasi column
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

        // manipulasi column
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

        // manipulasi column
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


// document ready
responsiveSize();
$(window).resize(responsiveSize);