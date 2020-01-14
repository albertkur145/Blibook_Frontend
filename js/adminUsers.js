

// variable global
let success;
let nomorTable = 0;
let jumlahData;


// mark side tab
function borderTab() {
    $('#content .left .tab .users-tab').addClass('is-active');
}


// hide confirm
function hideConfirm() {
    $('.dialog-confirm').css('display', 'none');
}


// hide dialog
function hideDialog() {
    $('.dialog-oke').css('display', 'none');

    if (success === 200)
        window.location.href = `${site_url}html/adminUsers-page.html`;
}


// send id user
function sendID(e) {
    let id = $(e).attr('data-id');
    window.location.href = `${site_url}html/adminUsersCreate-page.html?update=${id}`;
}


// delete user by id
function deleteUser(id) {
    hideConfirm();

    let params = new FormData();
    params.append('id', id);

    // tampilkan loading
    $('.loading').css('display', 'flex');

    $.ajax({
        url: `${base_url}users/delete`,
        type: 'delete',
        dataType: 'json',
        processData: false, // default kirim object, form mengandung string
        contentType: false, // default x-www-form-urlencoded

        data: params,

        success: function(response) {
            success = response.status;

            // hilangkan loading
            $('.loading').css('display', 'none');

            // tampilkan pesan dialog
            if (response.status === 200)
                $('.dialog-oke .pesan span').html('User berhasil dihapus dari penyimpanan');
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
    $('.dialog-confirm .pesan .btn-accept').attr('onclick', `deleteUser(${id})`);
}


// add paging
function addPaging(pagingActive) {
    let urlPaging = $('#content .right .rbody .paging');
    let jumlahPaging = jumlahData / 10;

    for (let i = 0; i < jumlahPaging; i++) {
        urlPaging.append(`
            <a href="javascript:void(0)" class="paging${i}" onclick="getAllUsers(${i})">${i+1}</a>
        `);
    }

    $(`.paging${pagingActive}`).addClass('isActive-paging');
}


// append user
function appendUser(value, index) {
    const isiTable = $('#content .right .rbody table tbody');
    nomorTable += 1;

    isiTable.append(`
        <tr>
            <td>${nomorTable}</td>
            <td>${value.userName}</td>
            <td>${value.userEmail}</td>
            <td>${value.userHandphone}</td>
            <td>${value.userBirthdate}</td>
            <td>${value.userGender}</td>
            <td>${value.userRole}</td>
            <td>${value.userStatus}</td>
            <td><h5><i class="fas fa-pen text-info cursor-edit" onclick="sendID(this)" data-id=${value.userId}></i> <i class="fas fa-ban text-danger mt-2 cursor-cross" onclick="confirmDelete(this)" data-id=${value.userId}></i></h5></td>
        </tr>
    `);
}


// get all users
function getAllUsers(paging = 0) {

    // tampilkan loading
    $('.loading').css('display', 'flex');

    // reset dulu htmlnya
    $('#content .right .rbody table tbody').html('');
    $('#content .right .rbody .paging').html('');

    nomorTable = parseInt(paging + '0'); 
    
    $.ajax({
        url: `${base_url}admin/users`,
        type: 'get',
        dataType: 'json',

        data: {
            page: paging
        },

        success: function(response) {
            if (response.status === 200) {
                jumlahData = response.data[0];
                response.data[1].forEach((value, index) => {
                    appendUser(value, index);
                });

                addPaging(paging);

                // hilangkan loading
                $('.loading').css('display', 'none');
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