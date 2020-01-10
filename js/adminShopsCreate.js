

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
    let judul = kode[0] === 'create' ? '<span>Shops /</span> Create' :
        kode[0] === 'update' ? '<span>Shops /</span> Update' :
        '<span>Shops /</span> Default';

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

    let url, type, message;
    let params = new FormData();

    if (kode[0] === 'create') {
        params.append('userId', pemilik.val());

        url = `${base_url}shops/register`;
        type = 'post';
        message = 'Berhasil membuat toko baru';
    } else if (kode[0] === 'update') {
        Data.shopId = kode[1];

        url = `${base_url}shops/update`;
        type = 'put';
        message = 'Berhasil perbarui data toko';
    }

    params.append('shop', JSON.stringify(Data));
    requestAPI(params, url, type, message);
}


// function request api post/put
function requestAPI(params, url, type, message) {
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

            if (response.status === 200) {
                $('.dialog-oke .pesan span').html(message);
                $('.dialog-oke').css('display', 'flex');
            } else if (response.status === 404) {
                $('.dialog-oke .pesan span').html('Gagal! User tidak ditemukan');
                $('.dialog-oke').css('display', 'flex');
            } else if (response.status === 500) {
                $('.dialog-oke .pesan span').html('Gagal! User sudah memiliki toko');
                $('.dialog-oke').css('display', 'flex');
            }

            $('.loading').css('display', 'none'); // hilangkan loading
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