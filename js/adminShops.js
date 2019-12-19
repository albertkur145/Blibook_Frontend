

// mark side tab
function borderTab() {
    $('#content .left .tab .shops-tab').addClass('is-active');
}


function sendID() {
    window.location.href = `${site_url}html/adminShopsCreate-page.html`;
}


// append toko
function appendToko(value, index) {
    const isiTable = $('#content .right .rbody table tbody');

    isiTable.append(`
        <tr>
            <td>${index + 1}</td>
            <td>Albert K</td>
            <td>${value.nama}</td>
            <td>${value.alamat}</td>
            <td>${value.kota}</td>
            <td>${value.provinsi}</td>
            <td><h5><i class="fas fa-pen text-success cursor-edit" onclick="sendID()"></i> <i class="fas fa-times text-danger mr-3 cursor-cross"></i></h5></td>
        </tr>
    `);
}


// document ready
$(document).ready(() => {

    $.ajax({
        url: '../json/toko.json',
        type: 'get',
        dataType: 'json',

        success: function (response) {
            response.forEach((value, index) => {
                appendToko(value, index);
            });
        }
    });

    borderTab();
});