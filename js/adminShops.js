

// variable global
let success;


// mark side tab
function borderTab() {
    $('#content .left .tab .shops-tab').addClass('is-active');
}


// hide confirm
function hideConfirm() {
    $('.dialog-confirm').css('display', 'none');
}


// hide dialog
function hideDialog() {
    $('.dialog-oke').css('display', 'none');

    if (success === 200)
        window.location.href = `${site_url}html/adminShops-page.html`;
}


// send id shop
function sendID(e) {
    let id = $(e).attr('data-id');
    window.location.href = `${site_url}html/adminShopsCreate-page.html?update=${id}`;
}


// append toko
function appendToko(value, index) {
    const isiTable = $('#content .right .rbody table tbody');

    isiTable.append(`
        <tr>
            <td>${index + 1}</td>
            <td>${value.shopOwner}</td>
            <td>${value.shopName}</td>
            <td>${value.shopAddress}</td>
            <td>${value.shopCity}</td>
            <td>${value.shopProvince}</td>
            <td><h5><i class="fas fa-pen text-success cursor-edit" onclick="sendID(this)" data-id=${value.shopId}></i> <i class="fas fa-times text-danger mr-3 cursor-cross" onclick="confirmDelete(this)" data-id=${value.shopId}></i></h5></td>
        </tr>
    `);
}


// delete shop by id
function deleteShop(id) {
    hideConfirm();

    // let params = new FormData();
    // params.append('id', id);

    // tampilkan loading
    $('.loading').css('display', 'flex');

    $.ajax({
        url: `../json/bag.json`,
        type: 'get',
        dataType: 'json',
        // processData: false, // default kirim object, form mengandung string
        // contentType: false, // default x-www-form-urlencoded

        // data: params,

        success: function (response) {
            success = 200;
            $('.dialog-oke .pesan span').html('Toko berhasil dihapus dari penyimpanan');
            $('.dialog-oke').css('display', 'flex');
            
            // success = response.status;

            // // hilangkan loading
            // $('.loading').css('display', 'none');

            // // tampilkan pesan dialog
            // if (response.status === 200)
            //     $('.dialog-oke .pesan span').html('User berhasil dihapus dari penyimpanan');
            // else
            //     $('.dialog-oke .pesan span').html('Gagal! Silahkan coba kembali');

            // $('.dialog-oke').css('display', 'flex');
        }
    });
}


// confirm delete
function confirmDelete(e) {
    let id = $(e).attr('data-id');

    $('.dialog-confirm').css('display', 'flex');
    $('.dialog-confirm .pesan .btn-accept').attr('onclick', `deleteShop(${id})`);
}


// get all shops
function getAllShops() {
    $.ajax({
        url: `${base_url}admin/shops`,
        type: 'get',
        dataType: 'json',

        success: function (response) {
            if (response.status === 200) {
                response.data.forEach((value, index) => {
                    appendToko(value, index);
                });
            }
        }
    });
}


// document ready
$(document).ready(() => {

    if (Admin === null)
        window.location.href = `${site_url}html/login-page.html`;
    else
        getAllShops();

    borderTab();
});