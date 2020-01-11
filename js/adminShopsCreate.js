

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


// post atau update shop
const pemilik = $('#content .right .rbody #pemilik');
const namaToko = $('#content .right .rbody #nama');
const alamatToko = $('#content .right .rbody #alamat');
const provinsi = $('#content .right .rbody #provinsi');
const kota = $('#content .right .rbody #kota');

function postShop() {
    let Data = {
        'shopName': namaToko.val(),
        'shopAddress': alamatToko.val(),
        'shopCity': kota.val(),
        'shopProvince': provinsi.val()
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
    namaToko.val(response.shopName);
    alamatToko.val(response.shopAddress);
    provinsi.val(response.shopProvince);
    kota.val(response.shopCity);
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
            setForm(response);
        }
    });
}


// document ready
$(document).ready(() => {
    if (Admin === null)
        window.location.href = `${site_url}html/login-page.html`;
    else
        kode = window.location.search.substring(1).split("=");

    if (kode[0] === 'update')
        getDetailShop();

    manipulateJudul();
    borderTab();
});