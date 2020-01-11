

// variable global
let kode;
let success;


// append tahun terbit
function appendTahunTerbit() {
    for (let i = 2020; i >= 1950; i--) {
        $('#content .right .rbody select#tahun').append(`
            <option value="${i}">${i}</option>
        `);
    }
}


// mark side tab
function borderTab() {
    $('#content .left .tab .toko-saya-tab').addClass('is-active');
}


// hide dialog
function hideDialog() {
    $('.dialog-oke').css('display', 'none');

    if (success === 200)
        window.location.href = `${site_url}html/tokoSaya-page.html`;
}


// validation form
const kategori = $('#content .right .rbody #kategori');
const judulBuku = $('#content .right .rbody #judul');
const penulisBuku = $('#content .right .rbody #penulis');
const isbn = $('#content .right .rbody #isbn');
const jumlahHalaman = $('#content .right .rbody #halaman');
const tahunTerbit = $('#content .right .rbody #tahun');
const negara = $('#content .right .rbody #negara');
const bahasa = $('#content .right .rbody #bahasa');
const hargaBuku = $('#content .right .rbody #harga');
// const diskonBuku = $('#content .right .rbody #diskon');
// const hargaSetelahDiskon = $('#content .right .rbody #harga-diskon');
const deskripsiBuku = $('#content .right .rbody #deskripsi');
const uploadGambar = $('#content .right .rbody #gambar');
const uploadPDF = $('#content .right .rbody #pdf');

const extensionsImg = ["jpg", "jpeg", "png"];
const regexNumber = /^[0-9]+$/;
const regexISBN = /^978[0-9]{10}$/;


// validation all input
function validationAllInput() {
    if ($('option:selected', kategori).val().length != 0 && judulBuku.val().length != 0 && penulisBuku.val().length != 0 && regexISBN.test(isbn.val()) && regexNumber.test(jumlahHalaman.val()) && $('option:selected', tahunTerbit).val().length != 0 && $('option:selected', negara).val().length != 0 && bahasa.val().length != 0 && regexNumber.test(hargaBuku.val()) && deskripsiBuku.val().length >= 36) 
        return 1;

    return 0;
}


// validation PDF
function validationPDF() {

    // cek upload file
    if (uploadPDF.val().length > 0) {

        // cek maksimal size
        if (uploadPDF[0].files[0].size > 20000000) {
            $('small#error-size-pdf').css('display', 'block');
            return 0;
        } else {

            // cek ektension .pdf
            let pdf = uploadPDF.val().split(".");
            let tempPdf = pdf[pdf.length - 1].toLowerCase();

            // ekstension valid
            if (tempPdf == 'pdf')
                return 1;

            // ekstension tidak valid
            $('small#error-pdf').css('display', 'block'); 
        }
    }

    // tidak upload file / ekstension tidak valid
    return 0;
}


// validation image (jpg, jpeg, png)
function validationImage() {
    if (uploadGambar.val().length > 0) {

        // cek maksimal size
        if (uploadGambar[0].files[0].size > 4000000) {
            $('small#error-size-gambar').css('display', 'block');
            return 0;
        } else {

            // cek ektension image (jpg, jpeg, png)
            let image = uploadGambar.val().split(".");
            let tempImage = image[image.length - 1].toLowerCase();

            for (let i = 0; i < extensionsImg.length; i++) {
                if (tempImage == extensionsImg[i]) {
                    return 1;                             // ektension valid
                }
            }

            // ektension tidak valid
            $('small#error-gambar').css('display', 'block'); 
        }
    }

    // tidak upload file / ektension tidak valid
    return 0;
}


// validation form
function validationForm() {

    if (!checkSesi())
        window.location.href = `${site_url}html/login-page.html`;

    if (validationAllInput()) { // validasi setiap input/select option

        if (validationImage()) { // validasi cover buku

            if (validationPDF()) { // validasi pdf
                
                // tampilkan loading
                $('.loading').css('display', 'flex');

                // setelah semua valid, post/update buku
                let Buku = {
                    "productName": judulBuku.val(),
                    "productAuthor": penulisBuku.val(),
                    "productIsbn": isbn.val(),
                    "productSku": null,
                    "productCountry": $('option:selected', negara).val(),
                    "productPrice": hargaBuku.val(),
                    "productDescription": deskripsiBuku.val(),
                    "productLength": jumlahHalaman.val(),
                    "productReleaseYear": $('option:selected', tahunTerbit).val(),
                    "productLanguage": bahasa.val(),
                    "productVariant": null,
                    "productPhotoLink": null,
                    "productItemLink": null,
                }

                // tetapkan url, tipe & params
                let url, type;
                let params = new FormData();

                if (kode[0] === 'shop') {
                    params.append('shop', kode[1]);

                    url = `${base_url}products`;
                    type = 'post';
                } else if (kode[0] === 'update') {
                    Buku.productId = kode[1];

                    url = `${base_url}products/update`;
                    type = 'put';
                }

                // pakai FormData sesuai postman
                params.append('item', uploadPDF[0].files[0]);
                params.append('photo', uploadGambar[0].files[0]);
                params.append('product', JSON.stringify(Buku));
                params.append('category', $('option:selected', kategori).val());

                requestAPI(params, url, type);
            }
        }
    }


    if ($('option:selected', kategori).val().length == 0)
        $('small#error-kategori').css('display', 'block');

    if (judulBuku.val().length == 0)
        $('small#error-judul').css('display', 'block');
    
    if (penulisBuku.val().length == 0)
        $('small#error-penulis').css('display', 'block');

    if (!regexISBN.test(isbn.val()))
        $('small#error-isbn').css('display', 'block');

    if (!regexNumber.test(jumlahHalaman.val()))
        $('small#error-halaman').css('display', 'block');

    if ($('option:selected', tahunTerbit).val().length == 0)
        $('small#error-tahun').css('display', 'block');

    if ($('option:selected', negara).val().length == 0)
        $('small#error-negara').css('display', 'block');

    if (bahasa.val().length == 0)
        $('small#error-bahasa').css('display', 'block');

    if (!regexNumber.test(hargaBuku.val()))
        $('small#error-harga').css('display', 'block');

    // if (!regexNumber.test(diskonBuku.val()) || diskonBuku.val() > 100)
    //     $('small#error-diskon').css('display', 'block');

    if (deskripsiBuku.val().length < 36)
        $('small#error-deskripsi').css('display', 'block');

    if (uploadGambar.val().length == 0) 
        $('small#error-gambar').css('display', 'block');

    if (uploadPDF.val().length == 0)
        $('small#error-pdf').css('display', 'block');   
}

kategori.focusout(() => {
    if ($('option:selected', kategori).val().length == 0)
        $('small#error-kategori').css('display', 'block');
    else
        $('small#error-kategori').css('display', 'none');
});

function keyUpJudulBuku () {
    if (judulBuku.val().length == 0)
        $('small#error-judul').css('display', 'block');
    else
        $('small#error-judul').css('display', 'none');
}

function keyUpPenulisBuku () {
    if (penulisBuku.val().length == 0)
        $('small#error-penulis').css('display', 'block');
    else
        $('small#error-penulis').css('display', 'none');
}

function keyUpISBN() {
    if (!regexISBN.test(isbn.val()))
        $('small#error-isbn').css('display', 'block');
    else
        $('small#error-isbn').css('display', 'none');
}

function keyUpJumlahHalaman () {
    if (!regexNumber.test(jumlahHalaman.val()))
        $('small#error-halaman').css('display', 'block');
    else
        $('small#error-halaman').css('display', 'none');
}

tahunTerbit.focusout(() => {
    if ($('option:selected', tahunTerbit).val().length == 0)
        $('small#error-tahun').css('display', 'block');
    else
        $('small#error-tahun').css('display', 'none');
});

negara.focusout(() => {
    if ($('option:selected', negara).val().length == 0)
        $('small#error-negara').css('display', 'block');
    else
        $('small#error-negara').css('display', 'none');
});

function keyUpBahasa() {
    if (bahasa.val().length == 0)
        $('small#error-bahasa').css('display', 'block');
    else
        $('small#error-bahasa').css('display', 'none');
}

function keyUpHargaBuku () {
    if (!regexNumber.test(hargaBuku.val())) {
        $('small#error-harga').css('display', 'block');
        // hargaSetelahDiskon.val('');
    }
    else {
        $('small#error-harga').css('display', 'none');

        // if (regexNumber.test(diskonBuku.val()) && diskonBuku.val() <= 100) {
        //     let totalHarga = hargaBuku.val() - (hargaBuku.val() * diskonBuku.val() / 100);
        //     hargaSetelahDiskon.val(totalHarga);
        // }
    }
}

// function keyUpDiskonBuku () {
//     if (!regexNumber.test(diskonBuku.val()) || diskonBuku.val() > 100) {
//         $('small#error-diskon').css('display', 'block');
//         hargaSetelahDiskon.val('');
//     }
//     else {
//         $('small#error-diskon').css('display', 'none');

//         if (regexNumber.test(hargaBuku.val())) {
//             let totalHarga = hargaBuku.val() - (hargaBuku.val() * diskonBuku.val() / 100);
//             hargaSetelahDiskon.val(totalHarga);
//         }
//     }
// }

function keyUpDeskripsiBuku () {
    if (deskripsiBuku.val().length < 36)
        $('small#error-deskripsi').css('display', 'block');
    else
        $('small#error-deskripsi').css('display', 'none');
}

uploadGambar.focusout(() => {
    $('small#error-gambar').css('display', 'none');
    $('small#error-size-gambar').css('display', 'none');
});


uploadPDF.focusout(() => {
    $('small#error-pdf').css('display', 'none');
    $('small#error-size-pdf').css('display', 'none');
});


// function request api post/put
function requestAPI(params, url, type) {
    if (!checkSesi())
        window.location.href = `${site_url}html/login-page.html`;
    else {
        $.ajax({
            url: url,
            type: type,
            dataType: "json",
            processData: false, // default kirim object, form mengandung file & string
            contentType: false, // default x-www-form-urlencoded

            data: params,

            success: function () {
                $('.loading').css('display', 'none'); // hilangkan loading
                success = 200;

                if (type === 'post')
                    $('.dialog-oke .pesan span').html('Berhasil menjual buku di toko');
                else
                    $('.dialog-oke .pesan span').html('Berhasil perbarui data buku');

                $('.dialog-oke').css('display', 'flex');
            }
        });
    }
}


// set form update
function setFormUpdate(response) {
    kategori.val(response.productCategoryName);
    judulBuku.val(response.productName);
    penulisBuku.val(response.productAuthor);
    isbn.val(response.productIsbn);
    jumlahHalaman.val(response.productLength);
    tahunTerbit.val(response.productReleaseYear);
    negara.val(response.productCountry);
    bahasa.val(response.productLanguage);
    hargaBuku.val(response.productPrice);
    deskripsiBuku.val(response.productDescription);
}


// get detail buku
function getDetailBuku() {
    $.ajax({
        url: `${base_url}products`,
        type: 'get',
        dataType: 'json',

        data: {
            id: kode[1]
        },

        success: function(response) {
            setFormUpdate(response);
        }
    });
}


// manipulasi judul
function manipulateJudul() {
    let judul = kode[0] === 'shop' ? '<span>Toko Saya /</span> Jual Buku' :
        kode[0] === 'update' ? '<span>Toko Saya /</span> Update Buku' :
        '<span>Toko Saya /</span> Default';

    $('#content .right .head h2.title').html(judul);
}


// document ready
$(document).ready(() => {
    
    if (!checkSesi())
        window.location.href = `${site_url}html/login-page.html`;

    if (window.location.search.substring(1) === '') 
        window.location.href = `${site_url}html/tokoSaya-page.html`;

    // get kode, mau update / create
    kode = window.location.search.substring(1).split("=");
    manipulateJudul();
    
    if (kode[0] === 'update')
        getDetailBuku();

    borderTab();
    appendTahunTerbit();
});
