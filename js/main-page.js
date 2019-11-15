

// variabel global
let xPromote = 0;
let xIndonesian = 0;


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
    const cartoon = $('#cartoon-horror .cartoon');
    const horror = $('#cartoon-horror .horror');

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
    }
}


// promote slider
function sliderKanan(kode) {
    const slides = $(`.${kode} .slider-container .slides-items`);
    let widthGlobal = $(window).width();

    if (kode === 'promote') {
        if (widthGlobal < 250) {
            if (xPromote >= 83.75)
                xPromote >= 86 ? xPromote = 0 : xPromote += 2.25;
            else
                xPromote += 8.375;
        }

        else if (widthGlobal < 270) {
            if (xPromote >= 83.75)
                xPromote >= 85.75 ? xPromote = 0 : xPromote += 2;
            else
                xPromote += 8.375;
        }

        else if (widthGlobal < 300)
            xPromote >= 83.75 ? xPromote = 0 : xPromote += 8.375;

        else if (widthGlobal < 325) 
            xPromote >= 91.25 ? xPromote = 0 : xPromote += 9.125;

        else if (widthGlobal < 365) {
            if (xPromote >= 82.125)
                xPromote >= 88.75 ? xPromote = 0 : xPromote += 6.625;
            else
                xPromote += 9.125;
        }

        else if (widthGlobal < 400) {
            if (xPromote >= 82.125)
                xPromote >= 86.5 ? xPromote = 0 : xPromote += 4.375;
            else
                xPromote += 9.125;
        }

        else if (widthGlobal < 435) {
            if (xPromote >= 82.125)
                xPromote >= 84.375 ? xPromote = 0 : xPromote += 2.25;
            else
                xPromote += 9.125;
        }
        
        else if (widthGlobal < 465) 
            xPromote >= 82.125 ? xPromote = 0 : xPromote += 9.125;

        else if (widthGlobal < 490) {
            if (xPromote >= 96.1875)
                xPromote >= 99.6875 ? xPromote = 0 : xPromote += 3.5;
            else
                xPromote += 10.6875;
        }
        
        else if (widthGlobal < 530) {
            if (xPromote >= 85.5)
                xPromote >= 97.125 ? xPromote = 0 : xPromote += 11.625;
            else
                xPromote += 10.6875;
        } 

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
        if (widthGlobal < 250) {
            if (xIndonesian >= 83.75)
                xIndonesian >= 86 ? xIndonesian = 0 : xIndonesian += 2.25;
            else
                xIndonesian += 8.375;
        } else if (widthGlobal < 270) {
            if (xIndonesian >= 83.75)
                xIndonesian >= 85.75 ? xIndonesian = 0 : xIndonesian += 2;
            else
                xIndonesian += 8.375;
        } else if (widthGlobal < 300)
            xIndonesian >= 83.75 ? xIndonesian = 0 : xIndonesian += 8.375;

        else if (widthGlobal < 325)
            xIndonesian >= 91.25 ? xIndonesian = 0 : xIndonesian += 9.125;

        else if (widthGlobal < 365) {
            if (xIndonesian >= 82.125)
                xIndonesian >= 88.75 ? xIndonesian = 0 : xIndonesian += 6.625;
            else
                xIndonesian += 9.125;
        } else if (widthGlobal < 400) {
            if (xIndonesian >= 82.125)
                xIndonesian >= 86.5 ? xIndonesian = 0 : xIndonesian += 4.375;
            else
                xIndonesian += 9.125;
        } else if (widthGlobal < 435) {
            if (xIndonesian >= 82.125)
                xIndonesian >= 84.375 ? xIndonesian = 0 : xIndonesian += 2.25;
            else
                xIndonesian += 9.125;
        } else if (widthGlobal < 465)
            xIndonesian >= 82.125 ? xIndonesian = 0 : xIndonesian += 9.125;

        else if (widthGlobal < 490) {
            if (xIndonesian >= 96.1875)
                xIndonesian >= 99.6875 ? xIndonesian = 0 : xIndonesian += 3.5;
            else
                xIndonesian += 10.6875;
        } else if (widthGlobal < 530) {
            if (xIndonesian >= 85.5)
                xIndonesian >= 97.125 ? xIndonesian = 0 : xIndonesian += 11.625;
            else
                xIndonesian += 10.6875;
        } else if (widthGlobal < 753)
            xIndonesian >= 96.1875 ? xIndonesian = 0 : xIndonesian += 10.6875;

        else if (widthGlobal < 945)
            xIndonesian >= 87 ? xIndonesian = 0 : xIndonesian += 10.875;

        else if (widthGlobal < 1185)
            xIndonesian >= 81.375 ? xIndonesian = 0 : xIndonesian += 11.625;

        else if (widthGlobal >= 1185)
            xIndonesian >= 69.75 ? xIndonesian = 0 : xIndonesian += 11.625;

        // manipulasi margin slider
        slides.css('marginLeft', `-${xIndonesian}rem`);
    }
}

function sliderKiri(kode) {
    const slides = $(`.${kode} .slider-container .slides-items`);
    let widthGlobal = $(window).width();

    if (kode === 'promote') {
        if (widthGlobal < 250) {
            if (xPromote > 83.75)
                xPromote -= 2.25;
            else
                xPromote <= 0 ? xPromote = 86 : xPromote -= 8.375;
        }

        else if (widthGlobal < 270) {
            if (xPromote > 83.75)
                xPromote -= 2;
            else
                xPromote <= 0 ? xPromote = 85.75 : xPromote -= 8.375;
        }

        else if (widthGlobal < 300)
            xPromote <= 0 ? xPromote = 83.75 : xPromote -= 8.375;

        else if (widthGlobal < 325) 
            xPromote <= 0 ? xPromote = 91.25 : xPromote -= 9.125;
        
        else if (widthGlobal < 365) {
            if (xPromote > 82.125)
                xPromote -= 6.625;
            else
                xPromote <= 0 ? xPromote = 88.75 : xPromote -= 9.125;
        }

        else if (widthGlobal < 400) {
            if (xPromote > 82.125)
                xPromote -= 4.375;
            else
                xPromote <= 0 ? xPromote = 86.5 : xPromote -= 9.125;
        }

        else if (widthGlobal < 435) {
            if (xPromote > 82.125)
                xPromote -= 2.25;
            else
                xPromote <= 0 ? xPromote = 84.375 : xPromote -= 9.125;
        }

        else if (widthGlobal < 465)
            xPromote <= 0 ? xPromote = 82.125 : xPromote -= 9.125;

        else if (widthGlobal < 490) {
            if (xPromote > 96.1875)
                xPromote -= 3.5;
            else
                xPromote <= 0 ? xPromote = 99.6875 : xPromote -= 10.6875;
        }

        else if (widthGlobal < 530) {
            if (xPromote > 85.5)
                xPromote -= 11.625;
            else
                xPromote <= 0 ? xPromote = 97.125 : xPromote -= 10.6875;
        }
        
        else if (widthGlobal < 753)
            xPromote <= 0 ? xPromote = 96.1875 : xPromote -= 10.6875;

        else if (widthGlobal < 945)
            xPromote <= 0 ? xPromote = 87 : xPromote -= 10.875;

        else if (widthGlobal < 1185)
            xPromote <= 0 ? xPromote = 81.375 : xPromote -= 11.625;
        
        else if (widthGlobal >= 1185) 
            xPromote <= 0 ? xPromote = 69.75 : xPromote -= 11.625

        // manipulasi margin slider
        slides.css('marginLeft', `-${xPromote}rem`);

    } else if (kode === 'indonesian') {
        if (widthGlobal < 250) {
            if (xIndonesian > 83.75)
                xIndonesian -= 2.25;
            else
                xIndonesian <= 0 ? xIndonesian = 86 : xIndonesian -= 8.375;
        } else if (widthGlobal < 270) {
            if (xIndonesian > 83.75)
                xIndonesian -= 2;
            else
                xIndonesian <= 0 ? xIndonesian = 85.75 : xIndonesian -= 8.375;
        } else if (widthGlobal < 300)
            xIndonesian <= 0 ? xIndonesian = 83.75 : xIndonesian -= 8.375;

        else if (widthGlobal < 325)
            xIndonesian <= 0 ? xIndonesian = 91.25 : xIndonesian -= 9.125;

        else if (widthGlobal < 365) {
            if (xIndonesian > 82.125)
                xIndonesian -= 6.625;
            else
                xIndonesian <= 0 ? xIndonesian = 88.75 : xIndonesian -= 9.125;
        } else if (widthGlobal < 400) {
            if (xIndonesian > 82.125)
                xIndonesian -= 4.375;
            else
                xIndonesian <= 0 ? xIndonesian = 86.5 : xIndonesian -= 9.125;
        } else if (widthGlobal < 435) {
            if (xIndonesian > 82.125)
                xIndonesian -= 2.25;
            else
                xIndonesian <= 0 ? xIndonesian = 84.375 : xIndonesian -= 9.125;
        } else if (widthGlobal < 465)
            xIndonesian <= 0 ? xIndonesian = 82.125 : xIndonesian -= 9.125;

        else if (widthGlobal < 490) {
            if (xIndonesian > 96.1875)
                xIndonesian -= 3.5;
            else
                xIndonesian <= 0 ? xIndonesian = 99.6875 : xIndonesian -= 10.6875;
        } else if (widthGlobal < 530) {
            if (xIndonesian > 85.5)
                xIndonesian -= 11.625;
            else
                xIndonesian <= 0 ? xIndonesian = 97.125 : xIndonesian -= 10.6875;
        } else if (widthGlobal < 753)
            xIndonesian <= 0 ? xIndonesian = 96.1875 : xIndonesian -= 10.6875;

        else if (widthGlobal < 945)
            xIndonesian <= 0 ? xIndonesian = 87 : xIndonesian -= 10.875;

        else if (widthGlobal < 1185)
            xIndonesian <= 0 ? xIndonesian = 81.375 : xIndonesian -= 11.625;

        else if (widthGlobal >= 1185)
            xIndonesian <= 0 ? xIndonesian = 69.75 : xIndonesian -= 11.625

        // manipulasi margin slider
        slides.css('marginLeft', `-${xIndonesian}rem`);
    }
}