

// mark side tab
function borderTab() {
    $('#content .left .tab .users-tab').addClass('is-active');
}


// hide dialog
function hideDialog() {
    $('.dialog-oke').css('display', 'none');
    window.location.href = `${site_url}html/adminUsers-page.html`;
}


// send id user
function sendID(e) {
    let id = $(e).attr('data-id');
    window.location.href = `${site_url}html/adminUsersCreate-page.html?update=${id}`;
}


// delete user by id
function deleteUser(e) {
    // tampilkan loading
    $('.loading').css('display', 'flex');

    let id = $(e).attr('data-id');

    let params = new FormData();
    params.append('id', id);

    $.ajax({
        url: `${base_url}users/delete`,
        type: 'delete',
        dataType: 'json',
        processData: false, // default kirim object, form mengandung string
        contentType: false, // default x-www-form-urlencoded

        data: params,

        success: function(response) {
            // hilangkan loading
            $('.loading').css('display', 'none');

            // tampilkan pesan dialog
            if (response.status === 200) {
                $('.dialog-oke .pesan span').html('User berhasil dihapus dari penyimpanan');
                $('.dialog-oke').css('display', 'flex');
            } else {
                $('.dialog-oke .pesan span').html('Gagal! Silahkan coba kembali');
                $('.dialog-oke').css('display', 'flex');
            }
        }
    });
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
            <td>${value.userBirthdate}</td>
            <td>${value.userGender}</td>
            <td>${value.userRole}</td>
            <td>${value.userStatus}</td>
            <td><h5><i class="fas fa-pen text-success cursor-edit" onclick="sendID(this)" data-id=${value.userId}></i> <i class="fas fa-times text-danger mr-3 cursor-cross" onclick="deleteUser(this)" data-id=${value.userId}></i></h5></td>
        </tr>
    `);
}


// get all users
function getAllUsers() {
    $.ajax({
        url: `${base_url}admin/users`,
        type: 'get',
        dataType: 'json',

        success: function(response) {
            if (response.status === 200) {
                response.data.forEach((value, index) => {
                    appendUser(value, index);
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
        getAllUsers();

    borderTab();
});