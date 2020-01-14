

// variable global
let kode;
let success;


// mark side tab
function borderTab() {
    $('#content .left .tab .users-tab').addClass('is-active');
}


// hide dialog
function hideDialog() {
    $('.dialog-oke').css('display', 'none');

    if (success === 200)
        window.location.href = `${site_url}html/adminUsers-page.html`;
}


// manipulasi judul
function manipulateJudul() {
    let judul = kode[0] === 'create' ? '<span>Pengguna /</span> Daftar' :
        kode[0] === 'update' ? '<span>Pengguna /</span> Perbarui' :
        '<span>Pengguna /</span> Default';

    $('#content .right .head h2.title').html(judul);
}


// append tanggal dan tahun lahir
function appendTTL() {
    for (let i = 1950; i <= 2020; i++) {
        $('#content .right .rbody select#tahun').append(`
            <option value="${i}">${i}</option>
        `);
    }

    for (let i = 1; i <= 31; i++) {
        if (i <= 9) {
            $('#content .right .rbody select#tanggal').append(`
                <option value="0${i}">${i}</option>
            `);
        } else {
            $('#content .right .rbody select#tanggal').append(`
                <option value="${i}">${i}</option>
            `);
        }
    }
}


// form post/put user
const form = $('#content .right .rbody .form');
const role = $('#role', form);
const status = $('#status', form);
const nama = $('#nama', form);
const email = $('#email', form);
const tanggal = $('#tanggal', form);
const bulan = $('#bulan', form);
const tahun = $('#tahun', form);
const nomor = $('#nomor', form);
const gender = $('input:radio[name=gender]');
const password = $('#password', form);
const konfirmPassword = $('#konfirm-password', form);
const regex = /^[a-zA-Z0-9._-]+@[a-z]{5,5}.[a-z]{2,3}$/;
const regexHP = /^08[0-9]{8,10}$/;


function validationForm() {
    let tgl = $('option:selected', tanggal).val();
    let bln = $('option:selected', bulan).val();
    let thn = $('option:selected', tahun).val();

    if (nama.val().length != 0 && regexHP.test(nomor.val()) && regex.test(email.val()) && !(tgl == 31 && !(bln == 1 || bln == 3 || bln == 5 || bln == 7 || bln == 8 || bln == 10 || bln == 12))) {
        if (tgl > 28 && bln == 2) {
            if (tgl != 29 || thn % 4 != 0)
                $('small#error-ttl').css('display', 'block');
            else {
                if (kode[0] === 'create') {
                    if (password.val().length != 0 &&
                        password.val() == konfirmPassword.val())
                        postUser();
                } else
                    postUser();
            }
        } else {
            if (kode[0] === 'create') {
                if (password.val().length != 0 &&
                    password.val() == konfirmPassword.val())
                    postUser();
            } else
                postUser();
        }
    }

    if (nama.val().length == 0)
        $('small#error-nama').css('display', 'block');

    if (!regexHP.test(nomor.val()))
        $('small#error-nomor').css('display', 'block');

    if (tgl == 31 && !(bln == 1 || bln == 3 || bln == 5 || bln == 7 || bln == 8 || bln == 10 || bln == 12))
        $('small#error-ttl').css('display', 'block');

    if (tgl > 28 && bln == 2) {
        if (tgl == 29 && thn % 4 == 0) {} else
            $('small#error-ttl').css('display', 'block');
    }

    if (!regex.test(email.val()))
        $('small#error-email').css('display', 'block');

    if (kode[0] === 'create') {
        if (password.val().length == 0)
            $('small#error-password').css('display', 'block');

        if (password.val() != konfirmPassword.val())
            $('small#error-konfirm-password').css('display', 'block');
    }
}


function keyUpNama() {
    if (nama.val().length == 0)
        $('small#error-nama', form).css('display', 'block');
    else
        $('small#error-nama', form).css('display', 'none');
}

function keyUpNomor() {
    if (regexHP.test(nomor.val()) == 0)
        $('small#error-nomor', form).css('display', 'block');
    else
        $('small#error-nomor', form).css('display', 'none');
}

function keyUpEmail() {
    $('small#error-email-already').css('display', 'none');

    if (!regex.test(email.val()))
        $('small#error-email').css('display', 'block');
    else
        $('small#error-email').css('display', 'none');
}

function keyUpPassword() {
    if (password.val().length == 0)
        $('small#error-password').css('display', 'block');
    else
        $('small#error-password').css('display', 'none');
}

function keyUpKonfirmPassword() {
    if (password.val() != konfirmPassword.val())
        $('small#error-konfirm-password').css('display', 'block');
    else
        $('small#error-konfirm-password').css('display', 'none');
}

tanggal.focusout(() => {
    $('small#error-ttl').css('display', 'none');
});

bulan.focusout(() => {
    $('small#error-ttl').css('display', 'none');
});

tahun.focusout(() => {
    $('small#error-ttl').css('display', 'none');
});


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();
    const optTTL = $('#content .right .rbody .ttl .opt-ttl');

    if (width < 420) {

        // manipulasi column
        if (optTTL.hasClass('col-3')) {
            optTTL.addClass('col-12');
            optTTL.removeClass('col-3');
        } else if (optTTL.hasClass('col-4')) {
            optTTL.addClass('col-12');
            optTTL.removeClass('col-4');
        }

    } else if (width < 753) {

        // manipulasi column
        if (optTTL.hasClass('col-3')) {
            optTTL.addClass('col-4');
            optTTL.removeClass('col-3');
        } else if (optTTL.hasClass('col-12')) {
            optTTL.addClass('col-4');
            optTTL.removeClass('col-12');
        }

    } else if (width >= 753) {

        // manipulasi column
        if (optTTL.hasClass('col-4')) {
            optTTL.addClass('col-3');
            optTTL.removeClass('col-4');
        } else if (optTTL.hasClass('col-12')) {
            optTTL.addClass('col-3');
            optTTL.removeClass('col-12');
        }
    }
}


// post user
function postUser() {
    let tgl = $('option:selected', tanggal).val();
    let bln = $('option:selected', bulan).val();
    let thn = $('option:selected', tahun).val();
    let gdr = $('input:radio[name=gender]:checked').val();

    let Data = {
        'userEmail': email.val(),
        'userName': nama.val(),
        'userBirthdate': `${tgl}-${bln}-${thn}`,
        'userHandphone': nomor.val(),
        'userGender': gdr
    };

    let tempRole = $('option:selected', role).val();
    tempRole = tempRole === "USER" ? 2 : 1;

    let tempStatus = $('option:selected', status).val();
    tempStatus = tempStatus === "AVAILABLE" ? 1 : 2;

    let url, type;
    let params = new FormData();

    if (kode[0] === 'create') {
        Data.userPassword = password.val();
        Data.userPasswordConfirmation = konfirmPassword.val();

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
            success = response.status;

            $('.loading').css('display', 'none');   // hilangkan loading

            if (response.status === 200) {
                if (type === 'post')
                    $('.dialog-oke .pesan span').html('Berhasil daftar user baru');
                else
                    $('.dialog-oke .pesan span').html('Berhasil perbarui data user');
            } else if (response.status === 500)
                $('small#error-email-already').css('display', 'block');
            else 
                $('.dialog-oke .pesan span').html('Gagal! Silahkan coba lagi');

            if (response.status != 500)
                $('.dialog-oke').css('display', 'flex');
        }
    });
}


// set form
function setForm(response) {
    let ttl = response.userBirthdate.split('-');
    password.attr('disabled', 'disabled');
    konfirmPassword.attr('disabled', 'disabled');
    email.attr('disabled', 'disabled');
    
    nama.val(response.userName);
    email.val(response.userEmail);
    tanggal.val(ttl[0]);
    bulan.val(ttl[1]);
    tahun.val(ttl[2]);
    nomor.val(response.userHandphone);
    gender.val([response.userGender]);
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

    appendTTL();
    manipulateJudul();
    borderTab();
    responsiveSize();
});

$(window).resize(responsiveSize);