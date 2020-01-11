

// mark side tab
function borderTab() {
    $('#content .left .tab .products-tab').addClass('is-active');
}


// hide confirm
function hideConfirm() {
    $('.dialog-confirm').css('display', 'none');
}


// hide dialog
function hideDialog() {
    $('.dialog-oke').css('display', 'none');

    if (success === 200)
        window.location.href = `${site_url}html/adminProduct-page.html`;
}


// generate format rupiah
function generateRupiah(angka) {
    if (angka != 0 && angka != null) {
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


// send id ke form update
function sendID(e) {
    window.location.href = `${site_url}html/adminProductCreate-page.html?update=${$(e).attr('data-id')}`;
}


// delete buku
function deleteBuku(id) {
    hideConfirm();

    let params = new FormData();
    params.append('id', id);

    // tampilkan loading
    $('.loading').css('display', 'flex');

    // hapus data req api
    $.ajax({
        url: `${base_url}products/delete`,
        type: "delete",
        dataType: "json",
        processData: false, // default kirim object/string, form mengandung file
        contentType: false, // default x-www-form-urlencoded

        data: params,

        success: function (response) {
            success = response.status;

            // hilangkan loading
            $('.loading').css('display', 'none');

            // tampilkan pesan dialog
            if (response.status === 200) 
                $('.dialog-oke .pesan span').html('Buku berhasil dihapus dari toko');
            else 
                $('.dialog-oke .pesan span').html('Gagal! Silahkan coba kembali');
            
            $('.dialog-oke').css('display', 'flex');
        }
    });
}


// confirm delete
function confirmDelete(e) {
    let id = $(e).attr('data-id');

    $('.dialog-confirm').css('display', 'flex');
    $('.dialog-confirm .pesan .btn-accept').attr('onclick', `deleteBuku(${id})`);
}


// append buku ke table
function appendBuku(value, index) {
    const isiTable = $('#content .right .rbody table tbody');
    let harga = generateRupiah(value.productPrice);

    isiTable.append(`
        <tr>
            <td>${index + 1}</td>
            <td>${value.productId}</td>
            <td>${value.productName}</td>
            <td>${value.productAuthor}</td>
            <td>${value.productIsbn}</td>
            <td>${value.productLength}</td>
            <td>${value.productCategoryName}</td>
            <td>${value.productReleaseYear}</td>
            <td>${value.productLanguage}</td>
            <td>Rp. ${harga}</td>
            <td><h5><i class="fas fa-pen text-success cursor-edit" onclick="sendID(this)" data-id="${value.productId}"></i> <i class="fas fa-times text-danger mr-3 cursor-cross" onclick="confirmDelete(this)" data-id="${value.productId}"></i></h5></td>
        </tr>
    `);
}


// get all buku
function getAllBuku() {
    $.ajax({
        url: `${base_url}admin/products`,
        type: 'get',
        dataType: 'json',

        success: function(response) {
            response.forEach((value, index) => {
                appendBuku(value, index);
            });
        }
    });
}


// document ready
$(document).ready(() => {

    if (Admin === null)
        window.location.href = `${site_url}html/login-page.html`;
    else
        getAllBuku();

    borderTab();
});