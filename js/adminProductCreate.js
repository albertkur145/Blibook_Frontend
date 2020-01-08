
let kode;


// mark side tab
function borderTab() {
    $('#content .left .tab .products-tab').addClass('is-active');
}


// form post atau update product
const toko = $('#content .right .rbody #toko');
const kategori = $('#content .right .rbody #kategori');
const judulBuku = $('#content .right .rbody #judul');
const penulisBuku = $('#content .right .rbody #penulis');
const isbn = $('#content .right .rbody #isbn');
const jumlahHalaman = $('#content .right .rbody #halaman');
const tahunTerbit = $('#content .right .rbody #tahun');
const negara = $('#content .right .rbody #negara');
const bahasa = $('#content .right .rbody #bahasa');
const hargaBuku = $('#content .right .rbody #harga');
const deskripsiBuku = $('#content .right .rbody #deskripsi');
const uploadGambar = $('#content .right .rbody #gambar');
const uploadPDF = $('#content .right .rbody #pdf');

function postProduct() {
    let Buku = {
        "productName": judulBuku.val(),
        "productAuthor": penulisBuku.val(),
        "productIsbn": isbn.val(),
        "productSku": null,
        "productCountry": negara.val(),
        "productPrice": hargaBuku.val(),
        "productDescription": deskripsiBuku.val(),
        "productLength": jumlahHalaman.val(),
        "productReleaseYear": tahunTerbit.val(),
        "productLanguage": bahasa.val(),
        "productVariant": null,
        "productPhotoLink": null,
        "productItemLink": null,
    }

    let url, type;
    let params = new FormData();

    if (kode[0] === 'create') {
        params.append('shop', toko.val());

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


// function request api post/put
function requestAPI(params, url, type) {
    // tampilkan loading
    $('.loading').css('display', 'flex');

    let idPdf;

    $.ajax({
        url: url,
        type: type,
        dataType: "json",
        processData: false, // default kirim object, form mengandung file & string
        contentType: false, // default x-www-form-urlencoded

        data: params,

        success: function (response) {
            idPdf = response.productId;
        }
    }).then(() => {

        // move file pdf ke server domainesia
        let filePdf = new FormData();
        filePdf.append('idPdf', idPdf);
        filePdf.append('pdf', uploadPDF[0].files[0]);

        $.ajax({
            url: 'https://yafaifoods.tech/buku/upload.php',
            type: 'post',
            processData: false, // default kirim object/string, form mengandung file
            contentType: false, // default x-www-form-urlencoded

            data: filePdf,

            success: function (response) {
                // hilangkan loading
                $('.loading').css('display', 'none');

                // redirect ke toko -> utk lihat buku yang baru di jual
                window.location.href = `${site_url}html/adminProduct-page.html`;
            },

            error: function () {
                console.log('Error');
            }
        });
    });
}


// manipulasi judul
function manipulateJudul() {
    let judul = kode[0] === 'create' ? '<span>Products /</span> Create' :
        kode[0] === 'update' ? '<span>Products /</span> Update' :
        '<span>Products /</span> Default';

    $('#content .right .head h2.title').html(judul);
}


// set form update
function setFormUpdate(response) {
    toko.val(response.shopId);
    kategori.val(response.productCategory);
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

        success: function (response) {
            setFormUpdate(response);
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
        getDetailBuku();

    manipulateJudul();
    borderTab();
});