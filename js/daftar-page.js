

let logout = false;


// hide dialog
function hideDialog() {
    $('.dialog-oke').css('display', 'none');
    window.location.href = `${site_url}html/main-page.html`;
}


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();

    const left = $('#content .left');
    const right = $('#content .right');


    if (width < 544) {
            
        // manipulasi column
        if (right.find('col-6')) {
            right.addClass('col-12');
            right.removeClass('col-6');
        }

        // manipulasi css
        left.css('display', 'none');

    } else if (width < 1185) {

        // manipulasi column
        if (right.find('col-12')) {
            right.addClass('col-6');
            right.removeClass('col-12');
        }

        // manipulasi css
        left.css('display', 'block');
        
    } else if (width >= 1185) {

        // manipulasi column
        if (right.find('col-12')) {
            right.addClass('col-6');
            right.removeClass('col-12');
        }

        // manipulasi css
        left.css('display', 'block');
    }
}


// validasi form
const form = $('#content .right .form');
const nama = $('#nama', form);
const email = $('#email', form);
const password = $('#password', form);
const konfirmPassword = $('#konfirm-password', form);
const regex = /^[a-zA-Z0-9._-]+@[a-z]{5,5}.[a-z]{2,3}$/;


function validationForm () {
    if (nama.val().length != 0 && password.val().length != 0 && 
        password.val() == konfirmPassword.val() && regex.test(email.val())) {

        // tampilkan loading
        $('.loading').css('display', 'flex');

        let user = {
            'userEmail': email.val(),
            'userName': nama.val(),
            'userPassword': password.val(),
            'userPasswordConfirmation': konfirmPassword.val(),
            'userBirthdate': '01-01-2019',
            'userHandphone': '0',
            'userGender': 'pria'
        };

        let params = new FormData();
        params.append('user', JSON.stringify(user));
        params.append('role', 2);
        params.append('status', 1);

        $.ajax({
            url: `${base_url}users/register`,
            type: 'post',
            dataType: 'json',
            processData: false, // default kirim object, form mengandung string
            contentType: false, // default x-www-form-urlencoded

            data: params,

            success: function(response) {

                let pesan = '';

                if (response.status === 200) {
                    pesan = "Selamat! Berhasil daftar akun baru";
                } else if (response.status === 400)
                    pesan = "Koneksi Error! Silahkan coba kembali";
                else if (response.status === 500)
                    $('small#error-email-already').css('display', 'block');

                if (response.status === 200 || response.status === 400) {
                    // tampilkan dialog
                    $('.dialog-oke .pesan span').html(pesan);
                    $('.dialog-oke').css('display', 'flex');
                }
                
                // hilangkan loading
                $('.loading').css('display', 'none');
            }
        });
    }

    if (nama.val().length == 0) 
        $('small#error-nama').css('display', 'block');

    if(!regex.test(email.val()))
        $('small#error-email').css('display', 'block');

    if (password.val().length == 0) 
        $('small#error-password').css('display', 'block');

    if (password.val() != konfirmPassword.val()) 
        $('small#error-konfirm-password').css('display', 'block');
}

function keyUpNama () {
    if (nama.val().length == 0)
        $('small#error-nama').css('display', 'block');
    else
        $('small#error-nama').css('display', 'none');
}

function keyUpEmail () {
    $('small#error-email-already').css('display', 'none');

    if (!regex.test(email.val()))
        $('small#error-email').css('display', 'block');
    else
        $('small#error-email').css('display', 'none');
}

function keyUpPassword () {
    if (password.val().length == 0)
        $('small#error-password').css('display', 'block');
    else
        $('small#error-password').css('display', 'none');
}

function keyUpKonfirmPassword () {
    if (password.val() != konfirmPassword.val())
        $('small#error-konfirm-password').css('display', 'block');
    else 
        $('small#error-konfirm-password').css('display', 'none');
}   


// document ready
$(document).ready(() => {
    let User = JSON.parse(localStorage.getItem('dataUser'));
    let Admin = JSON.parse(localStorage.getItem('dataAdmin'));

    if (User != null || Admin != null) {
        logout = true;
        $('.dialog-oke .pesan span').html("Silahkan logout terlebih dahulu");
        $('.dialog-oke').css('display', 'flex');
    }
    responsiveSize();
});

$(window).resize(responsiveSize);
