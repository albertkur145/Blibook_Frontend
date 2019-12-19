

// mark side tab
function borderTab() {
    $('#content .left .tab .categories-tab').addClass('is-active');
}


function sendID() {
    window.location.href = `${site_url}html/adminCategoriesCreate-page.html`;
}


// append kategori
function appendKategori(value, index) {
    const isiTable = $('#content .right .rbody table tbody');

    isiTable.append(`
        <tr>
            <td>${index + 1}</td>
            <td>${value.kategori}</td>
            <td><h5><i class="fas fa-pen text-success cursor-edit" onclick="sendID()"></i> <i class="fas fa-times text-danger mr-3 cursor-cross"></i></h5></td>
        </tr>
    `);
}


// document ready
$(document).ready(() => {

    $.ajax({
        url: '../json/kategori.json',
        type: 'get',
        dataType: 'json',

        success: function (response) {
            response.forEach((value, index) => {
                appendKategori(value, index);
            });
        }
    });

    borderTab();
});