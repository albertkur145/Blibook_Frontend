

// mark side tab
function borderTab() {
    $('#content .left .tab .users-tab').addClass('is-active');
}


function sendID() {
    window.location.href = `${site_url}html/adminUsersCreate-page.html`;
}


// append user
function appendUser(value, index) {
    const isiTable = $('#content .right .rbody table tbody');

    isiTable.append(`
        <tr>
            <td>${index + 1}</td>
            <td>${value.userName}</td>
            <td>${value.userEmail}</td>
            <td>${value.userPhone}</td>
            <td>25 Januari 1994</td>
            <td>${value.userGender}</td>
            <td><h5><i class="fas fa-pen text-success cursor-edit" onclick="sendID()"></i> <i class="fas fa-times text-danger mr-3 cursor-cross"></i></h5></td>
        </tr>
    `);
}


// document ready
$(document).ready(() => {

    $.ajax({
        url: '../json/user.json',
        type: 'get',
        dataType: 'json',

        success: function (response) {
            response.forEach((value, index) => {
                appendUser(value, index);
            });
        }
    });

    borderTab();
});