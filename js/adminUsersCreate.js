

let kode;


// mark side tab
function borderTab() {
    $('#content .left .tab .users-tab').addClass('is-active');
}


// manipulasi judul
function manipulateJudul() {
    let judul = kode[0] === 'create' ? '<span>Users /</span> Create' :
        kode[0] === 'update' ? '<span>Users /</span> Update' :
        '<span>Users /</span> Default';

    $('#content .right .head h2.title').html(judul);
}


// form post/put user
const form = $('#content .right .rbody .form');
const nama = $('#nama', form);
const email = $('#email', form);
const password = $('#password', form);
const ttl = $('#ttl', form);
const nohp = $('#nohp', form);
const gender = $('#jenis-kelamin', form);
const role = $('#role', form);
const status = $('#status', form);

function postUser() {
    let Data = {
        'userEmail': email.val(),
        'userName': nama.val(),
        'userBirthdate': ttl.val(),
        'userHandphone': nohp.val(),
        'userGender': gender.val()
    };

    let tempRole = $('option:selected', role).val();
    tempRole = tempRole === "USER" ? 2 : 1;

    let tempStatus = $('option:selected', status).val();
    tempStatus = tempStatus === "AVAILABLE" ? 1 : 2;

    let url, type;
    let params = new FormData();

    if (kode[0] === 'create') {
        Data.userPassword = password.val();
        Data.userPasswordConfirmation = password.val();

        url = `${base_url}users/register`;
        type = 'post';
    } else if (kode[0] === 'update') {
        Data.userId = kode[1];

        url = `${base_url}users/update`;
        type = 'put';
    }

    params.append('user', JSON.stringify(Data));
    params.append('role', tempRole);
    params.append('status', tempStatus);
    requestAPI(params, url, type);
}


// function request api post/put
function requestAPI(params, url, type) {
    $('.loading').css('display', 'flex');   // tampilkan loading

    $.ajax({
        url: url,
        type: type,
        dataType: "json",
        processData: false, // default kirim object, form mengandung file & string
        contentType: false, // default x-www-form-urlencoded

        data: params,

        success: function (response) {
            if (response.status === 200) {
                $('.loading').css('display', 'none'); // hilangkan loading
                window.location.href = `${site_url}html/adminUsers-page.html`;
            }
        }
    });
}


// set form
function setForm(response) {
    password.attr('disabled', 'disabled');
    nama.val(response.userName);
    email.val(response.userEmail);
    ttl.val(response.userBirthdate)
    nohp.val(response.userPhone);
    gender.val(response.userGender);
    role.val(response.userRole);
    status.val(response.userStatus);
}


// get detail user
function getDetailUser() {
    $('.loading').css('display', 'flex'); // tampilkan loading

    $.ajax({
        url: `${base_url}users`,
        type: 'get',
        dataType: 'json',

        data: {
            id: kode[1]
        },

        success: function(response) {
            setForm(response);
            $('.loading').css('display', 'none'); // hilangkan loading
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
        getDetailUser();

    manipulateJudul();
    borderTab();
});