

// append tahun terbit
function appendTahunTerbit() {
    for (let i = 1950; i <= 2019; i++) {
        $('#content .right .rbody select#tahun').append(`
            <option value="${i}">${i}</option>
        `);
    }
}


// mark side tab
function borderTab() {
    $('#content .left .tab .toko-saya-tab').addClass('is-active');
}


// validation form
const judulBuku = $('#content .right .rbody #judul');
const penulisBuku = $('#content .right .rbody #penulis');
const jumlahHalaman = $('#content .right .rbody #halaman');
const tahunTerbit = $('#content .right .rbody #tahun');
const negara = $('#content .right .rbody #negara');
const bahasa = $('#content .right .rbody #bahasa');
const hargaBuku = $('#content .right .rbody #harga');
const diskonBuku = $('#content .right .rbody #diskon');
const hargaSetelahDiskon = $('#content .right .rbody #harga-diskon');
const deskripsiBuku = $('#content .right .rbody #deskripsi');
const uploadGambar = $('#content .right .rbody #gambar');

const extensionsImg = ["jpg", "jpeg", "png", "bmp"];
const regexNumber = /^[0-9]+$/;

function validationForm() {
    if (judulBuku.val().length != 0 && penulisBuku.val().length != 0 && regexNumber.test(jumlahHalaman.val()) && 
        $('option:selected', tahunTerbit).val().length != 0 && $('option:selected', negara).val().length != 0 &&
        bahasa.val().length != 0 && regexNumber.test(hargaBuku.val()) && regexNumber.test(diskonBuku.val()) && 
        diskonBuku.val() <= 100 && deskripsiBuku.val().length >= 24) {
            if (uploadGambar.val().length > 0) {

                if (uploadGambar[0].files[0].size > 2000000) 
                    $('small#error-size-gambar').css('display', 'block');
                else {
                    let temp = uploadGambar.val().split(".");
                    temp = temp[temp.length - 1].toLowerCase();

                    for (let i = 0; i < extensionsImg.length; i++) {
                        if (temp == extensionsImg[i])
                            return true;
                    }

                    $('small#error-gambar').css('display', 'block');
                }
                
            }
        }

    if (judulBuku.val().length == 0)
        $('small#error-judul').css('display', 'block');
    
    if (penulisBuku.val().length == 0)
        $('small#error-penulis').css('display', 'block');

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

    if (!regexNumber.test(diskonBuku.val()) || diskonBuku.val() > 100)
        $('small#error-diskon').css('display', 'block');

    if (deskripsiBuku.val().length < 24)
        $('small#error-deskripsi').css('display', 'block');

    if (uploadGambar.val().length == 0)
        $('small#error-gambar').css('display', 'block');        


    return false;
}

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
        hargaSetelahDiskon.val('');
    }
    else {
        $('small#error-harga').css('display', 'none');

        if (regexNumber.test(diskonBuku.val()) && diskonBuku.val() <= 100) {
            let totalHarga = hargaBuku.val() - (hargaBuku.val() * diskonBuku.val() / 100);
            hargaSetelahDiskon.val(totalHarga);
        }
    }
}

function keyUpDiskonBuku () {
    if (!regexNumber.test(diskonBuku.val()) || diskonBuku.val() > 100) {
        $('small#error-diskon').css('display', 'block');
        hargaSetelahDiskon.val('');
    }
    else {
        $('small#error-diskon').css('display', 'none');

        if (regexNumber.test(hargaBuku.val())) {
            let totalHarga = hargaBuku.val() - (hargaBuku.val() * diskonBuku.val() / 100);
            hargaSetelahDiskon.val(totalHarga);
        }
    }
}

function keyUpDeskripsiBuku () {
    if (deskripsiBuku.val().length < 24)
        $('small#error-deskripsi').css('display', 'block');
    else
        $('small#error-deskripsi').css('display', 'none');
}

uploadGambar.focusout(() => {
    $('small#error-gambar').css('display', 'none');
    $('small#error-size-gambar').css('display', 'none');
});


// document ready
borderTab();
appendTahunTerbit();