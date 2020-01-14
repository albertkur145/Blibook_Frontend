

// variable global
let kode;
let success;


// mark side tab
function borderTab() {
    $('#content .left .tab .shops-tab').addClass('is-active');
}


// hide dialog
function hideDialog() {
    $('.dialog-oke').css('display', 'none');

    if (success === 200) {
        window.location.href = `${site_url}html/adminShops-page.html`;
    }
}


// manipulasi judul
function manipulateJudul() {
    let judul = kode[0] === 'create' ? '<span>Toko /</span> Daftar' :
        kode[0] === 'update' ? '<span>Toko /</span> Perbarui' :
        '<span>Toko /</span> Default';

    $('#content .right .head h2.title').html(judul);
}


// validation form
const pemilik = $('#content .right .rbody #pemilik');
const namaToko = $('#content .right .rbody #nama');
const alamatToko = $('#content .right .rbody #alamat');
const selectProvinsi = $('#content .right .rbody #provinsi');
const selectKota = $('#content .right .rbody #kota');


function validationForm() {
    if (namaToko.val().length != 0 && alamatToko.val().length != 0 && $('option:selected', selectProvinsi).val().length != 0) {
        if (kode[0] === 'create') {
            if ($('option:selected', pemilik).val().length != 0)
                postShop();
        } else
            postShop();
    }

    if (namaToko.val().length == 0)
        $('small#error-nama').css('display', 'block');

    if (alamatToko.val().length == 0)
        $('small#error-alamat').css('display', 'block');

    if ($('option:selected', selectProvinsi).val().length == 0)
        $('small#error-provinsi').css('display', 'block');

    if (kode[0] === 'create') {
        if ($('option:selected', pemilik).val().length == 0)
            $('small#error-pemilik').css('display', 'block');
    }
}

function keyUpNamaToko() {
    if (namaToko.val().length == 0)
        $('small#error-nama').css('display', 'block');
    else
        $('small#error-nama').css('display', 'none');
}

function keyUpAlamatToko() {
    if (alamatToko.val().length == 0)
        $('small#error-alamat').css('display', 'block');
    else
        $('small#error-alamat').css('display', 'none');
}

selectProvinsi.focusout(() => {
    if ($('option:selected', selectProvinsi).val().length == 0)
        $('small#error-provinsi').css('display', 'block');
    else
        $('small#error-provinsi').css('display', 'none');
});


pemilik.focusout(() => {
    if ($('option:selected', pemilik).val().length == 0)
        $('small#error-pemilik').css('display', 'block');
    else
        $('small#error-pemilik').css('display', 'none');
});


// change selected provinsi
function changeKota() {
    const option = $('option:selected', selectProvinsi).val();

    if (option == "") {

        selectKota.html(`
            <option value="">-</option>
        `);

    } else if (option == "Aceh") {

        selectKota.html(`
            <option value="Banda Aceh">Banda Aceh</option>
            <option value="Langsa">Langsa</option>
            <option value="Lhokseumawe">Lhokseumawe</option>
            <option value="Meulaboh">Meulaboh</option>
            <option value="Sabang">Sabang</option>
            <option value="Subulussalam">Subulussalam</option>
        `);

    } else if (option == "Bali") {

        selectKota.html(`
            <option value="Denpasar">Denpasar</option>
        `);

    } else if (option == "Bangka Belitung") {

        selectKota.html(`
            <option value="Pangkalpinang">Pangkalpinang</option>
        `);

    } else if (option == "Banten") {

        selectKota.html(`
            <option value="Cilegon">Cilegon</option>
            <option value="Serang">Serang</option>
            <option value="Tangerang">Tangerang</option>
        `);

    } else if (option == "Bengkulu") {

        selectKota.html(`
            <option value="Bengkulu">Bengkulu</option>
        `);

    } else if (option == "Gorontalo") {

        selectKota.html(`
            <option value="Gorontalo">Gorontalo</option>
        `);

    } else if (option == "Jakarta") {

        selectKota.html(`
            <option value="Jakarta Barat">Jakarta Barat</option>
            <option value="Jakarta Pusat">Jakarta Pusat</option>
            <option value="Jakarta Selatan">Jakarta Selatan</option>
            <option value="Jakarta Timur">Jakarta Timur</option>
            <option value="Jakarta Utara">Jakarta Utara</option>
        `);

    } else if (option == "Jambi") {

        selectKota.html(`
            <option value="Sungai Penuh">Sungai Penuh</option>
            <option value="Jambi">Jambi</option>
        `);

    } else if (option == "Jawa Barat") {

        selectKota.html(`
            <option value="Bandung">Bandung</option>
            <option value="Bekasi">Bekasi</option>
            <option value="Bogor">Bogor</option>
            <option value="Cimahi">Cimahi</option>
            <option value="Cirebon">Cirebon</option>
            <option value="Depok">Depok</option>
            <option value="Sukabumi">Sukabumi</option>
            <option value="Tasikmalaya">Tasikmalaya</option>
            <option value="Banjar">Banjar</option>
        `);

    } else if (option == "Jawa Tengah") {

        selectKota.html(`
            <option value="Magelang">Magelang</option>
            <option value="Pekalongan">Pekalongan</option>
            <option value="Purwokerto">Purwokerto</option>
            <option value="Salatiga">Salatiga</option>
            <option value="Semarang">Semarang</option>
            <option value="Surakarta">Surakarta</option>
            <option value="Tegal">Tegal</option>
        `);

    } else if (option == "Jawa Timur") {

        selectKota.html(`
            <option value="Batu">Batu</option>
            <option value="Blitar">Blitar</option>
            <option value="Kediri">Kediri</option>
            <option value="Madiun">Madiun</option>
            <option value="Malang">Malang</option>
            <option value="Mojokerto">Mojokerto</option>
            <option value="Pasuruan">Pasuruan</option>
            <option value="Probolinggo">Probolinggo</option>
            <option value="Surabaya">Surabaya</option>
        `);

    } else if (option == "Kalimantan Barat") {

        selectKota.html(`
            <option value="Pontianak">Pontianak</option>
            <option value="Singkawang">Singkawang</option>
        `);

    } else if (option == "Kalimantan Selatan") {

        selectKota.html(`
            <option value="Banjarbaru">Banjarbaru</option>
            <option value="Banjarmasin">Banjarmasin</option>
        `);

    } else if (option == "Kalimantan Tengah") {

        selectKota.html(`
            <option value="Palangkaraya">Palangkaraya</option>
        `);

    } else if (option == "Kalimantan Timur") {

        selectKota.html(`
            <option value="Balikpapan">Balikpapan</option>
            <option value="Bontang">Bontang</option>
            <option value="Samarinda">Samarinda</option>
        `);

    } else if (option == "Kalimantan Utara") {

        selectKota.html(`
            <option value="Tarakan">Tarakan</option>
        `);

    } else if (option == "Kepulauan Riau") {

        selectKota.html(`
            <option value="Batam">Batam</option>
            <option value="Tanjung Pinang">Tanjung Pinang</option>
        `);

    } else if (option == "Lampung") {

        selectKota.html(`
            <option value="Bandar Lampung">Bandar Lampung</option>
            <option value="Metro">Metro</option>
        `);

    } else if (option == "Maluku") {

        selectKota.html(`
            <option value="Ternate">Ternate</option>
            <option value="Tidore Kepulauan">Tidore Kepulauan</option>
            <option value="Ambon">Ambon</option>
            <option value="Tual">Tual</option>
        `);

    } else if (option == "Nusa Tenggara Barat") {

        selectKota.html(`
            <option value="Bima">Bima</option>
            <option value="Mataram">Mataram</option>
        `);

    } else if (option == "Nusa Tenggara Timur") {

        selectKota.html(`
            <option value="Kupang">Kupang</option>
        `);

    } else if (option == "Papua") {

        selectKota.html(`
            <option value="Sorong">Sorong</option>
            <option value="Jayapura">Jayapura</option>
        `);

    } else if (option == "Riau") {

        selectKota.html(`
            <option value="Dumai">Dumai</option>
            <option value="Pekanbaru">Pekanbaru</option>
        `);

    } else if (option == "Sulawesi Selatan") {

        selectKota.html(`
            <option value="Makasar">Makasar</option>
            <option value="Palopo">Palopo</option>
            <option value="Parepare">Parepare</option>
        `);

    } else if (option == "Sulawesi Tengah") {

        selectKota.html(`
            <option value="Palu">Palu</option>
        `);

    } else if (option == "Sulawesi Tenggara") {

        selectKota.html(`
            <option value="Bau-Bau">Bau-Bau</option>
            <option value="Kendaru">Kendaru</option>
        `);

    } else if (option == "Sulawesi Utara") {

        selectKota.html(`
            <option value="Bitung">Bitung</option>
            <option value="Kotamobagu">Kotamobagu</option>
            <option value="Manado">Manado</option>
            <option value="Tomohon">Tomohon</option>
        `);

    } else if (option == "Sumatra Barat") {

        selectKota.html(`
            <option value="Bukit Tinggi">Bukit Tinggi</option>
            <option value="Padang">Padang</option>
            <option value="Padangpanjang">Padangpanjang</option>
            <option value="Pariaman">Pariaman</option>
            <option value="Payakumbuh">Payakumbuh</option>
            <option value="Sawahlunto">Sawahlunto</option>
            <option value="Solok">Solok</option>
        `);

    } else if (option == "Sumatra Selatan") {

        selectKota.html(`
            <option value="Lubuklinggau">Lubuklinggau</option>
            <option value="Pagaralam">Pagaralam</option>
            <option value="Palembang">Palembang</option>
            <option value="Prabumulih">Prabumulih</option>
        `);

    } else if (option == "Sumatra Utara") {

        selectKota.html(`
            <option value="Binjai">Binjai</option>
            <option value="Medan">Medan</option>
            <option value="Padang Sidempuan">Padang Sidempuan</option>
            <option value="Pematang Siantar">Pematang Siantar</option>
            <option value="Sibolga">Sibolga</option>
            <option value="Tanjungbalai">Tanjungbalai</option>
            <option value="Tebingtinggi">Tebingtinggi</option>
        `);

    } else if (option == "DIY") {

        selectKota.html(`
            <option value="Yogyakarta">Yogyakarta</option>
        `);

    }
}


// append id pemilik
function appendOwner(value) {
    pemilik.append(`
        <option value="${value.userId}">${value.userName}</option>
    `)
}


// get all users
function getAllUsers() {
    $.ajax({
        url: `${base_url}users/all`,
        type: 'get',
        dataType: 'json',

        success: function (response) {
            if (response.status === 200) {
                response.data.forEach(value => {
                    appendOwner(value);
                });
            }
        }
    }).then(() => {
        if (kode[0] === 'update')
            getDetailShop();
    });
}


// post shop
function postShop() {
    let Data = {
        "shopName": namaToko.val(),
        "shopAddress": alamatToko.val(),
        "shopCity": $('option:selected', selectKota).val(),
        "shopProvince": $('option:selected', selectProvinsi).val()
    };

    let url, type;
    let params = new FormData();

    if (kode[0] === 'create') {
        params.append('userId', pemilik.val());

        url = `${base_url}shops/register`;
        type = 'post';
    } else if (kode[0] === 'update') {
        Data.shopId = kode[1];

        url = `${base_url}shops/update`;
        type = 'put';
    }

    params.append('shop', JSON.stringify(Data));
    requestAPI(params, url, type);
}


// function request api post/put
function requestAPI(params, url, type) {
    $('.loading').css('display', 'flex'); // tampilkan loading

    $.ajax({
        url: url,
        type: type,
        dataType: "json",
        processData: false, // default kirim object, form mengandung file & string
        contentType: false, // default x-www-form-urlencoded

        data: params,

        success: function (response) {
            success = response.status; 

            $('.loading').css('display', 'none');   // hilangkan loading

            if (response.status === 200) {
                if (type === 'post')
                    $('.dialog-oke .pesan span').html('Berhasil daftar toko baru');
                else
                    $('.dialog-oke .pesan span').html('Berhasil perbarui data toko');
            } else if (response.status === 404) 
                $('.dialog-oke .pesan span').html('Gagal! User tidak ditemukan');
            else if (response.status === 500) 
                $('.dialog-oke .pesan span').html('Gagal! User sudah memiliki toko');

            $('.dialog-oke').css('display', 'flex');
        }
    });
}


// set form update
function setForm(response) {
    pemilik.attr('disabled', 'disabled');
    
    pemilik.val(response.userId);
    namaToko.val(response.shopName);
    alamatToko.val(response.shopAddress);
    selectProvinsi.val(response.shopProvince);
    changeKota();
    selectKota.val(response.shopCity);
}


// get detail shop
function getDetailShop() {
    $.ajax({
        url: `${base_url}shops`,
        type: 'get',
        dataType: 'json',

        data: {
            id: kode[1]
        },

        success: function(response) {
            if (response.status === 200)
                setForm(response.data[0]);
        }
    });
}


// document ready
$(document).ready(() => {
    if (Admin === null)
        window.location.href = `${site_url}html/login-page.html`;
    else
        kode = window.location.search.substring(1).split("=");

        
    getAllUsers();
    manipulateJudul();
    borderTab();
});