

// variabel global
let judulBuku;
let deskBuku;
let textJudul = [];
let textBuku = [];


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


// tambah buku tertentu
function tambahBukuTertentu(value) {

    // copy data, supaya yang asli tidak berubah waktu dimanipulasi
    textJudul.push(value.productName);
    textBuku.push(value.productDescription);

    // ubah price menjadi format rupiah
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


// set url, params, judul
function setData() {
    let url;
    let params;

    // ambil keyword sesuai klik (kategori/search)
    let keyword = window.location.search.substring(1).split('=');
    keyword[1] = keyword[1].replace(/%20/g, ' ');

    let judulKeyword = "";

    // tetapkan judul keyword
    keyword[1] === "All" ? judulKeyword = "Semua Buku" : 
    keyword[1] === "Indonesia" ? judulKeyword = "Buku Indonesia" : judulKeyword = keyword[1];

    if (keyword[0] === 'search')
        judulKeyword = `Pencarian : ${keyword[1]}`;

    // ubah judul keyword
    $('#promo-murah .header h2').html(judulKeyword);

    // tetapkan base url dan params (kategori/search/all/indonesian)
    if (keyword[0] === "kategori") {
        if (keyword[1] === "All") {
            url = `${base_url}admin/products`;
        } else if (keyword[1] === "Indonesia") {
            url = `${base_url}products/country`;
            params = {
                country: 'Indonesia'
            };
        } else {
            url = `${base_url}products/category`;
            params = {
                name: keyword[1]
            };
        }

    } else if (keyword[0] === "search") {
        url = `${base_url}products/search`;
        params = {
            key: keyword[1]
        };
    }

    requestAPI(url, params);
}


// get data buku yang dicari
function requestAPI(url, params) {

    $('.loading').css('display', 'flex');    // tampilkan loading

    $.ajax({
        url: url,
        type: "get",
        dataType: "json",

        data: params,

        success: function (response) {
            if (response.length > 0) {
                response.forEach(value => {
                    tambahBukuTertentu(value);   // append data
                });
            } else {
                $('#promo-murah .items-buku-promo .row').html(`
                    <div class="col">
                        <p class="text-info">Buku tidak ditemukan</p>
                    </div>
                `);
            }

            // hilangkan loading
            $('.loading').css('display', 'none');
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
    setData();
});

$(window).resize(responsiveSize);
