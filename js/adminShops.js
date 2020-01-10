

// mark side tab
function borderTab() {
    $('#content .left .tab .shops-tab').addClass('is-active');
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
            <td><h5><i class="fas fa-pen text-success cursor-edit" onclick="sendID(this)" data-id=${value.shopId}></i> <i class="fas fa-times text-danger mr-3 cursor-cross"></i></h5></td>
        </tr>
    `);
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